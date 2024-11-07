// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7-kFtGNdI5KrV7QCK1YIrexhVeyF6N9c",
  authDomain: "aieka-99f42.firebaseapp.com",
  projectId: "aieka-99f42",
  storageBucket: "aieka-99f42.firebasestorage.app",
  messagingSenderId: "1001875708934",
  appId: "1:1001875708934:web:a8ee954eb61c24191c3787"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;