// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDocs } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_JudvElNsrENi9O0bCZAiwpltyJn3Zo8",
  authDomain: "sample-b8dee.firebaseapp.com",
  databaseURL: "https://sample-b8dee-default-rtdb.firebaseio.com",
  projectId: "sample-b8dee",
  storageBucket: "sample-b8dee.appspot.com",
  messagingSenderId: "967558148369",
  appId: "1:967558148369:web:eeebfaf360af3710ab1cb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

const db = getFirestore(app); // Initialize Firestore

export { auth, db, setDoc, doc, getDocs };
