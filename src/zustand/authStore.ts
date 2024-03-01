import { create } from "zustand";
import { ResponseLoginUserType } from "@/interfaces/services/auth";
import { IAuthStore } from "@/interfaces/zustand/auth";
import { parseJwt } from "@/utils/jwt";
import { LOCALSTORAGE_USER_PK } from "@/global.constant";

const AuthStore = create<IAuthStore>()((set) => ({
  user: null,
  isAuth: false,
  refresh_token: null,
  access_token: null,
  isLoading: false,
  changeLoadingStatus: (condition: boolean = false) =>
    set((state: IAuthStore) => ({
      ...state,
      isLoading: condition,
    })),
  changeAuthState: (authState: ResponseLoginUserType) =>
    set((state: IAuthStore) => {
      const userObj = parseJwt(authState.access_token ?? "");

      if (window && userObj.user) {
        window.localStorage.setItem(
          LOCALSTORAGE_USER_PK,
          JSON.stringify(userObj)
        );
      }

      return {
        ...state,
        access_token: authState.access_token,
        refresh_token: authState.refresh_token,
        user: userObj.user,
        isAuth: Boolean(userObj?.user),
        isLoading: false,
        expire_time: userObj?.exp && new Date(userObj.exp * 1000).toString(),
      };
    }),
}));

export { AuthStore, type IAuthStore };
