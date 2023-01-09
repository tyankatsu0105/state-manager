import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
};

export type CreateTodoInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type DeleteTodoInput = {
  id: Scalars['Int'];
};

export type FindTodoInput = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename: 'Mutation';
  /** Create a new Todo */
  createTodo: Todo;
  /** Delete a Todo */
  deleteTodo: Todo;
  /** Update a Todo */
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type PageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  /** Find a single Todo */
  findTodo?: Maybe<Todo>;
  /** Find all Todos */
  findTodos: QueryFindTodosConnection;
};


export type QueryFindTodoArgs = {
  input: FindTodoInput;
};


export type QueryFindTodosArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryFindTodosConnection = {
  __typename: 'QueryFindTodosConnection';
  edges: Array<QueryFindTodosConnectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type QueryFindTodosConnectionEdge = {
  __typename: 'QueryFindTodosConnectionEdge';
  cursor: Scalars['String'];
  node?: Maybe<Todo>;
};

export type Todo = {
  __typename: 'Todo';
  /** The content of the Todo */
  content: Scalars['String'];
  /** The date and time the Todo was created */
  createdAt: Scalars['DateTime'];
  /** The id of the Todo */
  id: Scalars['Int'];
  /** The title of the Todo */
  title: Scalars['String'];
  /** The date and time the Todo was last updated */
  updatedAt: Scalars['DateTime'];
};

export type UpdateTodoInput = {
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type FindTodoQueryVariables = Exact<{
  input: FindTodoInput;
}>;


export type FindTodoQuery = { __typename: 'Query', findTodo?: { __typename: 'Todo', id: number, title: string, content: string, createdAt: string } | null };

export type FindTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTodosQuery = { __typename: 'Query', findTodos: { __typename: 'QueryFindTodosConnection', edges: Array<{ __typename: 'QueryFindTodosConnectionEdge', node?: { __typename: 'Todo', id: number, title: string, content: string, createdAt: string } | null }> } };


export const FindTodoDocument = gql`
    query FindTodo($input: FindTodoInput!) {
  findTodo(input: $input) {
    id
    title
    content
    createdAt
  }
}
    `;

/**
 * __useFindTodoQuery__
 *
 * To run a query within a React component, call `useFindTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindTodoQuery(baseOptions: Apollo.QueryHookOptions<FindTodoQuery, FindTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTodoQuery, FindTodoQueryVariables>(FindTodoDocument, options);
      }
export function useFindTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTodoQuery, FindTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTodoQuery, FindTodoQueryVariables>(FindTodoDocument, options);
        }
export type FindTodoQueryHookResult = ReturnType<typeof useFindTodoQuery>;
export type FindTodoLazyQueryHookResult = ReturnType<typeof useFindTodoLazyQuery>;
export type FindTodoQueryResult = Apollo.QueryResult<FindTodoQuery, FindTodoQueryVariables>;
export const FindTodosDocument = gql`
    query FindTodos {
  findTodos {
    edges {
      node {
        id
        title
        content
        createdAt
      }
    }
  }
}
    `;

/**
 * __useFindTodosQuery__
 *
 * To run a query within a React component, call `useFindTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindTodosQuery(baseOptions?: Apollo.QueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
      }
export function useFindTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
        }
export type FindTodosQueryHookResult = ReturnType<typeof useFindTodosQuery>;
export type FindTodosLazyQueryHookResult = ReturnType<typeof useFindTodosLazyQuery>;
export type FindTodosQueryResult = Apollo.QueryResult<FindTodosQuery, FindTodosQueryVariables>;