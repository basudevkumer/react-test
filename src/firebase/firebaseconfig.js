// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5J9cg_g5Ehieb4OPOmc-ZZn_5Jpk86WA",
  authDomain: "test-3-f75c3.firebaseapp.com",
  projectId: "test-3-f75c3",
  storageBucket: "test-3-f75c3.firebasestorage.app",
  messagingSenderId: "786580379959",
  appId: "1:786580379959:web:6ab05df315f1c0dc24e2b2",
  measurementId: "G-VTFB9ZSRSV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
