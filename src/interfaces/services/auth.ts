import { ITotalResponse } from "../total.response";

export type AuthType = {
  user: UserType | null;
  access_token: string | null;
  refresh_token: string | null;
  isAuth: boolean;
  expire_time?: string | null;
  type_token?: string | null;
};

export type UserType = {
  user_id: string;
  name: string;
  surname: string;
  email: string;
  roles: string[];
  create_at?: string;
  updated_account: string;
};

/* For Service type */

export type LoginUserParamsType = {
  username: string;
  password: string;
};

export type ResponseLoginUserType = Omit<AuthType, "user" | "isAuth">;
export type ResponseRefreshTokenType = ITotalResponse<ResponseLoginUserType>;
