import { GRPC_STATUS_ENUM, RawStatusType } from "./grpc-status";

enum StreamConditionEnum {
  CONTINUE = "CONTINUE",
  CLOSE = "CLOSE",
}

type CommonFieldResponseType = {
  getDetails: () => string;
  getStatus: () => number;
  getStreamCondition: () => StreamConditionEnum;
  details: string;
  status: number;
};

const CommonResponseFieldHandler = <TResponse extends CommonFieldResponseType>(
  response: TResponse
) => {
  return { details: response.getDetails(), status: response.getStatus() };
};

type ErrorResponse = {
  code: RawStatusType;
  message: string;
};

const CriticalResponseHandler = <TCriticalResponse extends ErrorResponse>(
  error_response: TCriticalResponse
) => {
  return {
    details: error_response.message,
    status: GRPC_STATUS_ENUM(error_response.code),
    isError: true,
  };
};

export { CommonResponseFieldHandler, CriticalResponseHandler };
export type { CommonFieldResponseType };
