// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCax4LwVJdUsivmhTL8k6c2xj6kcNrUb7Q",
  authDomain: "coffeeproject-81695.firebaseapp.com",
  projectId: "coffeeproject-81695",
  storageBucket: "coffeeproject-81695.firebasestorage.app",
  messagingSenderId: "824057548431",
  appId: "1:824057548431:web:f326ddee54f5211086eafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);