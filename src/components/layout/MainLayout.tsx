import { AppShell, Container, Stack, Text } from "@mantine/core";
import { PropsWithChildren } from "react";
import { ScrollToTop } from "../widgets";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <AppShell
    header={{
      height: 80,
    }}
  >
    <AppShell.Header>
      <Stack justify="center" h="100%">
        <Text ta="center" fw={800} fz={"h2"} style={{ fontStretch: "125%" }}>
          GraphQL Github User Search App
        </Text>
      </Stack>
    </AppShell.Header>
    <AppShell.Main>
      <Container size="lg">{children}</Container>
      <ScrollToTop />
    </AppShell.Main>
  </AppShell>
);
