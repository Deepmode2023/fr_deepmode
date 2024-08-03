import { create } from "zustand";
import { IAuthAssideStore } from "@/interfaces/zustand/authAsside";

const AuthAssideStore = create<IAuthAssideStore>()((set) => ({
  assideContent: null,
  assideHeader: null,
  isActive: false,

  changeAssideDialog: (assideContent, assideHeader, isActive) =>
    set((state: any) => {
      return {
        ...state,
        assideContent,
        assideHeader,
        isActive,
      };
    }),
}));

export { type IAuthAssideStore, AuthAssideStore };
