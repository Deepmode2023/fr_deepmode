"use server";

import React from "react";
import { CheckAuth } from "./components/CheckedAuth";
import PrismaInstance from "prismaSettings/index";
import { User, Session } from "prismaSettings/generated/client";

interface AuthManagerProps {
  session: Session[];
}

export default async function AuthManager() {
  // const { session } = await getSession();

  // console.log({ session });

  return (
    <div className="bg-dark-total w-full min-h-100vh flex items-center justify-center">
      <CheckAuth />
    </div>
  );
}
