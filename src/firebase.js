// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr6Fjg9RLLPlShhvzjpfWmiJNYGbU2UUc",
  authDomain: "wic-firebase-authentication.firebaseapp.com",
  projectId: "wic-firebase-authentication",
  storageBucket: "wic-firebase-authentication.appspot.com",
  messagingSenderId: "491572637634",
  appId: "1:491572637634:web:ea16dbcd987d47c2d8f05b",
  measurementId: "G-100ZMWZC4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
