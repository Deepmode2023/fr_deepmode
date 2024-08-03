import { oneOf, setterGrpcValue, convertKeyToMethodGrpc } from "./type-setter";
import { expect } from "@jest/globals";
import { ConditionSessionRequest } from "../../../api/grpc/protobuff/generated/session_pb";
import { streamConditionEnum, stateSessionEnum } from "./enum";

describe("Checking correct oneOf return", () => {
  const props = { test1: 1, test2: 10, test: 0 };
  test("... & with incorrectly props", () => {
    expect(() => oneOf({})).toThrowError();
    expect(() => oneOf(undefined)).toThrowError();
    expect(() => oneOf(null)).toThrowError();
    expect(() => oneOf("error")).toThrowError();
  });

  test("... & with correctly props", () => {
    expect(oneOf(props)).toEqual({ test1: 1 });
  });

  test("... & with correctly props but incorrectly value inside key", () => {
    props.test1 = undefined;
    expect(oneOf(props)).toEqual({ test2: 10 });
  });
});

describe("Chicking setterGrpcValue function", () => {
  const props = {
    state: stateSessionEnum("EXTENDING"),
    stream_condition: streamConditionEnum("CONTINUE"),
    session_mark: "19239329:jsjfjsfds:ksdfkskfd",
  };
  let typedInstance;
  beforeEach(() => {
    typedInstance = new ConditionSessionRequest();
  });
  test("... & testing normaly behavior", () => {
    typedInstance = setterGrpcValue(props, typedInstance);
    expect(typedInstance.getState()).toBe(stateSessionEnum("EXTENDING"));
  });

  test("... & testing non-normaly behavior", () => {
    typedInstance = setterGrpcValue(undefined, typedInstance);
    expect(typedInstance.getState()).toBe(0);
  });
});

describe("Checking convertKeyToMethodGrpc funtion", () => {
  test("... & with correct key", () => {
    expect(convertKeyToMethodGrpc("say_hello")).toBe("SayHello");
  });
  test("... & with incorrect key", () => {
    expect(convertKeyToMethodGrpc("say___hello")).toBe("SayHello");
    expect(convertKeyToMethodGrpc("say-hello")).toBe("SayHello");
    expect(convertKeyToMethodGrpc("say hello")).toBe("SayHello");
    expect(convertKeyToMethodGrpc("say,hello")).toBe("SayHello");
  });
  test("... & with key = undefined", () => {
    expect(convertKeyToMethodGrpc(undefined)).toBe("");
  });
});
