import { useEffect } from "react";
import { getAccessToken } from "@/services/api.auth";
import { LoginUserParamsType } from "@/interfaces/services/auth";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { useAuthStore } from "@/zustand/authStore";
import { parseJwt } from "@/utils/jwt";

const authStore = createSelectorHooks(useAuthStore);

export const useAccessToken = ({ password, username }: LoginUserParamsType) => {
  const { changeLoadingStatus, changeAuthState } = authStore.getState();

  useEffect(() => {
    changeLoadingStatus(true);
    getAccessToken({ password, username }).then((tokenData) => {
      if (tokenData?.access_token) {
        var decode_jwt = parseJwt(tokenData.access_token);
      }
      console.log({ decode_jwt });
      changeAuthState({ user: null, isAuth: true, ...tokenData });
    });
  }, [password, username, changeLoadingStatus, changeAuthState]);
};
