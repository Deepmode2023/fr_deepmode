import { IDecodeJWT } from "@/interfaces/services/user";

export const parseJwt = (
  token: string | undefined
): IDecodeJWT | Record<string, any> => {
  if (!token) return {};
  try {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    return JSON.parse(payload.toString());
  } catch (error) {
    return {};
  }
};
