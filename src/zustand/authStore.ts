import { create } from "zustand";
import { ResponseLoginUserType } from "@/interfaces/services/auth";
import { IAuthStore } from "@/interfaces/zustand/auth";
import { LOCALSTORAGE_USER_PK, IDecodeJWT, parseJwt } from "@/shared";

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
      const tokenMeta: IDecodeJWT | null = parseJwt(
        authState.access_token ?? ""
      );

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
}));

export { AuthStore, type IAuthStore };
