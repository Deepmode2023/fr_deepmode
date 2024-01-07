"use client";
import { useCallback, useId, useMemo, useRef } from "react";
import { ToastStore } from "@/zustand/toastStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { IToastMessage } from "@/interfaces/components/toast";
import Message from "./Message/Message";
import { AnimatePresence } from "framer-motion";

import styles from "./index.module.scss";

const toastStore = createSelectorHooks(ToastStore);

export const Toast = () => {
  const key = useId();
  const messageList = toastStore.useMessageList();
  const removeMessage = toastStore.useRemoveMessage();

  const deleteMessage = useCallback(
    (message: IToastMessage) => {
      setTimeout(() => {
        removeMessage(message);
      }, message?.time + 1000 ?? 1000);
    },
    [removeMessage]
  );

  return (
    <div className={styles.toastHeader}>
      <AnimatePresence>
        {messageList.map((message, index) => {
          deleteMessage(message);
          return (
            <Message
              key={key + message.message}
              {...message}
              positionItem={index}
              onClose={removeMessage}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
