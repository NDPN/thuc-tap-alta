import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail  ,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFH4C3T-IvsKe9JiQ2Vvw3GyXHEnMvkck",
  authDomain: "alta-project-621dd.firebaseapp.com",
  databaseURL:
    "https://alta-project-621dd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alta-project-621dd",
  storageBucket: "alta-project-621dd.appspot.com",
  messagingSenderId: "384044968889",
  appId: "1:384044968889:web:b3b0f3cc7d225d4278a468",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export { signIn, forgotPassword };
