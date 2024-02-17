import React, {
  useId,
  useMemo,
  useContext,
  useLayoutEffect,
  useEffect,
} from "react";

import { IAccordionProps } from "@/interfaces/components/accordion";
import { mergeCls } from "@/utils/cls";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionItem } from "./AccordingItem";
import { IconAccordion } from "./IconAccordion";
import { variants } from "./animate";
import {
  AccordionProvider,
  AccordionIsActiveContext,
} from "./context/AccordionProvider";

const AccordionStateless: React.FC<IAccordionProps> = ({
  header,
  keyName,
  width = 200,
  classes,
  onClickHeader,
  forceInteraptActive = false,
  childItems = [],
}) => {
  const { isActive, setIsActive } = useContext(AccordionIsActiveContext);
  const accordionId = useId();

  useEffect(() => {
    if (forceInteraptActive) {
      setIsActive(false);
    }
  }, [forceInteraptActive, setIsActive]);

  const AccordingItems = useMemo(
    () =>
      childItems.map((child) => {
        return (
          <AccordionItem
            key={accordionId + child.keyChildName}
            onClickHandler={child.onClickHandler}
            title={child.title}
            keyChildName={child.keyChildName}
          />
        );
      }),
    [childItems, accordionId]
  );

  return (
    <div
      style={{ width }}
      className="border-t-[1px] border-b-[1px] border-dark-palette-100 bg-light-total dark:bg-dark-total"
    >
      <div
        className={mergeCls(
          "text-[#4e535d] stroke-[#4e535d] uppercase hover:bg-light-totalL hover:text-[#ffffff] relative cursor-pointer p-[15px] flex items-center justify-between select-none transition duration-300",
          classes?.header,
          isActive && "text-white"
        )}
        onClick={() => {
          if (onClickHeader && childItems.length < 1) {
            onClickHeader(keyName);
          }
          setIsActive((prev) => !prev);
        }}
      >
        {header}
        <IconAccordion active={isActive} childItems={childItems} />
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            style={{ width }}
            className={mergeCls(
              "text-total-colorShadow bg-light-totalL overflow-hidden",
              classes?.itemContainer
            )}
            key={"content" + keyName}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {AccordingItems}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion: React.FC<IAccordionProps> = (props) => {
  return (
    <AccordionProvider>
      <AccordionStateless {...props} />
    </AccordionProvider>
  );
};
