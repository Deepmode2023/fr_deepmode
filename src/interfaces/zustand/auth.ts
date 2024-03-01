import { AuthType, ResponseLoginUserType } from "../services/auth";

export interface IAuthStoreAction {
  changeLoadingStatus: (condition: boolean) => void;
  changeAuthState: (authState: ResponseLoginUserType) => void;
}

export interface IAuthStore extends IAuthStoreAction, AuthType {
  isLoading: boolean;
}
