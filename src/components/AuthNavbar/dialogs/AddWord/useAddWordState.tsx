import { useReducer } from "react";

interface IUseAddWordState {
  name: string;
  part_of_speach: string;
  translate: string;
  example: string;
  synonym: [];
  slug: string;
  slang: string;
}

const initialState: IUseAddWordState = {
  name: "",
  part_of_speach: "",
  translate: "",
  example: "",
  synonym: [],
  slug: "",
  slang: "",
};

const ChangeTypeEnum = {
  name: "action/changeName",
  part_of_speach: "action/changePartOfSpeach",
  translate: "action/changeTranslate",
  example: "action/changeExample",
  synonym: "action/changeSynonym",
  slug: "action/changeSlug",
  slang: "action/changeSlang",
};

const reducer = (
  state: IUseAddWordState,
  payload: { type: keyof typeof ChangeTypeEnum; value: any }
) => {
  switch (ChangeTypeEnum[payload.type]) {
    case ChangeTypeEnum.name:
      return { ...state, name: payload.value };
    case ChangeTypeEnum.part_of_speach:
      return { ...state, part_of_speach: payload.value };
    case ChangeTypeEnum.translate:
      return { ...state, translate: payload.value };
    case ChangeTypeEnum.example:
      return { ...state, example: payload.value };
    case ChangeTypeEnum.synonym:
      return { ...state, synonym: payload.value };
    case ChangeTypeEnum.slug:
      return { ...state, slug: payload.value };
    case ChangeTypeEnum.slang:
      return { ...state, slang: payload.value };
    default:
      return { ...state };
  }
};

const useAddWordState = () => {
  const [inputs, dispatch] = useReducer(reducer, initialState);

  const onChangeValue = (type: keyof typeof ChangeTypeEnum, value: any) => {
    dispatch({ type, value });
  };

  return {
    inputs,
    onChange: onChangeValue,
  };
};

export { useAddWordState, ChangeTypeEnum };
