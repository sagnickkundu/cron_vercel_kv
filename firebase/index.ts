// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: "the-face-flex.firebaseapp.com",
//   projectId: "the-face-flex",
//   storageBucket: "the-face-flex.appspot.com",
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// Sagnick
const firebaseConfig = {
  apiKey: "AIzaSyCbwVn76Dzl8B4-XTKGo70GWNua5KQuDI0",
  authDomain: "faceflex-e2486.firebaseapp.com",
  projectId: "faceflex-e2486",
  storageBucket: "faceflex-e2486.appspot.com",
  messagingSenderId: "865692231210",
  appId: "1:865692231210:web:f8970d56e8c126c121c553",
  measurementId: "G-CL7BR89HT1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
