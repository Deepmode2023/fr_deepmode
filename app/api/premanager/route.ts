import { ResponseCreateSessionServicesType } from "@/interfaces/services/api/session";
import { uniqMetaDataFromHeader } from "@/utils/headers";
import { parseJwt } from "@/utils/jwt";
import { NextApiResponse } from "next";
import { IDecodeJWT } from "@/interfaces/services/user";
import { NextResponse } from "next/server";

import PrismaClient from "prismaSettings/index";

export async function POST(request: Request): Promise<Response> {
  const responseData: ResponseCreateSessionServicesType = {
    isOk: true,
    error: null,
  };
  const { access_token } = await request.json();
  const uniqMetaHeader = uniqMetaDataFromHeader(request.headers);

  const tokenMeta: IDecodeJWT | null = parseJwt(access_token);

  try {
    let user = await PrismaClient.user.findUnique({
      where: { email: tokenMeta?.user.email },
    });

    if (!user && tokenMeta?.user) {
      user = await PrismaClient.user.create({
        data: {
          email: tokenMeta.user.email,
          roles: tokenMeta.user.roles[0],
          name: tokenMeta.user.name,
          updated_account: tokenMeta.user.updated_account,
        },
      });
    }

    if (uniqMetaHeader && user) {
      const sessionFind = await PrismaClient.session.findUnique({
        where: { userEmail: user.email },
      });

      if (!sessionFind) {
        await PrismaClient.session.create({
          data: {
            access_token,
            expireTime: tokenMeta?.exp ?? "",
            namedSession: uniqMetaHeader,
            userEmail: user.email,
          },
        });
      } else if (uniqMetaHeader) {
        await PrismaClient.session.update({
          where: { userEmail: user.email },
          data: { access_token, expireTime: tokenMeta?.exp ?? "" },
        });
      }
    }
  } catch (error) {
    console.log({ error }, "<<<<<");
    responseData.error = JSON.stringify(error);
    responseData.isOk = false;
  }

  return new NextResponse(JSON.stringify(responseData));
}
