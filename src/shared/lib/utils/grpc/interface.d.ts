type ConditionState = {
  session_mark?: string;
  destroy_session?: boolean;
  user?: string;
  isError?: boolean;
};

type ConditionSessionRequestType = {
  state: StateSessionEnum;
  stream_condition: StreamConditionEnum;
  session_mark?: string;
  refresh_token?: string;
};

export { ConditionState, ConditionSessionRequestType };
