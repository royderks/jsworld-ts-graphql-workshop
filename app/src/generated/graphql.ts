import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<Array<ListItem>>;
};

export type ListItem = {
  __typename?: 'ListItem';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** @deprecated Field no longer supported */
  category: Category;
  categoryName: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
};

export type GetListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQuery = (
  { __typename?: 'Query' }
  & { list?: Maybe<Array<(
    { __typename?: 'ListItem' }
    & Pick<ListItem, 'name' | 'categoryName'>
  )>> }
);


export const GetListDocument = gql`
    query GetList {
  list {
    name
    categoryName
  }
}
    `;

/**
 * __useGetListQuery__
 *
 * To run a query within a React component, call `useGetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListQuery(baseOptions?: Apollo.QueryHookOptions<GetListQuery, GetListQueryVariables>) {
        return Apollo.useQuery<GetListQuery, GetListQueryVariables>(GetListDocument, baseOptions);
      }
export function useGetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          return Apollo.useLazyQuery<GetListQuery, GetListQueryVariables>(GetListDocument, baseOptions);
        }
export type GetListQueryHookResult = ReturnType<typeof useGetListQuery>;
export type GetListLazyQueryHookResult = ReturnType<typeof useGetListLazyQuery>;
export type GetListQueryResult = Apollo.QueryResult<GetListQuery, GetListQueryVariables>;