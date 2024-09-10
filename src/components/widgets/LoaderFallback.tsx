import { Loader, Overlay, Stack, Text } from "@mantine/core";

export const LoaderFallback = () => (
  <Overlay component={Stack}>
    <Text>Hold on...</Text>
    <Loader />
  </Overlay>
);
