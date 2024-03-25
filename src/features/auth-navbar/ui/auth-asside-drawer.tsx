"use client";
import React from "react";
import { cls } from "@/shared";
import { useAssideStore } from "@/entities/auth";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const AuthAssideDrawer = () => {
  const { open, header, content, changeAssideDialog } = useAssideStore();

  return (
    <div
      className={cls(
        "w-[500px] h-[700px] rounded-xl z-10 absolute p-[20px] pt-0 flex flex-col gap-[10px] overflow-hidden overflow-y-auto scroll-left light-scroll-color",
        "dark:bg-dark-total bg-light-total transition-transform duration-700",
        open ? "translate-x-[-410px]" : "translate-x-[410px]"
      )}
    >
      <div
        className={cls(
          "flex gap-3 justify-between items-center border-b-2 pb-[5px] pt-[20px] z-10",
          "dark:border-dark-color3 border-light-color1",
          "sticky top-0 dark:bg-dark-total bg-light-total"
        )}
      >
        {header ?? <div></div>}
        <div
          className={cls(
            "right-[20px] top-[20px] cursor-pointer rounded-md p-[5px]",
            "rotate-180 bg-light-color1 dark:bg-dark-color3",
            open && "rotate-0"
          )}
          onClick={() => {
            // changeAuthActiveLink("main");
            changeAssideDialog(null, null, false);
          }}
        >
          <DoubleArrowIcon
            className={cls("text-white", open ? "rotate-90" : "rotate-0")}
          />
        </div>
      </div>
      <div className={cls(open ? "opacity-100" : "opacity-0", "z-0")}>
        {content}
      </div>
    </div>
  );
};
