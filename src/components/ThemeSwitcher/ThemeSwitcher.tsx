"use client";
import { useTheme } from "next-themes";
import Switcher from "../Switcher/Switcher";
import { useLayoutEffect, FC } from "react";
import { LOCALSTORAGE_SHARED_PREFERENCE_PK } from "@/global.constant";
import { SharedPreferenceStore } from "@/zustand/sharedPreference";
import { ClassesSwitcherType } from "@/interfaces/components/switcher";
import { ThemeColor } from "@/interfaces/services/sharedPreference";

type ThemeSwitcherType = {
  width: number;
  classes?: ClassesSwitcherType;
};

const ThemeSwitcher: FC<ThemeSwitcherType> = ({ width, classes }) => {
  const { theme, setTheme } = useTheme();
  const { theme: themeStore, addSharedPreference } =
    SharedPreferenceStore.getState();

  useLayoutEffect(() => {
    if (themeStore) {
      setTheme(themeStore === ThemeColor.WHITE_THEME ? "light" : "dark");
      return;
    }
    setTheme(
      localStorage.getItem(LOCALSTORAGE_SHARED_PREFERENCE_PK) ===
        ThemeColor.WHITE_THEME
        ? "light"
        : "dark" ?? "light"
    );
  }, []);

  const onSwitcherHandler = (key: string) => {
    setTheme(key);
    localStorage.setItem(LOCALSTORAGE_SHARED_PREFERENCE_PK, key);
    addSharedPreference({
      theme: key === "light" ? ThemeColor.WHITE_THEME : ThemeColor.DARK_THEME,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="font-black">THEME:</span>
      <Switcher
        onSwitchClick={onSwitcherHandler}
        active={theme === "dark" ? "left" : "right"}
        width={width}
        classes={classes}
        value={{
          right: { text: "light", key: "light" },
          left: { text: "dark", key: "dark" },
        }}
      />
    </div>
  );
};

export default ThemeSwitcher;
