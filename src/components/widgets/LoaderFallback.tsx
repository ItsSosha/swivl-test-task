import { Center, Loader, Overlay, Stack, Text, Title } from "@mantine/core";

export const LoaderFallback = () => (
  <Overlay backgroundOpacity={0.5} color="#FFF" component={Center}>
    <Stack gap={"sm"} align="center">
      <Text fw={800} fz="h2">
        Hold on...
      </Text>
      <Loader size={100} />
    </Stack>
  </Overlay>
);
