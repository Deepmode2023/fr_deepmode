import { type NextRequest } from "next/server";

export const uniqMetaDataFromHeader = (header: NextRequest): string | null => {
  const metadata: string[] = process.env.METADATA_FOR_AUTH?.split(" ") ?? [];

  return metadata.reduce((acc, meta) => {
    const metaItem = header.headers.get(meta);
    if (metaItem === null || acc === null) return null;
    return acc
      .concat(metaItem.replaceAll(" ", ""))
      .concat(String(process.env.SECRET_META_KEY));
  }, "" as string | null);
};

export const admitWithTokenExistingFromHeader = (
  header: NextRequest
): boolean => {
  const authorizationToken = header.headers.get("authorization");
  if (authorizationToken) {
    header.headers.set("authorization", authorizationToken);
    return true;
  }
  return false;
};
