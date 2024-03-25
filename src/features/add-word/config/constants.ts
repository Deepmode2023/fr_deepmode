import { SlugEnum, SlangEnum } from "@/entities";
import { ICreateWordGraphQlVariables } from "../model/model";
import { IStandartValidateValue } from "@/shared";

type InputPropsType = {
  isRequired: boolean;
  label: string;
  description: string;
  onValidFunc?: (value: string) => IStandartValidateValue;
  isValid: boolean;
};

export const WORD_INPUTS: Record<
  keyof ICreateWordGraphQlVariables,
  InputPropsType
> = {
  name: {
    isRequired: true,
    label: "Name",
    description: "Enter the name of the word in the infinitive.",
    isValid: false,
  },
  partOfSpeach: {
    isRequired: true,
    label: "Part of speach",
    description: "Enter the part of speech corresponding to these options.",
    onValidFunc: (value: string) => {
      return { message: "", isValidate: true };
    },
    isValid: true,
  },
  translate: {
    isRequired: true,
    label: "Translate",
    description: "Enter a translation of this word.",
    isValid: false,
  },
  example: {
    isRequired: false,
    label: "Example",
    description:
      "This field is optional, you can provide an example of how to use this word.",
    isValid: false,
  },
  slug: {
    isRequired: true,
    label: "Slug",
    description:
      "Enter a word that will characterize the group matching this word. For example: shoe - its slogan is clothes",
    isValid: false,
  },
  slang: {
    isRequired: false,
    label: "Slang",
    description:
      "This field is optional, enter the name of the language the word belongs to.",
    isValid: true,
    onValidFunc: (value: string) => {
      return { message: "", isValidate: true };
    },
  },
  synonym: {
    isRequired: false,
    label: "Synonym",
    description:
      "This field is optional, separate words similar in meaning to this word with commas.",
    isValid: false,
  },
  imageUrl: {
    isRequired: false,
    label: "Image",
    description:
      "This field is optional, upload the image it is associated with.",
    isValid: false,
  },
};
