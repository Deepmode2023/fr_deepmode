"use client";
import { useRef } from "react";
import { isEqual } from "lodash";

export function usePrevious<T>(value: T) {
  const currentRef = useRef<T>(value);
  const previousRef = useRef<T | undefined>();

  function setPrevious(value: T) {
    if (currentRef.current !== value) {
      previousRef.current = currentRef.current;
      currentRef.current = value;
    }
  }

  function isCompareValues(): boolean {
    return isEqual(currentRef.current, previousRef.current);
  }

  return { previous: previousRef.current, setPrevious, isCompareValues };
}
