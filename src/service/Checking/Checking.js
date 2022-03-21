import { getDocs } from "firebase/firestore";

const CheckingService = {
  checking: async (params) => {
    let data = await getDocs(params);
    return data;
  },
};

export default CheckingService;