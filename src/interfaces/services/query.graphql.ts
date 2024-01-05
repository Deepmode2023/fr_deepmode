export enum SlugEnum {
  WORD = "WORD",
  PDF = "PDF",
  SLANG = "THEME_WITH_SLANG",
}

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
  slug?: SlugEnum;
  title?: String;
}
