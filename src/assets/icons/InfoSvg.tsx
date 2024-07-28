import { ISVGIconProps } from "@/interfaces/assets";
import { animateProps } from "./animate";
import { motion } from "framer-motion";

export const InfoSvg = ({
  strokeColor,
  width = 20,
  height = 20,
  isAnimate = true,
}: ISVGIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      {...animateProps({ isAnimate })}
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      {...animateProps({ isAnimate })}
      d="M12 8V13"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      {...animateProps({ isAnimate })}
      d="M11.9945 16H12.0035"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
