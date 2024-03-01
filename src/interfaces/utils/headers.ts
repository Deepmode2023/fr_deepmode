import { UserType } from "@/interfaces/services/auth";

export type CheckTokenHeaderType = {
  isAuth: boolean;
  user: UserType | null;
  exp: string | null;
};
