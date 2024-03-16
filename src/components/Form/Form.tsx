import React, { FC, ReactNode } from "react";
import { useForm } from "./useForm";
import { IInputWithLabelProps } from "@/components/InputBasic/InputWithLabel";
import { mergeCls } from "@/utils/cls";
import { ButtonWithLoader } from "@/components";

export type ClassnameType = {
  form?: string;
  button?: string;
};

type InputExtra = { label: ReactNode; name: string };
export type FormInputsType = Omit<
  IInputWithLabelProps,
  "children" | "onChangeValue"
> &
  InputExtra;

export interface IFormProps<TAction> {
  action: (formData: FormData) => Promise<TAction>;
  formKey: string;
  buttonChildren: ReactNode;
  classname?: ClassnameType;
  inputs: FormInputsType[];
  inputComponent?: (props: IInputWithLabelProps) => JSX.Element;
}

const Form: FC<IFormProps<unknown>> = ({ classname, ...props }) => {
  const { onSubmit, Inputs, isSubmiting, isDisabled } = useForm(props);

  return (
    <form
      onSubmit={onSubmit}
      className={mergeCls("space-y-5", classname?.form)}
    >
      {Inputs}
      <ButtonWithLoader
        disabled={isDisabled}
        isLoading={Boolean(isSubmiting)}
        type="submit"
        className={mergeCls(
          "dark:bg-dark-total bg-light-total hover:opacity-90 dark:text-dark-color3 text-light-color1",
          "px-[16px] py-[13px] h-[50px] w-[200px] flex justify-center items-center rounded-md",
          "transition-all duration-500",
          classname?.button
        )}
      >
        {props.buttonChildren}
      </ButtonWithLoader>
    </form>
  );
};

export default Form;
