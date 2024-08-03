"use client";
import React, { FC, useState } from "react";

import { cls } from "@/shared";

export type ConditionType = "usually" | "success" | "error";

interface IAddButtonProps {
  strokeColor?: string;
  classes?: string;
  onClickAction: (callback: (condition: ConditionType) => void) => void;
}

const conditionPath: Record<ConditionType, React.JSX.Element> = {
  usually: (
    <React.Fragment>
      <path
        d="M8 12H16"
        className={"stroke-white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8"
        className={"stroke-white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </React.Fragment>
  ),
  success: (
    <path
      d="M7.75 12L10.58 14.83L16.25 9.17004"
      className={"stroke-success"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  error: (
    <React.Fragment>
      <path
        d="M8.5 15.5L15.5 8.5"
        className={"stroke-error"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M15.5 15.5L8.5 8.5"
        className={"stroke-error"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </React.Fragment>
  ),
};

export const AddButton: FC<IAddButtonProps> = ({
  strokeColor = "stroke-white",
  classes,
  onClickAction,
}) => {
  const [condition, setCondition] = useState<ConditionType>("usually");

  const callback = (condition: ConditionType) => {
    setCondition(condition);

    setTimeout(() => {
      setCondition("usually");
    }, 1000);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      overflow="visible"
      className={cls(
        "hover:scale-[1.1] transition-transform duration-300 cursor-pointer",
        classes
      )}
      onClick={() => onClickAction(callback)}
    >
      <path
        d={`M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z`}
        className={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {conditionPath[condition]}
    </svg>
  );
};
