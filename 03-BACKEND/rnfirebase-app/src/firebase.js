// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC00cOmbWu4K7zGBzh6O-WmadiK5hAYldk",
  authDomain: "rnfirebase-app-213d9.firebaseapp.com",
  projectId: "rnfirebase-app-213d9",
  storageBucket: "rnfirebase-app-213d9.firebasestorage.app",
  messagingSenderId: "326380544960",
  appId: "1:326380544960:web:a16f6995ec3218ae369e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

//Auth Helpers
const signInWithGoogle = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);

// Firestore Helpers
const postsCollection = collection(db, "posts");

export {
    auth,
    provider,
    signInWithGoogle,
    signOutUser,
    db,
    postsCollection,
    collection,
    doc,
    addDoc,
    getDoc,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove
};

