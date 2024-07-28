"use client";
import { IToastMessage } from "../../model/model";
import { ToastStore } from "../../model/store";
import { AnimationFrame } from "@/shared";
import { v4 } from "uuid";

export const DisplayToastAdapter = (message: IToastMessage, time: number) => {
  const { addMessage, removeMessage } = ToastStore.getState();
  const messageWithMark = { ...message, mark: String(v4()) };
  const doneCallback = (markTime: number) => {
    removeMessage(messageWithMark);
  };
  addMessage(messageWithMark);
  AnimationFrame(time, doneCallback);
};
