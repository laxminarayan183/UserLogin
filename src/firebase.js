// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA9_09iu1ZJKrj3XIZ08Tj27ubY6w3Apig",
  authDomain: "userauth-7b944.firebaseapp.com",
  projectId: "userauth-7b944",
  storageBucket: "userauth-7b944.appspot.com",
  messagingSenderId: "89900102597",
  appId: "1:89900102597:web:d9707a056ab75b7b39d1ac",
  measurementId: "G-3039ZCBBMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app );
const provider = new GoogleAuthProvider();

export{auth,provider};
