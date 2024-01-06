"use client";

import { basic_path } from "./constants";
import { concat_url_path } from "@/utils/url";
import { SERVICES_POINT } from "./constants";
import {
  ICreateUserParams,
  IResponseCreateUser,
  IUpdateUserParams,
} from "@/interfaces/services/user";
import { AuthStore } from "@/zustand/authStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

const authStore = createSelectorHooks(AuthStore);

export async function createUserService(
  params: ICreateUserParams
): Promise<IResponseCreateUser> {
  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  const make_url = concat_url_path(basic_path)(SERVICES_POINT.POST_CREATE_USER);

  const resultData = await fetch(make_url, {
    body: formData,
    method: "POST",
    headers: {},
  });

  return resultData.json();
}

export async function updateUserService(
  params: IUpdateUserParams
): Promise<IResponseCreateUser> {
  const { access_token } = authStore.getState();

  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  const make_url = concat_url_path(basic_path)(SERVICES_POINT.PUT_UPDATE_USER);

  const resultData = await fetch(make_url, {
    body: formData,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access_token ?? ""}`,
    },
  });

  return resultData.json();
}
