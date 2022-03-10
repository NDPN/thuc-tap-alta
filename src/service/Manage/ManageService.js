import { getDocs } from "firebase/firestore";

const ManageService = {
  manage: async (params) => {
    let data = await getDocs(params);
    return data;
  },
};

export default ManageService;
