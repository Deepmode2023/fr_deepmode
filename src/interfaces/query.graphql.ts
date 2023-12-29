export interface ICommonParams {
  limmit?: number;
  pagination?: number;
  skip?: number;
}

export interface IGetWordsGrapgQlVariables extends ICommonParams {
  name?: string;
  slug?: string;
}
