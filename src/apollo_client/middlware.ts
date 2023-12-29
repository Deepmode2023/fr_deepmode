import { ApolloLink } from "@apollo/client";
import { useAuthStore } from "@/zustand/authStore";
import { IAuthStore } from "@/interfaces/auth";

export const authMiddleware = new ApolloLink((operation, forward) => {
  const access_token = useAuthStore((state: IAuthStore) => state.access_token);
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: access_token ?? "MATHAFACKER",
    },
  }));

  return forward(operation);
});
