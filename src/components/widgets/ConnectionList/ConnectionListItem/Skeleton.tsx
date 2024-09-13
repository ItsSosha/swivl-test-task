import { Skeleton, Stack } from "@mantine/core";
import { forwardRef } from "react";

export const ConnectionListItemSkeleton = forwardRef<HTMLDivElement>(
  (_, ref) => (
    <Stack gap="sm" align="center" ref={ref}>
      <Skeleton circle h={38} w={38} />
      <Skeleton circle h={14} w={"80%"} />
    </Stack>
  )
);
