import { getDocs } from "firebase/firestore";

const SettingService = {
  setting: async (params) => {
    let data = await getDocs(params);
    return data;
  },
};

export default SettingService;
