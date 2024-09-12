import { Skeleton, Stack } from "@mantine/core";

export const ConnectionListItemSkeleton = () => (
  <Stack gap="sm" align="center">
    <Skeleton circle h={38} w={38} />
    <Skeleton circle h={14} w={"80%"} />
  </Stack>
);
