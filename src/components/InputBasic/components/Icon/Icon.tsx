import { FC } from "react";
import { CheckSvg, WarningSvg } from "@/assets/icons";
import { OnClickIconParamsType } from "../../interface";
import { SIZE_ICONS, ID_TESTING } from "../../constants";

type IconTypeProps = {
  icon?: JSX.Element | null;
  isValid: boolean;
  color: string;
  validateIcon: boolean;
  callbackIconClick: (params: OnClickIconParamsType) => void;
};

export const Icon: FC<IconTypeProps> = ({
  icon,
  isValid,
  color,
  callbackIconClick,
  validateIcon,
}) => {
  const totalCls = "text-gray-700 flex justify-center align-middle select-none";

  if (validateIcon) {
    return (
      <div className={totalCls} data-testid={ID_TESTING.icon}>
        {isValid ? (
          <CheckSvg
            strokeColor={color}
            width={SIZE_ICONS}
            height={SIZE_ICONS}
          />
        ) : (
          <WarningSvg
            strokeColor={color}
            width={SIZE_ICONS}
            height={SIZE_ICONS}
          />
        )}
      </div>
    );
  }

  if (icon && !validateIcon)
    return (
      <div
        data-testid={ID_TESTING.icon}
        onClick={() => callbackIconClick({ isValid, color })}
        className={totalCls}
      >
        {icon}
      </div>
    );

  return null;
};
