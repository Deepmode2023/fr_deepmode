import { useCallback, useEffect, useMemo, useState } from "react";
import { IDecodeJWT } from "@/interfaces/services/user";
import { getAccessTokenService } from "@/services/api.auth";
import {
  LoginUserParamsType,
  ResponseLoginUserType,
} from "@/interfaces/services/auth";
import { AuthType } from "@/interfaces/services/auth";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";
import { TIME_DISPLAY_TOAST } from "@/global.constant";

import { parseJwt } from "@/utils/jwt";

import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { AuthStore } from "@/zustand/authStore";
import { ToastStore, DisplayToastAdapter } from "@/zustand/toastStore";

const toastStore = createSelectorHooks(ToastStore);
const authStore = createSelectorHooks(AuthStore);

export const useAccessToken = (): IServiceHooksResponse<
  LoginUserParamsType,
  AuthType
> => {
  const [error, setError] = useState<string | null>(null);
  const { changeLoadingStatus, changeAuthState } = authStore.getState();
  const { addMessage, removeMessage } = toastStore.getState();
  const [decodeJwt, setDecodeJwt] = useState<IDecodeJWT | null>(null);
  const [tokenResponse, setTokenResponse] = useState<ResponseLoginUserType>();

  const callAPI = useCallback(
    ({ password, username }: LoginUserParamsType) => {
      changeLoadingStatus(true);
      getAccessTokenService({ password, username }).then((response): void => {
        if (response?.access_token) {
          setTokenResponse(response);
          setDecodeJwt(parseJwt(response.access_token));
        }

        //TODO ----> CHANGE THIS LOGIC WHEN CREATE NORMAL RESPONSE ACCESS TOKEN
        // @ts-ignore
        if (response?.detail && response?.detail[0]?.type === "error") {
          // @ts-ignore
          setError(response.detail[0].msg);
        }
      });
    },
    [changeLoadingStatus]
  );

  useEffect(() => {
    if (tokenResponse?.access_token) {
      DisplayToastAdapter(
        {
          condition: "success",
          message: "You've successfully authorized in Deepmode!",
          time: TIME_DISPLAY_TOAST,
        },
        TIME_DISPLAY_TOAST
      );
    }
    if (error) {
      DisplayToastAdapter(
        {
          condition: "error",
          message: error,
          time: TIME_DISPLAY_TOAST,
        },
        TIME_DISPLAY_TOAST
      );
    }
  }, [addMessage, removeMessage, tokenResponse, error]);

  useEffect(() => {
    if (tokenResponse?.access_token && decodeJwt) {
      changeAuthState({
        user: decodeJwt.user,
        isAuth: true,
        ...tokenResponse,
      });
    }
  }, [changeLoadingStatus, changeAuthState, tokenResponse, decodeJwt]);

  return useMemo(
    () => ({
      callAPI,
      data: {
        user: decodeJwt?.user ?? null,
        isAuth: Boolean(decodeJwt?.user) ?? false,
        access_token: tokenResponse?.access_token ?? null,
        refresh_token: tokenResponse?.refresh_token ?? null,
        expire_time: decodeJwt?.exp
          ? new Date(decodeJwt.exp * 1000).toString()
          : null,
      },
    }),
    [tokenResponse, decodeJwt, callAPI]
  );
};
