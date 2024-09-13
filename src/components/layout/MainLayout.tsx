import { AppShell, Container, Flex, Grid, Stack, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { GlobalError, LocalePicker, ScrollToTop } from "../widgets";
import { ErrorBoundary } from "react-error-boundary";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <AppShell
    header={{
      height: { base: 140, xs: 70, sm: 60 },
    }}
  >
    <AppShell.Header>
      <Flex component={Container} align="center" size="lg" h={"100%"}>
        <Grid w="100%">
          <Grid.Col span={{ base: 0, xs: 2 }} />
          <Grid.Col span={{ base: 12, xs: 8 }} h="100%">
            <Text
              ta="center"
              fw={800}
              fz={{ base: "h4", xs: "h3", sm: "h2" }}
              style={{ fontStretch: "125%" }}
            >
              GraphQL Github User Search App
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Stack h="100%" justify="center">
              <LocalePicker />
            </Stack>
          </Grid.Col>
        </Grid>
      </Flex>
    </AppShell.Header>
    <AppShell.Main>
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Container size="lg">{children}</Container>
        <ScrollToTop />
      </ErrorBoundary>
    </AppShell.Main>
  </AppShell>
);
