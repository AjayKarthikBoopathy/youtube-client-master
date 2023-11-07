import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// to signin with Google account
const firebaseConfig = {
  apiKey: "AIzaSyAPlxKP-tpYR725t4jKPBtHHpD85drOaK8",  //apiKey: process.env.FIREBASE_KEY,
  authDomain: "video-8c6f6.firebaseapp.com",
  projectId: "video-8c6f6",
  storageBucket: "video-8c6f6.appspot.com",
  messagingSenderId: "327722164631",
  appId: "1:327722164631:web:b16b7cef33e6f13bac24d2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
