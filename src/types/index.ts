import { GetUserQuery } from "@/graphql/queries/getUser.generated";
import type { SearchUsersQuery } from "@/graphql/queries/searchUsers.generated";

export type SearchedUser = Extract<
  NonNullable<NonNullable<SearchUsersQuery["search"]["nodes"]>[number]>,
  { __typename: "User" }
>;

type UserDetailBase = Omit<NonNullable<GetUserQuery["user"]>, "__typename">;
export type UserDetails = Omit<UserDetailBase, "socialAccounts"> & {
  socialAccounts: UserDetailBase["socialAccounts"]["nodes"];
};
