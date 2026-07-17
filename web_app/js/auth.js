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
        'paid@mizizi.com': {
          email: 'paid@mizizi.com',
          password: 'password123',
          hasPaid: true,
          paymentDate: new Date().toISOString(),
          expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date().toISOString()
        }
      };
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    return JSON.parse(users);
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
            localUser.expiryDate !== data.expiryDate;
            
          if (statusChanged) {
            console.log(`[SYNC] Local payment status out of sync for ${email}. Updating from server...`);
            localUser.hasPaid = data.hasPaid;
            localUser.paymentDate = data.paymentDate;
            localUser.expiryDate = data.expiryDate;
            
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

  // Get current active session user (auto-expires payment status after 30 days)
  const getCurrentUser = () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
      const parsedSession = JSON.parse(session);
      const users = getStoredUsers();
      const user = users[parsedSession.email];
      
      // Dynamic Expiration Check
      if (user && user.hasPaid && user.expiryDate) {
        if (new Date() > new Date(user.expiryDate)) {
          console.warn(`Access expired for ${user.email}. Restricting premium access.`);
          user.hasPaid = false;
          user.subscriptionExpired = true;
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
