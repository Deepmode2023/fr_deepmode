"use client";
import React, { useMemo } from "react";
import { IRouteWithChildRouteInterface } from "@/interfaces/routes";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";
import { Accordion } from "../../Accordion/Accordion";
import { motion } from "framer-motion";
import { debounce } from "@/utils/bounce";

import { Header } from "./NavbarItemHeader";

export interface IItemNavbarProps {
  propsLink: IRouteWithChildRouteInterface;
}

export const navbarStore = createSelectorHooks(NavbarStore);

export const ItemNavbar: React.FC<IItemNavbarProps> = ({
  propsLink: { Icon, childRoute, ...propsLink },
}) => {
  const changeNavbarItem = navbarStore.useChangeActiveItem();
  const activeItem = navbarStore.useActiveItem();

  const onClickHeader = () => {
    changeNavbarItem(propsLink.name);
  };

  const childItems = useMemo(() => {
    return childRoute.map((child) => {
      return {
        title: child.title,
        keyChildName: child.name,
        onClickHandler: onClickHeader,
      };
    });
  }, [childRoute]);

  return (
    <div className="relative">
      <Accordion
        keyName={propsLink.name}
        forceInteraptActive={activeItem !== propsLink.name}
        header={
          <>
            {activeItem === propsLink.name && (
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: "100%", transition: { duration: 0.3 } }}
                layout-id="active-link"
                className="absolute left-[0px] w-[3px] bg-blue-600 dark:bg-orange-700 z-60"
              />
            )}
            <Header
              title={propsLink.title}
              Icon={<Icon strokeColor={"stroke-white"} />}
            />
          </>
        }
        width={300}
        onClickHeader={onClickHeader}
        childItems={childItems}
      />
    </div>
  );
};
