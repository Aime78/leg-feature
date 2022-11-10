// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD8piX7gQrfMbZc3tO-j4MftAwA0JlyirI",
  authDomain: "algo-test-leg-emulator.firebaseapp.com",
  projectId: "algo-test-leg-emulator",
  storageBucket: "algo-test-leg-emulator.appspot.com",
  messagingSenderId: "780570299696",
  appId: "1:780570299696:web:559ec1b7c0b97d351b8cf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
