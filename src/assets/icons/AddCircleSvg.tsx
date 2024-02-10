import { ISVGIconProps } from "@/interfaces/assets";
import { animateProps } from "./animate";
import { motion } from "framer-motion";

export const AddCircleSvg = ({
  width = 24,
  height = 24,
  strokeColor,
  isAnimate = true,
}: ISVGIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <motion.path
        {...animateProps({ isAnimate })}
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        className={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        {...animateProps({ isAnimate })}
        d="M8 12H16"
        className={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        {...animateProps({ isAnimate })}
        d="M12 16V8"
        className={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
