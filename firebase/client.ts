// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkOyxbJVm9duggUDiUZPWAVuqsScR12Rg",
  authDomain: "brightprep-abb53.firebaseapp.com",
  projectId: "brightprep-abb53",
  storageBucket: "brightprep-abb53.firebasestorage.app",
  messagingSenderId: "297879503020",
  appId: "1:297879503020:web:5140b43b6853fe48711f09",
  measurementId: "G-VGBQ3G07TZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);