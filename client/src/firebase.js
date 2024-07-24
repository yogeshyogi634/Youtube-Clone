import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyCMHOXE1DSTVodj6lXw0O6hVLnT60RyY-0",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "clone-a794d.firebaseapp.com",
  projectId: "clone-a794d",
  storageBucket: "clone-a794d.appspot.com",
  messagingSenderId: "705366290637",
  appId: "1:705366290637:web:52d2c2e3ab50d5bcc9f984",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
