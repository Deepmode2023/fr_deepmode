import React from "react";
import { ClassesAccordionType } from "../accordion";
import { ISVGIconProps } from "@/interfaces/assets";

export type IAuthSubLinkChild = {
  keyChildName: string;
  onClickHandler: (keyChildName: string) => void;
  title: string;
};

export interface IAuthSubLinkProps {
  header: string;
  isActive: boolean;
  keyName: string;
  iconHeader: (props: ISVGIconProps) => JSX.Element;
  onClickHeader?: (keyName: string) => void;
  childItems?: Array<IAuthSubLinkChild>;
  classes?: ClassesAccordionType;
}

export type AuthSubLinkChildItemType = {
  keyChildName: string;
  title: string;
  iconChild?: (props: ISVGIconProps) => JSX.Element;
};

export interface IAuthSubLinkProperty {
  header: string;
  keyName: string;
  iconHeader: (props: ISVGIconProps) => JSX.Element;
}

export interface IAuthNavigationProps {}
