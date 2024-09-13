import { AppShell, Box, Container, Group, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { GlobalError, LocalePicker, ScrollToTop } from "../widgets";
import { ErrorBoundary } from "react-error-boundary";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <AppShell
    header={{
      height: 80,
    }}
  >
    <AppShell.Header>
      <Group align="center" h="100%" component={Container}>
        <Box flex="1 0 0" />
        <Text
          flex="3 0 0"
          ta="center"
          fw={800}
          fz={"h2"}
          style={{ fontStretch: "125%" }}
        >
          GraphQL Github User Search App
        </Text>
        <Box flex="1 0 0">
          <LocalePicker />
        </Box>
      </Group>
    </AppShell.Header>
    <AppShell.Main>
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Container size="lg">{children}</Container>
        <ScrollToTop />
      </ErrorBoundary>
    </AppShell.Main>
  </AppShell>
);
