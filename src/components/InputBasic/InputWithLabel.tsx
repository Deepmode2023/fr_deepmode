import { cls } from "@/shared";
import { FC, ReactElement } from "react";
import InputBasic from "./InputBasic";
import { IInputBasicProps, InputClassnameType } from "./interface";
import { Label } from "./components/Label/Label";

type classnameInputWithLabelType = {
  container?: string;
  inputBasic?: InputClassnameType;
};

export interface IInputWithLabelProps
  extends Omit<IInputBasicProps, "classname"> {
  classname?: classnameInputWithLabelType;
  children: ReactElement | string;
}

export const InputWithLabel: FC<IInputWithLabelProps> = ({
  classname = {},
  children,
  ...props
}) => {
  return (
    <div
      className={cls("w-full flex flex-col", classname?.container)}
      data-testid="input-with-label-container"
    >
      <Label>{children}</Label>
      <InputBasic {...props} classname={classname?.inputBasic} />
    </div>
  );
};
