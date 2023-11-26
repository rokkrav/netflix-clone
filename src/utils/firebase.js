// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzPB3TQIprT978biBaEe5uI2bOx9FlsSM",
  authDomain: "netflixbyravi.firebaseapp.com",
  projectId: "netflixbyravi",
  storageBucket: "netflixbyravi.appspot.com",
  messagingSenderId: "1002871617106",
  appId: "1:1002871617106:web:3029339f62e47e8091518b",
  measurementId: "G-QX3K93ZF5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
