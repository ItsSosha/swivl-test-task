import { SearchedUser } from "@/types";
import { Avatar, Group, Paper, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type UserListItemProps = {
  user: SearchedUser;
};

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Paper p="md" radius="lg" shadow="sm" withBorder>
      <Group
        h={"100%"}
        w={"100%"}
        component={Link}
        justify="space-between"
        c={"inherit"}
        td={"none"}
      >
        <Avatar src={user.avatarUrl} size="xl" />
        <Stack>
          <Text>{user.login}</Text>
          <Text>{user.name}</Text>
          <Text>{user.id}</Text>
        </Stack>
      </Group>
    </Paper>
  );
};
