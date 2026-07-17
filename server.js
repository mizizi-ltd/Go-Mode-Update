const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 8080;

// Pesapal Configuration
const CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET;
const PESAPAL_ENV = process.env.PESAPAL_ENVIRONMENT || 'sandbox';
const PESAPAL_BASE_URL = PESAPAL_ENV === 'sandbox' 
  ? 'https://cybqa.pesapal.com/pesapalv3' 
  : 'https://pay.pesapal.com/v3';

let activeIpnId = null;
let registeredIpnUrl = null;
let cachedToken = null;
let tokenExpiry = null;

// Server-side database registry for paid user verification (Sandbox fallback)
let paidUsersRegistry = {
  'paid@mizizi.com': {
    hasPaid: true,
    paymentDate: new Date().toISOString(),
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  }
};

// Firebase Admin Configuration (with fallback)
let db = null;
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  try {
    const admin = require('firebase-admin');
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    db = admin.firestore();
    console.log('✅ Firebase Admin SDK initialized (Firestore active)');
  } catch (e) {
    console.error('❌ Failed to initialize Firebase Admin SDK:', e.message);
  }
} else {
  console.warn('⚠️ Firebase credentials missing. Database running in Local Session Mode.');
}

// Enable JSON parser & CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve Static Webapp Assets
app.use(express.static(path.join(__dirname, 'web_app')));

// Helper: Get Pesapal Auth Token (Dynamic cache-refresh token manager)
async function getPesapalToken() {
  if (cachedToken && tokenExpiry && new Date() < tokenExpiry) {
    return cachedToken;
  }

  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    throw new Error('Pesapal Consumer Key or Secret missing in .env configuration');
  }

  console.log('Refreshing Pesapal Bearer Token...');
  const response = await fetch(`${PESAPAL_BASE_URL}/api/Auth/RequestToken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      consumer_key: CONSUMER_KEY,
      consumer_secret: CONSUMER_SECRET
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Pesapal Auth Token Request Failed: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  if (data.token) {
    cachedToken = data.token;
    // Set token expiry (safely 5 minutes prior to actual expiry date)
    const expiry = data.expiryDate ? new Date(data.expiryDate) : new Date(Date.now() + 20 * 60 * 1000);
    tokenExpiry = new Date(expiry.getTime() - 5 * 60 * 1000);
    console.log('✅ Token successfully refreshed');
    return cachedToken;
  } else {
    throw new Error('Pesapal token response was invalid');
  }
}

// Helper: Ensure IPN Webhook URL is Registered dynamically
async function ensureIpnRegistered(hostUrl) {
  // If the host URL matches what we already registered, reuse it
  const targetWebhookUrl = `${hostUrl}/api/pesapal-ipn`;
  if (activeIpnId && registeredIpnUrl === targetWebhookUrl) {
    return activeIpnId;
  }

  console.log(`Registering new dynamic IPN Webhook URL for host: ${targetWebhookUrl}...`);
  const token = await getPesapalToken();
  const response = await fetch(`${PESAPAL_BASE_URL}/api/Services/RegisterIPN`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      url: targetWebhookUrl,
      ipn_notification_type: 'POST'
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Pesapal IPN registration failed: ${errText}`);
  }

  const data = await response.json();
  if (data.ipn_id) {
    activeIpnId = data.ipn_id;
    registeredIpnUrl = targetWebhookUrl;
    console.log(`✅ Webhook IPN Registered. IPN_ID: ${activeIpnId}`);
    return activeIpnId;
  } else {
    throw new Error('IPN registration returned an invalid payload');
  }
}

// API: Create Pesapal Order / checkout session (Replaces Stripe endpoint)
app.post('/api/create-checkout-session', async (req, res) => {
  const { email, city } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'User email is required' });
  }

  try {
    // Dynamic Host Address Detection (works for both localhost and ngrok domains)
    const hostUrl = `${req.protocol}://${req.get('host')}`;
    
    // 1. Authenticate with Pesapal and Register Webhook URL
    const token = await getPesapalToken();
    const ipnId = await ensureIpnRegistered(hostUrl);

    // 2. Submit Transaction Order Details
    const uniqueRef = `ref_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    const callbackUrl = `${hostUrl}/api/pesapal-callback?email=${encodeURIComponent(email)}`;
    
    console.log(`Submitting Pesapal order request: Ref ${uniqueRef} for ${email}`);
    const response = await fetch(`${PESAPAL_BASE_URL}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id: uniqueRef,
        currency: 'GBP',
        amount: 6.00,
        description: `Mizizi Bajaj Adventures — Arusha Loop`,
        callback_url: callbackUrl,
        notification_id: ipnId,
        billing_address: {
          email_address: email,
          first_name: 'Rider',
          last_name: 'Mizizi'
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Pesapal order submission failed: ${errText}`);
    }

    const data = await response.json();
    if (data.redirect_url) {
      console.log(`✅ Order submitted. Redirect URL generated: ${data.redirect_url}`);
      return res.json({ url: data.redirect_url });
    } else {
      throw new Error('Order submission response was invalid');
    }

  } catch (err) {
    console.error('Pesapal Checkout Error:', err.message);
    
    if (PESAPAL_ENV === 'production') {
      return res.status(500).json({ error: 'Payment checkout creation failed. Please try again later.' });
    }
    
    // Sandbox Simulation Mode Fallback:
    console.warn('⚠️ Falling back to Sandbox Local Simulation due to error');
    const pDate = new Date();
    const eDate = new Date(pDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    paidUsersRegistry[email.toLowerCase()] = {
      hasPaid: true,
      paymentDate: pDate.toISOString(),
      expiryDate: eDate.toISOString()
    };

    const hostUrl = `${req.protocol}://${req.get('host')}`;
    const simulatedSuccessUrl = `${hostUrl}/dashboard.html?payment_success=true&email=${encodeURIComponent(email)}`;
    return res.json({ url: simulatedSuccessUrl });
  }
});

// API: Get User Payment and Expiry Status (Source of truth)
app.get('/api/user-status', async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email query parameter is required' });
  }

  const normalizedEmail = email.toLowerCase();

  // 1. Try to read from Cloud Firestore if available
  if (db) {
    try {
      const userDoc = await db.collection('users').doc(normalizedEmail).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        return res.json({
          email: normalizedEmail,
          hasPaid: userData.hasPaid || false,
          paymentDate: userData.paymentDate || null,
          expiryDate: userData.expiryDate || null
        });
      }
    } catch (err) {
      console.error('Failed to fetch from Firestore, falling back to server memory registry:', err.message);
    }
  }

  // 2. Fallback to server-side in-memory registry
  const record = paidUsersRegistry[normalizedEmail] || { hasPaid: false, paymentDate: null, expiryDate: null };
  return res.json({
    email: normalizedEmail,
    ...record
  });
});

// API: Callback Redirect Landing (Redirects user back to client dashboard)
app.get('/api/pesapal-callback', async (req, res) => {
  const { OrderTrackingId, OrderMerchantReference, email } = req.query;
  const hostUrl = `${req.protocol}://${req.get('host')}`;

  console.log(`Processing callback redirect. TrackingId: ${OrderTrackingId}, email: ${email}`);

  if (!OrderTrackingId) {
    return res.redirect(`${hostUrl}/dashboard.html?payment_canceled=true&email=${encodeURIComponent(email || '')}`);
  }

  try {
    // Query Transaction Status directly from Pesapal
    const token = await getPesapalToken();
    const response = await fetch(`${PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Status query failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Pesapal Query Status: ${data.payment_status_description} (code: ${data.status_code})`);

    // status_code === 1 means "Completed" success
    if (data.status_code === 1) {
      const paymentDate = new Date();
      const expiryDate = new Date(paymentDate.getTime() + 30 * 24 * 60 * 60 * 1000);

      // Update in-memory registry for dynamic synchronization
      if (email) {
        paidUsersRegistry[email.toLowerCase()] = {
          hasPaid: true,
          paymentDate: paymentDate.toISOString(),
          expiryDate: expiryDate.toISOString()
        };
      }

      // 1. Update Cloud Firestore
      if (db && email) {
        await db.collection('users').doc(email).set({
          hasPaid: true,
          paymentAbandoned: false,
          paidCity: 'Arusha',
          orderTrackingId: OrderTrackingId,
          paymentDate: paymentDate.toISOString(),
          expiryDate: expiryDate.toISOString(),
          lastPaymentTimestamp: paymentDate.toISOString()
        }, { merge: true });
        console.log(`🔥 Firestore status marked PAID for ${email}`);
      }

      // 2. Redirect to dashboard with success query
      return res.redirect(`${hostUrl}/dashboard.html?payment_success=true&email=${encodeURIComponent(email)}`);
    } else {
      console.log(`Transaction incomplete. Status code: ${data.status_code}`);
      return res.redirect(`${hostUrl}/dashboard.html?payment_canceled=true&email=${encodeURIComponent(email)}`);
    }

  } catch (err) {
    console.error('Pesapal Callback Verification Error:', err.message);
    // On verification failure, redirect to cancel
    return res.redirect(`${hostUrl}/dashboard.html?payment_canceled=true&email=${encodeURIComponent(email || '')}`);
  }
});

// API: IPN Webhook Receiver (Background transactions statuses updates)
app.post('/api/pesapal-ipn', async (req, res) => {
  const { OrderTrackingId, OrderMerchantReference, OrderNotificationType } = req.body;

  console.log(`🔔 Webhook IPN Notification Received: type=${OrderNotificationType}, OrderTrackingId=${OrderTrackingId}`);

  if (!OrderTrackingId) {
    return res.status(400).json({ error: 'OrderTrackingId is required' });
  }

  try {
    // 1. Fetch updated status from Pesapal
    const token = await getPesapalToken();
    const response = await fetch(`${PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch transaction status: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`IPN verified transaction status: ${data.payment_status_description} (code: ${data.status_code})`);

    // Update status in Firestore database if payment completed
    if (data.status_code === 1) {
      const email = data.description; // Pesapal returns submitted email in description
      if (email && email.includes('@')) {
        const paymentDate = new Date();
        const expiryDate = new Date(paymentDate.getTime() + 30 * 24 * 60 * 60 * 1000);

        // Update in-memory registry
        paidUsersRegistry[email.toLowerCase()] = {
          hasPaid: true,
          paymentDate: paymentDate.toISOString(),
          expiryDate: expiryDate.toISOString()
        };

        // Update Firestore
        if (db) {
          await db.collection('users').doc(email).set({
            hasPaid: true,
            paymentAbandoned: false,
            paidCity: 'Arusha',
            orderTrackingId: OrderTrackingId,
            paymentDate: paymentDate.toISOString(),
            expiryDate: expiryDate.toISOString(),
            lastPaymentTimestamp: paymentDate.toISOString()
          }, { merge: true });
          console.log(`🔥 Webhook marked user ${email} PAID in Firestore`);
        }
      }
    }

    // Acknowledge receipt of IPN notification as per Pesapal protocol
    return res.json({
      OrderTrackingId: OrderTrackingId,
      OrderMerchantReference: OrderMerchantReference,
      status: '200'
    });

  } catch (err) {
    console.error('Pesapal Webhook IPN Verification Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// Wildcard route serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_app', 'index.html'));
});

// Start Server Listeners
app.listen(PORT, () => {
  console.log(`
🚀 =================================================== 🚀
   Mizizi Bajaj Adventures Beta Server Running!
   Local Address: http://localhost:${PORT}
   Gateway Mode: PESAPAL v3 (${PESAPAL_ENV.toUpperCase()})
🚀 =================================================== 🚀
  `);
});
