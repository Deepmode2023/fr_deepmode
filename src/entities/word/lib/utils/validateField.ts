import {
  IStandartValidateValue,
  prototypeEnumValidate,
  SlugEnum,
  PartOfSpeachEnum,
  SlangEnum,
} from "@/shared";

const validateSlug = (value: string): IStandartValidateValue => {
  return prototypeEnumValidate(value, SlugEnum);
};

const validateSlang = (value: string): IStandartValidateValue => {
  return prototypeEnumValidate(value, SlangEnum);
};

const validatePartOfSpeach = (value: string): IStandartValidateValue => {
  return prototypeEnumValidate(value, PartOfSpeachEnum);
};

export { validateSlug, validatePartOfSpeach, validateSlang };
