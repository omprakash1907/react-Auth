// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgBYzuX90o5cekO7yz2wF4kHbTTRckmOk",
    authDomain: "auth-357ac.firebaseapp.com",
    projectId: "auth-357ac",
    storageBucket: "auth-357ac.appspot.com",
    messagingSenderId: "482393737794",
    appId: "1:482393737794:web:6b0a4c6925b4336ecc3bdb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export  {auth,provider}