import {
  LoginUserParamsType,
  ResponseLoginUserType,
} from "@/interfaces/services/auth";
import { concat_url_path } from "@/utils/url";
import { SERVICES_POINT } from "./constants";
import { ResponseRefreshTokenType } from "@/interfaces/services/auth";
import { basic_path } from "./constants";
import { ToastStore } from "@/zustand/toastStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

const toastStore = createSelectorHooks(ToastStore);

export async function getAccessToken({
  username,
  password,
}: LoginUserParamsType): Promise<ResponseLoginUserType> {
  const body = new URLSearchParams({ username, password });
  const make_url = concat_url_path(basic_path)(SERVICES_POINT.POST_TOKEN);
  const resultData = await fetch(make_url, { body, method: "POST" });

  return resultData.json();
}

export async function getRefreshToken(
  refreshToken: string
): Promise<ResponseRefreshTokenType> {
  const make_url = concat_url_path(basic_path)(
    SERVICES_POINT.POST_REFRESH_TOKEN
  );

  let resultData = await fetch(make_url, {
    method: "POST",
    headers: { "refresh-token": refreshToken },
  });

  return resultData.json();
}
