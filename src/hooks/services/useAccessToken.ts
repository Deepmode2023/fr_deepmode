import { useCallback, useEffect, useMemo, useState } from "react";
import { getAccessTokenService } from "@/services/api.auth";
import {
  LoginUserParamsType,
  ResponseLoginUserType,
} from "@/interfaces/services/auth";
import { AuthType } from "@/entities";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";
import { TIME_DISPLAY_TOAST, IDecodeJWT } from "@/shared";

import { parseJwt } from "@/utils/jwt";

import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { AuthStore } from "@/zustand/authStore";
import { ToastStore, DisplayToastAdapter } from "@/entities";

const toastStore = createSelectorHooks(ToastStore);
const authStore = createSelectorHooks(AuthStore);

export const useAccessToken = (): IServiceHooksResponse<
  LoginUserParamsType | FormData,
  AuthType
> => {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { changeLoadingStatus, changeAuthState } = authStore.getState();
  const { addMessage, removeMessage } = toastStore.getState();
  const [decodeJwt, setDecodeJwt] = useState<IDecodeJWT | null>(null);
  const [tokenResponse, setTokenResponse] =
    useState<ResponseLoginUserType | null>(null);

  const callAPI = useCallback(
    (params: LoginUserParamsType | FormData) => {
      changeLoadingStatus(true);
      getAccessTokenService(params).then((response): void => {
        if (response?.access_token) {
          setIsSuccess(true);
          setTokenResponse(response);
          setDecodeJwt(parseJwt(response.access_token) as IDecodeJWT);
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
    if (isSuccess) {
      DisplayToastAdapter(
        {
          condition: "success",
          message: "You've successfully authorized in Deepmode!",
          time: TIME_DISPLAY_TOAST,
        },
        TIME_DISPLAY_TOAST
      );
      setIsSuccess(false);
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

      setError(null);
    }
  }, [addMessage, removeMessage, isSuccess, error]);

  useEffect(() => {
    if (tokenResponse?.access_token && decodeJwt) {
      changeAuthState(tokenResponse);
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
        expire_time: decodeJwt?.exp ? decodeJwt.exp : null,
      },
    }),
    [tokenResponse, decodeJwt, callAPI]
  );
};
