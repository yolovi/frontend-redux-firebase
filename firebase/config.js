// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ Sustituye por tus propias credenciales de Firebase //TODO: mover a .env ¿?
const firebaseConfig = {
  apiKey: "AIzaSyBEbkL6LXfYEnfgpZ5132zXg8uwY3F1Ny4",
  authDomain: "redux-ecommerce-a6ea9.firebaseapp.com",
  projectId: "redux-ecommerce-a6ea9",
  storageBucket: "redux-ecommerce-a6ea9.firebasestorage.app",
  messagingSenderId: "80842006496",
  appId: "1:80842006496:web:962a343ad359d0e186d585"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

