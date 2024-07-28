import { DisplayToastAdapter, IToastMessage } from "@/entities/snackbar";
import { SessionStorage, TIME_DISPLAY_TOAST } from "@/shared";

export function sessionStorage() {
  try {
    return new SessionStorage();
  } catch (error) {
    const toastMessage: IToastMessage = {
      /* @ts-ignore */
      message: error?.message,
      condition: "error",
      time: TIME_DISPLAY_TOAST,
    };

    DisplayToastAdapter(toastMessage, TIME_DISPLAY_TOAST);
  }
}
