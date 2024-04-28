
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2lrJenzii83ezxPrLOv8zdUY1KjsTsZU",
  authDomain: "chat-8ff6e.firebaseapp.com",
  projectId: "chat-8ff6e",
  storageBucket: "chat-8ff6e.appspot.com",
  messagingSenderId: "1082973578649",
  appId: "1:1082973578649:web:d14d63f4af31e52bcbdf08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();