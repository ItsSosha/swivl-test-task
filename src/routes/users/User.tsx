import { ConnectionList, LoaderFallback, UserBlog } from "@/components/widgets";
import { useGetUser } from "@/hooks/apollo";
import {
  Accordion,
  Anchor,
  Avatar,
  Grid,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import {
  MdEmail,
  MdLocationPin,
  MdCalendarMonth,
  MdOutlineStar,
} from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";

const UserRoute = () => {
  const { login } = useParams();
  const { user, repositories, loading } = useGetUser({
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
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper
            withBorder
            radius="md"
            spacing="md"
            p="md"
            shadow="md"
            component={List}
            center
          >
            {!!user.location && (
              <List.Item
                icon={<MdLocationPin size={24} />}
              >{`Location: ${user.location}`}</List.Item>
            )}
            {!!user.company && (
              <List.Item
                icon={<IoBriefcase size={24} />}
              >{`Company: ${user.company}`}</List.Item>
            )}
            {!!user.email && (
              <List.Item
                icon={<MdEmail size={24} />}
              >{`Email: ${user.email}`}</List.Item>
            )}
            {!!user.createdAt && (
              <List.Item
                icon={<MdCalendarMonth size={24} />}
              >{`Joined: ${new Date(
                user.createdAt
              ).toLocaleDateString()}`}</List.Item>
            )}
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper component={Stack} withBorder radius="md" p="md" shadow="md">
            <Title order={3} ta="center">
              Top repositories
            </Title>
            {!repositories?.length && (
              <Text fz={"h5"} ta="center">
                No repositories found
              </Text>
            )}
            <List type="ordered" spacing="md" center>
              {repositories?.map((repository) =>
                repository ? (
                  <List.Item
                    style={{ verticalAlign: "text-top" }}
                    icon={<MdOutlineStar size={28} color="gold" />}
                  >
                    <Stack gap={0}>
                      <Title order={5}>{repository.name}</Title>
                      {repository?.homepageUrl && (
                        <Anchor
                          href={repository.homepageUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Homepage
                        </Anchor>
                      )}
                      <Anchor
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Link
                      </Anchor>
                    </Stack>
                  </List.Item>
                ) : null
              )}
            </List>
          </Paper>
        </Grid.Col>
      </Grid>
      {!!user.websiteUrl && <UserBlog url={user.websiteUrl} />}
      <Accordion multiple mb="xl">
        <Accordion.Item key={"followers"} value={"followers"}>
          <Accordion.Control>Followers</Accordion.Control>
          <Accordion.Panel>
            <ConnectionList type="followers" login={login!} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"following"} value={"following"}>
          <Accordion.Control>Following</Accordion.Control>
          <Accordion.Panel>
            <ConnectionList type="following" login={login!} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default UserRoute;
