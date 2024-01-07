import { create } from "zustand";
import { ISharedPreferenceStore } from "@/interfaces/zustand/sharedPreference";

import { LOCALSTORAGE_SHARED_PREFERENCE_PK } from "@/global.constant";

export const SharedPreferenceStore = create<ISharedPreferenceStore>()(
  (set) => ({
    theme: null,
    shared_mode: false,

    addSharedPreference: ({ theme = null, shared_mode = false }) => {
      if (global.window) {
        global.window.localStorage.setItem(
          LOCALSTORAGE_SHARED_PREFERENCE_PK,
          JSON.stringify({ theme, shared_mode })
        );
      }

      set((state: ISharedPreferenceStore) => ({
        ...state,
        theme: theme,
        shared_mode: shared_mode,
      }));
    },
  })
);
