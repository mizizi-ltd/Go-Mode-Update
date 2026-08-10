/**
 * Firebase Auth & Firestore Client-Side Simulation Engine
 * Optimized for local-first execution, speed on slow networks, and offline storage.
 */

const FirebaseSim = (() => {
  const USERS_KEY = 'mizizi_sim_users';
  const SESSION_KEY = 'mizizi_sim_session';
  let lastSyncTimestamp = 0;

  // Seed default demo users if they don't exist
  const getStoredUsers = () => {
    const users = localStorage.getItem(USERS_KEY);
    if (!users) {
      const defaultUsers = {
        'guest@mizizi.com': {
          email: 'guest@mizizi.com',
          password: 'password123',
          hasPaid: false,
          createdAt: new Date().toISOString()
        },
        'master@mizizi.com': {
          email: 'master@mizizi.com',
          password: 'password123',
          hasPaid: true,
          isMaster: true,
          allAccessPass: true,
          createdAt: new Date().toISOString()
        },
        'paid@mizizi.com': {
          email: 'paid@mizizi.com',
          password: 'password123',
          hasPaid: true,
          unlockedCities: {
            'arusha': {
              paidDate: new Date().toISOString(),
              expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
            }
          },
          paymentDate: new Date().toISOString(),
          expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString()
        }
      };
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    
    // Auto-migrate legacy user records to per-city schema
    const parsed = JSON.parse(users);
    let dirty = false;
    Object.keys(parsed).forEach(email => {
      const u = parsed[email];
      if (u && u.hasPaid && !u.isMaster && (!u.unlockedCities || Object.keys(u.unlockedCities).length === 0)) {
        u.unlockedCities = u.unlockedCities || {};
        u.unlockedCities['arusha'] = {
          paidDate: u.paymentDate || new Date().toISOString(),
          expiryDate: u.expiryDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        dirty = true;
      }
    });
    if (dirty) localStorage.setItem(USERS_KEY, JSON.stringify(parsed));

    return parsed;
  };

  const saveStoredUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  // Asynchronously query server for latest database status (dynamic cross-device/tab synchronization)
  const syncUserStatusFromServer = async (email) => {
    try {
      const response = await fetch(`/api/user-status?email=${encodeURIComponent(email)}`);
      if (response.ok) {
        const data = await response.json();
        const users = getStoredUsers();
        const localUser = users[email];
        
        if (localUser) {
          const statusChanged = 
            localUser.hasPaid !== data.hasPaid || 
            localUser.allAccessPass !== data.allAccessPass ||
            localUser.expiryDate !== data.expiryDate ||
            JSON.stringify(localUser.unlockedCities || {}) !== JSON.stringify(data.unlockedCities || {});
            
          if (statusChanged) {
            console.log(`[SYNC] Local payment status out of sync for ${email}. Updating from server...`);
            localUser.hasPaid = data.hasPaid;
            localUser.allAccessPass = data.allAccessPass;
            localUser.paymentDate = data.paymentDate;
            localUser.expiryDate = data.expiryDate;
            if (data.unlockedCities) {
              localUser.unlockedCities = data.unlockedCities;
            }
            
            if (data.hasPaid) {
              localUser.paymentAbandoned = false;
              if (localUser.abandonedAt) delete localUser.abandonedAt;
            }
            
            users[email] = localUser;
            saveStoredUsers(users);
            FirebaseSim._notifyListeners();
          }
        }
      }
    } catch (err) {
      console.warn('[SYNC] Failed to contact server for payment status checks:', err.message);
    }
  };

  // Get current active session user (auto-expires payment status per city)
  const getCurrentUser = () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
      const parsedSession = JSON.parse(session);
      const users = getStoredUsers();
      const user = users[parsedSession.email];

      if (user && user.isMaster) {
        return user;
      }
      
      // Dynamic Expiration Checks per city & All-Access Pass
      if (user) {
        const now = new Date();
        let updated = false;

        if (user.allAccessPass && user.expiryDate && now > new Date(user.expiryDate)) {
          console.warn(`All-Access Explorer Pass expired for ${user.email}.`);
          user.allAccessPass = false;
          updated = true;
        }

        if (user.unlockedCities) {
          Object.keys(user.unlockedCities).forEach(cId => {
            const cData = user.unlockedCities[cId];
            if (cData && cData.expiryDate && now > new Date(cData.expiryDate)) {
              console.warn(`Access expired for ${user.email} in city ${cId}.`);
              delete user.unlockedCities[cId];
              updated = true;
            }
          });
        }

        // Update overall hasPaid flag
        const activeCount = user.unlockedCities ? Object.keys(user.unlockedCities).length : 0;
        if (!user.allAccessPass && activeCount === 0 && user.hasPaid) {
          user.hasPaid = false;
          user.subscriptionExpired = true;
          updated = true;
        }

        if (updated) {
          users[parsedSession.email] = user;
          saveStoredUsers(users);
        }
      }

      // Trigger server synchronization check in the background (throttled to once every 10 seconds)
      if (user) {
        const now = Date.now();
        if (now - lastSyncTimestamp > 10000) {
          lastSyncTimestamp = now;
          syncUserStatusFromServer(user.email);
        }
      }
      
      return user || null;
    } catch (e) {
      return null;
    }
  };

  // Set current user session
  const setCurrentUser = (user) => {
    if (!user) {
      localStorage.removeItem(SESSION_KEY);
    } else {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email }));
    }
  };

  // Global observers array
  const authStateListeners = [];

  return {
    // Check if user has active unexpired access to a specific city
    hasAccessToCity: (user, cityId) => {
      if (!user) return false;
      if (user.isMaster) return true; // Master account has unlimited access to all cities & routes

      // All-Access Pass check (Package 2)
      if (user.allAccessPass) {
        if (!user.expiryDate || new Date() <= new Date(user.expiryDate)) {
          return true;
        }
      }

      if (!cityId) return false;
      const cId = cityId.toLowerCase();

      // Check per-city unlocked map (Package 1)
      if (user.unlockedCities && user.unlockedCities[cId]) {
        const exp = user.unlockedCities[cId].expiryDate;
        if (!exp || new Date() <= new Date(exp)) {
          return true;
        }
      }

      // Fallback for legacy hasPaid flag on Arusha
      if (user.hasPaid && cId === 'arusha') {
        if (!user.expiryDate || new Date() <= new Date(user.expiryDate)) {
          return true;
        }
      }

      return false;
    },

    // Unlock access package for a user (Package 1: single_city / Package 2: all_access)
    unlockPackageForUser: async (email, packageType = 'single_city', cityId = 'arusha') => {
      const users = getStoredUsers();
      const normEmail = email.toLowerCase();
      if (!users[normEmail]) throw new Error('User not found');

      const u = users[normEmail];
      const paidDate = new Date();

      u.hasPaid = true;
      u.paymentAbandoned = false;
      if (u.abandonedAt) delete u.abandonedAt;

      if (packageType === 'all_access') {
        // Package 2: £14.99 — Unlocks ALL cities & routes for 90 days (3 months)
        const days = 90;
        const expiryDate = new Date(paidDate.getTime() + days * 24 * 60 * 60 * 1000);
        u.allAccessPass = true;
        u.paymentDate = paidDate.toISOString();
        u.expiryDate = expiryDate.toISOString();

        // Also extend all existing individual city passes to 90 days
        u.unlockedCities = u.unlockedCities || {};
        ['arusha', 'nairobi', 'kampala'].forEach(c => {
          u.unlockedCities[c] = {
            paidDate: paidDate.toISOString(),
            expiryDate: expiryDate.toISOString()
          };
        });
      } else {
        // Package 1: £6.00 — Single City Pass for 30 days (1 month)
        const days = 30;
        const normCity = cityId.toLowerCase();
        const newExpiry = new Date(paidDate.getTime() + days * 24 * 60 * 60 * 1000);
        const newExpiryStr = newExpiry.toISOString();

        u.unlockedCities = u.unlockedCities || {};

        // Requirement 2: Latest purchase extends expiry for ALL currently owned cities to match the new purchase date!
        Object.keys(u.unlockedCities).forEach(cKey => {
          u.unlockedCities[cKey].expiryDate = newExpiryStr;
        });

        // Add / update new city
        u.unlockedCities[normCity] = {
          paidDate: paidDate.toISOString(),
          expiryDate: newExpiryStr
        };

        u.paymentDate = paidDate.toISOString();
        u.expiryDate = newExpiryStr;
      }

      saveStoredUsers(users);
      FirebaseSim._notifyListeners();
      return u;
    },

    // Firebase Auth: onAuthStateChanged listener
    onAuthStateChanged: (callback) => {
      authStateListeners.push(callback);
      // Immediately trigger for the current session state
      const currentUser = getCurrentUser();
      callback(currentUser);
    },

    // Trigger observers manually
    _notifyListeners: () => {
      const currentUser = getCurrentUser();
      authStateListeners.forEach(listener => listener(currentUser));
    },

    // SignUp / Register
    signUp: async (email, password) => {
      // Small simulated delay for native feel
      await new Promise(resolve => setTimeout(resolve, 800));

      const users = getStoredUsers();
      if (users[email]) {
        throw new Error('This email is already registered! Try logging in.');
      }

      users[email] = {
        email: email,
        password: password,
        hasPaid: false,
        unlockedCities: {},
        createdAt: new Date().toISOString()
      };

      saveStoredUsers(users);
      const newUser = users[email];
      setCurrentUser(newUser);
      FirebaseSim._notifyListeners();
      return newUser;
    },

    // SignIn / LogIn
    signIn: async (email, password) => {
      await new Promise(resolve => setTimeout(resolve, 800));

      const users = getStoredUsers();
      const user = users[email];

      if (!user || user.password !== password) {
        throw new Error('Invalid email or password! Please try again.');
      }

      setCurrentUser(user);
      FirebaseSim._notifyListeners();
      return user;
    },

    // SignOut
    signOut: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      setCurrentUser(null);
      FirebaseSim._notifyListeners();
      return true;
    },

    // Firestore Simulate: Get user record
    getUserRecord: async (email) => {
      const users = getStoredUsers();
      return users[email] || null;
    },

    // Firestore Simulate: Update user record (e.g. mark paid)
    updateUserRecord: async (email, data) => {
      const users = getStoredUsers();
      if (!users[email]) throw new Error('User not found in simulated Firestore database.');
      
      // Clean up cart abandonment attributes when user completes payment
      if (data.hasPaid === true) {
        data.paymentAbandoned = false;
        if (users[email].abandonedAt) delete users[email].abandonedAt;
        if (data.abandonedAt !== undefined) delete data.abandonedAt;
      }

      users[email] = { ...users[email], ...data };
      saveStoredUsers(users);
      FirebaseSim._notifyListeners();
      return users[email];
    }
  };
})();

// Guard app.html and dashboard.html from unauthorized intruders
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.endsWith('app.html') || path.endsWith('dashboard.html')) {
    FirebaseSim.onAuthStateChanged((user) => {
      if (!user) {
        console.warn('Unauthorized intruder detected. Redirecting to access gate...');
        window.location.replace('index.html');
      }
    });
  }
});
