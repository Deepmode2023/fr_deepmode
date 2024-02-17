import React, { FC, useState } from "react";
import { AddButton } from "@/components/AddButton/AddButton";
import { IAddWordButtonProps } from "@/interfaces/components/navbar/addwordbutton";
import { ConditionType } from "@/interfaces/components/addbutton";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { AuthAssideStore } from "@/zustand/authAssideStore";
import { dialogs } from "./dialogs";

const authAssideStore = createSelectorHooks(AuthAssideStore);

export const AddWordButton: FC<IAddWordButtonProps> = ({ iconSettings }) => {
  const changeAssideDialog = authAssideStore.useChangeAssideDialog();

  const onClickAction = (callback: (condition: ConditionType) => void) => {
    const onCallback = (condition: ConditionType) => {
      callback(condition);
      changeAssideDialog(null, null, false);
    };
    const { assideContent, assideHeader } = dialogs("addword", { onCallback });
    changeAssideDialog(assideContent, assideHeader, true);
  };

  return <AddButton onClickAction={onClickAction} classes="self-end" />;
};
