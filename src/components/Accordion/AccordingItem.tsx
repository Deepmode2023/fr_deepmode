import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { RightArrowSvg } from "@/assets/icons/navigate";
import { cls } from "@/shared";
import { AccordionChildActiveContext } from "./context/AccordionProvider";

import { IAccordionItemProps } from "@/interfaces/components/accordion";

export const AccordionItem: React.FC<IAccordionItemProps> = ({
  keyChildName,
  onClickHandler,
  title,
  classes,
}) => {
  const [hover, setHover] = useState(false);
  const { childActive, setChildActive } = useContext(
    AccordionChildActiveContext
  );

  return (
    <div
      className={cls(
        "p-[7px] truncate pl-[30px] cursor-pointer hover:text-white ",
        hover && "text-white",
        childActive === keyChildName && "text-white",
        classes
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(event) => {
        event.stopPropagation();
        setChildActive(keyChildName);
        onClickHandler(keyChildName);
      }}
    >
      {hover && (
        <motion.span
          className="absolute left-[5px] mt-[5px]"
          layoutId="child-hover"
        >
          <RightArrowSvg
            strokeColor="stroke-blue-600 dark:stroke-orange-700"
            strokeWidth={3}
            width={15}
            height={15}
          />
        </motion.span>
      )}
      {title}
    </div>
  );
};
