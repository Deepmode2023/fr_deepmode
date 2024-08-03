import React, { PropsWithChildren, useEffect } from "react";
import { Providers } from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { PORTAL_ID } from "@/shared";
import { ThemeMUIProvider } from "./ThemeMUIProvider";

export async function BasicLayout({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <div id={PORTAL_ID.TOTAL_PORTAL} />
      <Providers>
        <ThemeMUIProvider>{children}</ThemeMUIProvider>
      </Providers>
    </AppRouterCacheProvider>
  );
}
