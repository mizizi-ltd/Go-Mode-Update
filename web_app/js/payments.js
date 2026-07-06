/**
 * Stripe Checkout Simulation Engine
 * Renders a gorgeous, realistic simulated Stripe payment overlay and handles payments.
 */

const StripeSim = (() => {
  // Create and inject the modal into the DOM if it doesn't exist
  const ensureModalInjected = () => {
    if (document.getElementById('stripe-modal-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'stripe-modal-overlay';
    overlay.className = 'modal-overlay';
    
    overlay.innerHTML = `
      <div class="modal-sheet animate-pop-elastic" style="background-color: #F8FAFC;">
        <div class="modal-drag-handle"></div>
        <div class="p-6">
          <!-- Stripe Stylized Header -->
          <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
            <div class="flex items-center gap-2">
              <!-- Stripe Stylized S logo -->
              <svg class="w-8 h-8 text-[#635BFF]" fill="currentColor" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm4.24 23.364c0 4.24-5.32 4.24-5.32 4.24-4.8 0-4.8-3.08-4.8-3.08h2.6c0 1.28 1.96 1.28 2.2 1.28.84 0 2.72-.08 2.72-2.44 0-2.36-2.52-2.36-4.96-2.92-3.12-.72-4.48-1.84-4.48-4.44 0-4.24 5.32-4.24 5.32-4.24 3.92 0 4.24 2.8 4.24 2.8h-2.56c0-.96-1.4-1-1.68-1-.8 0-2.72.04-2.72 2.28 0 2.24 2.36 2.28 4.8 2.84 3.44.8 4.88 1.92 4.88 4.68z"/>
              </svg>
              <span class="font-bold text-slate-800" font-family="system-ui">Stripe Checkout</span>
            </div>
            <button id="stripe-close-btn" class="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Checkout Details -->
          <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm mb-6">
            <p class="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Product</p>
            <p class="font-bold text-slate-800 text-lg">Mizizi Bajaj Adventures — Arusha Loop</p>
            <div class="flex justify-between items-baseline mt-4 pt-4 border-t border-slate-100">
              <span class="text-slate-500 font-medium">Total Price</span>
              <span class="text-2xl font-black text-slate-800">£6.00 <span class="text-sm font-normal text-slate-500">(~$9 USD)</span></span>
            </div>
          </div>

          <!-- Alert Note about Simulation -->
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-6 flex gap-3 items-start text-xs text-amber-800">
            <span class="text-base">💡</span>
            <div>
              <p class="font-bold mb-0.5">Stripe Interactive Simulator</p>
              <p>Enter any fictional card details below to test this flow instantly. No real funds will be processed.</p>
            </div>
          </div>

          <!-- Payment Form -->
          <form id="stripe-payment-form" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Card Information</label>
              <div class="relative">
                <input type="text" id="stripe-card-number" class="mizizi-input" placeholder="4242 4242 4242 4242" maxlength="19" required style="border-color: #CBD5E1;">
                <!-- Card Network Icon (Visa/Mastercard) -->
                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold" id="card-network-badge">VISA</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Expiry Date</label>
                <input type="text" id="stripe-card-expiry" class="mizizi-input" placeholder="MM/YY" maxlength="5" required style="border-color: #CBD5E1;">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">CVC</label>
                <input type="text" id="stripe-card-cvc" class="mizizi-input" placeholder="123" maxlength="3" required style="border-color: #CBD5E1;">
              </div>
            </div>

            <button type="submit" id="stripe-submit-btn" class="w-full mt-6 py-4 btn-jungle flex items-center justify-center gap-2 font-bold text-lg" style="background-color: #635BFF; border-radius: 0.75rem;">
              <span id="stripe-btn-text">Pay £6.00</span>
              <div id="stripe-btn-spinner" class="hidden w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Event listener to close (triggers cart abandonment tracking)
    document.getElementById('stripe-close-btn').addEventListener('click', () => {
      const session = localStorage.getItem('mizizi_sim_session');
      if (session) {
        try {
          const currentUser = JSON.parse(session);
          FirebaseSim.getUserRecord(currentUser.email).then(user => {
            if (user && !user.hasPaid) {
              FirebaseSim.updateUserRecord(currentUser.email, {
                paymentAbandoned: true,
                abandonedAt: new Date().toISOString()
              }).then(() => {
                // Dispatch event so dashboard page can display the promo banner instantly
                window.dispatchEvent(new Event('mizizi_payment_abandoned'));
              });
            }
          });
        } catch (e) {}
      }
      StripeSim.close();
    });
    
    // Auto-formatting card number
    const cardInput = document.getElementById('stripe-card-number');
    cardInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = v.match(/\d{4,16}/g);
      let match = matches && matches[0] || '';
      let parts = [];

      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }

      if (parts.length > 0) {
        e.target.value = parts.join(' ');
      } else {
        e.target.value = v;
      }
    });

    // Auto-formatting expiry MM/YY
    const expiryInput = document.getElementById('stripe-card-expiry');
    expiryInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      if (v.length >= 2) {
        e.target.value = v.substring(0, 2) + '/' + v.substring(2, 4);
      } else {
        e.target.value = v;
      }
    });

    // Form submit action
    document.getElementById('stripe-payment-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('stripe-submit-btn');
      const btnText = document.getElementById('stripe-btn-text');
      const spinner = document.getElementById('stripe-btn-spinner');
      
      // Loading State
      submitBtn.disabled = true;
      btnText.textContent = 'Processing Payment...';
      spinner.classList.remove('hidden');

      try {
        // Simulate high-security transaction processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        const session = localStorage.getItem('mizizi_sim_session');
        if (!session) {
          throw new Error('No active user session detected. Please log in first.');
        }
        
        const currentUser = JSON.parse(session);
        await FirebaseSim.updateUserRecord(currentUser.email, { hasPaid: true });

        // Success State
        btnText.textContent = 'Payment Secured!';
        spinner.classList.add('hidden');
        submitBtn.style.backgroundColor = '#10B981'; // Green checkout success

        // Trigger gorgeous confetti storm
        triggerConfettiStorm();

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        StripeSim.close();
        
        // Bounce user straight to the unlocked premium experience
        window.location.href = 'app.html';

      } catch (err) {
        alert(err.message);
        submitBtn.disabled = false;
        btnText.textContent = 'Pay £6.00';
        spinner.classList.add('hidden');
      }
    });
  };

  // Fun digital confetti shower to celebrate unlocking the street safari!
  const triggerConfettiStorm = () => {
    const colors = ['#E5A93C', '#0B3C2B', '#635BFF', '#10B981', '#F59E0B', '#3B82F6'];
    for (let i = 0; i < 75; i++) {
      const conf = document.createElement('div');
      conf.className = 'confetti';
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.width = Math.random() * 8 + 6 + 'px';
      conf.style.height = Math.random() * 8 + 6 + 'px';
      conf.style.animationDelay = Math.random() * 0.5 + 's';
      conf.style.animationDuration = Math.random() * 1.5 + 1 + 's';
      
      document.body.appendChild(conf);
      
      // Clean up DOM after animation finishes
      setTimeout(() => {
        conf.remove();
      }, 2500);
    }
  };

  return {
    // Open payment paywall overlay (attempts Stripe API first, falls back to local simulation)
    open: async (email, city) => {
      // Auto-extract session context if not provided
      if (!email) {
        const session = localStorage.getItem('mizizi_sim_session');
        if (session) {
          try { email = JSON.parse(session).email; } catch (e) {}
        }
      }
      
      try {
        console.log('Initiating checkout session request...');
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email || 'guest@mizizi.com', city: city || 'Arusha' })
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data && data.url) {
            // Redirect to Stripe Checkout or simulated success URL
            window.location.href = data.url;
            return;
          }
        }
      } catch (err) {
        console.warn('Backend API checkout unavailable, using high-fidelity local checkout simulation:', err.message);
      }

      // Local interactive mock fallback
      ensureModalInjected();
      const overlay = document.getElementById('stripe-modal-overlay');
      if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    // Close payment paywall overlay
    close: () => {
      const overlay = document.getElementById('stripe-modal-overlay');
      if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    // Trigger visual confetti celebration
    confetti: () => {
      triggerConfettiStorm();
    }
  };
})();
