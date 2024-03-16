import { uniqMetaDataFromHeader } from "@/utils/headers";
import { NextResponse } from "next/server";
import { GetSessionServices } from "@/services/api/session";
import { isExpiredTime } from "@/utils/time";
import { parseJwt } from "@/utils/jwt";
import { IDecodeJWT } from "@/interfaces/services/user";

type conditionCheckingType = "CHECK" | "AUTHORIZATION" | "UNAUTHORIZATION";
class MiddlewareAuth {
  rootHref: string =
    process.env.ROOT_API_FRONTEND_URL ??
    process.env.NEXT_PUBLIC_ROOT_API_FRONTEND_URL!;
  header: Headers;
  previusUrl: string;
  decodedToken: IDecodeJWT | null = null;
  token: string | null;
  conditionChecking: conditionCheckingType = "CHECK";
  uniqMeta: string | null;

  constructor(header: Headers, previusUrl: string) {
    /* SETTINGS */
    this.header = header;
    this.previusUrl = previusUrl;
    this.token = header.get("autorization");
    this.uniqMeta = uniqMetaDataFromHeader(header);
    this._decodedToken();
  }

  headerCheckControll() {
    if (this.token === null || !this.token?.includes("Bearer ")) {
      this.conditionChecking = "UNAUTHORIZATION";
      return;
    }

    if (this.decodedToken && !isExpiredTime(this.decodedToken.exp)) {
      this.conditionChecking = "AUTHORIZATION";
      return;
    }

    this.conditionChecking = "UNAUTHORIZATION";
  }

  async dbCheckControll() {
    if (this.uniqMeta === null) return;

    const { session } = await GetSessionServices(this.uniqMeta);

    if (session && !isExpiredTime(session.expireTime.toString())) {
      this.token = session.access_token;
      this.conditionChecking = "AUTHORIZATION";
      return;
    }

    this.conditionChecking = "UNAUTHORIZATION";
  }

  redirectWithConditionChecking() {
    if (this.conditionChecking === "UNAUTHORIZATION") {
      return this._redirect(this.rootHref.concat("/auth"));
    }
  }

  _decodedToken() {
    if (this.token) {
      this.decodedToken = parseJwt(this.token);
    }
  }

  _redirect(href: string): Response {
    this.header.set("authorization", "Bearer ".concat(this.token ?? ""));
    return NextResponse.redirect(href, { headers: this.header });
  }
}

export default MiddlewareAuth;
