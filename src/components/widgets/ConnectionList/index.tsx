import { useGetUserConnections } from "@/hooks/apollo";
import { Grid, ScrollArea } from "@mantine/core";
import { ConnectionListItemSkeleton } from "./ConnectionListItem/Skeleton";
import { ConnectionListItem } from "./ConnectionListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type ConnectionListProps = {
  login: string;
  type: "following" | "followers";
};

const PER_PAGE = 18;
const ConnectionListBreakpoints = { base: 6, xs: 4, md: 2 };

export const ConnectionList = ({ type, login }: ConnectionListProps) => {
  const { connections, hasNext, last, loading, fetchMore } =
    useGetUserConnections(type, {
      variables: {
        login,
        limit: PER_PAGE,
      },
    });

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) =>
      hasNext &&
      isIntersecting &&
      fetchMore({
        variables: {
          after: last,
        },
      }),
  });

  return (
    <ScrollArea scrollbars="y" h={"16rem"}>
      <Grid>
        {connections?.map((connection) => (
          <Grid.Col
            span={ConnectionListBreakpoints}
            key={`connection-${connection?.login}`}
          >
            <ConnectionListItem connection={connection} />
          </Grid.Col>
        ))}
        {(hasNext || loading) &&
          [...new Array(PER_PAGE / 2)].map((_, index) => (
            <Grid.Col
              span={ConnectionListBreakpoints}
              key={index}
              ref={!index ? ref : undefined}
            >
              <ConnectionListItemSkeleton />
            </Grid.Col>
          ))}
      </Grid>
    </ScrollArea>
  );
};
