import { ITotalResponse } from "../total.response";
import { UserType } from "./auth";

//CREATE USER INTERFACE

export interface IDecodeJWT {
  exp: string;
  user: UserType;
}

export interface IUpdateUserParams {
  email: string;
  name?: string;
  surname?: string;
  avatar?: BinaryData;
}

export interface ICreateUserParams {
  surname: string;
  email: string;
  name: string;
  password: string;
  avatar?: BinaryData;
}

export type ResponseUserType = {
  name: string;
  surname: string;
  email: string;
  roles: Array<string>;
  updated_account: Date;
};

export type IResponseCreateUser = ITotalResponse<ResponseUserType>;
