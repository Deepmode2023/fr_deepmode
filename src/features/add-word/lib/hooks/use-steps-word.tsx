import React, { useMemo, useRef, useState } from "react";
import { IStandartValidateValue } from "@/shared";
import { PartOfSpeachEnum, SlangEnum, SlugEnum } from "@/shared";
import { Typography } from "@mui/material";
import { BaseInput } from "@/shared";
import { WORD_INPUTS } from "../../config/constants";
import { ICreateWordGraphQlVariables } from "../../model/model";
import { selectInputsClosets } from "../../ui/select-inputs";

export const useStepsWord = () => {
  const [storeInputsRef, setStoreInputsRef] = useState<Record<string, string>>(
    {}
  );
  const errorRef = useRef<Record<string, IStandartValidateValue>>({});

  const store: ICreateWordGraphQlVariables = useMemo(() => {
    const {
      name = "",
      partOfSpeach = PartOfSpeachEnum.NOUN,
      translate = "",
      example = "",
      slang = SlangEnum.ENG,
      imageUrl = "",
    } = storeInputsRef;

    const synonym: string[] =
      storeInputsRef?.synonym?.length > 0
        ? storeInputsRef?.synonym?.split(",")
        : [];

    return {
      name,
      partOfSpeach: partOfSpeach as keyof typeof PartOfSpeachEnum,
      synonym,
      slug: SlugEnum.WORD,
      slang: slang as keyof typeof SlangEnum,
      example,
      imageUrl,
      translate,
    };
  }, [storeInputsRef.current]);

  const Steps = useMemo(() => {
    return Object.entries(WORD_INPUTS).map(
      ([input, { uniqKey, isValid, onValidFunc, ...propsInput }]) => {
        const value = storeInputsRef[input] ?? "";

        const error = errorRef.current?.[input];
        if (isValid && onValidFunc) {
          const valid = onValidFunc(value);

          if (!valid.isValidate) {
            errorRef.current = {
              ...errorRef.current,
              [input]: valid,
            };
          } else if (errorRef.current?.[input]) {
            delete errorRef.current?.[input];
          }
        }
        const Selector = selectInputsClosets(input);
        const onChangeSelect = (value: string) => {
          setStoreInputsRef((prev) => ({ ...prev, [input]: value }));
        };

        return {
          uniqKey,
          isRequired: propsInput.isRequired,
          StepContent: (
            <div className="text-current">
              {Selector ? (
                <Selector
                  name={input}
                  value={value}
                  onChange={onChangeSelect}
                />
              ) : (
                <BaseInput
                  name={input}
                  error={error?.isValidate === false}
                  helperText={error?.message}
                  defaultValue={value}
                  onBlur={({ target: { value } }) => {
                    setStoreInputsRef((prev) => ({ ...prev, [input]: value }));
                  }}
                />
              )}
            </div>
          ),
          StepLabel: (
            <Typography noWrap variant="h6" className="text-white">
              {propsInput.label}
            </Typography>
          ),
          error: false,
          isVisibleAction: true,
          description: propsInput.description,
        };
      }
    );
  }, [storeInputsRef, errorRef]);

  return {
    store,
    error: errorRef.current,
    steps: Steps,
  };
};
