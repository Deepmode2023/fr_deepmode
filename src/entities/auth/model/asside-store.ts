import { ReactNode } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IAuthAssideStore {
  content: ReactNode | JSX.Element;
  header: ReactNode | JSX.Element;
  open: boolean;
  changeAsideCondition: (
    content: ReactNode | JSX.Element,
    header: ReactNode | JSX.Element,
    open: boolean
  ) => void;
}

const AuthNavbarDrawerStore = create<IAuthAssideStore>()(
  devtools((set) => ({
    content: null,
    header: null,
    open: false,

    changeAsideCondition: (content, header, open) =>
      set((state: any) => {
        return {
          ...state,
          content,
          header,
          open,
        };
      }),
  }))
);

export { AuthNavbarDrawerStore };
