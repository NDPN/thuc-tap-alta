import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5Z0eXqkhmjfGbW4IPhbNQi15LlQ9_iM8",
  authDomain: "alta-ticket.firebaseapp.com",
  projectId: "alta-ticket",
  storageBucket: "alta-ticket.appspot.com",
  messagingSenderId: "379864998662",
  appId: "1:379864998662:web:84da6c33b8b3b9d3c93487",
  measurementId: "G-NEPVTN3TXJ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const docManage = collection(db, "Manage");
const docTicket = collection(db, "Ticket");

export { db, docManage, docTicket };
