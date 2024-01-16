import { ISVGIconProps } from "@/interfaces/assets";
import { animateProps } from "./animate";
import { motion } from "framer-motion";

export const CheckSvg = ({
  width = 24,
  height = 24,
  strokeColor,
  isAnimate = true,
}: ISVGIconProps) => {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 12"
    >
      <motion.path
        {...animateProps({ isAnimate })}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
};
