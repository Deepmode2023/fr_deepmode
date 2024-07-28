import { Session } from "prismaSettings/generated/client";

export type ResponseGetSessionServicesType = {
  session: Session;
};

export interface ICreateSessionServices {
  access_token: string;
}

export type ResponseCreateSessionServicesType = {
  isOk: boolean;
  error: string | null;
};
