export interface IToastMessage {
  message: string;
  condition: "success" | "error" | "warning";
  time: number;
  mark?: string;
}

export interface IToastStore {
  messageList: Array<IToastMessage>;
  addMessage: (message: IToastMessage) => void;
  removeMessage: (message: IToastMessage) => void;
}
