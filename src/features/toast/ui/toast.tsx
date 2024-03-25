"use client";
import { ToastStore } from "@/entities/toast";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

const toastStore = createSelectorHooks(ToastStore);

export const Toast = () => {
  const messageList = toastStore.useMessageList();
  const removeMessage = toastStore.useRemoveMessage();

  return messageList.map((message) => {
    return (
      <Snackbar
        open
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={message.time}
        key={message.message}
        onClose={() => removeMessage(message)}
      >
        <Alert variant="filled" severity={message.condition}>
          <AlertTitle className="capitalize">{message.condition}</AlertTitle>
          {message.message}
        </Alert>
      </Snackbar>
    );
  });
};
