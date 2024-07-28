"use client";
import { Step, StepContent, StepLabel, Button } from "@mui/material";
import { useState, ReactNode, useEffect, useMemo, useCallback } from "react";
import { cls } from "../utils/cls";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IStandartValidateValue } from "../utils/validate";
import { usePrevious } from "./use-previous";
import { GrateVibesTypography } from "../../ui/typography/greate-vibes-typography";

export type StepType = {
  uniqKey: string;
  StepContent: ReactNode;
  StepLabel: ReactNode;
  optional?: ReactNode;
  action?: ReactNode;
  isVisibleAction: boolean;
  description?: string;
  isRequired: boolean;
};

export type UseStepperPropsType = {
  steps: StepType[];
  error: Record<string, IStandartValidateValue>;
  callbackClick?: (uniqKey: string) => void;
  classses?: {
    stepContainer?: string;
    stepLabel?: string;
  };
};

export type DoneStepsType = {
  isDone: boolean;
  error: string[];
};

export type ErrorMessageType = {
  localization: string;
  error: string;
};

export const useStepper = ({
  steps,
  callbackClick,
  classses = {},
  error,
}: UseStepperPropsType) => {
  const [passStep, setPassStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [doneSteps, setDoneSteps] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType[]>([]);
  const { setPrevious, isCompareValues } = usePrevious<ErrorMessageType[]>([]);

  const nextStep = useCallback(
    (step: number) => {
      if (passStep === step - 1) {
        setActiveStep(step);
        setPassStep((prev) => prev + 1);
      }
    },
    [passStep]
  );

  const moveTo = useCallback((step: number) => {
    setActiveStep(step);
    setPassStep(step);
  }, []);

  const backStep = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setPassStep((prev) => prev - 1);
    }
  }, [activeStep]);

  const Steps = useMemo(() => {
    return steps.map(({ uniqKey, ...step }, indexStep) => {
      const { isVisibleAction = true } = step;
      const isError = error[uniqKey];

      const ActionButton =
        isVisibleAction && indexStep === activeStep ? (
          <div style={{ justifyContent: "flex-end" }} className="flex gap-2 ">
            <Button
              variant="outlined"
              onClick={(event) => {
                event.stopPropagation();
                if (callbackClick) callbackClick(uniqKey);
                nextStep(indexStep + 1);
              }}
            >
              <KeyboardArrowDownIcon />
            </Button>

            <Button
              variant="outlined"
              onClick={(event) => {
                event.stopPropagation();
                if (callbackClick) callbackClick(uniqKey);
                backStep();
              }}
            >
              <KeyboardArrowUpIcon />
            </Button>
          </div>
        ) : null;

      return (
        <Step
          key={uniqKey}
          onClick={() => {
            if (callbackClick) callbackClick(uniqKey);
            moveTo(indexStep);
          }}
        >
          <StepLabel
            classes={{ labelContainer: "" }}
            className={cls(classses?.stepLabel)}
            optional={step.optional}
            error={
              activeStep > indexStep ? isError?.isValidate === false : false
            }
          >
            <div className="grid grid-cols-2 gap-1 row-auto justify-between cursor-pointer">
              <div className="flex gap-2 items-center">
                {step.StepLabel}
                {step.isRequired && (
                  <GrateVibesTypography
                    text="required"
                    sx={{ color: "#ff2c2c", fontSize: 15 }}
                  />
                )}
              </div>
              <div className="col-start-2 col-end-3">{ActionButton}</div>
              <div className="col-span-2 text-light-color1 dark:text-dark-color3">
                {step.description}
              </div>
            </div>
          </StepLabel>
          <StepContent>{step.StepContent}</StepContent>
        </Step>
      );
    });
  }, [
    callbackClick,
    classses,
    nextStep,
    backStep,
    moveTo,
    activeStep,
    error,
    steps,
  ]);

  useEffect(() => {
    const entriesError = Object.entries(error).map(([stepName, error]) => {
      const localization = `Error has occurred in ${stepName
        .replace(/([A-Z])/g, " $1")
        .toUpperCase()} step.`;
      return { localization, error: error.message };
    });

    if (entriesError.length > 0) {
      setPrevious(entriesError);

      if (!isCompareValues()) {
        setErrorMessage(entriesError);
      }
    }
  }, [error, setPrevious, isCompareValues]);

  useEffect(() => {
    if (steps.length - 1 < activeStep && Object.entries(error).length < 1) {
      setDoneSteps(true);
    } else {
      setDoneSteps(false);
    }
  }, [activeStep, steps, error]);

  return useMemo(
    () => ({ activeStep, nextStep, Steps, doneSteps, errorMessage }),
    [activeStep, nextStep, Steps, doneSteps, errorMessage]
  );
};
