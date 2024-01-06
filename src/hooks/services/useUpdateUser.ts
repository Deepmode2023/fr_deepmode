import { useState, useCallback, useMemo } from "react";
import { updateUserService } from "@/services/api.user";
import {
  IUpdateUserParams,
  ResponseUserType,
} from "@/interfaces/services/user";
import { ToastStore } from "@/zustand/toastStore";
import { TIME_DISPLAY_TOAST } from "@/global.constant";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { BodyDetailType } from "@/interfaces/total.response";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";

const toastStore = createSelectorHooks(ToastStore);

export const useUpdateUser = (): IServiceHooksResponse<
  IUpdateUserParams,
  BodyDetailType<ResponseUserType> | null
> => {
  const [details, setDetails] =
    useState<BodyDetailType<ResponseUserType> | null>(null);
  const { addMessage, removeMessage } = toastStore.getState();

  const callAPI = useCallback(
    (params: IUpdateUserParams) => {
      updateUserService(params).then((resolve) => {
        const message = {
          message: resolve.detail[0].msg,
          condition: resolve.detail[0].type as "success" | "error" | "warning",
          time: TIME_DISPLAY_TOAST,
        };

        setDetails(resolve.detail[0]);
        addMessage(message);
        setTimeout(() => {
          removeMessage(message);
        }, TIME_DISPLAY_TOAST);
      });
    },
    [addMessage, removeMessage]
  );

  return useMemo(() => ({ callAPI, data: details }), [details, callAPI]);
};
