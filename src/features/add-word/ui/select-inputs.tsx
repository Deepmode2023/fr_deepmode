"use client";
import { SlangSelect, PartOfSpeachSelect } from "@/entities/word";

type SelectInputsType = {
  name: string;
  onChange: (value: string) => void;
  value: string;
};

const SelectInputs = (props: SelectInputsType) => {
  if (props.name === "slang") {
    return <SlangSelect {...props} />;
  }

  return <PartOfSpeachSelect {...props} />;
};

export const selectInputsClosets = (selectName: string) => {
  if (selectName === "slang" || selectName === "partOfSpeach") {
    return (props: SelectInputsType) => <SelectInputs {...props} />;
  }
  return null;
};
