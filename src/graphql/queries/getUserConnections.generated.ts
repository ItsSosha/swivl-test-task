import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserConnectionsQueryVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
  limit: Types.Scalars['Int']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  showFollowers?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  showFollowing?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type GetUserConnectionsQuery = { __typename?: 'Query', user?: { __typename?: 'User', login: string, followers?: { __typename?: 'FollowerConnection', totalCount: number, nodes?: Array<{ __typename?: 'User', id: string, login: string, avatarUrl: any } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } }, following?: { __typename?: 'FollowingConnection', totalCount: number, nodes?: Array<{ __typename?: 'User', id: string, login: string, avatarUrl: any } | null> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } } | null };


export const GetUserConnectionsDocument = gql`
    query GetUserConnections($login: String!, $limit: Int!, $after: String, $showFollowers: Boolean = false, $showFollowing: Boolean = false) {
  user(login: $login) {
    login
    followers: followers(first: $limit, after: $after) @include(if: $showFollowers) {
      nodes {
        id
        login
        avatarUrl
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    following: following(first: $limit, after: $after) @include(if: $showFollowing) {
      nodes {
        id
        login
        avatarUrl
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
    `;

/**
 * __useGetUserConnectionsQuery__
 *
 * To run a query within a React component, call `useGetUserConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserConnectionsQuery({
 *   variables: {
 *      login: // value for 'login'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *      showFollowers: // value for 'showFollowers'
 *      showFollowing: // value for 'showFollowing'
 *   },
 * });
 */
export function useGetUserConnectionsQuery(baseOptions: Apollo.QueryHookOptions<GetUserConnectionsQuery, GetUserConnectionsQueryVariables> & ({ variables: GetUserConnectionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>(GetUserConnectionsDocument, options);
      }
export function useGetUserConnectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>(GetUserConnectionsDocument, options);
        }
export function useGetUserConnectionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>(GetUserConnectionsDocument, options);
        }
export type GetUserConnectionsQueryHookResult = ReturnType<typeof useGetUserConnectionsQuery>;
export type GetUserConnectionsLazyQueryHookResult = ReturnType<typeof useGetUserConnectionsLazyQuery>;
export type GetUserConnectionsSuspenseQueryHookResult = ReturnType<typeof useGetUserConnectionsSuspenseQuery>;
export type GetUserConnectionsQueryResult = Apollo.QueryResult<GetUserConnectionsQuery, GetUserConnectionsQueryVariables>;