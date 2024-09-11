import { Stack } from "@mantine/core";
import { LoaderFallback } from "../LoaderFallback";
import { SearchedUser } from "@/types";
import { UserListItem } from "./UserListItem";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSearchUsers } from "@/hooks/apollo";

type UserListProps = {
  searchName: string;
};

const PER_LOAD = 16;

export const UserList = ({ searchName }: UserListProps) => {
  const { users, loading, fetchMore, hasNext, endCursor } = useSearchUsers({
    variables: {
      query: searchName,
      limit: PER_LOAD,
    },
    skip: !searchName,
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
    <Stack mih={400} pos="relative" component="ul" pl={0}>
      {loading && <LoaderFallback />}
      {users?.map((item) => {
        const user = item as SearchedUser;
        return <UserListItem key={user.id} user={user} />;
      })}
      <div ref={ref}></div>
    </Stack>
  );
};
