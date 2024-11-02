import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfBZi9LxJqBCHi_3W0ZAQbR2q5IdJvKQg",
  authDomain: "tabler-4e7ca.firebaseapp.com",
  projectId: "tabler-4e7ca",
  storageBucket: "tabler-4e7ca.firebasestorage.app",
  messagingSenderId: "2961962868",
  appId: "1:2961962868:web:4b091f3bf124c6e9031e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);