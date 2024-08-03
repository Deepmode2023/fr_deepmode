import { UserType } from "@/shared";

export type AuthType = {
  user: UserType | null;
  access_token: string | null;
  refresh_token: string | null;
  isAuth: boolean;
  expire_time?: string | null;
  type_token?: string | null;
};

export type AuthStateType = Omit<AuthType, "user" | "isAuth">;

export interface IAuthStoreAction {
  changeLoadingStatus: (condition: boolean) => void;
  changeAuthState: (authState: AuthStateType) => void;
}

export interface IAuthStore extends IAuthStoreAction, AuthType {
  isLoading: boolean;
}
