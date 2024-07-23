// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMN2a17j0dsIAMG4yauCS0emWhkFSUk8",
  authDomain: "expensetracker-ddcf6.firebaseapp.com",
  projectId: "expensetracker-ddcf6",
  storageBucket: "expensetracker-ddcf6.appspot.com",
  messagingSenderId: "22220335960",
  appId: "1:22220335960:web:b19449ed6855279f0a132d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)