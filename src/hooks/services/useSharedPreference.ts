import { useState, useCallback, useMemo, useEffect } from "react";
import {
  getSharedPreference,
  updateSharedPreference,
} from "@/services/api.sharedPreference";
import { DisplayToastAdapter } from "@/entities/toast";
import {
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  TIME_DISPLAY_TOAST,
} from "@/shared";
import { BodyDetailType } from "@/interfaces/total.response";
import { IServiceHooksResponse } from "@/interfaces/service.hooks";
import {
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
} from "@/interfaces/services/sharedPreference";
import { SharedPreferenceStore } from "@/zustand/sharedPreference";

export const useGetSharedPreference = (): IServiceHooksResponse<
  null,
  BodyDetailType<ISharedPreferenceResponse> | null
> => {
  const { addSharedPreference } = SharedPreferenceStore.getState();
  const [details, setDetails] =
    useState<BodyDetailType<ISharedPreferenceResponse> | null>(null);

  const callAPI = useCallback(() => {
    getSharedPreference().then((resolve) => {
      const message = {
        message: resolve.detail[0].msg,
        condition: resolve.detail[0].type as "success" | "error" | "warning",
        time: TIME_DISPLAY_TOAST,
      };

      setDetails(resolve.detail[0]);
      DisplayToastAdapter(message, TIME_DISPLAY_TOAST);
    });
  }, []);

  useEffect(() => {
    if (details) {
      addSharedPreference({
        theme: details.input.theme,
        shared_mode: details.input.shared_mode,
      });

      if (global?.window) {
        global.window.localStorage.setItem(
          LOCALSTORAGE_SHARED_PREFERENCE_PK,
          JSON.stringify({ ...details.input })
        );
      }
    }
  }, [details, addSharedPreference]);

  return useMemo(() => ({ callAPI, data: details }), [details, callAPI]);
};

export const useUpdateSharedPreference = (): IServiceHooksResponse<
  IChangeSharedPreferenceParams,
  BodyDetailType<ISharedPreferenceResponse> | null
> => {
  const { addSharedPreference } = SharedPreferenceStore.getState();
  const [details, setDetails] =
    useState<BodyDetailType<ISharedPreferenceResponse> | null>(null);

  const callAPI = useCallback(
    ({ shared_mode, theme }: IChangeSharedPreferenceParams) => {
      if (typeof shared_mode != "undefined" || theme) {
        updateSharedPreference({ shared_mode, theme }).then((resolve) => {
          const message = {
            message: resolve.detail[0].msg,
            condition: resolve.detail[0].type as
              | "success"
              | "error"
              | "warning",
            time: TIME_DISPLAY_TOAST,
          };

          setDetails(resolve.detail[0]);
          DisplayToastAdapter(message, TIME_DISPLAY_TOAST);
        });
      }
    },
    []
  );

  useEffect(() => {
    if (details) {
      addSharedPreference({
        theme: details.input.theme,
        shared_mode: details.input.shared_mode,
      });

      if (global?.window) {
        global.window.localStorage.setItem(
          LOCALSTORAGE_SHARED_PREFERENCE_PK,
          JSON.stringify({ ...details.input })
        );
      }
    }
  }, [details, addSharedPreference]);

  return useMemo(() => ({ callAPI, data: details }), [details, callAPI]);
};
