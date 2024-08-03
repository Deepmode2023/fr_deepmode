"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authRedirect } from "../utils/auth";
import { SessionStorage } from "@/shared";

const useAuthProvider = (mount: boolean) => {
  const pathname = usePathname();
  const [sessionStore, setSessionStore] = useState<
    SessionStorage | undefined
  >();

  useEffect(() => {
    if (mount) {
      setSessionStore(new SessionStorage());
    }
  }, [mount]);

  useEffect(() => {
    if (pathname && sessionStore) {
      const token = sessionStore.getSession();
      console.log({ token }, "HELLO");
      authRedirect(pathname);
    }
  }, [pathname, sessionStore]);
};

export { useAuthProvider };
