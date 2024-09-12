import { useMediaQuery } from "@mantine/hooks";
import styles from "./index.module.scss";

import { Paper, Skeleton, Stack } from "@mantine/core";
import { MEDIA_XS } from "@/utils/constants";

export const UserListItemSkeleton = () => {
  const matches = useMediaQuery(MEDIA_XS);

  return (
    <Paper p="md" radius="lg" shadow="sm" withBorder className={styles.root}>
      <Skeleton animate circle height={84} />
      <Stack gap="lg" mt={8}>
        <Skeleton radius={8} height={10} w={100} />
        <Skeleton radius={8} height={10} w={100} />
      </Stack>
      <Skeleton
        mt="auto"
        ml={matches ? "auto" : 0}
        radius={8}
        height={10}
        w={160}
      />
    </Paper>
  );
};
