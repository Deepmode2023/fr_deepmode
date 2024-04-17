import { SlugEnum, PartOfSpeachEnum, SlangEnum } from "../word.model";

export interface IUpdateWordGraphQlVariables {
  id: number;
  name?: string;
  partOfSpeach?: PartOfSpeachEnum;
  translate?: string;
  slug?: string;
  example?: string;
  slang?: SlangEnum;
  synonym?: Array<string>;
  imageUrl?: string;
}

export interface IDeleteWordGraphQlVariables {
  id: number;
}

export interface ICreateRepetitionGraphQlVariables {
  description: string;
  slug: SlugEnum;
  title: string;
  conditionRepetition: boolean;
}

export interface IDeleteRepetiotionGraphQlVariables {
  id: number;
}
