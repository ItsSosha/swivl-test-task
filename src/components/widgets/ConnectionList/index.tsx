import styles from "./index.module.scss";

import { useGetUserConnections } from "@/hooks/apollo";
import { Box, Center, Text } from "@mantine/core";
import { ConnectionListItemSkeleton } from "./ConnectionListItem/Skeleton";
import { ConnectionListItem } from "./ConnectionListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mantine/hooks";
import { MEDIA_XS } from "@/utils/constants";

type ConnectionListProps = {
  login: string;
  type: "following" | "followers";
};

const PER_PAGE = 18;
const SKELETONS = 9;
const SKELETONS_XS = 6;

export const ConnectionList = ({ type, login }: ConnectionListProps) => {
  const matches = useMediaQuery(MEDIA_XS);
  const { connections, hasNext, loading, fetchMore } = useGetUserConnections(
    type,
    {
      variables: {
        login,
        limit: PER_PAGE,
      },
    }
  );
  const { t } = useTranslation();

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) => hasNext && isIntersecting && fetchMore(),
  });

  if (!loading && !connections?.length) {
    return (
      <Center p="lg">
        <Text fz="h3">{t("translation:user:noConnections")}</Text>
      </Center>
    );
  }

  return (
    <Box className={styles.grid}>
      {connections?.map((connection) => (
        <ConnectionListItem
          connection={connection}
          key={`connection-${connection?.login}`}
        />
      ))}
      {(hasNext || loading) &&
        [...new Array(matches ? SKELETONS : SKELETONS_XS)].map((_, index) => (
          <ConnectionListItemSkeleton key={index} ref={ref} />
        ))}
    </Box>
  );
};
