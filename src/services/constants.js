export const SERVICES_POINT = {
  //AUTH
  POST_TOKEN: "auth/token",
  POST_REFRESH_TOKEN: "auth/refresh",

  //USER
  POST_CREATE_USER: "user",
  POST_ME: "user/me",
  PUT_UPDATE_USER: "user/update_user",
  DELETE_DELETE_USER: "user/delete_user",

  //SHARED_PREFERENCE
  GET_SHARED_PREFERENCE: "shared_preference",
  PUT_SHARED_PREFERENCE: "shared_preference",
};

export const basic_path =
  process.env.BASIC_API_BACKAND_URL ??
  process.env.NEXT_PUBLIC_BASIC_API_BACKAND_URL ??
  "";
