import { BodyDetailType } from "../../interfaces/total.response";
import { useCallback, useMemo, useState } from "react";
import { ToastStore } from "@/zustand/toastStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { getRefreshTokenService } from "@/services/api.auth";
import { ResponseLoginUserType } from "@/interfaces/services/auth";
import { TIME_DISPLAY_TOAST } from "@/global.constant";
import { AuthStore } from "@/zustand/authStore";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";

const toastStore = createSelectorHooks(ToastStore);
const authStore = createSelectorHooks(AuthStore);

type ResponseDataType = {
  details: BodyDetailType<ResponseLoginUserType> | null;
  isLoading: boolean;
};

type CallAPIType = {
  token: string;
};

export const useRefreshToken = (): IServiceHooksResponse<
  CallAPIType,
  ResponseDataType
> => {
  const addMessage = toastStore.useAddMessage();
  const { isLoading, changeLoadingStatus } = authStore.getState();
  const [details, setDetails] =
    useState<BodyDetailType<ResponseLoginUserType> | null>(null);

  const callAPI = useCallback(
    ({ token }: CallAPIType) => {
      changeLoadingStatus(true);
      getRefreshTokenService(token).then((res) => {
        changeLoadingStatus(false);
        setDetails(res.detail[0]);
        addMessage({
          condition: res.detail[0].type as "success" | "error" | "warning",
          message: res.detail[0].msg,
          time: TIME_DISPLAY_TOAST,
        });
      });
    },
    [changeLoadingStatus, addMessage]
  );

  return useMemo(
    () => ({
      callAPI,
      data: {
        details,
        isLoading,
      },
    }),
    [details, isLoading, callAPI]
  );
};
