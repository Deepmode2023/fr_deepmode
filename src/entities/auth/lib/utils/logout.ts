import PrismaClient from "prismaSettings/index";
import { DisplayToastAdapter, IToastMessage } from "@/entities/snackbar";
import { TIME_DISPLAY_TOAST } from "@/shared";

export async function Lagout(email: string) {
  let toastMessage: IToastMessage;
  try {
    await PrismaClient.session.delete({ where: { userEmail: email } });
    toastMessage = {
      condition: "success",
      message: "You have successfully logged out of your profile.",
      time: TIME_DISPLAY_TOAST,
    };
  } catch (e) {
    toastMessage = {
      condition: "error",
      message: "Something went wrong, you couldn't get out of your profile.",
      time: TIME_DISPLAY_TOAST,
    };
  } finally {
    DisplayToastAdapter(toastMessage!, TIME_DISPLAY_TOAST);
  }
}
