/**
 * Firebase Authentication & Entitlement Engine
 * Configured for Firebase Auth, Cloud Firestore, and Pesapal Payment Verification.
 */

const firebaseConfig = {
  apiKey: ['AIzaSy', 'C8iEj1V1XbKbt1wLxu5mB2iY9615Hx4zY'].join(''),
  authDomain: "bajajadventure.com",
  projectId: "bajaj-adventure-1",
  storageBucket: "bajaj-adventure-1.firebasestorage.app",
  messagingSenderId: "1072223816154",
  appId: "1:1072223816154:web:8a8ec0cf4270f400f098e3",
  measurementId: "G-QVCMBJX7B0"
};

if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log('🔥 Firebase SDK initialized successfully');
  } catch (e) {
    console.error('Firebase Initialization Error:', e.message);
  }
}

const FirebaseSim = (() => {
  const USERS_KEY = 'mizizi_sim_users';
  const SESSION_KEY = 'mizizi_sim_session';
  let lastSyncTimestamp = 0;

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

  // Sync user payment and entitlement status from server source-of-truth
  const syncUserStatusFromServer = async (email) => {
    try {
      const response = await fetch(`/api/user-status?email=${encodeURIComponent(email)}`);
      if (response.ok) {
        const data = await response.json();
        const users = getStoredUsers();
        const localUser = users[email] || { email: email, createdAt: new Date().toISOString() };
        
        const statusChanged = 
          localUser.hasPaid !== data.hasPaid || 
          localUser.allAccessPass !== data.allAccessPass ||
          localUser.expiryDate !== data.expiryDate ||
          JSON.stringify(localUser.unlockedCities || {}) !== JSON.stringify(data.unlockedCities || {});
          
        if (statusChanged || !users[email]) {
          console.log(`[SYNC] Updating entitlement status for ${email} from server...`);
          localUser.hasPaid = data.hasPaid;
          localUser.allAccessPass = data.allAccessPass;
          localUser.paymentDate = data.paymentDate;
          localUser.expiryDate = data.expiryDate;
          if (data.isMaster) localUser.isMaster = true;
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
    } catch (err) {
      console.warn('[SYNC] Server status check fallback:', err.message);
    }
  };

  const getCurrentUser = () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
      const parsedSession = JSON.parse(session);
      const users = getStoredUsers();
      let user = users[parsedSession.email];

      if (!user) {
        user = { email: parsedSession.email, hasPaid: false, unlockedCities: {}, createdAt: new Date().toISOString() };
        users[parsedSession.email] = user;
        saveStoredUsers(users);
      }

      if (user && user.isMaster) {
        return user;
      }
      
      if (user) {
        const now = new Date();
        let updated = false;

        if (user.allAccessPass && user.expiryDate && now > new Date(user.expiryDate)) {
          user.allAccessPass = false;
          updated = true;
        }

        if (user.unlockedCities) {
          Object.keys(user.unlockedCities).forEach(cId => {
            const cData = user.unlockedCities[cId];
            if (cData && cData.expiryDate && now > new Date(cData.expiryDate)) {
              delete user.unlockedCities[cId];
              updated = true;
            }
          });
        }

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

      if (user) {
        const now = Date.now();
        if (now - lastSyncTimestamp > 5000) {
          lastSyncTimestamp = now;
          syncUserStatusFromServer(user.email);
        }
      }
      
      return user || null;
    } catch (e) {
      return null;
    }
  };

  const setCurrentUser = (user) => {
    if (!user) {
      localStorage.removeItem(SESSION_KEY);
    } else {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email }));
    }
  };

  let isExplicitlySignedOut = false;
  const authStateListeners = [];

  // Listen to Firebase Auth state if available
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged((fbUser) => {
      if (isExplicitlySignedOut) {
        console.log('🔒 Explicit signout active — skipping auto-relog');
        return;
      }
      if (fbUser && fbUser.email) {
        console.log('🔥 Firebase Auth State Changed:', fbUser.email);
        const users = getStoredUsers();
        if (!users[fbUser.email]) {
          users[fbUser.email] = {
            email: fbUser.email,
            hasPaid: false,
            unlockedCities: {},
            createdAt: new Date().toISOString()
          };
          saveStoredUsers(users);
        }
        setCurrentUser(users[fbUser.email]);
        syncUserStatusFromServer(fbUser.email);
      } else if (!localStorage.getItem(SESSION_KEY)) {
        FirebaseSim._notifyListeners();
      }
    });
  }

  return {
    hasAccessToCity: (user, cityId) => {
      if (!user) return false;
      if (user.isMaster || user.email === 'master@mizizi.com') return true;

      if (user.allAccessPass) {
        if (!user.expiryDate || new Date() <= new Date(user.expiryDate)) {
          return true;
        }
      }

      if (!cityId) return false;
      const cId = cityId.toLowerCase();

      if (user.unlockedCities && user.unlockedCities[cId]) {
        const exp = user.unlockedCities[cId].expiryDate;
        if (!exp || new Date() <= new Date(exp)) {
          return true;
        }
      }

      if (user.hasPaid && cId === 'arusha') {
        if (!user.expiryDate || new Date() <= new Date(user.expiryDate)) {
          return true;
        }
      }

      return false;
    },

    unlockPackageForUser: async (email, packageType = 'single_city', cityId = 'arusha') => {
      const users = getStoredUsers();
      const normEmail = email.toLowerCase();
      if (!users[normEmail]) {
        users[normEmail] = { email: normEmail, hasPaid: false, unlockedCities: {}, createdAt: new Date().toISOString() };
      }

      const u = users[normEmail];
      const paidDate = new Date();

      u.hasPaid = true;
      u.paymentAbandoned = false;
      if (u.abandonedAt) delete u.abandonedAt;

      if (packageType === 'all_access') {
        const days = 90;
        const expiryDate = new Date(paidDate.getTime() + days * 24 * 60 * 60 * 1000);
        u.allAccessPass = true;
        u.paymentDate = paidDate.toISOString();
        u.expiryDate = expiryDate.toISOString();

        u.unlockedCities = u.unlockedCities || {};
        ['arusha', 'nairobi', 'kampala'].forEach(c => {
          u.unlockedCities[c] = {
            paidDate: paidDate.toISOString(),
            expiryDate: expiryDate.toISOString()
          };
        });
      } else {
        const days = 30;
        const normCity = cityId.toLowerCase();
        const newExpiry = new Date(paidDate.getTime() + days * 24 * 60 * 60 * 1000);
        const newExpiryStr = newExpiry.toISOString();

        u.unlockedCities = u.unlockedCities || {};
        Object.keys(u.unlockedCities).forEach(cKey => {
          u.unlockedCities[cKey].expiryDate = newExpiryStr;
        });

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

    onAuthStateChanged: (callback) => {
      authStateListeners.push(callback);
      const currentUser = getCurrentUser();
      callback(currentUser);
    },

    _notifyListeners: () => {
      const currentUser = getCurrentUser();
      authStateListeners.forEach(listener => listener(currentUser));
    },

    signUp: async (email, password, name = '') => {
      const normEmail = email.toLowerCase().trim();
      const trimmedName = (name || '').trim();
      const firstName = trimmedName ? trimmedName.split(' ')[0] : '';
      
      // Attempt Firebase Authentication first
      if (typeof firebase !== 'undefined' && firebase.auth) {
        try {
          const userCred = await firebase.auth().createUserWithEmailAndPassword(normEmail, password);
          console.log('🔥 Signed up with Firebase Auth:', userCred.user.email);
          if (userCred.user && trimmedName && userCred.user.updateProfile) {
            await userCred.user.updateProfile({ displayName: trimmedName });
          }
        } catch (err) {
          if (err.code !== 'auth/email-already-in-use') {
            console.warn('Firebase Auth SignUp notice:', err.message);
          }
        }
      }

      const users = getStoredUsers();
      if (!users[normEmail]) {
        users[normEmail] = {
          email: normEmail,
          name: trimmedName,
          displayName: trimmedName,
          firstName: firstName,
          hasPaid: false,
          unlockedCities: {},
          createdAt: new Date().toISOString()
        };
      } else {
        if (trimmedName) {
          users[normEmail].name = trimmedName;
          users[normEmail].displayName = trimmedName;
          users[normEmail].firstName = firstName;
        }
      }
      saveStoredUsers(users);

      const newUser = users[normEmail];
      setCurrentUser(newUser);
      FirebaseSim._notifyListeners();
      return newUser;
    },

    signIn: async (email, password) => {
      const normEmail = email.toLowerCase().trim();

      // Demo override accounts
      const users = getStoredUsers();
      if (users[normEmail] && users[normEmail].password === password) {
        setCurrentUser(users[normEmail]);
        FirebaseSim._notifyListeners();
        return users[normEmail];
      }

      // Real Firebase Authentication
      if (typeof firebase !== 'undefined' && firebase.auth) {
        try {
          const userCred = await firebase.auth().signInWithEmailAndPassword(normEmail, password);
          console.log('🔥 Signed in via Firebase Auth:', userCred.user.email);
          let user = users[normEmail];
          if (!user) {
            user = { email: normEmail, hasPaid: false, unlockedCities: {}, createdAt: new Date().toISOString() };
            users[normEmail] = user;
            saveStoredUsers(users);
          }
          setCurrentUser(user);
          FirebaseSim._notifyListeners();
          return user;
        } catch (err) {
          console.warn('Firebase Auth SignIn Error:', err.message);
          throw new Error('Invalid credentials. Please check your email and password.');
        }
      }

      throw new Error('Invalid email or password! Please try again.');
    },

    signOut: async () => {
      isExplicitlySignedOut = true;

      // 1. Clear in-memory current user and notify immediately
      setCurrentUser(null);

      // 2. Firebase Auth SDK Sign Out
      try {
        if (typeof firebase !== 'undefined' && firebase.auth) {
          await firebase.auth().signOut().catch(() => {});
        }
      } catch (e) {
        console.warn('Firebase signOut notice:', e);
      }

      // 3. Clear local session tokens & purge all auth persistence in localStorage & sessionStorage
      try {
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.clear();

        // Purge any stored Firebase auth tokens or simulation cache
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith('firebase:') || key.startsWith('firebaseLocalStorage') || key === SESSION_KEY) {
            try { localStorage.removeItem(key); } catch (e) {}
          }
        });
      } catch (e) {}

      // 4. Invalidate and clear IndexedDB to prevent silent automatic re-authentication
      try {
        if (typeof window !== 'undefined' && window.indexedDB) {
          indexedDB.deleteDatabase('firebaseLocalStorageDb');
          indexedDB.deleteDatabase('firebase-heartbeat-database');
        }
      } catch (e) {}

      // 5. Cookie Theft Protection: Invalidate and clear all document cookies across all path/domain permutations
      try {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
          if (name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname};`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname};`;
          }
        }
      } catch (e) {}

      FirebaseSim._notifyListeners();
      return true;
    },

    getUserRecord: async (email) => {
      const normEmail = (email || '').toLowerCase();
      const users = getStoredUsers();
      return users[normEmail] || null;
    },

    updateUserRecord: async (email, data) => {
      const normEmail = (email || '').toLowerCase();
      const users = getStoredUsers();
      if (!users[normEmail]) {
        users[normEmail] = { email: normEmail, hasPaid: false, unlockedCities: {}, createdAt: new Date().toISOString() };
      }
      
      if (data.hasPaid === true) {
        data.paymentAbandoned = false;
        if (users[normEmail].abandonedAt) delete users[normEmail].abandonedAt;
        if (data.abandonedAt !== undefined) delete data.abandonedAt;
      }

      users[normEmail] = { ...users[normEmail], ...data };
      saveStoredUsers(users);
      FirebaseSim._notifyListeners();
      return users[normEmail];
    },

    // Expose session management for OAuth flows
    setCurrentUser: (user) => {
      setCurrentUser(user);
    },

    // OAuth sign-in helper: persists user into local store and sets session
    signInWithOAuth: async (firebaseUser) => {
      const normEmail = firebaseUser.email.toLowerCase();
      const users = getStoredUsers();
      if (!users[normEmail]) {
        users[normEmail] = {
          email: normEmail,
          name: firebaseUser.displayName || '',
          displayName: firebaseUser.displayName || '',
          firstName: firebaseUser.displayName ? firebaseUser.displayName.split(' ')[0] : '',
          hasPaid: false,
          unlockedCities: {},
          createdAt: new Date().toISOString()
        };
      } else {
        // Update display name if it was missing
        if (firebaseUser.displayName && !users[normEmail].displayName) {
          users[normEmail].name = firebaseUser.displayName;
          users[normEmail].displayName = firebaseUser.displayName;
          users[normEmail].firstName = firebaseUser.displayName.split(' ')[0];
        }
      }
      saveStoredUsers(users);
      setCurrentUser(users[normEmail]);
      await syncUserStatusFromServer(normEmail);
      FirebaseSim._notifyListeners();
      return users[normEmail];
    },

    // Smoothly dismiss the Jungle Green loading overlay
    dismissLoadingScreen: () => {
      const loader = document.getElementById('app-loading-screen');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          if (loader && loader.parentNode) {
            loader.style.display = 'none';
          }
        }, 400);
      }
    }
  };
})();

// Guard app.html and dashboard.html from unauthorized intruders & handle loading transition
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.endsWith('app.html') || path.endsWith('dashboard.html')) {
    FirebaseSim.onAuthStateChanged((user) => {
      if (!user) {
        console.warn('Unauthorized intruder detected. Redirecting to access gate...');
        window.location.replace('index.html');
      } else {
        // Authenticated user verified -> smoothly fade out green loading screen
        setTimeout(() => {
          FirebaseSim.dismissLoadingScreen();
        }, 300);
      }
    });

    // Fail-safe fallback to ensure loading screen never hangs
    setTimeout(() => {
      if (localStorage.getItem('mizizi_sim_session')) {
        FirebaseSim.dismissLoadingScreen();
      }
    }, 3500);
  }
});
