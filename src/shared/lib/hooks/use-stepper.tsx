"use client";
import { Step, StepContent, StepLabel, Button } from "@mui/material";
import { useState, ReactNode, useEffect, useMemo, useCallback } from "react";
import { cls } from "../utils/cls";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export type StepType = {
  uniqKey: string;
  StepContent: ReactNode;
  StepLabel: ReactNode;
  error: boolean;
  optional?: ReactNode;
  action?: ReactNode;
  isVisibleAction: boolean;
  description?: string;
};

export type UseStepperPropsType = {
  steps: StepType[];

  callbackClick?: (uniqKey: string) => void;
  classses?: {
    stepContainer?: string;
    stepLabel?: string;
  };
};

export const useStepper = ({
  steps,
  callbackClick,
  classses = {},
}: UseStepperPropsType) => {
  const [passStep, setPassStep] = useState(0);
  const [error, setError] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [doneSteps, setDoneSteps] = useState(false);

  const nextStep = useCallback(
    (step: number) => {
      if (passStep === step - 1) {
        setActiveStep(step);
        setPassStep((prev) => prev + 1);
      }
    },
    [passStep]
  );

  const moveTo = useCallback(
    (step: number) => {
      if (passStep === step - 1) {
        setActiveStep(step);
        setPassStep((prev) => prev + 1);
      }

      if (passStep - 1 === step) {
        setActiveStep(step);
        setPassStep((prev) => prev - 1);
      }
    },
    [passStep]
  );

  const backStep = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setPassStep((prev) => prev - 1);
    }
  }, [activeStep]);

  const Steps = useMemo(() => {
    return steps.map((step, indexStep) => {
      if (step.error) setError(true);
      const { isVisibleAction = true } = step;

      const ActionButton =
        isVisibleAction && indexStep === activeStep ? (
          <div style={{ justifyContent: "flex-end" }} className="flex gap-2 ">
            <Button
              variant="outlined"
              onClick={() => {
                nextStep(indexStep + 1);
              }}
            >
              <KeyboardArrowDownIcon />
            </Button>

            <Button variant="outlined" onClick={backStep}>
              <KeyboardArrowUpIcon />
            </Button>
          </div>
        ) : null;

      return (
        <Step
          key={step.uniqKey}
          onClick={() => {
            if (callbackClick) callbackClick(step.uniqKey);
            moveTo(indexStep);
          }}
        >
          <StepLabel
            classes={{ labelContainer: "" }}
            className={cls(classses?.stepLabel)}
            optional={step.optional}
            error={step.error}
          >
            <div className="grid grid-cols-2 gap-1 row-auto justify-between cursor-pointer">
              {step.StepLabel}
              {ActionButton}
              <div className="col-span-2 text-light-color1 dark:text-dark-color3">
                {step.description}
              </div>
            </div>
          </StepLabel>
          <StepContent>{step.StepContent}</StepContent>
        </Step>
      );
    });
  }, [steps, callbackClick, classses, nextStep, backStep, moveTo, activeStep]);

  useEffect(() => {
    if (steps.length - 1 < activeStep && !error) setDoneSteps(true);
    else setDoneSteps(false);
  }, [activeStep, steps, error]);

  return { activeStep, nextStep, Steps, doneSteps };
};
