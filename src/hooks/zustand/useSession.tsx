"use client";
import React, { useEffect, useState } from "react";
import { AuthStore, type IAuthStore } from "@/zustand/authStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { LOCALSTORAGE_TOKEN_PK, TIME_EXPIRED_TOKEN } from "@/global.constant";
import { parseJwt } from "@/utils/jwt";
import { UserType } from "@/interfaces/services/auth";

import moment from "moment";

const authStore = createSelectorHooks(AuthStore);

type SessionType = {
  user: UserType | null;
  exp: Date | null;
  isAuth: boolean;
};

export const useSession = () => {
  const [mount, setMount] = useState(false);
  const [session, setSession] = useState<SessionType>({
    isAuth: false,
    user: null,
    exp: null,
  });

  const {
    isAuth: isAuthStore,
    isLoading,
    ...authSettings
  } = authStore.getState();
  const storageToken =
    mount && global.window.localStorage.getItem(LOCALSTORAGE_TOKEN_PK);

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    let isAuth = false;
    if (!mount || session.isAuth) return;

    if (isAuthStore) {
      isAuth =
        new Date(Number(authSettings?.expire_time ?? 0)).getTime() >=
        Date.now();

      if (!isAuth) {
        authSettings.changeAuthState({
          access_token: null,
          refresh_token: authSettings.refresh_token,
        });
      }

      setSession({
        user: authSettings.user,
        exp: isAuth ? new Date(Number(authSettings?.expire_time!)) : null,
        isAuth,
      });
    } else if (storageToken) {
      const { user = null, exp = null } = parseJwt(storageToken);
      isAuth = new Date(Number(exp)).getTime() >= Date.now();

      setSession({
        user,
        exp: isAuth ? new Date(Number(exp)) : null,
        isAuth,
      });

      if (!isAuth) {
        global.window.localStorage.setItem(LOCALSTORAGE_TOKEN_PK, "");
      }
    }
  }, [storageToken, isAuthStore, mount, authSettings, session]);

  return { session, isLoading };
};
