import { GetterChunkRouteFromRoutesByPath } from "@/routes";
import { redirect } from "next/navigation";

const authRedirect = (pathname: string) => {
  const chunk = GetterChunkRouteFromRoutesByPath(pathname, true);
  const authRedirect = () => redirect("/auth");
  if (pathname === "/") {
    authRedirect();
  }

  if (chunk.length > 0 && chunk.findIndex) {
    const isProtected =
      chunk.findIndex((route) => route.protected) === -1 ? false : true;

    if (isProtected) {
      authRedirect();
    }
  }
};

export { authRedirect };
