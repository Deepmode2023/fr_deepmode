import { FC } from "react";

import { IDialogProps } from "@/interfaces/components/dialog";

export const Dialog: FC<IDialogProps> = (props) => {
  return (
    <div className="bg-light-total dark:bg-dark-total w-[600px] h-[600px] z-50 rounded-md shadow-sm ">
      Dialog
    </div>
  );
};
