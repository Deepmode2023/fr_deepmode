"use client";
import { useCallback, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { IToastMessage } from "../../model/model";
import { HEIGHT_TOAST, WIDTH_TOAST } from "../../config/constant";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { ToastStore } from "../../model/store";
import { TIME_IN_MS } from "@/shared";

const toastStore = createSelectorHooks(ToastStore);

export const useSnackMessage = (
  ComponentMessage: (message: IToastMessage) => JSX.Element
) => {
  const [markMessage, setMarkMessage] = useState<string[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const messageList = toastStore.useMessageList();

  const markerMessage = useCallback((mark: string) => {
    setMarkMessage((prev) => [...prev, mark]);
    setTimeout(() => {
      setMarkMessage([]);
    }, TIME_IN_MS.QUARTER_OF_AN_HOUR);
  }, []);

  useEffect(() => {
    messageList.forEach(({ message, time, condition, mark = "" }) => {
      if (markMessage.includes(mark)) return;
      markerMessage(mark);
      enqueueSnackbar(
        <ComponentMessage
          message={message}
          time={time}
          condition={condition}
        />,
        {
          variant: condition,
          autoHideDuration: time,
          style: { width: WIDTH_TOAST, height: HEIGHT_TOAST },
        }
      );
    });
  }, [messageList, ComponentMessage, markMessage, markerMessage]);
};
