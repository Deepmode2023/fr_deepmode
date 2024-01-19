import React, { useLayoutEffect, useState } from "react";
import { ISwitcherBasicProps } from "@/interfaces/components/switcher";
import { mergeCls } from "@/utils/cls";
import { Roboto_Condensed } from "next/font/google";
import { motion } from "framer-motion";
import { variants, rightSwitcher, leftSwitcher } from "./animate";

const fontRoboto = Roboto_Condensed({ weight: "600", subsets: ["latin"] });

const SwitcherBasic: React.FC<ISwitcherBasicProps> = ({
  classes,
  width = 200,
  value,
  onSwitchClick,
  active,
}) => {
  const [switcher, setSwitcher] = useState<boolean>();

  useLayoutEffect(() => {
    setSwitcher(active === "left" ? true : false);
  }, []);

  return (
    <div
      style={{ width }}
      className={mergeCls(
        fontRoboto.className,
        "rounded-full h-[50px] uppercase relative flex items-center justify-between p-[7px] dark:shadow-sm dark:shadow-white shadow-md",
        classes?.container
      )}
    >
      <div
        className={mergeCls("cursor-pointer select-none")}
        onClick={() => {
          onSwitchClick(value.left.key);
          setSwitcher(!switcher);
        }}
      >
        {value.left.text}
      </div>
      <div
        className="cursor-pointer select-none"
        onClick={() => {
          onSwitchClick(value.right.key);
          setSwitcher(!switcher);
        }}
      >
        {value.right.text}
      </div>
      <motion.div
        animate={switcher ? "switchLeft" : "switchRight"}
        variants={variants(width)}
        transition={{ duration: 0.5 }}
        layout
        className={mergeCls(
          `absolute w-[${
            width / 2
          }px] overflow-hidden h-[30px] bg-slate-300 text-black dark:bg-white dark:text-black rounded-full`,
          classes?.switcher
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={switcher ? "show" : "hidden"}
          variants={leftSwitcher(width)}
          className={"absolute flex h-full items-center ml-[5px]"}
        >
          {value.left.text}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={switcher ? "hidden" : "show"}
          variants={rightSwitcher(width)}
          className={" absolute flex h-full items-center mr-[5px]"}
        >
          {value.right.text}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SwitcherBasic;
