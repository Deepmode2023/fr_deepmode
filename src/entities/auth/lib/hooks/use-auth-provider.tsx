import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { authRedirect } from "../utils/auth";

const useAuthProvider = (mount: boolean) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && mount) {
      authRedirect(pathname);
    }
  }, [pathname, mount]);
};

export { useAuthProvider };
