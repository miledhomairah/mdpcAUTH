import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJGYpc-Zeb1WUs9_WYTZRp5Rrf3fyJlYk",
  authDomain: "danlogin-3e18f.firebaseapp.com",
  projectId: "danlogin-3e18f",
  appId: "1:661754509510:web:f2c29d318dca86dc6d3fc7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔑 REQUIRED: persistence for cross-subdomain auth
await setPersistence(auth, browserLocalPersistence);

// Expose API globally
window.mdpcLogin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

window.mdpcSignup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

window.mdpcLogout = () => signOut(auth);
