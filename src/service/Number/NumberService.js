import { getDocs } from "firebase/firestore";

const NumberService = {
  showNumber: async (params) => {
    let data = await getDocs(params);
    return data;
  },
  descNumber: async (params) => {
    let data = await getDocs(params);
    return data;
  },
  addNumber: async (params) => {
    let data = await getDocs(params);
    return data;
  },
};

export default NumberService;
