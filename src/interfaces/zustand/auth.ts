import { AuthType } from "../services/auth";

export interface IAuthStoreAction {
  changeLoadingStatus: (condition: boolean) => void;
  changeAuthState: (authState: AuthType) => void;
}

export interface IAuthStore extends IAuthStoreAction, AuthType {
  isLoading: boolean;
}
