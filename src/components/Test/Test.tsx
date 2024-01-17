"use client";
import { InputWithLabel } from "../InputBasic/InputWithLabel";
import InputBasic from "../InputBasic/InputBasic";
import { SettingsSvg } from "@/assets/icons";

export const Test = () => {
  return (
    <div style={{ width: 300 }}>
      <InputBasic
        onChangeValue={(value) => console.log(value)}
        type="email"
        placeholder="Some place"
        icon={(color) => <SettingsSvg strokeColor={color} />}
        validateSettings={{ displayIcon: true, displayMessage: true }}
      ></InputBasic>
    </div>
  );
};
