"use client";
import React, { useId } from "react";
import { AuthSubLinkProperty } from "./constants";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";
import { mergeCls } from "@/utils/cls";
import { AuthAssideStore } from "@/zustand/authAssideStore";
import { dialogs } from "./dialogs";

const navbarStore = createSelectorHooks(NavbarStore);
const authAssideStore = createSelectorHooks(AuthAssideStore);

export const AuthNavbarAsside = () => {
  const subLinkId = useId();
  const changeActiveLink = navbarStore.useChangeAuthActiveLink();
  const changeAuthAsside = authAssideStore.useChangeAssideDialog();

  return (
    <div className="flex flex-col gap-3">
      {AuthSubLinkProperty.map(({ keyName, iconHeader }) => {
        const onClickHeader = (keyName: string) => {
          changeActiveLink(keyName);
          const { assideContent, assideHeader } = dialogs(keyName);
          changeAuthAsside(assideContent, assideHeader, true);
        };
        return (
          <div key={subLinkId + keyName} className="flex items-center group">
            <div
              onClick={() => onClickHeader && onClickHeader(keyName)}
              className={mergeCls(
                "group-icon p-[23px]",
                "border-light-color1 dark:border-dark-color3 border-r-[5px]",
                "translate-x-[25px] hover:bg-light-total hover:dark:bg-dark-total transition-all duration-500"
              )}
            >
              {iconHeader({
                strokeColor: `group-has-[.group-icon:hover]:stroke-white stroke-light-total dark:stroke-white`,
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
