import { SlugEnum, SlangEnum } from "@/entities/word";
import { ICreateWordGraphQlVariables } from "../model/model";
import { IStandartValidateValue } from "@/shared";
import { StepType } from "@/shared";
import { Typography } from "@mui/material";

type InputPropsType = {
  uniqKey: string;
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
    uniqKey: "name_input",
    isRequired: true,
    label: "Name",
    description: "Enter the name of the word in the infinitive.",
    isValid: false,
  },
  partOfSpeach: {
    uniqKey: "part_of_speach_input",
    isRequired: true,
    label: "Part of speach",
    description: "Enter the part of speech corresponding to these options.",
    onValidFunc: (value: string) => {
      return { message: "", isValidate: true };
    },
    isValid: true,
  },
  translate: {
    uniqKey: "translate_input",
    isRequired: true,
    label: "Translate",
    description: "Enter a translation of this word.",
    isValid: false,
  },
  example: {
    uniqKey: "example_input",
    isRequired: false,
    label: "Example",
    description:
      "This field is optional, you can provide an example of how to use this word.",
    isValid: false,
  },
  slug: {
    uniqKey: "slug_input",
    isRequired: true,
    label: "Slug",
    description:
      "Enter a word that will characterize the group matching this word. For example: shoe - its slogan is clothes",
    isValid: false,
  },
  slang: {
    uniqKey: "slang_input",
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
    uniqKey: "synonym_input",
    isRequired: false,
    label: "Synonym",
    description:
      "This field is optional, separate words similar in meaning to this word with commas.",
    isValid: false,
  },
  imageUrl: {
    uniqKey: "image_url_input",
    isRequired: false,
    label: "Image",
    description:
      "This field is optional, upload the image it is associated with.",
    isValid: false,
  },
};

export const StepsWordInputs: StepType[] = Object.entries(WORD_INPUTS).map(
  ([input, { uniqKey, ...propsInput }], index) => {
    console.log(input, { propsInput });
    return {
      uniqKey,
      StepContent: <div className="text-current">Content</div>,
      StepLabel: (
        <Typography noWrap variant="h6" className="text-white">
          {propsInput.label}
        </Typography>
      ),
      error: index === 2,
      isVisibleAction: true,
      description: propsInput.description,
    };
  }
);
