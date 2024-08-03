import { validatePartOfSpeach, validateSlang } from "@/entities/word";
import { ICreateWordGraphQlVariables } from "../model/model";
import { IStandartValidateValue, validateMaxLength } from "@/shared";

export type InputPropsType = {
  uniqKey: string;
  isRequired: boolean;
  label: string;
  description: string;
  onValidFunc?: (value: string) => IStandartValidateValue;
  isValid: boolean;
};

export const WORD_INPUTS: Record<
  keyof Omit<ICreateWordGraphQlVariables, "slug">,
  InputPropsType
> = {
  name: {
    uniqKey: "name",
    isRequired: true,
    label: "Name",
    description: "Enter the name of the word in the infinitive.",
    isValid: true,
    onValidFunc: (value: string) => {
      return validateMaxLength(value, 1);
    },
  },
  partOfSpeach: {
    uniqKey: "partOfSpeach",
    isRequired: true,
    label: "Part of speach",
    description: `Enter the part of speech corresponding to these options.
      Like this case: NOUN, PRONOUN, VERB, ADJECTIVE, ADVERB, PREPOSITION, CONJUNCTION, INTERJECTION,`,
    onValidFunc: validatePartOfSpeach,
    isValid: true,
  },
  translate: {
    uniqKey: "translate",
    isRequired: true,
    label: "Translate",
    description: "Enter a translation of this word.",
    isValid: true,
    onValidFunc: (value: string) => {
      return validateMaxLength(value, 1);
    },
  },
  example: {
    uniqKey: "example",
    isRequired: false,
    label: "Example",
    description:
      "This field is optional, you can provide an example of how to use this word.",
    isValid: false,
  },

  slang: {
    uniqKey: "slang",
    isRequired: false,
    label: "Slang",
    description:
      "This field is optional, enter the name of the language the word belongs to.",
    isValid: true,
    onValidFunc: validateSlang,
  },
  synonym: {
    uniqKey: "synonym",
    isRequired: false,
    label: "Synonym",
    description:
      "This field is optional, separate words similar in meaning to this word with commas.",
    isValid: false,
  },
  imageUrl: {
    uniqKey: "image_url",
    isRequired: false,
    label: "Image",
    description:
      "This field is optional, upload the image it is associated with.",
    isValid: false,
  },
};
