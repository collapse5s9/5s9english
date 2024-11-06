// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4QWhCDPARY-2s2FgZpjA-DqGxuN8vH4E",
  authDomain: "s9english.firebaseapp.com",
  projectId: "s9english",
  storageBucket: "s9english.firebasestorage.app",
  messagingSenderId: "584451961735",
  appId: "1:584451961735:web:d6befca5fd5f2d5128d922",
  measurementId: "G-W92G48WZWR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
