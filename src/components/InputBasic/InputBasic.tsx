"use client";
import { mergeCls } from "@/utils/cls";
import { FC } from "react";
import {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
} from "@/interfaces/validate";
import { Icon } from "./components/Icon/Icon";
import { Placeholder } from "./components/Placeholder/Placeholder";
import { useInputSettings } from "./useInputSettings";

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
  placeholder?: string;
  icon?: (color: string) => JSX.Element;
  type: SPECIAL_VALIDATE;
  validateSettings?: ValidateSettings;
  onClickIcon?: (params: OnClickIconParamsType) => void;
  onChangeValue: (value: string) => void;
  onValidateInput?: (
    value: string,
    type: SPECIAL_VALIDATE
  ) => IStandartValidateValue;
}

const InputBasic: FC<IInputBasicProps> = ({
  classname = {},
  placeholder,
  icon,
  onChangeValue,
  onClickIcon,
  type,
  onValidateInput,
  validateSettings = { displayIcon: true, displayMessage: true },
}) => {
  const {
    touch,
    isValid,
    message,
    color,
    setValue,
    setTouch,
    value,
    callbackIconClick,
    iconButton,
    typeInput,
  } = useInputSettings({
    onClickIcon,
    onValidateInput,
    icon,
    type,
  });
  return (
    <div
      className={mergeCls("flex flex-col gap-1 w-full", classname?.container)}
    >
      <div
        style={{ borderColor: color }}
        className={mergeCls(
          "flex border-b-2 gap-1 items-center",
          classname?.inputContainer
        )}
      >
        <input
          type={typeInput}
          onChange={({ target: { value } }) => setValue(value)}
          className={mergeCls(
            "w-full bg-transparent outline-none text-gray-700 ",
            classname?.input
          )}
          onBlur={() => {
            setTouch(!isValid);
            onChangeValue(value);
          }}
          data-testid="input-basic-input"
          value={value}
        />
        <Icon
          validateIcon={validateSettings.displayIcon && touch}
          icon={iconButton}
          isValid={isValid}
          color={color}
          callbackIconClick={callbackIconClick}
        />
      </div>
      <Placeholder
        color={color}
        placeholder={placeholder}
        message={message}
        validateMessage={validateSettings.displayMessage && touch}
      />
    </div>
  );
};

export default InputBasic;
