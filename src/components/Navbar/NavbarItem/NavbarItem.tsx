"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IRouteWithChildRouteInterface } from "@/interfaces/routes";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { NavbarStore } from "@/zustand/navbarStore";
import { Accordion } from "../../Accordion/Accordion";
import { motion } from "framer-motion";

import { Header } from "./NavbarItemHeader";

interface IItemNavbarProps {
  propsLink: IRouteWithChildRouteInterface;
}

const navbarStore = createSelectorHooks(NavbarStore);

const NavbarItem: React.FC<IItemNavbarProps> = ({
  propsLink: { Icon, childRoute, ...propsLink },
}) => {
  const router = useRouter();
  const changeNavbarItem = navbarStore.useChangeActiveItem();
  const activeItem = navbarStore.useActiveItem();

  const isActiveAccordion =
    activeItem === propsLink.name ||
    childRoute.some((child) => {
      if (activeItem === child.name) return true;
      return false;
    });

  const childItems = childRoute.map((child) => {
    return {
      title: child.title,
      keyChildName: child.name,
      onClickHandler: (keyName: string) => {
        changeNavbarItem(keyName);
        router.push(child.path);
      },
    };
  });

  return (
    <div className="relative">
      <Accordion
        keyName={propsLink.name}
        forceInteraptActive={!isActiveAccordion}
        header={
          <React.Fragment>
            {isActiveAccordion && (
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
          </React.Fragment>
        }
        width={300}
        onClickHeader={(keyName: string) => {
          changeNavbarItem(keyName);
          if (childItems.length < 1) router.push(propsLink.path);
        }}
        childItems={childItems}
      />
    </div>
  );
};

export { type IItemNavbarProps, NavbarItem };
