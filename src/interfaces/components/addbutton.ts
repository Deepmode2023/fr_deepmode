export type ConditionType = "usually" | "success" | "error";

export interface IAddButtonProps {
  strokeColor?: string;
  classes?: string;
  onClickAction: (callback: (condition: ConditionType) => void) => void;
}
