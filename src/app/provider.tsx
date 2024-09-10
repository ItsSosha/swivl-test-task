import { createTheme, MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

const theme = createTheme({
  fontFamily: "Mona Sans, sans-serif",
});

export const AppProvider = ({ children }: PropsWithChildren) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
