import { ReactNode } from "react";

export type ClassesAccordionType = {
  header?: string;
  itemContainer?: string;
  item?: string;
};

export interface IAccordionItemProps {
  keyChildName: string;
  title: string;
  onClickHandler: (keyName: string) => void;
  classes?: string;
}

export interface IAccordionProps {
  header: ReactNode;
  keyName: string;
  forceInteraptActive?: boolean;
  onClickHeader?: (keyName: string) => void;
  width?: number;
  classes?: ClassesAccordionType;
  childItems?: Array<
    Omit<IAccordionItemProps, "childActive" | "keyActive" | "changeChildKey">
  >;
}
