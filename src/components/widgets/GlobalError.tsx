import { Anchor, Center, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const GlobalError = () => {
  const { t } = useTranslation();

  return (
    <Center h="calc(100vh - var(--app-shell-header-height, 0px)">
      <Stack gap="md" align="center">
        <Title order={3}>{t("translation:somethingWentWrong")}</Title>
        <Anchor component={Link} to={"users"} mt="md">
          {t("translation:backToSearch")}
        </Anchor>
      </Stack>
    </Center>
  );
};
