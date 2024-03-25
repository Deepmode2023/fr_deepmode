import {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  StandartValidate,
} from "./lib/utils/validate";

import { UserType } from "./model/model";
import { IDecodeJWT } from "./lib/utils/jwt";
import { parseJwt } from "./lib/utils/jwt";
import { cls } from "./lib/utils/cls";
import { AddButton, ConditionType } from "./ui/add-button";

import {
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
} from "./config/global-constant";

/* CONSTANT */
export {
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
};
/* FUNCTION */
export { StandartValidate, parseJwt, cls, AddButton };
export type {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  UserType,
  IDecodeJWT,
  ConditionType,
};
