"use client";
import React, { useCallback, useState } from "react";
import { IAuthNavigationProps } from "@/interfaces/components/navbar/authnavbar";
import Image from "next/image";
import Demo from "@/assets/demo.jpeg";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";
import { StackSvg } from "@/assets/icons";
import { AddWordButton } from "@/features";
import { AuthSubLinkProperty } from "./constants";
import { AuthAssideStore } from "@/zustand/authAssideStore";
import { dialogs } from "./dialogs";

const navbarStore = createSelectorHooks(NavbarStore);
const authAssideStore = createSelectorHooks(AuthAssideStore);

const AuthNavigation: React.FC<IAuthNavigationProps> = () => {
  const changeActiveLink = navbarStore.useChangeAuthActiveLink();
  const activeLink = navbarStore.useAuthActiveLink();
  const changeAuthAssideDialog = authAssideStore.useChangeAssideDialog();

  const onChangeActiveLink = useCallback(
    (keyName: "string" | "main") => {
      const { assideContent, assideHeader } = dialogs(keyName);
      changeActiveLink(keyName);
      changeAuthAssideDialog(assideContent, assideHeader, keyName !== "main");
    },
    [changeActiveLink, changeAuthAssideDialog]
  );
  return (
    <nav className="p-[10px] w-[400px] h-[100px] select-none grid items-center bg-light-total dark:bg-dark-total  border-l-8 border-light-color1 dark:border-dark-color3 relative">
      <AddWordButton content="step" />
      <div className="absolute top-[10px] right-[30px]">
        <Image
          src={Demo}
          width={80}
          height={80}
          alt="Logo"
          className="rounded-full z-0 p-1 border-4 border-light-color1 dark:border-dark-color3"
        />
        <div className="absolute right-[-10px] bottom-[-10px] z-20 cursor-pointer">
          <StackSvg
            width={30}
            height={30}
            strokeColor="stroke-[white] dark:stroke-white"
            fill={"fill-white"}
            isAnimate={false}
            activeLink={activeLink}
            onChangeActiveLink={onChangeActiveLink}
            pathItems={AuthSubLinkProperty.map(({ keyName }) => ({ keyName }))}
          />
        </div>
      </div>
    </nav>
  );
};

export { AuthNavigation, type IAuthNavigationProps };
