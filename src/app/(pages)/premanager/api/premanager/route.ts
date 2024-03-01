import { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  // Получение данных из тела запроса

  console.log(">>>>>>req");
  res.status(200).json("hello");
}
