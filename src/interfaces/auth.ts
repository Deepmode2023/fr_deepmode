export interface IAuthStoreAction {
  changeLoadingStatus: (condition: boolean) => void;
  changeAuthState: (authState: AuthType) => void;
}

export type AuthType = {
  user: UserType | null;
  isAuth: boolean;
  access_token: string | null;
  refresh_token: string | null;
  expire_time?: string | null;
  type_token?: string | null;
};

export interface IAuthStore extends IAuthStoreAction, AuthType {
  isLoading: boolean;
}

export type UserType = {
  user_id: string;
  name: string;
  surname: string;
  email: string;
  roles: string[];
  create_at?: string;
  update_account?: string;
};

/* For Service type */

export type LoginUserType = {
  username: string;
  password: string;
};

export type ResponseLoginUserType = Omit<AuthType, "user" | "isAuth">;
