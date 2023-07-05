import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaSPROLqEzeH7dpWDBWG0xW0rwSD3tLdE",
  authDomain: "abacaxi-7329b.firebaseapp.com",
  projectId: "abacaxi-7329b",
  storageBucket: "abacaxi-7329b.appspot.com",
  messagingSenderId: "428140994291",
  appId: "1:428140994291:web:1bb5d31470c5ebd5562186",
  measurementId: "G-KD0QNPYHX6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);