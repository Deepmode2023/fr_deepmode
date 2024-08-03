import { UserType } from "../../model/model";

export interface IDecodeJWT {
  exp: string;
  user: UserType;
}

export const parseJwt = (token: string): IDecodeJWT | null => {
  if (!token) return null;
  try {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    return JSON.parse(payload.toString());
  } catch (error) {
    return null;
  }
};
