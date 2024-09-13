import * as Types from '../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RepositoryFieldsFragment = { __typename: 'Repository', id: string, homepageUrl?: any | null, name: string, url: any };

export type GetUserQueryVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, location?: string | null, login: string, name?: string | null, websiteUrl?: any | null, avatarUrl: any, company?: string | null, createdAt: any, bio?: string | null, topRepositories: { __typename?: 'RepositoryConnection', nodes?: Array<{ __typename: 'Repository', id: string, homepageUrl?: any | null, name: string, url: any } | null> | null } } | null, organization?: { __typename?: 'Organization', id: string, email?: string | null, location?: string | null, login: string, name?: string | null, websiteUrl?: any | null, description?: string | null, avatarUrl: any, createdAt: any, repositories: { __typename?: 'RepositoryConnection', nodes?: Array<{ __typename: 'Repository', id: string, homepageUrl?: any | null, name: string, url: any } | null> | null } } | null };

export const RepositoryFieldsFragmentDoc = gql`
    fragment RepositoryFields on Repository {
  __typename
  id
  homepageUrl
  name
  url
}
    `;
export const GetUserDocument = gql`
    query GetUser($login: String!) {
  user(login: $login) {
    id
    email
    location
    login
    name
    websiteUrl
    avatarUrl
    company
    createdAt
    bio
    topRepositories(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        ...RepositoryFields
      }
    }
  }
  organization(login: $login) {
    id
    email
    location
    login
    name
    websiteUrl
    description
    avatarUrl
    createdAt
    repositories(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        ...RepositoryFields
      }
    }
  }
}
    ${RepositoryFieldsFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;