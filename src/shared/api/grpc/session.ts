"use client";
import { client_session } from "./client";
/*@ts-ignore */
import { SessionRequest } from "./protobuff/generated/session_pb";
import {
  CommonFieldResponseType,
  CommonResponseFieldHandler,
  CriticalResponseHandler,
} from "./core/common";

type GetterSessionType = {
  getSessionMark: () => string;
  getRefreshToken: () => string;
} & CommonFieldResponseType;

type SessionType = {
  sessionMark?: string;
  refreshToken?: string;
} & GetterSessionType;

type SessionResponse = {
  sessionMark?: string;
  refreshToken?: string;
  details: string;
  status: number;
};

const SessionResponseHandler = <TResponse extends SessionType>(
  response: TResponse
): SessionResponse => {
  const responseStore: Record<string, any> = {};
  if (response.getSessionMark()) {
    responseStore["sessionMark"] = response.getSessionMark();
  }

  if (response.getRefreshToken()) {
    responseStore["refreshToken"] = response.getRefreshToken();
  }

  return {
    ...responseStore,
    ...CommonResponseFieldHandler<TResponse>(response),
  };
};

interface CreateSessionResponse extends SessionType {}

async function CreateSession(
  email: string,
  password: string
): Promise<
  SessionResponse | ReturnType<typeof CriticalResponseHandler> | undefined
> {
  const request = new SessionRequest();
  request.setPassword(password);
  request.setEmail(email);

  try {
    const res = await client_session.createSession(request, {});
    return SessionResponseHandler(res);
  } catch (e: any) {
    if (e?.code && e?.message) {
      console.log("Logging critical error with error:  ", e?.message);
      return CriticalResponseHandler(e);
    }
  }
}

export { CreateSession };
