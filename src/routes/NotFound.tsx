import { Anchor, Center, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Center h="calc(100vh - var(--app-shell-header-height, 0px)">
      <Stack gap="md" align="center">
        <Title order={1}>404</Title>
        <Title order={3}>{t("translation:pageNotFound")}</Title>
        <Anchor component={Link} to={"users"} mt="md">
          {t("translation:backToSearch")}
        </Anchor>
      </Stack>
    </Center>
  );
};
