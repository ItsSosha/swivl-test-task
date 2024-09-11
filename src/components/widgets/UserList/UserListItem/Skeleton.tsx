import { Flex, Paper, Skeleton, Stack } from "@mantine/core";

export const UserListItemSkeleton = () => {
  return (
    <Paper p="md" radius="lg" withBorder>
      <Flex
        h="100%"
        w="100%"
        direction="row"
        columnGap="md"
        c="inherit"
        td="none"
        align="stretch"
      >
        <Skeleton animate circle height={84} />
        <Stack gap="lg" mt={8}>
          <Skeleton radius={8} height={10} w={100} />
          <Skeleton radius={8} height={10} w={100} />
        </Stack>
        <Stack ml="auto" justify="flex-end">
          <Skeleton radius={8} height={10} w={160} />
        </Stack>
      </Flex>
    </Paper>
  );
};
