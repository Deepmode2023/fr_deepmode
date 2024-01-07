import { concat_url_path } from "@/utils/url";
import { SERVICES_POINT } from "./constants";
import { basic_path } from "./constants";
import { AuthStore } from "@/zustand/authStore";
import { ITotalResponse } from "@/interfaces/total.response";
import {
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
} from "@/interfaces/services/sharedPreference";
import queryString from "query-string";
import { LOCALSTORAGE_TOKEN_PK } from "@/global.constant";

export async function getSharedPreference(): Promise<
  ITotalResponse<ISharedPreferenceResponse>
> {
  const { access_token } = AuthStore.getState();
  const token =
    access_token ??
    JSON.parse(
      global?.window.localStorage.getItem(LOCALSTORAGE_TOKEN_PK) ?? ""
    );

  const make_url = concat_url_path(basic_path)(
    SERVICES_POINT.GET_SHARED_PREFERENCE
  );

  const resultData = await fetch(make_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resultData.json();
}

export async function updateSharedPreference({
  theme,
  shared_mode,
}: IChangeSharedPreferenceParams): Promise<
  ITotalResponse<ISharedPreferenceResponse>
> {
  const { access_token } = AuthStore.getState();
  const token =
    access_token ??
    JSON.parse(
      global?.window.localStorage.getItem(LOCALSTORAGE_TOKEN_PK) ?? ""
    );

  const make_url = concat_url_path(basic_path)(
    SERVICES_POINT.PUT_SHARED_PREFERENCE
  );

  const resultData = await fetch(make_url, {
    method: "PUT",
    body: queryString.stringify({ theme, shared_mode }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return resultData.json();
}
