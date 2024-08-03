import {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  prototypeEnumValidate,
  StandartValidate,
  validateMaxLength,
} from "./lib/utils/validate";

import type {
  ConditionState,
  ConditionSessionRequestType,
  RawStatusType,
  CommonFieldResponseType,
} from "./lib/utils/grpc";

import {
  GRPC_STATUS_ENUM,
  oneOf,
  setterGrpcValue,
  convertKeyToMethodGrpc,
  enumHelpers,
  streamConditionEnum,
  stateSessionEnum,
  CommonResponseFieldHandler,
  CriticalResponseHandler,
} from "./lib/utils/grpc";

import { MiddlewareAuth } from "./lib/utils/middleware";
import { SessionStorage } from "./lib/utils/session-storage";
import { AnimationFrame } from "./lib/utils/animateFramer";
import { eventTimeoutBus } from "./lib/utils/eventBus/eventTimeoutBus";
import { EventBus } from "./lib/utils/eventBus/eventBus";
import { QueueWithTimeout } from "./lib/utils/data-structure/queue/queue-with-timeout";

import { SlangEnum, SlugEnum, PartOfSpeachEnum } from "./model/word.model";
import {
  updateWord,
  createRepetition,
  createWord,
  deleteRepetition,
  deleteWord,
} from "./api/graphql/mutation";
import { getSpacedRepetition, getWords } from "./api/graphql/query";
import type { WordType } from "./model/word.model";

import {
  useAccessToken,
  useCreateUser,
  useDeleteUser,
  useGetSharedPreference,
  useRefreshToken,
  useUpdateSharedPreference,
  useUpdateUser,
} from "./lib/hooks/services";

import type {
  AuthType,
  LoginUserParamsType,
  ResponseLoginUserType,
  ResponseRefreshTokenType,
  IUpdateWordGraphQlVariables,
  IDeleteRepetiotionGraphQlVariables,
  ICreateRepetitionGraphQlVariables,
  IDeleteWordGraphQlVariables,
  ICommonParams,
  IGetSpacedRepetitionGraphQLVariables,
  IGetWordsGraphQlVariables,
  ThemeColor,
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
  IUpdateUserParams,
  ICreateUserParams,
  ResponseUserType,
  IResponseCreateUser,
} from "./model";

import { TIME_IN_MS } from "./config/time";
import { RESPONSE_STATUS } from "./config/status";
import { TIMEOUT_EVENT } from "./config/events";
import { usePrevious } from "./lib/hooks/use-previous";
import { ButtonWithLoader } from "./ui/button/button-with-loading";
import { GrateVibesTypography } from "./ui/typography/greate-vibes-typography";

import { UserType } from "./model/model";
import { IDecodeJWT } from "./lib/utils/jwt";
import { parseJwt } from "./lib/utils/jwt";
import { cls } from "./lib/utils/cls";
import { AddButton, ConditionType } from "./ui/button/add-button";
import { BaseInput } from "./ui/input/base-input";
import { Progress } from "./ui/progress";
import { SelectWithPlaceholder } from "./ui/input/select-with-placeholder";
import {
  useStepper,
  StepType,
  UseStepperPropsType,
} from "./lib/hooks/use-stepper";

import {
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
} from "./config/global";

import { CreateSession } from "./api/grpc/session";

/* CONSTANT */
export {
  TIME_IN_MS,
  RESPONSE_STATUS,
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
  TIMEOUT_EVENT,
};
/*COMPONENTS */
export {
  Progress,
  AddButton,
  BaseInput,
  ButtonWithLoader,
  SelectWithPlaceholder,
  GrateVibesTypography,
};
/* HOOKS */
export {
  useStepper,
  usePrevious,
  useAccessToken,
  useCreateUser,
  useDeleteUser,
  useGetSharedPreference,
  useRefreshToken,
  useUpdateSharedPreference,
  useUpdateUser,
};
/* FUNCTION */
export {
  GRPC_STATUS_ENUM,
  oneOf,
  setterGrpcValue,
  convertKeyToMethodGrpc,
  enumHelpers,
  streamConditionEnum,
  stateSessionEnum,
  CommonResponseFieldHandler,
  CriticalResponseHandler,
  QueueWithTimeout,
  eventTimeoutBus,
  EventBus,
  AnimationFrame,
  MiddlewareAuth,
  SessionStorage,
  StandartValidate,
  parseJwt,
  cls,
  prototypeEnumValidate,
  validateMaxLength,
  CreateSession,
};

export { SlangEnum, SlugEnum, PartOfSpeachEnum };
export type {
  ConditionState,
  ConditionSessionRequestType,
  RawStatusType,
  CommonFieldResponseType,
  WordType,
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  UserType,
  IDecodeJWT,
  ConditionType,
  StepType,
  UseStepperPropsType,
  AuthType,
  LoginUserParamsType,
  ResponseLoginUserType,
  ResponseRefreshTokenType,
  IUpdateWordGraphQlVariables,
  IDeleteRepetiotionGraphQlVariables,
  ICreateRepetitionGraphQlVariables,
  IDeleteWordGraphQlVariables,
  ICommonParams,
  IGetSpacedRepetitionGraphQLVariables,
  IGetWordsGraphQlVariables,
  ThemeColor,
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
  IUpdateUserParams,
  ICreateUserParams,
  ResponseUserType,
  IResponseCreateUser,
};

/* API */

export {
  updateWord,
  createRepetition,
  createWord,
  deleteRepetition,
  deleteWord,
  getSpacedRepetition,
  getWords,
};
