import {
  LoginUserParamsType,
  ResponseLoginUserType,
} from "@/interfaces/services/auth";
import { concat_url_path } from "@/utils/url";
import { SERVICES_ENDPOINT } from "./constants";
import { ResponseRefreshTokenType } from "@/interfaces/services/auth";
import { basic_path } from "./constants";

export async function getAccessTokenService(
  params: LoginUserParamsType | FormData
): Promise<ResponseLoginUserType> {
  let body;
  if (params instanceof FormData) {
    body = params;
  } else {
    body = new URLSearchParams({
      username: params.username,
      password: params.password,
    });
  }
  const make_url = concat_url_path(basic_path)(SERVICES_ENDPOINT.POST_TOKEN);
  const resultData = await fetch(make_url, { body, method: "POST" });

  return resultData.json();
}

export async function getRefreshTokenService(
  refreshToken: string
): Promise<ResponseRefreshTokenType> {
  const make_url = concat_url_path(basic_path)(
    SERVICES_ENDPOINT.POST_REFRESH_TOKEN
  );

  let resultData = await fetch(make_url, {
    method: "POST",
    headers: { "refresh-token": refreshToken },
  });

  return resultData.json();
}
