"use client";
import { StepLabel, Stepper, StepContent, Step } from "@mui/material";
import { StepsWordInputs } from "../config/constants";
import { useStepper, StepType } from "@/shared";

export const StepperWordContent = () => {
  const { Steps, activeStep } = useStepper({ steps: StepsWordInputs });
  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      className="text-white"
    >
      {Steps}
    </Stepper>
  );
};
