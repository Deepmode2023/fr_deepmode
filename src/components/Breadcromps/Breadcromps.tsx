import { useBreadcromps } from "./useBreadcromps";
import { RightArrowSvg } from "@/assets/icons/navigate";
import { mergeCls } from "@/utils/cls";

import {
  IBreadcrompsProps,
  BreadcropmType,
} from "@/interfaces/components/breadcromps";

const Breadcromps = ({
  cursorColor = "bg-[currentcolor]",
  ...props
}: IBreadcrompsProps) => {
  const { Breadcromps, settingsCursor } = useBreadcromps(props);

  return (
    <div className="flex items-center ">
      {Breadcromps}
      <div
        style={{
          transform: `translateX(${settingsCursor.left - 15}px) rotate(${
            settingsCursor.rotate
          }deg)`,
        }}
        className={mergeCls(
          cursorColor,
          "absolute rounded-full z-10 p-1 border-2 dark:border-dark-color3 border-light-color1 transition-transform duration-500"
        )}
      >
        <RightArrowSvg
          strokeColor="dark:stroke-dark-color3 stroke-light-color1"
          strokeWidth={4}
        />
      </div>
    </div>
  );
};

export default Breadcromps;
export type { IBreadcrompsProps, BreadcropmType };
