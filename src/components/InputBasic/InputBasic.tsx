"use client";
import { mergeCls } from "@/utils/cls";
import { FC } from "react";
import { IInputBasicProps } from "./interface";
import { Icon } from "./components/Icon/Icon";
import { Placeholder } from "./components/Placeholder/Placeholder";
import { useInputSettings } from "./useInputSettings";
import { ID_TESTING } from "./constants";

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
          data-testid={ID_TESTING.input}
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
