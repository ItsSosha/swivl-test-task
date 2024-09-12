import { LoaderFallback, UserBlog } from "@/components/widgets";
import { useGetUser } from "@/hooks/apollo";
import { UserDetails } from "@/types";
import {
  Accordion,
  Avatar,
  Grid,
  List,
  Paper,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import { MdEmail, MdLocationPin, MdInfo } from "react-icons/md";

const aboutKeys: (keyof UserDetails)[] = ["location", "company", "email"];

const getAboutIcon = (key: keyof UserDetails) => {
  switch (key) {
    case "email":
      return <MdEmail size={20} />;
    case "location":
      return <MdLocationPin size={20} />;
    default:
      return <MdInfo size={20} />;
  }
};

const UserRoute = () => {
  const { login } = useParams();
  const { user, loading } = useGetUser({
    skip: !login,
    variables: {
      login: login!,
    },
  });

  if (loading || !user) {
    return <LoaderFallback />;
  }

  return (
    <Stack align="stretch" gap="lg" mt={24}>
      <Stack align="center">
        <Avatar
          src={user?.avatarUrl}
          name={user?.name ?? ""}
          size={200}
          variant="filled"
        />
        <Title mt="sm" order={1}>
          {user?.login}
        </Title>
        {!!user?.name && <Title order={3}>{user.name}</Title>}
      </Stack>
      <Grid gutter="xl">
        <Grid.Col span={6}>
          <Paper withBorder radius="md" component={List} p="md" shadow="md">
            {aboutKeys.map((key) =>
              user[key] ? (
                <List.Item
                  icon={
                    <ThemeIcon color="black" size={32} radius="xl">
                      {getAboutIcon(key)}
                    </ThemeIcon>
                  }
                >{`${key}: ${user[key]}`}</List.Item>
              ) : null
            )}
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>{/* TODO: Top repo links */}</Grid.Col>
      </Grid>
      {!!user.websiteUrl && <UserBlog url={user.websiteUrl} />}
      <Accordion multiple>
        <Accordion.Item key={"followers"} value={"followers"}>
          <Accordion.Control>Followers</Accordion.Control>
          <Accordion.Panel>
            {/* TODO: Followers and Following lists */}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"following"} value={"following"}>
          <Accordion.Control>Following</Accordion.Control>
          <Accordion.Panel>
            {/* TODO: Followers and Following lists */}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default UserRoute;
