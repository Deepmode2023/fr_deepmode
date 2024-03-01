import { type NextRequest } from "next/server";
import { checkTokenHeader, uniqMetaDataFromHeader } from "./utils/headers";
import { GetSessionServices } from "./services/api/session";
import { isExpiredTime } from "./utils/time";

export async function middleware(request: NextRequest) {
  const previusUrl = request.url;
  const uniqMetaFromHeader = uniqMetaDataFromHeader(request);
  const isAdmitToken = checkTokenHeader(request);

  if (uniqMetaFromHeader === null || !isAdmitToken.isAuth)
    return Response.redirect(
      process.env.ROOT_API_FRONTEND_URL!.concat("/login")
    );

  const { session } = await GetSessionServices(uniqMetaFromHeader);
  if (session?.namedSession && isExpiredTime(session.expireTime.toString())) {
    request.headers.set("authorization", "Bearer ".concat(session.userId));
    return Response.redirect(previusUrl);
  }

  return Response.redirect(process.env.ROOT_API_FRONTEND_URL!.concat("/login"));
}

export const config = {
  matcher: ["/", "/repetition/(.*)", "/repetition"],
};
