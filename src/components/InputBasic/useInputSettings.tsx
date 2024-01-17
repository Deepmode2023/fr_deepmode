import { useEffect, useState } from "react";
import { StandartValidate } from "@/utils/validateInput";
import {
  SPECIAL_VALIDATE,
  IStandartValidateValue,
} from "@/interfaces/validate";
import { OnClickIconParamsType } from "./interface";
import { EyeSvg, CloseEyeSvg } from "@/assets/icons";
import { COLORS, SIZE_ICONS } from "./constants";

export type UseValueType = {
  onValidateInput?: (
    value: string,
    type: SPECIAL_VALIDATE
  ) => IStandartValidateValue;
  type: SPECIAL_VALIDATE;
  onClickIcon?: (params: OnClickIconParamsType) => void;
  icon?: (color: string) => JSX.Element;
};

export const useInputSettings = ({
  onValidateInput,
  type,
  onClickIcon,
  icon,
}: UseValueType) => {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);
  const [visiblePassword, setVisisblePassword] = useState(false);
  const [typeInput, setTypeInput] = useState(type);
  const [iconButton, setIconButton] = useState<JSX.Element | null>(null);

  const conditionInput = onValidateInput
    ? onValidateInput(value, type)
    : StandartValidate(value, type);

  const color = !touch
    ? COLORS.usually
    : conditionInput.isValidate
    ? COLORS.success
    : COLORS.error;

  useEffect(() => {
    if (icon) setIconButton(icon(color));
    if (type === "password") {
      setIconButton(
        visiblePassword ? (
          <EyeSvg width={SIZE_ICONS} height={SIZE_ICONS} fill={color} />
        ) : (
          <CloseEyeSvg width={SIZE_ICONS} height={SIZE_ICONS} fill={color} />
        )
      );
    }
  }, [color, icon, type, visiblePassword]);

  const callbackIconClick = (params: OnClickIconParamsType): void => {
    setVisisblePassword(!visiblePassword);
    if (onClickIcon) return onClickIcon({ ...params, type });
    if (type === "password") {
      setTypeInput(!visiblePassword ? "text" : "password");
    }
  };

  useEffect(() => {
    if (value.length > 0) setTouch(true);
    else setTouch(false);
  }, [value]);

  return {
    value,
    setValue,
    touch,
    setTouch,
    iconButton,
    color,
    typeInput,
    callbackIconClick,
    isValid: conditionInput.isValidate,
    message: conditionInput.message,
  };
};
