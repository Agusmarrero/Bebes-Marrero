import { initializeApp } from "firebase/app";
import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTta9nluoTKoVarcUCkPiS890JU1D47eQ",
    authDomain: "ecommercempm-ea514.firebaseapp.com",
    projectId: "ecommercempm-ea514",
    storageBucket: "ecommercempm-ea514.appspot.com",
    messagingSenderId: "175941929745",
    appId: "1:175941929745:web:1e2d8de9f6b1a72c88dab0",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);