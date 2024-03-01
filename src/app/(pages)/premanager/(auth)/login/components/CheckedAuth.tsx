"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { Loader } from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/zustand/useSession";
import { LOCALSTORAGE_TOKEN_PK } from "@/global.constant";

export const CheckAuth = () => {
  const { session, isLoading } = useSession();
  const navigate = useRouter();

  useLayoutEffect(() => {
    if (session.isAuth) {
      console.log("Geeet", navigate);
    }
  }, [session]);

  if (isLoading) return <Loader />;

  return <div>AuthChecked</div>;
};
