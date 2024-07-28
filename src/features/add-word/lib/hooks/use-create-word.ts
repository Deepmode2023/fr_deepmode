"use client";
import {
  createWord,
  WordType,
  TIME_DISPLAY_TOAST,
  RESPONSE_STATUS,
} from "@/shared";
import { useState } from "react";
import { DisplayToastAdapter, IToastMessage } from "@/entities/snackbar";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useMemo } from "react";

const CreateWordGQL = (withCreatedWord: boolean) => {
  const data =
    "data : {id, slug, name, example, translate, synonym, partOfSpeach}";

  return gql`
    {
      __typename
      ... on ReturnWordCreatedType 
          {
            status
            details
            ${withCreatedWord ? data : ""}
          }
      ... on BasicExceptionSchema
          {
            status
            details
          }
    }
  `;
};

export const useCreateWord = (withCreatedWord: boolean = false) => {
  const [responseData, setResponseData] = useState(null);
  const [addCreateWord, { data: dataRaw }] = useMutation(
    createWord(CreateWordGQL(withCreatedWord))
  );

  useEffect(() => {
    if (dataRaw) {
      const { status, details, data } = dataRaw?.CreateWord;
      if (status === RESPONSE_STATUS.STATUS_409_ALREADY_EXIST_DB) {
        const message: IToastMessage = {
          message: details,
          condition: "error",
          time: TIME_DISPLAY_TOAST,
        };
        DisplayToastAdapter(
          { ...message, message: "Hello" },
          TIME_DISPLAY_TOAST
        );
        DisplayToastAdapter(message, TIME_DISPLAY_TOAST);
      }
      if (status === RESPONSE_STATUS.STATUS_201_CREATE_SUCCESS) {
        const message: IToastMessage = {
          message: details,
          condition: "success",
          time: TIME_DISPLAY_TOAST,
        };
        setResponseData(data);
        DisplayToastAdapter(message, TIME_DISPLAY_TOAST);
      }
    }
  }, [dataRaw]);

  return useMemo(
    () => ({
      addCreateWord,
      data: responseData,
    }),
    [addCreateWord, responseData]
  );
};
