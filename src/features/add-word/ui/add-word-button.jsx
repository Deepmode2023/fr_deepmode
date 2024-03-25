"use client";
import React from "react";
import { AddButton } from "@/shared";
import { useAssideStore } from "@/entities";

export const AddWordButton = () => {
  const { changeAssideDialog } = useAssideStore();
  return (
    <AddButton
      onClickAction={() => changeAssideDialog(<>HELO</>, <>SOME</>, true)}
    />
  );
};
