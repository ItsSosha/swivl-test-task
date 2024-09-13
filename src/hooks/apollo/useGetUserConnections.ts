import { useGetUserConnectionsQuery } from "@/graphql/queries/getUserConnections.generated";
import { UserConnections } from "@/types";
import { useCallback } from "react";

export const useGetUserConnections = (
  type: "followers" | "following",
  options: Parameters<typeof useGetUserConnectionsQuery>[0]
) => {
  const {
    data,
    fetchMore: fetchMoreConnections,
    ...rest
  } = useGetUserConnectionsQuery({
    ...options,
    ...(options.variables && {
      variables: {
        ...options.variables,
        showFollowers: type === "followers",
        showFollowing: type === "following",
      },
    }),
    errorPolicy: "ignore",
  });

  const connections = data?.user?.[type]?.nodes as UserConnections;
  const total = data?.user?.[type]?.totalCount ?? 0;
  const hasNext = data?.user?.[type]?.pageInfo.hasNextPage;
  const after = data?.user?.[type]?.pageInfo?.endCursor;

  const fetchMore = useCallback(
    () =>
      fetchMoreConnections({
        variables: {
          after,
        },
      }),
    [fetchMoreConnections, after]
  );

  return {
    connections,
    total,
    hasNext,
    fetchMore,
    ...rest,
  };
};
