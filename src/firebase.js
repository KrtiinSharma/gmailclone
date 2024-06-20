import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyD1Lxy9Shd8nzSaKfOBL2wYJhRp57AG5Z8",
  authDomain: "clone-cb497.firebaseapp.com",
  projectId: "clone-cb497",
  storageBucket: "clone-cb497.appspot.com",
  messagingSenderId: "8119108841",
  appId: "1:8119108841:web:7049d150cb9c13e69d1c78",
  measurementId: "G-S22VXZQS7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();