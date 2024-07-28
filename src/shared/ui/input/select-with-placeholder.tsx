"use client";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  ReactNode,
  memo,
  useEffect,
  useRef,
  MutableRefObject,
  useMemo,
} from "react";

interface SelectWithPlaceholderProps
  extends Omit<SelectProps<string>, "onChange" | "placeholder"> {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: ReactNode;
  storeRef?: MutableRefObject<Record<string, HTMLInputElement>>;
  name: string;
}

export const SelectWithPlaceholder = memo(
  ({
    items,
    onChange,
    value,
    placeholder,
    storeRef,
    fullWidth,
    ...selectProps
  }: SelectWithPlaceholderProps) => {
    const inputRef = useRef();

    useEffect(() => {
      if (inputRef.current && storeRef) {
        storeRef.current = {
          ...storeRef.current,
          [selectProps.name]: inputRef.current,
        };
      }
    }, [selectProps.name, storeRef]);

    return (
      <div>
        <FormControl fullWidth={fullWidth}>
          <Select
            {...selectProps}
            displayEmpty
            value={value}
            onChange={(event: SelectChangeEvent<string>) => {
              onChange(event.target.value);
            }}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return placeholder;
              }

              return selected;
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              {placeholder}
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
);
