import styles from "./index.module.scss";

import { useGetUserConnections } from "@/hooks/apollo";
import { Box, Center, Text } from "@mantine/core";
import { ConnectionListItemSkeleton } from "./ConnectionListItem/Skeleton";
import { ConnectionListItem } from "./ConnectionListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type ConnectionListProps = {
  login: string;
  type: "following" | "followers";
};

const PER_PAGE = 18;

export const ConnectionList = ({ type, login }: ConnectionListProps) => {
  const { connections, hasNext, loading, fetchMore } = useGetUserConnections(
    type,
    {
      variables: {
        login,
        limit: PER_PAGE,
      },
    }
  );

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) => hasNext && isIntersecting && fetchMore(),
  });

  if (!loading && !connections?.length) {
    return (
      <Center p="lg">
        <Text fz="h3">No results found</Text>
      </Center>
    );
  }

  return (
    <Box className={styles.grid}>
      {connections?.map((connection) => (
        <div key={`connection-${connection?.login}`}>
          <ConnectionListItem connection={connection} />
        </div>
      ))}
      {(hasNext || loading) &&
        [...new Array(PER_PAGE / 2)].map((_, index) => (
          <div key={index} ref={!index ? ref : undefined}>
            <ConnectionListItemSkeleton />
          </div>
        ))}
    </Box>
  );
};
