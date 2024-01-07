import { SlugEnum } from "./query.graphql";

export enum PartOfSpeachEnum {
  NOUN = "NOUN",
  PRONOUN = "PRONOUN",
  VERB = "VERB",
  ADJECTIVE = "ADJECTIVE",
  ADVERB = "ADVERB",
  PREPOSITION = "PREPOSITION",
  CONJUNCTION = "CONJUNCTION",
  INTERJECTION = "INTERJECTION",
}

export enum SlangEnum {
  ENG = "ENG",
  USA = "USA",
  PL = "PL",
}

export interface ICreateWordGraphQlVariables {
  name: string;
  partOfSpeach: PartOfSpeachEnum;
  translate: string;
  slug: string;
  example?: string;
  slang?: SlangEnum;
  synonym: Array<string>;
  imageUrl?: string;
}

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
