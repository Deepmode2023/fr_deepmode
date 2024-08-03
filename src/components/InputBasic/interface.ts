import { SPECIAL_VALIDATE } from "@/interfaces/validate";
import { IStandartValidateValue } from "@/interfaces/validate";

export type InputClassnameType = {
  container?: string;
  inputContainer?: string;
  input?: string;
};

export type OnClickIconParamsType = {
  color?: string;
  touch?: boolean;
  isValid?: boolean;
  type?: SPECIAL_VALIDATE;
};

export type ValidateSettings = {
  displayIcon: boolean;
  displayMessage: boolean;
};

export interface IInputBasicProps {
  classname?: InputClassnameType;
  clearEvent?: boolean;
  placeholder?: string;
  disabled?: boolean;
  icon?: (color: string) => JSX.Element;
  name?: string;
  type: SPECIAL_VALIDATE;
  validateSettings?: ValidateSettings;
  onClickIcon?: (params: OnClickIconParamsType) => void;
  onChangeValue: (value: string) => void;
  onValidateInput?: (
    value: string,
    type: SPECIAL_VALIDATE
  ) => IStandartValidateValue;
}
