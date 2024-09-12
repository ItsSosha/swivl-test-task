import { GetUserQuery } from "@/graphql/queries/getUser.generated";
import { GetUserConnectionsQuery } from "@/graphql/queries/getUserConnections.generated";
import type { SearchUsersQuery } from "@/graphql/queries/searchUsers.generated";

export type SearchedUser = Extract<
  NonNullable<NonNullable<SearchUsersQuery["search"]["nodes"]>[number]>,
  { __typename: "User" }
>;

type UserDetailBase = Omit<NonNullable<GetUserQuery["user"]>, "__typename">;
export type UserDetails = Omit<UserDetailBase, "socialAccounts"> & {
  socialAccounts: UserDetailBase["socialAccounts"]["nodes"];
};

export type UserConnections = NonNullable<
  NonNullable<GetUserConnectionsQuery["user"]>["followers"]
>["nodes"];
export type UserConnection = NonNullable<UserConnections>[number];
