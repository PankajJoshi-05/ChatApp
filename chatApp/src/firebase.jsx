
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfzSAtVBBnlW6YIJPVZ-LIw3OWhUuA3hI",
  authDomain: "chat-dea3e.firebaseapp.com",
  projectId: "chat-dea3e",
  storageBucket: "chat-dea3e.appspot.com",
  messagingSenderId: "151822344930",
  appId: "1:151822344930:web:373dfca7ebd19e3c2b74bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();