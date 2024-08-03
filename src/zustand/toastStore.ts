import { IToastMessage, IToastStore } from "./../interfaces/components/toast";
import { create } from "zustand";
import uniqBy from "lodash/unionBy";

export const ToastStore = create<IToastStore>()((set) => ({
  messageList: [],

  addMessage: (message: IToastMessage) => {
    set((state: IToastStore) => ({
      ...state,
      messageList: uniqBy([...state.messageList, message], "message"),
    }));
  },
  removeMessage: (message: IToastMessage) => {
    set((state: IToastStore) => {
      return {
        ...state,
        messageList: state.messageList.filter(
          (s_message) => s_message.message !== message.message
        ),
      };
    });
  },
}));

export const DisplayToastAdapter = (message: IToastMessage, time: number) => {
  const { addMessage, removeMessage } = ToastStore.getState();

  addMessage(message);
  setTimeout(() => {
    removeMessage(message);
  }, time);
};
