import { IStandartValidateValue } from "@/shared";
import { WordType, SlugEnum } from "../../model/models";

const validateSlug = (value: string): IStandartValidateValue => {
  Object.entries(SlugEnum).map(([key, value]) => {
    console.log({ value });
  });

  return { isValidate: false, message: "" };
};

export const ValidateField = (
  fieldName: keyof WordType,
  value: string
): IStandartValidateValue => {
  validateSlug(value);
  return { isValidate: false, message: "" };
};
