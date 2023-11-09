/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/naming-convention */
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';

import { ApolloClientContext, getApolloClient } from '../apollo';
import * as Types from './index';
import * as Operations from './index';

export async function getServerPageHome(
  options: Omit<Apollo.QueryOptions<Types.HomePageQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.HomePageQuery>({
    ...options,
    query: Operations.HomePageDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useHome = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.HomePageQuery, Types.HomePageQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.HomePageDocument, options as any);
};
export type PageHomeComp = React.FC<{
  data?: Types.HomePageQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageHome =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<Types.HomePageQuery, Types.HomePageQueryVariables>,
  ) =>
  (WrappedComponent: PageHomeComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.HomePageDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrHome = {
  getServerPage: getServerPageHome,
  withPage: withPageHome,
  usePage: useHome,
};
export async function getServerPagePaginatedProducts(
  options: Omit<
    Apollo.QueryOptions<Types.PaginatedProductsQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.PaginatedProductsQuery>({
    ...options,
    query: Operations.PaginatedProductsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const usePaginatedProducts = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.PaginatedProductsQuery,
    Types.PaginatedProductsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.PaginatedProductsDocument, options as any);
};
export type PagePaginatedProductsComp = React.FC<{
  data?: Types.PaginatedProductsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPagePaginatedProducts =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.PaginatedProductsQuery,
      Types.PaginatedProductsQueryVariables
    >,
  ) =>
  (WrappedComponent: PagePaginatedProductsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.PaginatedProductsDocument,
      options,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrPaginatedProducts = {
  getServerPage: getServerPagePaginatedProducts,
  withPage: withPagePaginatedProducts,
  usePage: usePaginatedProducts,
};
export async function getServerPageProductsWhere(
  options: Omit<
    Apollo.QueryOptions<Types.ProductsWhereQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductsWhereQuery>({
    ...options,
    query: Operations.ProductsWhereDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useProductsWhere = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.ProductsWhereQuery,
    Types.ProductsWhereQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ProductsWhereDocument, options as any);
};
export type PageProductsWhereComp = React.FC<{
  data?: Types.ProductsWhereQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProductsWhere =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.ProductsWhereQuery,
      Types.ProductsWhereQueryVariables
    >,
  ) =>
  (WrappedComponent: PageProductsWhereComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.ProductsWhereDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProductsWhere = {
  getServerPage: getServerPageProductsWhere,
  withPage: withPageProductsWhere,
  usePage: useProductsWhere,
};
export async function getServerPageGetUser(
  options: Omit<Apollo.QueryOptions<Types.GetUserQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetUserQuery>({
    ...options,
    query: Operations.GetUserDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetUser = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserDocument, options as any);
};
export type PageGetUserComp = React.FC<{
  data?: Types.GetUserQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetUser =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
  ) =>
  (WrappedComponent: PageGetUserComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetUserDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetUser = {
  getServerPage: getServerPageGetUser,
  withPage: withPageGetUser,
  usePage: useGetUser,
};
