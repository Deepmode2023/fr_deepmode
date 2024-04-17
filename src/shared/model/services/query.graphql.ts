import { SlugEnum } from "../word.model";

export interface ICommonParams {
  limmit?: number;
  pagination?: number;
  skip?: number;
}

export interface IGetWordsGraphQlVariables extends ICommonParams {
  name?: string;
  slug?: string;
}

export interface IGetSpacedRepetitionGraphQLVariables extends ICommonParams {
  dateStart: Date;
  dateEnd: Date;
  slug?: keyof typeof SlugEnum;
  title?: String;
}
