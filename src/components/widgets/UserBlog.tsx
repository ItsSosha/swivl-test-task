import { Box, Stack, Title } from "@mantine/core";
import { useEffect, useState } from "react";

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

  if (!blogReady) return <div>Loading</div>;
  if (error) return <div>error!!!</div>;

  return (
    <Stack
      w="100%"
      h="calc(100vh - var(--app-shell-header-height, 0px)"
      align="stretch"
    >
      <Title order={3} ta="center">
        Blog
      </Title>
      <Box component="iframe" src={url} flex="1 0 0" />
    </Stack>
  );
};
