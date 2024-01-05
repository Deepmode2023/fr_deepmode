"use client";

import { basic_path } from "./constants";
import { concat_url_path } from "@/utils/url";
import { SERVICES_POINT } from "./constants";
import {
  ICreateUserParams,
  IResponseCreateUser,
} from "@/interfaces/services/user";
import { boundarySSRComponents } from "@/utils/formData";

export async function createUser(
  params: ICreateUserParams,
  isSSR: boolean = true
): Promise<IResponseCreateUser> {
  const { formDataSSR, boundary } = boundarySSRComponents(params);

  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  const make_url = concat_url_path(basic_path)(SERVICES_POINT.POST_CREATE_USER);

  const resultData = await fetch(make_url, {
    body: isSSR ? formDataSSR : formData,
    method: "POST",
    headers: isSSR
      ? { "Content-type": `multipart/form-data; boundary=${boundary}` }
      : {},
  });

  if (resultData.ok) {
    new Error("sdfkskdfksdkf");
  }

  return resultData.json();
}
