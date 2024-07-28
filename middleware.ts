import { NextRequest } from "next/server";
import { MiddlewareAuth } from "@/shared";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest | Request) {
  console.log("Middleware вызван для пути:", request.url);
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/repetition/(.*)", "/repetition"],
};

// export async function middleware(request: NextRequest | Request) {
//   const previusUrl = request.url;
//   const middlewareAuthorization = new MiddlewareAuth(
//     request.headers,
//     previusUrl
//   );

//   middlewareAuthorization.headerCheckControll();
//   await middlewareAuthorization.dbCheckControll();

//   return middlewareAuthorization.redirectWithConditionChecking();
// }

// export const config = {
//   matcher: ["/", "/repetition/(.*)", "/repetition"],
// };
