import { PropsWithChildren, createContext, useState } from "react";
import {
  BreadcrompsContextState,
  ActiveBreadcrompStateType,
} from "@/interfaces/components/breadcromps";

export const BreadcrompsContext = createContext<BreadcrompsContextState>({
  onChangeBreadcrompState: () => {},
  breadcromps: {},
});

export const BreadcrompsProvider = ({ children }: PropsWithChildren) => {
  const [breadcromps, setBreadcromps] = useState<
    BreadcrompsContextState["breadcromps"]
  >({});

  const onChangeBreadcrompState = (
    activeBreadcromp: ActiveBreadcrompStateType,
    breadcrompStateName: string
  ) => {
    setBreadcromps((prev) => ({
      ...prev,
      [breadcrompStateName]: activeBreadcromp,
    }));
  };
  return (
    <BreadcrompsContext.Provider
      value={{ breadcromps, onChangeBreadcrompState }}
    >
      {children}
    </BreadcrompsContext.Provider>
  );
};
