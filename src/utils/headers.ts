import { type NextRequest } from "next/server";
import { parseJwt } from "@/utils/jwt";
import { CheckTokenHeaderType } from "@/interfaces/utils/headers";
import { isExpiredTime } from "@/utils/time";

export const uniqMetaDataFromHeader = (header: NextRequest): string | null => {
  const metadata: string[] = process.env.METADATA_FOR_AUTH?.split(" ") ?? [];

  return metadata.reduce((acc, meta) => {
    const metaItem = header.headers.get(meta);
    if (metaItem === null || acc === null) return null;
    return acc
      .concat(metaItem.replace(/[\s/]/g, ""))
      .concat(String(process.env.SECRET_META_KEY));
  }, "" as string | null);
};

export const checkTokenHeader = (header: NextRequest): CheckTokenHeaderType => {
  const authorizationToken = header.headers.get("authorization");
  if (!authorizationToken) return { isAuth: false, user: null, exp: null };

  const token = parseJwt(authorizationToken);

  if (isExpiredTime(token.exp)) return { isAuth: false, user: null, exp: null };

  header.headers.set("authorization", "Bearer ".concat(authorizationToken));
  return { isAuth: true, user: token.user, exp: token.exp };
};
