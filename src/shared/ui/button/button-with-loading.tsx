"use client";
import Button, { ButtonProps } from "@mui/material/Button";
import { CircularProgressProps } from "@mui/material/CircularProgress";
import { useWaitingAction } from "../../lib/hooks/use-waiting-action";
import { Progress } from "../progress";
import { useMemo } from "react";

interface IButtonWithLoadingProps<TPromiseParams, TPromiseReturn>
  extends Omit<ButtonProps, "onClick" | "endIcon" | "startIcon"> {
  params: TPromiseParams;
  onClick: (params: TPromiseParams) => Promise<TPromiseReturn>;
  progressProps?: CircularProgressProps;
  progressPosition?: "end" | "start";
}

export const ButtonWithLoader = <TPromiseParams, TPromiseReturn>({
  progressProps = {},
  params,
  onClick,
  progressPosition = "end",
  ...props
}: IButtonWithLoadingProps<TPromiseParams, TPromiseReturn>) => {
  const { loading, onAction: onActionWithLoading } = useWaitingAction<
    TPromiseParams,
    TPromiseReturn
  >(onClick);

  const ProgressInstance = useMemo(() => {
    if (!loading) return null;

    return <Progress {...progressProps} />;
  }, [loading, progressProps]);

  return (
    <Button
      {...props}
      onClick={() => onActionWithLoading(params)}
      startIcon={progressPosition === "start" ? ProgressInstance : null}
      endIcon={progressPosition === "end" ? ProgressInstance : null}
    />
  );
};
