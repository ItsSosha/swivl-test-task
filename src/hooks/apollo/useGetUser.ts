import {
  GetUserQuery,
  useGetUserQuery,
} from "@/graphql/queries/getUser.generated";

export const isUser = (
  doc: { __typename?: string } | undefined | null
): doc is GetUserQuery["user"] => doc?.__typename === "User";
export const isOrganization = (
  doc: { __typename?: string } | undefined | null
): doc is GetUserQuery["organization"] => doc?.__typename === "Organization";

export const useGetUser = (options: Parameters<typeof useGetUserQuery>[0]) => {
  const { data, ...rest } = useGetUserQuery({
    ...options,
    errorPolicy: "ignore",
  });

  const user = (data?.user || data?.organization) as
    | GetUserQuery["user"]
    | GetUserQuery["organization"];
  const repositories =
    data?.user?.topRepositories.nodes || data?.organization?.repositories.nodes;
  return { user, repositories, ...rest };
};
