import { deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase";

const SettingService = {
  setting: async (params) => {
    let data = await getDocs(params);
    return data;
  },
  delTicket: async (id) => {
    await deleteDoc(doc(db, "Ticket", id));
  },
  updTicket : async (id, input) => {
    await setDoc(doc(db, "Ticket", id), input);
  }
};

export default SettingService;
