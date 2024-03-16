import {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  IBreadcrompsProps,
  BreadcropmType,
  SettingsCursorStateType,
  ActiveBreadcrompStateType,
} from "@/interfaces/components/breadcromps";
import { mergeCls } from "@/utils/cls";
import { BreadcrompsContext } from "./context/BreadcropContext";

export const useBreadcromps = ({
  breadcrompItems,
  breadcrompsName,
}: IBreadcrompsProps) => {
  const breadcrompsRef = useRef<Record<string, DOMRect>>({});
  const { breadcromps, onChangeBreadcrompState } =
    useContext(BreadcrompsContext);
  const [settingsCursor, setSettingsCursor] = useState<SettingsCursorStateType>(
    { left: 0, rotate: 0 }
  );

  useLayoutEffect(() => {
    if (!breadcrompItems?.[0]) {
      throw new Error("BreadcrompsItems passed empty!");
    }
    if (!breadcromps?.[breadcrompsName] && onChangeBreadcrompState) {
      onChangeBreadcrompState(
        { breadcromp: breadcrompItems[0], currentIndex: 0 },
        breadcrompsName
      );
    }
  }, [onChangeBreadcrompState]);

  const onClickEvent = useCallback(
    (breadcromp: BreadcropmType, currentIndex: number) => {
      onChangeBreadcrompState({ breadcromp, currentIndex }, breadcrompsName);

      const entries = Object.entries<DOMRect>(breadcrompsRef.current);
      const isLast = entries.length - 1 === currentIndex;
      const settings = entries.reduce(
        (acc, [_, value], index) => {
          if (currentIndex - 1 >= index) {
            return { ...acc, left: value.width + acc.left };
          }
          if (isLast) return { ...acc, rotate: 180 };

          return acc;
        },
        { left: 0, rotate: 0 }
      );
      setSettingsCursor(settings);
    },
    [breadcrompsRef, breadcrompsName, onChangeBreadcrompState]
  );

  const Breadcromps = useMemo(() => {
    return breadcrompItems.map((breadcromp, index) => {
      const isActive =
        breadcromps[breadcrompsName]?.breadcromp?.value === breadcromp.value;
      return (
        <div
          key={breadcromp.value}
          ref={(ref: HTMLDivElement) => {
            if (ref) {
              breadcrompsRef.current = {
                ...breadcrompsRef.current,
                [breadcromp.value]: ref.getBoundingClientRect(),
              };
            }
          }}
          className={mergeCls(
            "px-8 min-h-10 flex items-center cursor-pointer w-auto",
            isActive && "dark:bg-dark-color3 bg-light-color1"
          )}
          onClick={() => {
            onClickEvent(breadcromp, index);
          }}
        >
          {breadcromp.title}
        </div>
      );
    });
  }, [breadcrompItems, onClickEvent, breadcrompsName, breadcromps]);

  return useMemo(
    () => ({
      activeBreadcromp: breadcromps[breadcrompsName],
      Breadcromps,
      settingsCursor,
    }),
    [settingsCursor, Breadcromps, breadcrompsName, breadcromps]
  );
};
