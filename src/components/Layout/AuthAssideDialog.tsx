"use client";
import React from "react";
import { cls } from "@/shared";
import { LeftMultiplySvg } from "@/assets/icons/navigate";

import { AuthAssideStore } from "@/zustand/authAssideStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";

const navbarStore = createSelectorHooks(NavbarStore);
const authAssideStore = createSelectorHooks(AuthAssideStore);

const AuthAssideDialog = () => {
  const isActive = authAssideStore.useIsActive();
  const assideContent = authAssideStore.useAssideContent();
  const assideHeader = authAssideStore.useAssideHeader();
  const changeAssideDialog = authAssideStore.useChangeAssideDialog();
  const changeAuthActiveLink = navbarStore.useChangeAuthActiveLink();

  return (
    <div
      className={cls(
        "w-[500px] h-[700px] rounded-xl z-10 absolute p-[20px] pt-0 flex flex-col gap-[10px] overflow-hidden overflow-y-auto scroll-left light-scroll-color",
        "dark:bg-dark-total bg-light-total transition-transform duration-700",
        isActive ? "translate-x-[-410px]" : "translate-x-[410px]"
      )}
    >
      <div
        className={cls(
          "flex gap-3 justify-between items-center border-b-2 pb-[5px] pt-[20px] z-10",
          "dark:border-dark-color3 border-light-color1",
          "sticky top-0 dark:bg-dark-total bg-light-total"
        )}
      >
        {assideHeader ?? <div></div>}
        <div
          className={cls(
            "right-[20px] top-[20px] cursor-pointer rounded-md p-[5px]",
            "rotate-180 bg-light-color1 dark:bg-dark-color3",
            isActive && "rotate-0"
          )}
          onClick={() => {
            changeAuthActiveLink("main");
            changeAssideDialog(null, null, false);
          }}
        >
          <LeftMultiplySvg strokeColor="stroke-white translate-x-[-5px]" />
        </div>
      </div>
      <div className={cls(isActive ? "opacity-100" : "opacity-0", "z-0")}>
        {assideContent}
      </div>
    </div>
  );
};

export { AuthAssideDialog };
