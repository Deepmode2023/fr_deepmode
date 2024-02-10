import { mergeCls } from "@/utils/cls";
import { FC, ReactElement } from "react";
import InputBasic from "./InputBasic";
import { IInputBasicProps, InputClassnameType } from "./interface";
import { Label } from "./components/Label/Label";

type ClassnameType = {
  container?: string;
  inputBasic?: InputClassnameType;
};

interface IInputWithLabelProps extends Omit<IInputBasicProps, "classname"> {
  classname?: ClassnameType;
  children: ReactElement | string;
}

export const InputWithLabel: FC<IInputWithLabelProps> = ({
  classname = {},
  children,
  ...props
}) => {
  return (
    <div
      className={mergeCls(classname?.container, "w-full flex flex-col")}
      data-testid="input-with-label-container"
    >
      <Label>{children}</Label>
      <InputBasic {...props} classname={classname?.inputBasic} />
    </div>
  );
};
