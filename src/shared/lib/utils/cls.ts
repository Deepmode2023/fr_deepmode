import { twMerge } from "tailwind-merge";
const BREAK_TYPE = ["undefined", "false", "null"];

export const cls = (...classname: Array<any>): string => {
  return twMerge(
    classname
      .reduce((acc, cls) => {
        if (BREAK_TYPE.includes("" + cls)) return acc;
        if (Array.isArray(cls)) return [...acc, ...cls];

        if (typeof cls === "object" && cls !== null && !Array.isArray(cls)) {
          return [
            ...acc,
            ...Object.keys(cls).filter((cls) => !cls.startsWith("__")),
          ];
        }

        return [...acc, cls];
      }, [])
      .join(" ")
  );
};
