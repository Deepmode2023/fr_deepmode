import { ApolloLink } from "@apollo/client";
import { AuthStore } from "@/zustand/authStore";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { LOCALSTORAGE_USER_PK } from "@/global.constant";

const authStore = createSelectorHooks(AuthStore);

export const authMiddleware = new ApolloLink((operation, forward) => {
  const access_token = authStore.useAccess_token();
  const localStorageData =
    global?.window?.localStorage?.getItem(LOCALSTORAGE_USER_PK);

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorageData ?? access_token}`,
    },
  }));

  return forward(operation);
});
