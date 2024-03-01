import { NextApiRequest, NextApiResponse } from "next";

import PrismaInstance from "prismaSettings/index";

export async function GET(
  _: NextApiRequest,
  { params: { keyFromHeader } }: Record<string, any>
) {
  const sessionFind = PrismaInstance.session.findUnique({
    where: { namedSession: keyFromHeader },
  });

  return new Response(JSON.stringify({ session: sessionFind }));
}

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  console.log(request.headers["user-agent"]);
  return new Response(JSON.stringify({ j: "HELLO" }));
}
