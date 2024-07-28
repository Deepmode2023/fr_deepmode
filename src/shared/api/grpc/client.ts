"use client";
import { UserServiceClient } from "./protobuff/generated/user_grpc_pb";
import {
  SessionServiceClient,
  SessionServicePromiseClient,
} from "./protobuff/generated/session_grpc_web_pb";

const host = "http://localhost:8080";

const client_session = new SessionServicePromiseClient(host, null, null);

export { client_session };
