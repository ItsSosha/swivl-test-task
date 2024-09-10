import { AppShell, Container } from "@mantine/core";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <AppShell
    header={{
      height: 60,
    }}
    footer={{
      height: 60,
    }}
  >
    <AppShell.Header>
      <p>Header</p>
    </AppShell.Header>
    <AppShell.Main>
      <Container>{children}</Container>
    </AppShell.Main>
    <AppShell.Footer>
      <p>Footer</p>
    </AppShell.Footer>
  </AppShell>
);
