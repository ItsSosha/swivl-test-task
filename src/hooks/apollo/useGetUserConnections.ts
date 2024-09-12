import { useGetUserConnectionsQuery } from "@/graphql/queries/getUserConnections.generated";
import { UserConnections } from "@/types";

export const useGetUserConnections = (
  type: "followers" | "following",
  options: Parameters<typeof useGetUserConnectionsQuery>[0]
) => {
  const { data, ...rest } = useGetUserConnectionsQuery({
    ...options,
    ...(options.variables && {
      variables: {
        ...options.variables,
        showFollowers: type === "followers",
        showFollowing: type === "following",
      },
    }),
  });

  const connections = data?.user?.[type]?.nodes as UserConnections;
  const total = data?.user?.[type]?.totalCount ?? 0;
  const hasNext = data?.user?.[type]?.pageInfo.hasNextPage;
  const last = data?.user?.[type]?.pageInfo?.endCursor;

  return {
    connections,
    total,
    hasNext,
    last,
    ...rest,
  };
};
