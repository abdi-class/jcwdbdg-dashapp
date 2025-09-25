import { create } from "zustand";

interface IAuthStore {
  email: string;
  name: string;
  login: (emailParam: string, nameParam: string) => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
  //STATE
  email: "",
  name: "",

  //ACTION
  login: (emailParam, nameParam) => {
    if (emailParam) {
      set(() => ({ email: emailParam, name: nameParam }));
    }
  },
}));

export default useAuthStore;
