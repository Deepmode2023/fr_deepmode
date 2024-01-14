"use client";
import { mergeCls } from "@/utils/cls";
import { useRef, FC } from "react";

import styless from "./InputBasic.module.scss";

interface IInputBasicProps {
  classname?: Array<string>;
}

const InputBasic: FC<IInputBasicProps> = ({ classname = [] }) => {
  return (
    <div
      className={mergeCls(...classname, "w-full")}
      data-testid="input-basic-container"
    >
      Input
    </div>
  );
};

export default InputBasic;
