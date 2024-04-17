import { devtools } from "zustand/middleware";
import { create } from "zustand";
import uniqBy from "lodash/unionBy";

import { IToastMessage, IToastStore } from "./model";

export const ToastStore = create<IToastStore>()(
  devtools((set) => {
    return {
      messageList: [],
      addMessage: (message: IToastMessage) => {
        return set((state: IToastStore) => ({
          ...state,
          messageList: uniqBy([...state.messageList, message], "message"),
        }));
      },
      removeMessage: (message: IToastMessage) => {
        return set((state: IToastStore) => {
          return {
            ...state,
            messageList: state.messageList.filter(
              (s_message) => s_message.message !== message.message
            ),
          };
        });
      },
    };
  })
);
