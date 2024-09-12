import { Anchor, Paper, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { LoaderFallback } from "./LoaderFallback";

type UserBlogProps = {
  url: string;
};

export const UserBlog = ({ url }: UserBlogProps) => {
  const [blogReady, setBlogReady] = useState(false);
  const [error, setBlogError] = useState<Error | null>(null);

  useEffect(() => {
    const checkBlogExistence = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Could not load website: ${url}`);
        }
      } catch (e: unknown) {
        setBlogError(e as Error);
      } finally {
        setBlogReady(true);
      }
    };
    checkBlogExistence();
  }, [url]);

  return (
    <Stack w="100%" mih={!error ? "60vh" : 0} pos="relative" align="stretch">
      <Title order={3} ta="center">
        Blog
      </Title>
      {error ? (
        <Paper withBorder radius="md" p="lg" shadow="md">
          <Text fz="h4" ta="center">
            Could not load blog. Click{" "}
            <Anchor
              href={url}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              fz="h4"
            >
              here
            </Anchor>{" "}
            to visit it.
          </Text>
        </Paper>
      ) : blogReady ? (
        <Paper
          withBorder
          radius="md"
          p="lg"
          shadow="md"
          h="calc(100vh - var(--app-shell-header-height, 0px)"
          component="iframe"
          src={url}
        />
      ) : (
        <LoaderFallback />
      )}
    </Stack>
  );
};
