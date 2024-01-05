import { create } from "zustand";
import { IAuthStore, ResponseLoginUserType } from "@/interfaces/services/auth";
import { parseJwt } from "@/utils/jwt";
import { LOCALSTORAGE_USER_PK } from "@/global.constant";

export const useAuthStore = create<IAuthStore>()((set) => ({
  user: null,
  isAuth: false,
  refresh_token: null,
  access_token: `Bearer `,
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
        user: userObj.user,
        isAuth: Boolean(userObj.user),
        isLoading: false,
        expire_time: new Date(userObj?.exp, 0).toString(),
      };
    }),
}));
