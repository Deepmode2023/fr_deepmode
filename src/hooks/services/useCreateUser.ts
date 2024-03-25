import { useState, useCallback, useMemo } from "react";
import { createUserService } from "@/services/api.user";
import {
  ResponseUserType,
  ICreateUserParams,
} from "@/interfaces/services/user";

import { DisplayToastAdapter } from "@/entities/toast";
import { TIME_DISPLAY_TOAST } from "@/shared";
import { BodyDetailType } from "@/interfaces/total.response";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";

export const useCreateUser = (): IServiceHooksResponse<
  ICreateUserParams | FormData,
  BodyDetailType<ResponseUserType> | null
> => {
  const [details, setDetails] =
    useState<BodyDetailType<ResponseUserType> | null>(null);

  const callAPI = useCallback((params: ICreateUserParams | FormData) => {
    createUserService(params).then((resolve) => {
      const message = {
        message: resolve.detail[0].msg,
        condition: resolve.detail[0].type as "success" | "error" | "warning",
        time: TIME_DISPLAY_TOAST,
      };
      setDetails(resolve.detail[0]);

      DisplayToastAdapter(message, TIME_DISPLAY_TOAST);
    });
  }, []);

  return useMemo(() => ({ callAPI, data: details }), [callAPI, details]);
};
