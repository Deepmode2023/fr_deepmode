"use client";
import Portal from "@/components/Portal/Portal";
import { PORTAL_ID } from "@/global.constant";
import { useState } from "react";
import { motion } from "framer-motion";

export const Test = () => {
  const [is, setIs] = useState(false);
  return (
    <div className="">
      <div className="p-5 w-full h-[1600px] flex">
        <div
          className="bg-red-400 select-none items-end"
          onClick={() => setIs(!is)}
        >
          Content
        </div>
      </div>
    </div>
  );
};
