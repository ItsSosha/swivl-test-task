import { ConnectionList, LoaderFallback, UserBlog } from "@/components/widgets";
import { isOrganization, isUser, useGetUser } from "@/hooks/apollo";
import {
  Accordion,
  ActionIcon,
  Anchor,
  Avatar,
  Flex,
  Grid,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import {
  MdEmail,
  MdLocationPin,
  MdCalendarMonth,
  MdOutlineStar,
} from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";

const UserRoute = () => {
  const { login } = useParams();
  const { t } = useTranslation();
  const { user, repositories, loading } = useGetUser({
    skip: !login,
    variables: {
      login: login!,
    },
  });

  if (loading || !user) {
    return <LoaderFallback />;
  }

  const bio =
    (isUser(user) && user.bio) || (isOrganization(user) && user.description);

  return (
    <Stack align="stretch" gap="lg" mt={24}>
      <Flex
        component={Link}
        columnGap="md"
        align="center"
        to="/users"
        c="inherit"
        td="none"
      >
        <ActionIcon color="black" size="lg" radius="lg">
          <IoMdArrowBack size={32} />
        </ActionIcon>
        <Text fw="bold"> {t("translation:backToSearch")}</Text>
      </Flex>
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
        {!!bio && (
          <Paper
            component={Stack}
            style={{ alignSelf: "stretch" }}
            withBorder
            radius="md"
            p="md"
            shadow="md"
          >
            <Text>{bio}</Text>
          </Paper>
        )}
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
              <List.Item icon={<MdLocationPin size={24} />}>{`${t(
                "translation:user:location"
              )}: ${user.location}`}</List.Item>
            )}
            {isUser(user) && !!user.company && (
              <List.Item icon={<IoBriefcase size={24} />}>{`${t(
                "translation:user:company"
              )}: ${user.company}`}</List.Item>
            )}
            {!!user.email && (
              <List.Item icon={<MdEmail size={24} />}>{`${t(
                "translation:user:email"
              )}: ${user.email}`}</List.Item>
            )}
            {!!user.createdAt && (
              <List.Item icon={<MdCalendarMonth size={24} />}>{`${t(
                "translation:user:createdAt"
              )}: ${new Date(user.createdAt).toLocaleDateString()}`}</List.Item>
            )}
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper component={Stack} withBorder radius="md" p="md" shadow="md">
            <Title order={3} ta="center">
              {t("translation:user:topRepositories")}
            </Title>
            {!repositories?.length && (
              <Text fz={"h5"} ta="center">
                {t("translation:user:noRepositories")}
              </Text>
            )}
            <List type="ordered" spacing="md" center>
              {repositories?.map((repository) =>
                repository ? (
                  <List.Item
                    style={{ verticalAlign: "text-top" }}
                    icon={<MdOutlineStar size={28} color="gold" />}
                    key={repository.id}
                  >
                    <Stack gap={0}>
                      <Title order={5}>{repository.name}</Title>
                      {repository?.homepageUrl && (
                        <Anchor
                          href={repository.homepageUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t("translation:user:homepage")}
                        </Anchor>
                      )}
                      <Anchor
                        href={repository.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("translation:user:link")}
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
          <Accordion.Control>
            {t("translation:user:followers")}
          </Accordion.Control>
          <Accordion.Panel>
            <ConnectionList type="followers" login={login!} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"following"} value={"following"}>
          <Accordion.Control>
            {t("translation:user:following")}
          </Accordion.Control>
          <Accordion.Panel>
            <ConnectionList type="following" login={login!} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default UserRoute;
