import { type NextRequest } from "next/server";
import { parseJwt } from "@/utils/jwt";
import { CheckTokenHeaderType } from "@/interfaces/utils/headers";
import { isExpiredTime } from "@/utils/time";
import { IDecodeJWT } from "@/interfaces/services/user";

export const uniqMetaDataFromHeader = (header: Headers): string | null => {
  const metadata: string[] = process.env.METADATA_FOR_AUTH?.split(" ") ?? [];

  return metadata.reduce((acc, meta) => {
    const metaItem = header.get(meta);
    if (metaItem === null || acc === null) return null;
    return acc
      .concat(metaItem.replace(/[\s/]/g, ""))
      .concat(String(process.env.SECRET_META_KEY));
  }, "" as string | null);
};

export const checkTokenHeader = (header: NextRequest): CheckTokenHeaderType => {
  const clearSession = () => {
    header.headers.set("authorization", "");
    return {
      isAuth: false,
      user: null,
      exp: null,
      accessToken: null,
    };
  };

  const accessToken = header.headers.get("authorization");
  if (!accessToken || !accessToken?.includes("Bearer ")) return clearSession();

  const tokenMeta: IDecodeJWT | null = parseJwt(accessToken);

  if (isExpiredTime(tokenMeta?.exp ?? "")) return clearSession();

  header.headers.set("authorization", accessToken);

  return {
    isAuth: true,
    user: tokenMeta?.user ?? null,
    exp: new Date(tokenMeta?.exp ?? ""),
    accessToken,
  };
};
