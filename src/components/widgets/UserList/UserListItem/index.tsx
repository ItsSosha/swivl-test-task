import styles from "./index.module.scss";

import { SearchedUser } from "@/types";
import { Avatar, Paper, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type UserListItemProps = {
  user: SearchedUser;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Paper
      p="md"
      radius="lg"
      shadow="sm"
      withBorder
      className={styles.root}
      component={Link}
      to={`/users/${user.login}`}
      c="inherit"
      td="none"
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
        <Text miw={0} mt="auto" fw="bold" truncate ta="end">
          ID: {user.id}
        </Text>
      )}
    </Paper>
  );
};
