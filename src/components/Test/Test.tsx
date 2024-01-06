"use client";
import { useEffect } from "react";
import { AuthStore } from "@/zustand/authStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { useAccessToken } from "@/hooks/services/useAccessToken";
import { useUpdateUser } from "@/hooks/services/useUpdateUser";
import { useCreateUser } from "@/hooks/services/useCreateUser";

const authStore = createSelectorHooks(AuthStore);

export const Test = () => {
  const { user, access_token } = authStore.getState();
  // const { callAPI: callAcessToken, data } = useAccessToken();
  // const { callAPI: callUpdateUser } = useUpdateUser();

  return <div>TEST COMPONENTS</div>;
};
