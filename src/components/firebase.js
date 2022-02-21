import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updatePassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
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
// auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//firestore
const db = getFirestore(app);
const docDevice = collection(db, "Device");
const docService = collection(db, "Service");

// ...
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

const data = [
  {
    uid: "",
    email: "",
    phoneNumber: "",
    displayName: "",
    role: "Kế toán",
    avt: "",
  },
];
onAuthStateChanged(auth, (email) => {
  if (email) {
    data[0].uid = email.uid;
    data[0].email = email.email;
    data[0].phoneNumber = email.phoneNumber;
    data[0].displayName = email.displayName;
    data[0].avt = email.photoURL;
  }
});

const createPassword = (newpassword) => {
  onAuthStateChanged(auth, (email) => {
    if (email) {
      const user = auth.uid;
      console.log(user);
      return updatePassword(user, newpassword);
    }
  });
};

const handleSignout = () => {
  return signOut(auth);
};

export {
  auth,
  signIn,
  forgotPassword,
  onAuthStateChanged,
  createPassword,
  data,
  handleSignout,
  db,
  docDevice,
  docService,
};
