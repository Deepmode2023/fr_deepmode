import { useEffect, useState } from "react";
import { getAccessToken } from "@/services/api.auth";
import { LoginUserType } from "@/interfaces/auth";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { useAuthStore } from "@/zustand/authStore";

const authStore = createSelectorHooks(useAuthStore);

export const useAccessToken = ({ password, username }: LoginUserType) => {
  const changeLoadingStatus = authStore.useChangeLoadingStatus();
  const changeAuthState = authStore.useChangeAuthState();

  useEffect(() => {
    changeLoadingStatus(true);
    getAccessToken({ password, username }).then((tokenData) => {
      changeAuthState(tokenData);
    });
  }, [password, username, changeLoadingStatus, changeAuthState]);
};
