import {
  ResponseGetSessionServicesType,
  ICreateSessionServices,
  ResponseCreateSessionServicesType,
} from "@/interfaces/services/api/session";
import { LOCAL_SERVICES_ENDPOINT, local_basic_path } from "../constants";

export const GetSessionServices = async (
  uniqMetaFromHeader: string
): Promise<ResponseGetSessionServicesType> => {
  const response = await fetch(
    local_basic_path.concat(
      "/",
      LOCAL_SERVICES_ENDPOINT.PREMENAGER,
      "/",
      uniqMetaFromHeader
    ),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const CreateSessionServices = async (
  sessionData: ICreateSessionServices
): Promise<ResponseCreateSessionServicesType> => {
  const response = await fetch(
    local_basic_path.concat("/", LOCAL_SERVICES_ENDPOINT.PREMENAGER),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer ".concat(sessionData.access_token),
      },
      body: JSON.stringify(sessionData),
    }
  );
  return response.json();
};
