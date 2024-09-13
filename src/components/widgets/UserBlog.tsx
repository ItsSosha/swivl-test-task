import { Anchor, Paper, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

type UserBlogProps = {
  url: string;
};

export const UserBlog = ({ url }: UserBlogProps) => {
  const [blogReady, setBlogReady] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkBlogExistence = async () => {
      try {
        const urlObj = new URL(url);
        if (
          urlObj.protocol === "http" &&
          window.location.protocol === "https"
        ) {
          throw new Error();
        }
        const response = await fetch(url);
        if (response.ok) {
          setBlogReady(true);
        }
      } catch (error) {
        console.warn(`Could not load blog: ${url}`);
      }
    };
    checkBlogExistence();
  }, [url]);

  return (
    <Stack w="100%" pos="relative" align="stretch">
      <Title order={3} ta="center">
        {t("translation:user:blog")}
      </Title>
      {!blogReady ? (
        <Paper withBorder radius="md" p="lg" shadow="md">
          <Text fz="h4" ta="center">
            <Trans
              t={t}
              i18nKey={"translation:user:couldNotLoadBlog"}
              components={{
                1: (
                  <Anchor
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    fz="h4"
                  />
                ),
              }}
            />
          </Text>
        </Paper>
      ) : (
        <Paper
          withBorder
          radius="md"
          p="lg"
          shadow="md"
          h="calc(100vh - var(--app-shell-header-height, 0px)"
          component="iframe"
          src={url}
        />
      )}
    </Stack>
  );
};
