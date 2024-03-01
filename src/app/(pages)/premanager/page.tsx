"use server";

import React from "react";
import PrismaInstance from "prismaSettings/index";
import { User, Session } from "prismaSettings/generated/client";
import { Loader } from "@/components/Loader/Loader";
import { NextResponse, type NextRequest } from "next/server";
interface AuthManagerProps {
  session: Session[];
}

export default async function AuthManager(request: NextRequest) {
  const { session } = await getSession();
  const data = fetchFromMiddleware();

  console.log(request.headers);

  return (
    <div className="bg-dark-total w-full min-h-100vh flex items-center justify-center">
      <Loader />
    </div>
  );
}

const fetchFromMiddleware = async () => {
  const response = await fetch("/api/premanager", {
    method: "POST",
    body: JSON.stringify({
      /* Ваши данные */
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

async function getSession() {
  const session = await PrismaInstance.session.findUnique({
    where: { namedSession: "" },
  });

  return {
    session: JSON.parse(JSON.stringify(session)),
  };
}
