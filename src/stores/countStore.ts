import { create } from "zustand";

interface ICountStore {
  count: number;
  increase: () => void;
}

const useCountStore = create<ICountStore>((set) => ({
  count: 0, // state
  increase: () => set((x) => ({ count: x.count + 1 })), //action
}));

export default useCountStore;
