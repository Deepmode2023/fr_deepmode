"use client";
import React, { useRef, useId, useMemo } from "react";
import { INavbarProps } from "@/interfaces/components/navbar";
import { ItemNavbar } from "./NavbarItem/NavbarItem";
import { AnimatePresence } from "framer-motion";

import { Routes } from "@/routes";

export const Navbar: React.FC<INavbarProps> = (props) => {
  const navbarKey = useId();
  const navbarRef = useRef<HTMLAnchorElement | null>(null);

  const RoutesItem = useMemo(
    () =>
      Routes.map((route) => {
        return <ItemNavbar key={navbarKey + route.name} propsLink={route} />;
      }),
    [navbarKey]
  );

  return (
    <nav
      ref={navbarRef}
      className="flex flex-col sticky top-[104px] text-light-color  box-border"
    >
      <div className="text-white text-[20px] flex justify-center font-extrabold bg-light-color1 dark:bg-dark-color3 p-[15px] cursor-pointer">
        DEEPMODE
      </div>
      <AnimatePresence mode="wait">{RoutesItem}</AnimatePresence>
    </nav>
  );
};
