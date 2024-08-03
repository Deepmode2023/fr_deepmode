import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { IAuthStore, AuthStateType } from "./model";
import { parseJwt, LOCALSTORAGE_USER_PK } from "@/shared";

const AuthStore = create<IAuthStore>()(
  devtools((set) => ({
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
    changeAuthState: (authState: AuthStateType) =>
      set((state: IAuthStore) => {
        const tokenMeta = parseJwt(authState.access_token ?? "");

        if (window && tokenMeta?.user) {
          window.localStorage.setItem(
            LOCALSTORAGE_USER_PK,
            JSON.stringify(tokenMeta.user)
          );
        }

        return {
          ...state,
          access_token: authState.access_token,
          refresh_token: authState.refresh_token,
          user: tokenMeta?.user ?? null,
          isAuth: Boolean(tokenMeta?.user),
          isLoading: false,
          expire_time: tokenMeta?.exp ? tokenMeta.exp : null,
        };
      }),
  }))
);

export { AuthStore, type IAuthStore };
