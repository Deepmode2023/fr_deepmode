import { AvatarContainer } from "@/features/auth-navbar";
import { cls } from "@/shared";

export const AuthNavbarContainer = () => {
  return (
    <div
      className={cls(
        "p-[10px] w-[400px] h-[100px] select-none grid items-center relative",
        "bg-light-total dark:bg-dark-total  border-l-8 border-light-color1 dark:border-dark-color3 "
      )}
    >
      <AvatarContainer />
    </div>
  );
};
