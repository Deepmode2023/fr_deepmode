import { SESSIONSTORAGE_TOKEN_PK } from "../../config/global";

export class SessionStorage {
  pk_token = SESSIONSTORAGE_TOKEN_PK;
  store: Storage;
  constructor() {
    const storeInstance = window?.sessionStorage;
    if (!storeInstance) throw new Error("Session Storage is not supported.");

    this.store = storeInstance;
  }

  getSession(): string | null {
    return this.store.getItem(this.pk_token);
  }

  setSession(token: string) {
    this.store.setItem(this.pk_token, token);
  }
}
