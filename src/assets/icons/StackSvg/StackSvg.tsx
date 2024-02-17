import { ISVGStackProps } from "@/interfaces/assets";
import { animateProps } from "../animate";
import { motion } from "framer-motion";
import { mergeCls } from "@/utils/cls";
import { StackPath } from "./StackPath";

import { memo, useId } from "react";

const StackSvg = ({
  strokeColor,
  width = 24,
  height = 24,
  isAnimate,
  pathItems,
  activeLink = "main",
  onChangeActiveLink,
  fill = "fill-white",
}: ISVGStackProps) => {
  const stackKey = useId();

  const calculateDValuePath = (countItem: number) => {
    const startPosition = {
      step: 5,
      figure: [
        {
          name: "M",
          dynamicPoint: "y",
          point: [4, 11],
        },
        {
          name: "C",
          dynamicPoint: "y",
          point: [3, 11.84, 3.63, 12.81, 4.4, 13.15],
        },
        {
          dynamicPoint: "y",
          name: "L",
          point: [11.19, 16.17],
        },

        {
          dynamicPoint: "y",
          name: "C",
          point: [11.71, 16.4, 12.3, 16.4, 12.81, 16.17],
        },
        { name: "L", dynamicPoint: "y", isPlus: true, point: [19.6, 13.15] },
        {
          name: "C",
          dynamicPoint: "y",
          point: [20.37, 12.81, 21, 11.84, 21, 11],
        },
      ],
    };

    return startPosition.figure
      .map(({ point, name, dynamicPoint }) => {
        const pntCordinat = dynamicPoint === "y" ? 1 : 0;
        return (
          name +
          point.reduce((acc, pnt, indexPnt) => {
            if (countItem == 0) return `${acc} ${pnt}`;
            if (indexPnt % 2 == pntCordinat)
              return `${acc} ${(pnt + startPosition.step * countItem).toFixed(
                2
              )}`;
            return `${acc} ${pnt}`;
          }, "")
        );
      })
      .join(",");
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <motion.path
        {...animateProps({ isAnimate })}
        d={`M13.01 2.92007L18.91 5.54007C20.61 6.29007 20.61 7.53007 18.91 8.28007L13.01 10.9001C12.34 11.2001 11.24 11.2001 10.57 10.9001L4.67 8.28007C2.97 7.53007 2.97 6.29007 4.67 5.54007L10.57 2.92007C11.24 2.62007 12.34 2.62007 13.01 2.92007Z`}
        className={mergeCls(strokeColor, activeLink === "main" ? fill : "")}
        strokeWidth={activeLink === "main" ? 0 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => onChangeActiveLink && onChangeActiveLink("main")}
      />
      {pathItems.map((path, index) => {
        const dValue = calculateDValuePath(index);
        const isActive = path.keyName === activeLink;

        return (
          <StackPath
            onClickHandler={onChangeActiveLink}
            key={stackKey + index}
            dValue={dValue}
            keyName={path.keyName}
            fill={isActive ? fill : ""}
            classes={mergeCls(strokeColor, isActive ?? fill)}
            strokeWidth={isActive ? 0 : 2}
            animateProps={animateProps({ isAnimate })}
          />
        );
      })}
    </svg>
  );
};

export default memo(StackSvg);
export { type ISVGStackProps };
