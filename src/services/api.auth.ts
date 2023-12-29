import { LoginUserType } from "@/interfaces/auth";
import { concat_url_path } from "@/utils/url";
import { SERVICES_POINT } from "./constants";

const basic_path =
  process.env.BASIC_API_BACKAND_URL ??
  process.env.NEXT_PUBLIC_BASIC_API_BACKAND_URL ??
  "";

export async function getAccessToken({ username, password }: LoginUserType) {
  const body = new URLSearchParams({ username, password });
  const make_url = concat_url_path(basic_path)(SERVICES_POINT.TOKEN);
  const resultData = await fetch(make_url, { body, method: "POST" });

  return resultData.json();
}
