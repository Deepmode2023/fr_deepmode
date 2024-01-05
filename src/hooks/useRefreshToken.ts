import { BodyDetailType } from "./../interfaces/total.response";
import { useEffect, useMemo, useState } from "react";
import { ToastStore } from "@/zustand/toastStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { getRefreshToken } from "@/services/api.auth";
import { ResponseLoginUserType } from "@/interfaces/services/auth";
import { useAuthStore } from "@/zustand/authStore";

const toastStore = createSelectorHooks(ToastStore);
const authStore = createSelectorHooks(useAuthStore);

export const useRefreshToken = (token: string) => {
  const addMessage = toastStore.useAddMessage();
  const { isLoading, changeLoadingStatus } = authStore.getState();
  const [details, setDetails] =
    useState<BodyDetailType<ResponseLoginUserType> | null>(null);

  useEffect(() => {
    changeLoadingStatus(true);

    getRefreshToken(token).then((res) => {
      changeLoadingStatus(false);
      setDetails(res.detail[0]);
      addMessage({
        condition: res.detail[0].type as "success" | "error" | "warning",
        message: res.detail[0].msg,
        time: 10000,
      });
    });
  }, [addMessage, token, changeLoadingStatus]);

  return useMemo(() => ({ details, isLoading }), [details, isLoading]);
};
