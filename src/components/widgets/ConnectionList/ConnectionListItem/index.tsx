import { UserConnection } from "@/types";
import { Avatar, Flex, Title } from "@mantine/core";
import { Link } from "react-router-dom";

type ConnectionListItemProps = {
  connection: UserConnection;
};

export const ConnectionListItem = ({ connection }: ConnectionListItemProps) => (
  <Flex
    align="center"
    direction="column"
    component={Link}
    c="inherit"
    td="none"
    rowGap="sm"
    to={`/users/${connection?.login}`}
  >
    <Avatar src={connection?.avatarUrl} />
    <Title order={6}>{connection?.login}</Title>
  </Flex>
);
