import React from "react";
import { mergeCls } from "@/utils/cls";

export type LableType = {
  children: React.ReactElement | string;
  isUpper?: boolean;
};

export const Label: React.FC<LableType> = ({ children, isUpper = true }) => {
  const classes = mergeCls(
    isUpper && "uppercase",
    "text-gray-500 text-xs overflow-ellipsis overflow-hidden whitespace-nowrap"
  );

  if (typeof children === "string")
    return (
      <span className={classes} data-testid="input-label">
        {children}
      </span>
    );

  return (
    children &&
    React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        "data-testid": "input-label",
        className: `${classes} ${child.props.className || ""}`,
      });
    })
  );
};
