import React from "react";
import { motion } from "framer-motion";
import { cls } from "@/shared";

export type StackPathPropsType = {
  dValue: string;
  keyName: string;
  classes?: string;
  strokeWidth?: number;
  animateProps?: Record<string, unknown> | undefined;
  fill?: string;
  onClickHandler?: (keyName: string) => void;
};

export const StackPath: React.FC<StackPathPropsType> = ({
  dValue,
  classes = "",
  keyName,
  strokeWidth = 2,
  animateProps = {},
  fill,
  onClickHandler,
}) => {
  return (
    <motion.path
      {...animateProps}
      onClick={() => onClickHandler && onClickHandler(keyName)}
      className={cls(classes, fill)}
      d={dValue}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};
