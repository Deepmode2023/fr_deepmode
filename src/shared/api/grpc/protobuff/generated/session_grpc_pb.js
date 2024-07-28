// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("grpc");
var session_pb = require("../session_pb.js");
var user_pb = require("./user_pb.js");

function serialize_session_ConditionSessionRequest(arg) {
  if (!(arg instanceof session_pb.ConditionSessionRequest)) {
    throw new Error(
      "Expected argument of type session.ConditionSessionRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_session_ConditionSessionRequest(buffer_arg) {
  return session_pb.ConditionSessionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_session_ConditionSessionResponse(arg) {
  if (!(arg instanceof session_pb.ConditionSessionResponse)) {
    throw new Error(
      "Expected argument of type session.ConditionSessionResponse"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_session_ConditionSessionResponse(buffer_arg) {
  return session_pb.ConditionSessionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_session_SessionRequest(arg) {
  if (!(arg instanceof session_pb.SessionRequest)) {
    throw new Error("Expected argument of type session.SessionRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_session_SessionRequest(buffer_arg) {
  return session_pb.SessionRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_session_SessionResponse(arg) {
  if (!(arg instanceof session_pb.SessionResponse)) {
    throw new Error("Expected argument of type session.SessionResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_session_SessionResponse(buffer_arg) {
  return session_pb.SessionResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var SessionServiceService = (exports.SessionServiceService = {
  createSession: {
    path: "/session.SessionService/CreateSession",
    requestStream: false,
    responseStream: false,
    requestType: session_pb.SessionRequest,
    responseType: session_pb.SessionResponse,
    requestSerialize: serialize_session_SessionRequest,
    requestDeserialize: deserialize_session_SessionRequest,
    responseSerialize: serialize_session_SessionResponse,
    responseDeserialize: deserialize_session_SessionResponse,
  },
  conditionSessionStream: {
    path: "/session.SessionService/ConditionSessionStream",
    requestStream: true,
    responseStream: true,
    requestType: session_pb.ConditionSessionRequest,
    responseType: session_pb.ConditionSessionResponse,
    requestSerialize: serialize_session_ConditionSessionRequest,
    requestDeserialize: deserialize_session_ConditionSessionRequest,
    responseSerialize: serialize_session_ConditionSessionResponse,
    responseDeserialize: deserialize_session_ConditionSessionResponse,
  },
});

exports.SessionServiceClient = grpc.makeGenericClientConstructor(
  SessionServiceService
);
