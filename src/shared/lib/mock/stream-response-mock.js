import { ConditionSessionResponse } from "../../api/grpc/protobuff/generated/session_pb";

const stateSessionMockSuccessfully = {
  ME: [{}],
  REFUSE: [{}],
  EXTENDING: [{}],
};

const stateSessionMockUnSuccessfully = {
  ME: [{}],
  REFUSE: [{}],
  EXTENDING: [{}],
};

const getStreamResponseMock = (isSuccessfully = false, stateSession) => {
  return;
};
export { conditionStreamMock };
