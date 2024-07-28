import { ITotalResponse, UserType } from "../model";

export type AuthType = {
  user: UserType | null;
  access_token: string | null;
  refresh_token: string | null;
  isAuth: boolean;
  expire_time?: string | null;
  type_token?: string | null;
};

/* For Service type */

export type LoginUserParamsType = {
  username: string;
  password: string;
};

export type ResponseLoginUserType = Omit<AuthType, "user" | "isAuth">;
export type ResponseRefreshTokenType = ITotalResponse<ResponseLoginUserType>;
