import { ConditionType } from "@/shared";
import React, { useEffect, useId, useState } from "react";
import InputBasic from "@/components/InputBasic/InputBasic";
import { useAddWordState, ChangeTypeEnum } from "./useAddWordState";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

type AddWord = {
  onCallback: (condition: ConditionType) => void;
};

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { cls } from "@/shared";
import { StandartValidate } from "@/shared";

// const steps = [
//   {
//     label: "Select campaign settings",
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: "Create an ad group",
//     description:
//       "An ad group contains one or more ads which target a shared set of keywords.",
//   },
//   {
//     label: "Create an ad",
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];

type StepsType = {
  label: string;
};

interface IVerticalLinearStepper {
  steps: StepsType[];
}

function VerticalLinearStepper({ steps }: IVerticalLinearStepper) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (index: number) => {
    setActiveStep(index);
  };

  const handleBack = (index: number) => {
    setActiveStep(index);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <Step key={step.label}>
              <StepLabel
                onClick={() => handleNext(index)}
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {/* <div className="flex items-center">
                  <Typography
                    className={cls(
                      "dark:text-dark-color3 text-light-color1 capitalize ",
                      !isActive && "opacity-40"
                    )}
                  >
                    {step.label}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      disabled={!isActive}
                      onClick={() => handleBack(index - 2)}
                      className="w-5 h-5"
                    >
                      Back
                    </Button>
                  </Box>
                </div> */}
              </StepLabel>
              <StepContent sx={{ color: "white" }}>
                <FormControl>
                  <OutlinedInput
                    onBlur={({ target: { value } }) => {
                      console.log({ value });
                    }}
                  />
                </FormControl>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export const AddWord: React.FC<AddWord> = ({ onCallback }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [doneStepsStatistic, setDoneStepsStatistic] = React.useState(0);
  const inputsId = useId();
  const { stepsProps, inputs, onChange } = useAddWordState();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (doneStepsStatistic > 0) setActiveStep(doneStepsStatistic + 1);
  }, [doneStepsStatistic]);

  const onBlurEvent = (
    value: string,
    typeKey:
      | "name"
      | "part_of_speach"
      | "translate"
      | "example"
      | "synonym"
      | "slug"
      | "slang"
  ) => {
    const isValidate = StandartValidate(value);

    console.log({ isValidate });
    if (isValidate.isValidate) {
      onChange(typeKey, value);
    }
  };

  return (
    <div className="text-white">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {stepsProps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <Step key={step.label}>
                <StepLabel
                  onClick={() => {}}
                  optional={
                    index === stepsProps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  <div className="flex items-center">
                    <Typography
                      className={cls(
                        "dark:text-dark-color3 text-light-color1 capitalize ",
                        !isActive && "opacity-40"
                      )}
                    >
                      {step.label}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        disabled={!isActive}
                        onClick={() => {}}
                        className="w-5 h-5"
                      >
                        Back
                      </Button>
                    </Box>
                  </div>
                </StepLabel>
                <StepContent sx={{ color: "white" }}>
                  <FormControl>
                    <OutlinedInput
                      onBlur={({ target: { value } }) => {
                        onBlurEvent(value, "name");
                      }}
                    />
                  </FormControl>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </div>
  );
};
