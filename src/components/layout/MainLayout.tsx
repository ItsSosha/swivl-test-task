import { AppShell } from "@mantine/core";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <AppShell>
    <AppShell.Header>
      <p>Header</p>
    </AppShell.Header>
    <AppShell.Main>{children}</AppShell.Main>
    <AppShell.Footer>
      <p>Footer</p>
    </AppShell.Footer>
  </AppShell>
);
