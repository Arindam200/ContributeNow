import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MESUREMENT_ID,
  apiKey: 'AIzaSyBZNmaPCEppqTf93-4cl906m5ARDlyxXTg',
  authDomain: 'contribute-now.firebaseapp.com',
  projectId: 'contribute-now',
  storageBucket: 'contribute-now.appspot.com',
  messagingSenderId: '1093014628566',
  appId: '1:1093014628566:web:0d30b7878c72706865c177',
  measurementId: 'G-T45RHHVTN4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
