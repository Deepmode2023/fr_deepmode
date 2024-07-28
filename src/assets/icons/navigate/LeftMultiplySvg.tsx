import { ISVGIconProps } from "@/interfaces/assets";

export const LeftMultiplySvg = ({
  width = 24,
  height = 24,
  strokeColor,
}: ISVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
        className={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 19.9201L13.47997 13.4001C12.70997 12.6301 12.70997 11.3701 13.47997 10.6001L20 4.08008"
        className={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 19.9201L18.47997 13.4001C17.70997 12.6301 17.70997 11.3701 18.47997 10.6001L25 4.08008"
        className={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
