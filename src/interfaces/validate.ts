import { ReactNode } from "react";

export interface IStandartValidateValue {
  isValidate: boolean;
  message: string;
}

export type SPECIAL_VALIDATE = "password" | "email" | "text";
