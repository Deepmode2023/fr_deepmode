"use client";
import React, { useMemo } from "react";
import { AddButton } from "@/shared";
import { useAssideStore } from "@/entities";
import { StepperWordContent } from "./stepper-word-content";
import { FormWordContent } from "./form-word-content";
import { Typography } from "@mui/material";

interface IAddWordButton {
  content: "step" | "form";
}

export const AddWordButton = ({ content }: IAddWordButton) => {
  const { changeAssideDialog } = useAssideStore();

  const Content = useMemo(() => {
    if (content === "step") return <StepperWordContent />;
    return <FormWordContent />;
  }, [content]);

  return (
    <AddButton
      onClickAction={() =>
        changeAssideDialog(
          Content,
          <Typography
            className="text-light-color1 dark:text-dark-color3 uppercase"
            variant="h5"
          >
            Create word form
          </Typography>,
          true
        )
      }
    />
  );
};
