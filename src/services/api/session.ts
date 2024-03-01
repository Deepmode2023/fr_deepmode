import { ResponseGetSessionServicesType } from "@/interfaces/services/api/session";

export const GetSessionServices = async (
  uniqMetaFromHeader: string
): Promise<ResponseGetSessionServicesType> => {
  const response = await fetch(
    process.env.ROOT_API_FRONTEND_URL!.concat(
      ...["/api/premanager/"],
      uniqMetaFromHeader
    ),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};
