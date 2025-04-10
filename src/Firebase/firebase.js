import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase-configuratie (vervang dit met jouw Project ID)
const firebaseConfig = {
  apiKey: "AIzaSyBVo5BeO2EoZjmKE2FQb67IfGBHLBSfdvE",
  authDomain: "streetwise-nova.firebaseapp.com",
  projectId: "streetwise-nova",
  storageBucket: "streetwise-nova.firebasestorage.app",
  messagingSenderId: "856353373150",
  appId: "1:856353373150:web:07e9b257258d9401f73b4f",
  measurementId: "G-TV6BHGZC7Z"
};

// Firebase Initialiseren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };