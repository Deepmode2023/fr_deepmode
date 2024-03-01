import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request.url);
  // return new Response(null, {
  //   status: 307,
  //   headers: {
  //     Location: "localhost:8001/premanager",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     ...request.headers,
  //     "previos-url": request.url,
  //   },
  // });

  return Response.redirect(request.url + "premanager");
}

export const config = {
  matcher: ["/", "/repetition/(.*)", "/repetition"],
};
