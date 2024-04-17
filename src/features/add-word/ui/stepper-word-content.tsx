"use client";
import { Stepper, Alert } from "@mui/material";
import { useStepsWord } from "../lib/hooks/use-steps-word";
import { CreateButton } from "./create-button";
import { useStepper } from "@/shared";
import { useMemo } from "react";

export const StepperWordContent = () => {
  const { store, ...stepperParams } = useStepsWord();
  const { Steps, activeStep, doneSteps, errorMessage } =
    useStepper(stepperParams);

  const errors = useMemo(() => {
    return errorMessage.map(({ localization }, index) => (
      <Alert key={index} severity="error">
        {localization}
      </Alert>
    ));
  }, [errorMessage]);

  return (
    <div className="flex flex-col gap-5">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="text-white"
      >
        {Steps}
      </Stepper>
      <div className="flex flex-col gap-3">
        {doneSteps ? <CreateButton {...store} /> : errors}
      </div>
    </div>
  );
};
