import { Stack } from "@mantine/core";
import { LoaderFallback } from "../LoaderFallback";
import { SearchedUser } from "@/types";
import { UserListItem } from "./UserListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSearchUsers } from "@/hooks/apollo";
import { useSearchParams } from "react-router-dom";
import { UserListItemSkeleton } from "./UserListItem/Skeleton";

const PER_LOAD = 16;

export const UserList = () => {
  const [searchParams] = useSearchParams();
  const { users, loading, fetchMore, hasNext, endCursor } = useSearchUsers({
    variables: {
      query: searchParams.get("q") ?? "",
      limit: PER_LOAD,
    },
    skip: !searchParams.get("q"),
  });

  const [ref] = useIntersectionObserver<HTMLDivElement>({
    onChange: (isIntersecting) =>
      hasNext &&
      isIntersecting &&
      fetchMore({
        variables: {
          after: endCursor,
        },
      }),
  });

  return (
    <Stack mih={400} pos="relative">
      {loading && <LoaderFallback />}
      <Stack component="ul" pl={0}>
        {users?.map((item) => {
          const user = item as SearchedUser;
          return <UserListItem key={user.login} user={user} />;
        })}
      </Stack>
      <Stack ref={ref}>
        {hasNext && [...new Array(5)].map((_) => <UserListItemSkeleton />)}
      </Stack>
    </Stack>
  );
};
