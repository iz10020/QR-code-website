import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase-configuratie (vervang dit met jouw Project ID)
const firebaseConfig = {
  apiKey: "AIzaSyD09Xk1LEMEvqybaHndcP__5_Q7J11iAc8",
  authDomain: "qr-code-generator-2c46e.firebaseapp.com",
  projectId: "qr-code-generator-2c46e",
  storageBucket: "qr-code-generator-2c46e.firebasestorage.app",
  messagingSenderId: "943573451534",
  appId: "1:943573451534:web:7e0bad74cc53b7a6248d5f",
  measurementId: "G-2692CP1FNP"
};

// Firebase Initialiseren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };