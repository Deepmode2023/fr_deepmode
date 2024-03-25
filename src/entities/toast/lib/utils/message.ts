import { IToastMessage } from "../../model/model";
import { ToastStore } from "../../model/store";

export const DisplayToastAdapter = (message: IToastMessage, time: number) => {
  const { addMessage, removeMessage } = ToastStore.getState();

  addMessage(message);
  setTimeout(() => {
    removeMessage(message);
  }, time);
};
