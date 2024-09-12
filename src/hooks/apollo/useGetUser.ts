import {
  GetUserQuery,
  useGetUserQuery,
} from "@/graphql/queries/getUser.generated";

export const useGetUser = (...args: Parameters<typeof useGetUserQuery>) => {
  const { data, ...rest } = useGetUserQuery(...args);
  const user = data?.user as GetUserQuery["user"];
  const repositories = data?.user?.topRepositories.nodes;
  return { user, repositories, ...rest };
};
