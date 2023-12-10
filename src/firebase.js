// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWEgVYWGhmJKIlz8U0IRmqNxxBF8km8_4",
  authDomain: "helfchat.firebaseapp.com",
  projectId: "helfchat",
  storageBucket: "helfchat.appspot.com",
  messagingSenderId: "356623678267",
  appId: "1:356623678267:web:e7c1573296f36d8ec6d51e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };
