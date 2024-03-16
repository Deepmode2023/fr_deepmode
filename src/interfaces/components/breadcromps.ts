import { ReactNode } from "react";

type BreadcropmType = {
  title: ReactNode;
  value: string;
};

interface IBreadcrompsProps {
  breadcrompItems: BreadcropmType[];
  breadcrompsName: string;
  cursorColor?: string;
}

type SettingsCursorStateType = { left: number; rotate: number };
type ActiveBreadcrompStateType = {
  breadcromp: BreadcropmType;
  currentIndex: number;
};

/* --TODO CONTEXT */

type BreadcrompsContextState = {
  onChangeBreadcrompState: (
    activeBreadcromp: ActiveBreadcrompStateType,
    breadcrompStateName: string
  ) => void;
  breadcromps: {
    [breadcrompStateName: string]: ActiveBreadcrompStateType;
  };
};

export type {
  IBreadcrompsProps,
  BreadcropmType,
  SettingsCursorStateType,
  ActiveBreadcrompStateType,
  BreadcrompsContextState,
};
