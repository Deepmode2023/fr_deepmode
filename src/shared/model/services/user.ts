import { ITotalResponse } from "../model";
//CREATE USER INTERFACE

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
