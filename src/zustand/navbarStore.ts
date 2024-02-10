import { create } from "zustand";
import { INavbarStore } from "@/interfaces/zustand/navbar";

export const NavbarStore = create<INavbarStore>()((set) => ({
  activeItem: null,
  authActiveLink: null,

  changeActiveItem: (activeItem: string | null) =>
    set((state: INavbarStore) => {
      //SOME LOGIC

      return {
        ...state,
        activeItem,
      };
    }),
  changeAuthActiveLink: (authActiveLink: string | null) =>
    set((state: INavbarStore) => {
      return {
        ...state,
        authActiveLink,
      };
    }),
}));
