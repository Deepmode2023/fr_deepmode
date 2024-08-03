import { SessionStreamClient } from "./session-stream";
import { expect } from "@jest/globals";
import { SessionServicePromiseClient } from "../protobuff/generated/session_grpc_web_pb";
import { conditionStreamMock } from "./mock/stream-response-mock";

jest.mock("../protobuff/generated/session_grpc_web_pb", () => {
  const originalModule = jest.requireActual(
    "../protobuff/generated/session_grpc_web_pb"
  );

  return {
    __esModule: true,
    ...originalModule,
    SessionServicePromiseClient: {
      ...originalModule.SessionServicePromiseClient,
      ConditionSessionStream: jest.fn(() => {
        new Promise((res, rej) => {});
      }),
    },
  };
});

describe("Some", () => {});
