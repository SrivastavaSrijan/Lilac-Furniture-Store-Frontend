/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';

import { ApolloClientContext, getApolloClient } from '../apollo';
import * as Types from './index';
import * as Operations from './index';

export async function getServerPageAllBanners(
  options: Omit<Apollo.QueryOptions<Types.AllBannersQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.AllBannersQuery>({
    ...options,
    query: Operations.AllBannersDocument,
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
export const useAllBanners = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.AllBannersQuery, Types.AllBannersQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllBannersDocument, options as any);
};
export type PageAllBannersComp = React.FC<{
  data?: Types.AllBannersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageAllBanners =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.AllBannersQuery,
      Types.AllBannersQueryVariables
    >,
  ) =>
  (WrappedComponent: PageAllBannersComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.AllBannersDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrAllBanners = {
  getServerPage: getServerPageAllBanners,
  withPage: withPageAllBanners,
  usePage: useAllBanners,
};
export async function getServerPageAllCategories(
  options: Omit<
    Apollo.QueryOptions<Types.AllCategoriesQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.AllCategoriesQuery>({
    ...options,
    query: Operations.AllCategoriesDocument,
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
export const useAllCategories = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.AllCategoriesQuery,
    Types.AllCategoriesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllCategoriesDocument, options as any);
};
export type PageAllCategoriesComp = React.FC<{
  data?: Types.AllCategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageAllCategories =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.AllCategoriesQuery,
      Types.AllCategoriesQueryVariables
    >,
  ) =>
  (WrappedComponent: PageAllCategoriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.AllCategoriesDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrAllCategories = {
  getServerPage: getServerPageAllCategories,
  withPage: withPageAllCategories,
  usePage: useAllCategories,
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
