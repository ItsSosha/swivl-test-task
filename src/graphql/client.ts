import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_GH_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GH_PERSONAL_TOKEN.replace(
        "****",
        "ghp_"
      )}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        fields: {
          followers: {
            keyArgs: false,
            merge: (existing, incoming) => {
              const nodes = [...(existing?.nodes ?? []), ...incoming.nodes];
              return {
                ...incoming,
                nodes,
              };
            },
          },
          following: {
            keyArgs: false,
            merge: (existing, incoming) => {
              const nodes = [...(existing?.nodes ?? []), ...incoming.nodes];
              return {
                ...incoming,
                nodes,
              };
            },
          },
        },
      },
      Query: {
        fields: {
          search: {
            keyArgs: ["query"],
            merge(existing, incoming) {
              const nodes = [...(existing?.nodes ?? []), ...incoming.nodes];
              return {
                ...incoming,
                nodes,
              };
            },
          },
        },
      },
    },
  }),
});
