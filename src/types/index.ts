import type { SearchUsersQuery } from "@/graphql/queries/searchUsers.generated";

export type SearchedUser = Extract<
  NonNullable<NonNullable<SearchUsersQuery["search"]["nodes"]>[number]>,
  { __typename: "User" }
>;
