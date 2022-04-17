// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkhdMEfSKCijtbfhKx4fMjH_Kql5N4bmM",
  authDomain: "assignment-10--auth.firebaseapp.com",
  projectId: "assignment-10--auth",
  storageBucket: "assignment-10--auth.appspot.com",
  messagingSenderId: "643612111506",
  appId: "1:643612111506:web:6e3ee4736352035f2bac4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default (auth)