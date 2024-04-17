export type { UserType, BodyDetailType, ITotalResponse } from "./model";

export type {
  AuthType,
  LoginUserParamsType,
  ResponseLoginUserType,
  ResponseRefreshTokenType,
} from "./services/auth";

export type {
  IUpdateWordGraphQlVariables,
  IDeleteRepetiotionGraphQlVariables,
  ICreateRepetitionGraphQlVariables,
  IDeleteWordGraphQlVariables,
} from "./services/mutation.graphql";

export type {
  ICommonParams,
  IGetSpacedRepetitionGraphQLVariables,
  IGetWordsGraphQlVariables,
} from "./services/query.graphql";

export type {
  ThemeColor,
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
} from "./services/shared-preference";

export type {
  IUpdateUserParams,
  ICreateUserParams,
  ResponseUserType,
  IResponseCreateUser,
} from "./services/user";
