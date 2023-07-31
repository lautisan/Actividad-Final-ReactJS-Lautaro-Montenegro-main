import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVdVezdaEDtLHkUIkwM3GmVlyOTIKai2c",
  authDomain: "ecomreact-7900b.firebaseapp.com",
  projectId: "ecomreact-7900b",
  storageBucket: "ecomreact-7900b.appspot.com",
  messagingSenderId: "182603811620",
  appId: "1:182603811620:web:9fa6999f11c2534dcc01b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)