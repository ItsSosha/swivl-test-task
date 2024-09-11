import { useSearchUsersQuery } from "@/graphql/queries/searchUsers.generated";
import { SearchedUser } from "@/types";

export const useSearchUsers = (
  ...args: Parameters<typeof useSearchUsersQuery>
) => {
  const { data, ...rest } = useSearchUsersQuery(...args);
  const hasNext = data?.search.pageInfo.hasNextPage;
  const endCursor = data?.search?.pageInfo?.endCursor;
  const users = data?.search.nodes as SearchedUser[] | undefined;
  return {
    ...rest,
    hasNext,
    users,
    endCursor,
  };
};
