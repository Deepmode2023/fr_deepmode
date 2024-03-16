import { NextRequest } from "next/server";

import PrismaInstance from "prismaSettings/index";

export async function GET(
  _: NextRequest | Request,
  { params: { keyFromHeader } }: Record<string, any>
) {
  const sessionFind = await PrismaInstance.session.findUnique({
    where: { namedSession: keyFromHeader },
  });

  return new Response(JSON.stringify({ session: sessionFind }));
}
