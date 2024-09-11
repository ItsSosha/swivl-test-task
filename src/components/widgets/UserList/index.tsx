import { useSearchUsersQuery } from "@/graphql/queries/searchUsers.generated";
import { Stack } from "@mantine/core";
import { LoaderFallback } from "../LoaderFallback";
import { SearchedUser } from "@/types";
import { UserListItem } from "./UserListItem";

type UserListProps = {
  searchName: string;
};

const PER_LOAD = 16;

export const UserList = ({ searchName }: UserListProps) => {
  const { data, loading } = useSearchUsersQuery({
    variables: {
      query: searchName,
      limit: PER_LOAD,
    },
  });

  return (
    <Stack mih={400} pos="relative" component="ul" pl={0}>
      {loading && <LoaderFallback />}
      {data?.search.nodes?.map((item) => {
        const user = item as SearchedUser;
        return <UserListItem user={user} />;
      })}
    </Stack>
  );
};
