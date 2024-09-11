import { RingLoader } from "@/components/ui";
import { apolloClient } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { createTheme, Loader, MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

const theme = createTheme({
  fontFamily: "Mona Sans, sans-serif",
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: "ring",
      },
    }),
  },
});

export const AppProvider = ({ children }: PropsWithChildren) => (
  <MantineProvider theme={theme}>
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  </MantineProvider>
);
