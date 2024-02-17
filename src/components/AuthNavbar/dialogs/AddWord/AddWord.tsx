import { ConditionType } from "@/interfaces/components/addbutton";
import React, { useId, useState } from "react";
import InputBasic from "@/components/InputBasic/InputBasic";
import { useAddWordState, ChangeTypeEnum } from "./useAddWordState";

type AddWord = {
  onCallback: (condition: ConditionType) => void;
};

export const AddWord: React.FC<AddWord> = ({ onCallback }) => {
  const inputsId = useId();
  const { inputs, onChange } = useAddWordState();
  const [value, setValue] = useState("");

  console.log(inputs);
  return (
    <div>
      {Object.keys(inputs).map((input) => {
        return (
          <div key={input + inputsId} className="flex gap-3 items-start">
            <label className="uppercase">{input}</label>
            <InputBasic
              onChangeValue={(value: string) =>
                onChange(input as keyof typeof ChangeTypeEnum, value)
              }
              placeholder="Typing please...."
              type="text"
              classname={{
                input: "dark:bg-dark-total bg-light-total text-white",
              }}
            />
          </div>
        );
      })}

      <button onClick={() => onCallback("success")}>CLICK ME</button>
    </div>
  );
};
