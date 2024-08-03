import { SESSIONSTORAGE_TOKEN_PK } from "../../config/global";

export class SessionStorage {
  pkToken = SESSIONSTORAGE_TOKEN_PK;
  store: Storage;
  constructor() {
    const storeInstance = window?.localStorage;
    if (!storeInstance) throw SessionStorage.getError();

    this.store = storeInstance;
  }

  getSession(): string | null {
    return this.store.getItem(this.pkToken);
  }

  setSession(token: string) {
    this.store.setItem(this.pkToken, token);
  }

  static getError() {
    return new Error("Session Storage is not supported.");
  }
}
