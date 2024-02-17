import { ReactNode } from "react";

interface IAuthAssideStore {
  assideContent: ReactNode | JSX.Element;
  assideHeader: ReactNode | JSX.Element;
  isActive: boolean;
  changeAssideDialog: (
    assideContent: ReactNode | JSX.Element,
    assideHeader: ReactNode | JSX.Element,
    isActive: boolean
  ) => void;
}

export { type IAuthAssideStore };
