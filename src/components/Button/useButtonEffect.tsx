import { useRef, MouseEvent, useState } from "react";

export interface ISettingsAnimate {
  top: number;
  left: number;
}

export const useButtonEffect = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [settings, setSettings] = useState<ISettingsAnimate>({
    top: 0,
    left: 0,
  });

  const ButtonClickEvent = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const { pageY, pageX } = event;
      const { left, top } = buttonRef.current.getBoundingClientRect();

      setSettings({
        top: pageY - top,
        left: pageX - left,
      });

      setTimeout(() => {
        setSettings({ top: 0, left: 0 });
      }, 300);
    }
  };

  return {
    buttonRef,
    ButtonClickEvent,
    settings,
  };
};
