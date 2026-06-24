import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4rfsPOlEm9W9lqIKnrGXEZObr64TE21M",
  authDomain: "rnstarpay.firebaseapp.com",
  projectId: "rnstarpay",
  storageBucket: "rnstarpay.firebasestorage.app",
  messagingSenderId: "467287215382",
  appId: "1:467287215382:web:99ad43e572228ff8451437"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);