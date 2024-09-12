import { useSearchUsersQuery } from "@/graphql/queries/searchUsers.generated";
import { SearchedUser } from "@/types";
import { useCallback } from "react";

export const useSearchUsers = (
  ...args: Parameters<typeof useSearchUsersQuery>
) => {
  const {
    data,
    fetchMore: fetchMoreUsers,
    ...rest
  } = useSearchUsersQuery(...args);

  const hasNext = data?.search.pageInfo.hasNextPage;
  const after = data?.search?.pageInfo?.endCursor;
  const users = data?.search.nodes as SearchedUser[] | undefined;

  const fetchMore = useCallback(
    () =>
      fetchMoreUsers({
        variables: {
          after,
        },
      }),
    [fetchMoreUsers, after]
  );
  return {
    ...rest,
    fetchMore,
    hasNext,
    users,
  };
};
