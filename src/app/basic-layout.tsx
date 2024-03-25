import React, { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { PORTAL_ID } from "@/shared";
import { Toast } from "@/features";

export function BasicLayout({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <div id={PORTAL_ID.TOTAL_PORTAL} />
      <Toast />
      <Providers>{children}</Providers>
    </AppRouterCacheProvider>
  );
}
