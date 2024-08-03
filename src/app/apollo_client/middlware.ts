import { ApolloLink } from "@apollo/client";
import { sessionStorage } from "@/entities/storage";

export const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage()?.getSession() ?? "";

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: "Bearer ".concat(token),
    },
  }));

  return forward(operation);
});
