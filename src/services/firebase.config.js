// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0zH59nEFIQBOwrC1Z5LgnfUJszOmpu0",
  authDomain: "home-nest-07.firebaseapp.com",
  projectId: "home-nest-07",
  storageBucket: "home-nest-07.firebasestorage.app",
  messagingSenderId: "511025426302",
  appId: "1:511025426302:web:f524814fc4177eaa1a8d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);