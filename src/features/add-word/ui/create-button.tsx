import React from "react";
import { ButtonWithLoader } from "@/shared";
import { Typography } from "@mui/material";
import { ICreateWordGraphQlVariables } from "../model/model";
import { useCreateWord } from "../lib/hooks/use-create-word";

export const CreateButton = (wordVariables: ICreateWordGraphQlVariables) => {
  const { addCreateWord } = useCreateWord();
  return (
    <div className="flex justify-center">
      <ButtonWithLoader<null, void>
        params={null}
        variant="contained"
        onClick={async () => {
          await addCreateWord({ variables: wordVariables });
        }}
        progressProps={{ size: 30, color: "inherit" }}
      >
        <Typography fontSize={20} fontWeight={800} color="white">
          Submit
        </Typography>
      </ButtonWithLoader>
    </div>
  );
};
