import { EventBus } from "./eventBus";
import { TIMEOUT_EVENT } from "../../../config/events";
import { EventEmitter } from "events";

export const eventTimeoutBus = <TCallback>(
  timeout: number,
  callback: TCallback
): EventEmitter => {
  setTimeout(() => {
    EventBus.emit(TIMEOUT_EVENT, callback);
  }, timeout);

  return EventBus;
};
