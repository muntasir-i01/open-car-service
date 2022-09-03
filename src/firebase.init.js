// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ2AEescddXzMSK87QbvmyEhS59ZovqRA",
  authDomain: "open-car-service.firebaseapp.com",
  projectId: "open-car-service",
  storageBucket: "open-car-service.appspot.com",
  messagingSenderId: "651873112068",
  appId: "1:651873112068:web:b3a382296f518378bc6551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;