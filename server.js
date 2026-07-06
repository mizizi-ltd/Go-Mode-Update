const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Setup Stripe (with development fallback)
let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  console.log('✅ Stripe integration active (Production Mode)');
} else {
  console.warn('⚠️ Stripe Secret Key missing. Running payments in Sandbox Simulation Mode.');
}

// Setup Firebase Admin (with development fallback)
let db = null;
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  try {
    const admin = require('firebase-admin');
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    db = admin.firestore();
    console.log('✅ Firebase Admin SDK initialized (Firestore Mode active)');
  } catch (e) {
    console.error('❌ Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', e.message);
  }
} else {
  console.warn('⚠️ Firebase credentials missing. Database running in Local Session Mode.');
}

// Enable JSON parsers
app.use(express.json());
app.use(cors());

// Serve Static Web Application Assets
app.use(express.static(path.join(__dirname, 'web_app')));

// API: Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  const { email, city } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'User email is required to initialize checkout' });
  }

  // 1. Production Mode: Initiate Real Stripe Checkout Page
  if (stripe) {
    try {
      const priceId = process.env.STRIPE_PRICE_ID || 'price_1P_mock_price'; // Set in .env
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.protocol}://${req.get('host')}/dashboard.html?payment_success=true&email=${encodeURIComponent(email)}`,
        cancel_url: `${req.protocol}://${req.get('host')}/dashboard.html?payment_canceled=true&email=${encodeURIComponent(email)}`,
        metadata: {
          email: email,
          selectedCity: city || 'Arusha'
        }
      });
      return res.json({ url: session.url });
    } catch (err) {
      console.error('Stripe Session Creation Error:', err.message);
      return res.status(500).json({ error: 'Failed to create checkout session with Stripe' });
    }
  }

  // 2. Sandbox Simulation Fallback Mode
  console.log(`[SIMULATION] Creating checkout session for ${email}`);
  // Return a mock url that redirects back with success indicator
  const simulatedSuccessUrl = `/dashboard.html?payment_success=true&email=${encodeURIComponent(email)}`;
  return res.json({ url: simulatedSuccessUrl });
});

// API: Stripe Webhook Listener (Updates Firestore hasPaid state)
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  if (stripe && process.env.STRIPE_WEBHOOK_SECRET) {
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error(`Webhook Error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    // If not config, parse body directly
    event = req.body;
  }

  // Handle successful checkout payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.metadata.email || session.customer_email;
    const selectedCity = session.metadata.selectedCity || 'Arusha';

    console.log(`💰 Payment Successful: Captured £6 from ${customerEmail} for ${selectedCity}`);

    // Update Firebase Firestore if database is configured
    if (db) {
      try {
        const userRef = db.collection('users').doc(customerEmail);
        await userRef.set({
          hasPaid: true,
          paymentAbandoned: false,
          paidCity: selectedCity,
          lastPaymentTimestamp: new Date().toISOString()
        }, { merge: true });
        console.log(`🔥 Firestore database updated for user ${customerEmail}`);
      } catch (err) {
        console.error('Failed to update Firestore record:', err.message);
      }
    }
  }

  res.json({ received: true });
});

// Wildcard fallback: serve index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_app', 'index.html'));
});

// Start Server Listeners
app.listen(PORT, () => {
  console.log(`
🚀 =================================================== 🚀
   Mizizi Bajaj Adventures Beta Server Running!
   Local Address: http://localhost:${PORT}
   Mode: ${stripe ? 'PRODUCTION' : 'DEVELOPMENT MOCK SANDBOX'}
🚀 =================================================== 🚀
  `);
});
