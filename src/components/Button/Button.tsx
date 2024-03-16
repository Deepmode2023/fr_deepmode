"use client";
import { mergeCls } from "@/utils/cls";
import { useButtonEffect } from "./useButtonEffect";
import { IButtonBasicProps } from "@/interfaces/components/button";

import "./animate.css";

const ButtonBasic = ({
  children,
  onClick,
  className,
  ...props
}: IButtonBasicProps) => {
  const { buttonRef, ButtonClickEvent, settings } = useButtonEffect();
  return (
    <button
      {...props}
      ref={buttonRef}
      className={mergeCls(
        "overflow-hidden relative drop-shadow-[3px_3px_4px_black]",
        className
      )}
      onClick={(event) => {
        ButtonClickEvent(event);
        if (onClick) onClick(event);
      }}
    >
      <div
        style={{ ...settings }}
        className={mergeCls(
          "absolute",
          Boolean(settings.top) && "animate_circle"
        )}
      />
      {children}
    </button>
  );
};

export default ButtonBasic;
