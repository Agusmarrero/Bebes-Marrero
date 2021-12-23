// Import the functions you need from the SDKs you need

import  firebase  from "firebase/app";
import 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const providers = {
//   google: new firebase.auth.GoogleAuthProvider(),
// };

// export { auth, providers };

export default function getFirestore(){
  
  return firebase.firestore(app)
}

