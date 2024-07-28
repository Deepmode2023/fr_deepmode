import { create } from "zustand";
import { INavbarStore } from "@/interfaces/zustand/navbar";

const NavbarStore = create<INavbarStore>()((set) => ({
  activeItem: null,
  authActiveLink: "main",

  changeActiveItem: (activeItem: string | "main") =>
    set((state: INavbarStore) => {
      //SOME LOGIC

      return {
        ...state,
        activeItem,
      };
    }),
  changeAuthActiveLink: (authActiveLink: string | "main") =>
    set((state: INavbarStore) => {
      return {
        ...state,
        authActiveLink,
      };
    }),
}));

export { NavbarStore, type INavbarStore };
