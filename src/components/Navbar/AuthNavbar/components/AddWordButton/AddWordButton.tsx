import React, { FC, useState } from "react";
import { AddButton } from "@/components/AddButton/AddButton";
import { IAddWordButtonProps } from "@/interfaces/components/navbar";
import { ConditionType } from "@/interfaces/components/addbutton";
import ClientPortal from "@/components/Portal/Portal";
import { PORTAL_ID } from "@/global.constant";
import { Dialog } from "@/components/Dialog/Dialog";

export const AddWordButton: FC<IAddWordButtonProps> = ({ iconSettings }) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const onClickAction = (callback: (condition: ConditionType) => void) => {
    callback("success");
    setIsOpenDialog(true);
  };

  return (
    <React.Fragment>
      <AddButton onClickAction={onClickAction} classes="self-end" />
      <ClientPortal selector={PORTAL_ID.TOTAL_PORTAL} show={isOpenDialog}>
        <div className="fixed w-full h-full flex items-center justify-center max-[1300px]:z-50 max-[1300px]:overflow-hidden ">
          <Dialog />
        </div>
      </ClientPortal>
    </React.Fragment>
  );
};
