import {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useReducer,
} from "react";
import { IFormProps } from "./Form";
import { InputWithLabel } from "../InputBasic/InputWithLabel";
import { StandartValidate } from "@/utils/validateInput";

type inputStateValueType = { value: string; isValidate: boolean };
type inputStateType = Record<string, inputStateValueType>;

const initialState = (inputs: IFormProps<unknown>["inputs"]) => {
  return {
    ...inputs.reduce((acc, input) => {
      return { ...acc, [input.name]: { value: "", isValidate: false } };
    }, {} as inputStateType),
    isSubmiting: false,
  };
};

export type ActionType = "ON_CHANGE_VALUE" | "CLEAR_FORM" | "SUBMITING";

export interface IAction {
  type: ActionType;
  payload: {
    name?: string;
    value?: string;
    isValidate?: boolean;
    inputs: IFormProps<unknown>["inputs"];
    isSubmiting?: boolean;
  };
}

const reducer = (
  state: Record<keyof ReturnType<typeof initialState>, unknown>,
  action: IAction
) => {
  switch (action.type) {
    case "ON_CHANGE_VALUE":
      return {
        ...state,
        [action.payload.name!]: {
          value: action.payload.value,
          isValidate: action.payload?.isValidate ?? false,
        },
      };

    case "SUBMITING":
      return {
        ...initialState(action.payload.inputs),
        isSubmiting: action.payload?.isSubmiting ?? state.isSubmiting,
      };

    case "CLEAR_FORM":
      return initialState(action.payload.inputs);

    default:
      return state;
  }
};

export const useForm = ({
  inputs,
  inputComponent,
  formKey,
  action,
}: IFormProps<unknown>) => {
  const [{ isSubmiting, ...state }, dispatch] = useReducer(
    reducer,
    initialState(inputs)
  );

  useEffect(() => {
    dispatch({ type: "CLEAR_FORM", payload: { inputs } });
  }, [inputs]);

  const isDisabled = useMemo(() => {
    return Object.entries<inputStateValueType>(state).reduce(
      (acc, [key, input]) => {
        if (!input.isValidate || acc) return true;

        return acc;
      },
      false
    );
  }, [state]);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch({ type: "SUBMITING", payload: { inputs, isSubmiting: true } });
      const formData = new FormData();
      Object.entries<inputStateValueType>(state).forEach(([key, input]) => {
        formData.append(key, input.value);
      });

      action(formData).then((resolve) => {
        dispatch({
          type: "SUBMITING",
          payload: { inputs, isSubmiting: false },
        });
      });
    },
    [action, inputs, state]
  );

  const Inputs = useMemo(() => {
    const Input = inputComponent ?? InputWithLabel;

    return inputs.map(({ label, name, ...input }) => {
      const onChangeValue = (value: string) => {
        const { isValidate } = input.onValidateInput
          ? input.onValidateInput(value, input.type)
          : StandartValidate(value, input.type);

        dispatch({
          type: "ON_CHANGE_VALUE",
          payload: { value, name, isValidate: isValidate, inputs },
        });
      };

      return (
        <Input
          key={name + formKey}
          {...input}
          onChangeValue={onChangeValue}
          clearEvent={Boolean(isSubmiting)}
          disabled={Boolean(isSubmiting)}
        >
          <label />
        </Input>
      );
    });
  }, [inputs, inputComponent, isSubmiting, formKey]);

  return { Inputs, onSubmit, state, isSubmiting, isDisabled };
};
