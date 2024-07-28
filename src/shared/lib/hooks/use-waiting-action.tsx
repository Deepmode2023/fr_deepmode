import { useState, useCallback } from "react";

export const useWaitingAction = <TPromiseParams, TPromiseReturn>(
  action: (params: TPromiseParams) => Promise<TPromiseReturn>
) => {
  const [loading, setLoading] = useState(false);

  const onAction = useCallback(
    async (params: TPromiseParams) => {
      setLoading(true);
      const result = await action(params);
      setLoading(false);

      return result;
    },
    [action]
  );

  return { loading, onAction };
};
