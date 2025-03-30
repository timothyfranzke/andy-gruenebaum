// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKBS6NSLGp2ZTisXArJd4Q9z8zA4_MeOA",
  authDomain: "andy-gruenebaum.firebaseapp.com",
  projectId: "andy-gruenebaum",
  storageBucket: "andy-gruenebaum.firebasestorage.app",
  messagingSenderId: "181826622321",
  appId: "1:181826622321:web:d6f12372cecc998fa21cd0",
  measurementId: "G-NEQ97FHRKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);