const GRPC_STATUS = {
  OK: 0,
  CANCELED: 1,
  UNKNOWN: 2,
  INVALID_ARGUMENT: 3,
  DEADLINE_EXCEEDED: 4,
  NOT_FOUND: 5,
  ALREADY_EXISTS: 6,
  PERMISSION_DENIED: 7,
  RESOURCE_EXHAUSTED: 8,
  FAILED_PRECONDITION: 9,
  ABORTED: 10,
  OUT_OF_RANGE: 11,
  UNIMPLEMENTED: 12,
  INTERNAL: 13,
  UNAVAILABLE: 14,
  DATA_LOSS: 15,
  UNAUTHENTICATED: 16,
};

type RawStatusType = number | keyof typeof GRPC_STATUS;

const GRPC_STATUS_ENUM = (raw_status: RawStatusType) => {
  let default_status = "UNKNOWN_STATUS";
  if (typeof raw_status === "number") {
    const reversed_status = Object.entries(GRPC_STATUS).reduce(
      (acc, [key, value]) => ({ ...acc, [value]: key }),
      {} as Record<number, string>
    );
    return reversed_status[raw_status] ?? default_status;
  }
  return GRPC_STATUS[raw_status];
};

export { GRPC_STATUS_ENUM };
export type { RawStatusType };
