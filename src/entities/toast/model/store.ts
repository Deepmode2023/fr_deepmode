import { devtools } from "zustand/middleware";
import { create } from "zustand";
import uniqBy from "lodash/unionBy";

import { IToastMessage, IToastStore } from "./../model/model";

export const ToastStore = create<IToastStore>()(
  devtools((set) => ({
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
  }))
);
