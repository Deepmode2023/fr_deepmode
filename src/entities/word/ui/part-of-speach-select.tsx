import { MutableRefObject } from "react";
import { PartOfSpeachValues } from "../config/constant";
import { SelectWithPlaceholder } from "@/shared";

type PartOfSpeachSelectType = {
  value: string;
  onChange: (value: string) => void;
  name: string;
  storeRef?: MutableRefObject<Record<string, HTMLInputElement>>;
};

export const PartOfSpeachSelect = ({
  value,
  onChange,
  name,
  storeRef,
}: PartOfSpeachSelectType) => {
  return (
    <SelectWithPlaceholder
      fullWidth
      storeRef={storeRef}
      name={name}
      items={PartOfSpeachValues}
      placeholder="Choose part of speach variant"
      value={value}
      onChange={onChange}
    />
  );
};
