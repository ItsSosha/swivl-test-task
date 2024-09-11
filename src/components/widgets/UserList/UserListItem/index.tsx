import styles from "./index.module.scss";

import { SearchedUser } from "@/types";
import { Avatar, Flex, Paper, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type UserListItemProps = {
  user: SearchedUser;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Paper p="md" radius="lg" shadow="sm" withBorder className={styles.root}>
      <Flex
        h="100%"
        w="100%"
        direction="row"
        columnGap="md"
        c="inherit"
        td="none"
        align="stretch"
        component={Link}
        to={`users/${user.id}`}
      >
        <Avatar src={user.avatarUrl} size="xl" />
        <Stack gap={8}>
          <Text fw="bold" fz="lg">
            {user.login}
          </Text>
          <Text mb={12} fz="md">
            {user.name}
          </Text>
        </Stack>
        {!!user.id && (
          <Stack ml="auto" justify="flex-end">
            <Text fw="bold">ID: {user.id}</Text>
          </Stack>
        )}
      </Flex>
    </Paper>
  );
};
