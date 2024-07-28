"use client";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import React, { MutableRefObject, useRef, useEffect } from "react";

interface IBaseInput extends BaseTextFieldProps {
  storeRef?: MutableRefObject<Record<string, HTMLInputElement>>;
  name: string;
}

export const BaseInput = ({ storeRef, ...inputProps }: IBaseInput) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && storeRef) {
      storeRef.current = {
        ...storeRef.current,
        [inputProps.name]: inputRef.current,
      };
    }
  }, [inputProps.name, storeRef]);

  return <TextField inputRef={inputRef} {...inputProps} />;
};
