import { NextRequest } from "next/server";
import MiddlewareAuth from "@/utils/middleware";

export async function middleware(request: NextRequest | Request) {
  const previusUrl = request.url;
  const middlewareAuthorization = new MiddlewareAuth(
    request.headers,
    previusUrl
  );

  middlewareAuthorization.headerCheckControll();
  await middlewareAuthorization.dbCheckControll();

  return middlewareAuthorization.redirectWithConditionChecking();
}

export const config = {
  matcher: ["/", "/repetition/(.*)", "/repetition"],
};
