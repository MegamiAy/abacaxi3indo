import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMFtnVd49kiuC66WWfDQcgP_G9wtz2imU",
  authDomain: "claire-1bba9.firebaseapp.com",
  projectId: "claire-1bba9",
  storageBucket: "claire-1bba9.appspot.com",
  messagingSenderId: "174879856976",
  appId: "1:174879856976:web:ef503fdabc53d45f3f7455",
  measurementId: "G-B7M12MN017"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);