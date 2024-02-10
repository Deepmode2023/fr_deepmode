"use client";
import React, { useCallback, useState } from "react";
import { IAuthNavigationProps } from "@/interfaces/components/navbar";
import Image from "next/image";
import Demo from "@/assets/demo.jpeg";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";
import { AddCircleSvg, StackSvg, SuccessCircleSvg } from "@/assets/icons";
import { AddWordButton } from "./components/AddWordButton/AddWordButton";
import { mergeCls } from "@/utils/cls";

const navbarStore = createSelectorHooks(NavbarStore);

export const AuthNavigation: React.FC<IAuthNavigationProps> = (props) => {
  const [addWords, setAddWords] = useState(false);
  const changeActiveLink = navbarStore.useChangeAuthActiveLink();
  const activeLink = navbarStore.useAuthActiveLink();

  const onChangeActiveLink = useCallback(
    (activeLink: string | null) => {
      changeActiveLink(activeLink);
    },
    [changeActiveLink]
  );
  return (
    <nav className="p-[10px] w-[400px] h-[100px] select-none grid items-center bg-light-total dark:bg-dark-total  border-l-8 border-light-color1 dark:border-dark-color3 ">
      <AddWordButton />
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
            pathItems={[
              { keyName: "setting" },
              { keyName: "statistic" },
              { keyName: "statistic1" },
            ]}
          />
        </div>
      </div>
    </nav>
  );
};
