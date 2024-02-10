"use client";
import Portal from "@/components/Portal/Portal";
import { PORTAL_ID } from "@/global.constant";
import { useState } from "react";
import { motion } from "framer-motion";

export const Test = () => {
  const [is, setIs] = useState(false);
  return (
    <div className="">
      <div className="p-5 w-full h-[1600px]">
        <span className="bg-red-400 select-none" onClick={() => setIs(!is)}>
          Content
        </span>
        <Portal selector={PORTAL_ID.LAYOUT_PORTAL.INFO_CONTENT} show={is}>
          <div className="absolute top-0 bottom-0 right-0 left-0 z-50">
            <div className="sticky top-[110px] h-[calc(100vh-110px)] flex items-center justify-center">
              <motion.div
                className="bg-red-300"
                initial={{ width: 0, height: 0 }}
                animate={{ width: "300px", height: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              ></motion.div>
            </div>
          </div>
        </Portal>
      </div>
    </div>
  );
};
