import React from "react";
import { cls } from "@/shared";
import { PORTAL_ID } from "@/shared";
import { LAYOUT_GRID } from "./constants";

export interface ILayoutProps {
  height?: number;
  isDev?: boolean;
  children: React.ReactNode;
  Navbar: React.ReactNode;
  AuthNavbarAsside: React.ReactNode;
  AuthNavbar: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  height,
  isDev = true,
  children,
  AuthNavbar,
  AuthNavbarAsside,
  Navbar,
}) => {
  return (
    <main
      style={{ height: height ?? "100%" }}
      className={cls("w-full grid", LAYOUT_GRID.DESC.main)}
    >
      <aside
        id={PORTAL_ID.LAYOUT_PORTAL.NAVBAR}
        className={cls(
          LAYOUT_GRID.DESC.navbar,
          isDev && "border-2 border-orange-700"
        )}
      >
        {Navbar}
      </aside>
      <article
        id={PORTAL_ID.LAYOUT_PORTAL.AUTH_NAVBAR}
        className={cls(
          LAYOUT_GRID.DESC.authNavbar,
          isDev && "border-2 border-red-600"
        )}
      >
        {AuthNavbar}
      </article>
      <aside className={cls(LAYOUT_GRID.DESC.authNavbarAsside)}>
        {AuthNavbarAsside}
      </aside>
      <article
        id={PORTAL_ID.LAYOUT_PORTAL.INFO_CONTENT}
        className={cls(
          LAYOUT_GRID.DESC.content,
          isDev && "border-2 border-green-400"
        )}
      >
        <div className="z-0">{children}</div>
      </article>
    </main>
  );
};
