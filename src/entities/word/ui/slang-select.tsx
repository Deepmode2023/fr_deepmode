"use client";
import { MutableRefObject, useEffect } from "react";
import { SlangValues } from "../config/constant";
import { SelectWithPlaceholder, SlangEnum } from "@/shared";

type SlangSelectType = {
  value: string;
  onChange: (value: string) => void;
  name: string;
  storeRef?: MutableRefObject<Record<string, HTMLInputElement>>;
};

export const SlangSelect = ({
  value,
  onChange,
  name,
  storeRef,
}: SlangSelectType) => {
  useEffect(() => {
    if (value.length < 1) {
      onChange(SlangEnum.ENG);
    }
  }, []);

  return (
    <SelectWithPlaceholder
      fullWidth
      storeRef={storeRef}
      name={name}
      items={SlangValues}
      placeholder="Choose slang variant"
      value={value}
      onChange={onChange}
    />
  );
};
