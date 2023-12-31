/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-use-before-define */
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
export async function getServerPageCategoryIndex(
  options: Omit<
    Apollo.QueryOptions<Types.CategoryIndexPageQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CategoryIndexPageQuery>({
    ...options,
    query: Operations.CategoryIndexPageDocument,
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
export const useCategoryIndex = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.CategoryIndexPageQuery,
    Types.CategoryIndexPageQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CategoryIndexPageDocument, options as any);
};
export type PageCategoryIndexComp = React.FC<{
  data?: Types.CategoryIndexPageQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCategoryIndex =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.CategoryIndexPageQuery,
      Types.CategoryIndexPageQueryVariables
    >,
  ) =>
  (WrappedComponent: PageCategoryIndexComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.CategoryIndexPageDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCategoryIndex = {
  getServerPage: getServerPageCategoryIndex,
  withPage: withPageCategoryIndex,
  usePage: useCategoryIndex,
};
export async function getServerPageCategoryIndexPath(
  options: Omit<
    Apollo.QueryOptions<Types.CategoryIndexPathQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CategoryIndexPathQuery>({
    ...options,
    query: Operations.CategoryIndexPathDocument,
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
export const useCategoryIndexPath = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.CategoryIndexPathQuery,
    Types.CategoryIndexPathQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CategoryIndexPathDocument, options as any);
};
export type PageCategoryIndexPathComp = React.FC<{
  data?: Types.CategoryIndexPathQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCategoryIndexPath =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.CategoryIndexPathQuery,
      Types.CategoryIndexPathQueryVariables
    >,
  ) =>
  (WrappedComponent: PageCategoryIndexPathComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.CategoryIndexPathDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCategoryIndexPath = {
  getServerPage: getServerPageCategoryIndexPath,
  withPage: withPageCategoryIndexPath,
  usePage: useCategoryIndexPath,
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
export async function getServerPageCategoryBySlug(
  options: Omit<
    Apollo.QueryOptions<Types.CategoryBySlugQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.CategoryBySlugQuery>({
    ...options,
    query: Operations.CategoryBySlugDocument,
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
export const useCategoryBySlug = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.CategoryBySlugQuery,
    Types.CategoryBySlugQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.CategoryBySlugDocument, options as any);
};
export type PageCategoryBySlugComp = React.FC<{
  data?: Types.CategoryBySlugQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageCategoryBySlug =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.CategoryBySlugQuery,
      Types.CategoryBySlugQueryVariables
    >,
  ) =>
  (WrappedComponent: PageCategoryBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.CategoryBySlugDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrCategoryBySlug = {
  getServerPage: getServerPageCategoryBySlug,
  withPage: withPageCategoryBySlug,
  usePage: useCategoryBySlug,
};
export async function getServerPageAllProducts(
  options: Omit<Apollo.QueryOptions<Types.AllProductsQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.AllProductsQuery>({
    ...options,
    query: Operations.AllProductsDocument,
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
export const useAllProducts = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.AllProductsQuery,
    Types.AllProductsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllProductsDocument, options as any);
};
export type PageAllProductsComp = React.FC<{
  data?: Types.AllProductsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageAllProducts =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.AllProductsQuery,
      Types.AllProductsQueryVariables
    >,
  ) =>
  (WrappedComponent: PageAllProductsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.AllProductsDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrAllProducts = {
  getServerPage: getServerPageAllProducts,
  withPage: withPageAllProducts,
  usePage: useAllProducts,
};
export async function getServerPageProductBySlug(
  options: Omit<
    Apollo.QueryOptions<Types.ProductBySlugQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductBySlugQuery>({
    ...options,
    query: Operations.ProductBySlugDocument,
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
export const useProductBySlug = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.ProductBySlugQuery,
    Types.ProductBySlugQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ProductBySlugDocument, options as any);
};
export type PageProductBySlugComp = React.FC<{
  data?: Types.ProductBySlugQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProductBySlug =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.ProductBySlugQuery,
      Types.ProductBySlugQueryVariables
    >,
  ) =>
  (WrappedComponent: PageProductBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.ProductBySlugDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProductBySlug = {
  getServerPage: getServerPageProductBySlug,
  withPage: withPageProductBySlug,
  usePage: useProductBySlug,
};
export async function getServerPageProductReviewsBySlug(
  options: Omit<
    Apollo.QueryOptions<Types.ProductReviewsBySlugQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductReviewsBySlugQuery>({
    ...options,
    query: Operations.ProductReviewsBySlugDocument,
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
export const useProductReviewsBySlug = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.ProductReviewsBySlugQuery,
    Types.ProductReviewsBySlugQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ProductReviewsBySlugDocument, options as any);
};
export type PageProductReviewsBySlugComp = React.FC<{
  data?: Types.ProductReviewsBySlugQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProductReviewsBySlug =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.ProductReviewsBySlugQuery,
      Types.ProductReviewsBySlugQueryVariables
    >,
  ) =>
  (WrappedComponent: PageProductReviewsBySlugComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.ProductReviewsBySlugDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProductReviewsBySlug = {
  getServerPage: getServerPageProductReviewsBySlug,
  withPage: withPageProductReviewsBySlug,
  usePage: useProductReviewsBySlug,
};

export async function getServerPageGetPriceRange(
  options: Omit<
    Apollo.QueryOptions<Types.GetPriceRangeQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetPriceRangeQuery>({
    ...options,
    query: Operations.GetPriceRangeDocument,
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
export const useGetPriceRange = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetPriceRangeQuery,
    Types.GetPriceRangeQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetPriceRangeDocument, options as any);
};
export type PageGetPriceRangeComp = React.FC<{
  data?: Types.GetPriceRangeQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetPriceRange =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.GetPriceRangeQuery,
      Types.GetPriceRangeQueryVariables
    >,
  ) =>
  (WrappedComponent: PageGetPriceRangeComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetPriceRangeDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPriceRange = {
  getServerPage: getServerPageGetPriceRange,
  withPage: withPageGetPriceRange,
  usePage: useGetPriceRange,
};
export async function getServerPageProductWhereCount(
  options: Omit<
    Apollo.QueryOptions<Types.ProductWhereCountQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductWhereCountQuery>({
    ...options,
    query: Operations.ProductWhereCountDocument,
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
export const useProductWhereCount = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.ProductWhereCountQuery,
    Types.ProductWhereCountQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ProductWhereCountDocument, options as any);
};
export type PageProductWhereCountComp = React.FC<{
  data?: Types.ProductWhereCountQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProductWhereCount =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.ProductWhereCountQuery,
      Types.ProductWhereCountQueryVariables
    >,
  ) =>
  (WrappedComponent: PageProductWhereCountComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.ProductWhereCountDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProductWhereCount = {
  getServerPage: getServerPageProductWhereCount,
  withPage: withPageProductWhereCount,
  usePage: useProductWhereCount,
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
      options as any,
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

export async function getServerPageSearchProducts(
  options: Omit<
    Apollo.QueryOptions<Types.SearchProductsQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.SearchProductsQuery>({
    ...options,
    query: Operations.SearchProductsDocument,
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
export const useSearchProducts = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.SearchProductsQuery,
    Types.SearchProductsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.SearchProductsDocument, options as any);
};
export type PageSearchProductsComp = React.FC<{
  data?: Types.SearchProductsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageSearchProducts =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.SearchProductsQuery,
      Types.SearchProductsQueryVariables
    >,
  ) =>
  (WrappedComponent: PageSearchProductsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.SearchProductsDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrSearchProducts = {
  getServerPage: getServerPageSearchProducts,
  withPage: withPageSearchProducts,
  usePage: useSearchProducts,
};
export async function getServerPageProductDescriptors(
  options: Omit<
    Apollo.QueryOptions<Types.ProductDescriptorsQueryVariables>,
    'query'
  >,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ProductDescriptorsQuery>({
    ...options,
    query: Operations.ProductDescriptorsDocument,
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
export const useProductDescriptors = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.ProductDescriptorsQuery,
    Types.ProductDescriptorsQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ProductDescriptorsDocument, options as any);
};
export type PageProductDescriptorsComp = React.FC<{
  data?: Types.ProductDescriptorsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageProductDescriptors =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<
      Types.ProductDescriptorsQuery,
      Types.ProductDescriptorsQueryVariables
    >,
  ) =>
  (WrappedComponent: PageProductDescriptorsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.ProductDescriptorsDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrProductDescriptors = {
  getServerPage: getServerPageProductDescriptors,
  withPage: withPageProductDescriptors,
  usePage: useProductDescriptors,
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

export async function getServerPageAllOrders(
  options: Omit<Apollo.QueryOptions<Types.AllOrdersQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.AllOrdersQuery>({
    ...options,
    query: Operations.AllOrdersDocument,
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
export const useAllOrders = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.AllOrdersQuery, Types.AllOrdersQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.AllOrdersDocument, options as any);
};
export type PageAllOrdersComp = React.FC<{
  data?: Types.AllOrdersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageAllOrders =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<Types.AllOrdersQuery, Types.AllOrdersQueryVariables>,
  ) =>
  (WrappedComponent: PageAllOrdersComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.AllOrdersDocument,
      options as any,
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrAllOrders = {
  getServerPage: getServerPageAllOrders,
  withPage: withPageAllOrders,
  usePage: useAllOrders,
};
export async function getServerPageOrder(
  options: Omit<Apollo.QueryOptions<Types.OrderQueryVariables>, 'query'>,
  ctx: ApolloClientContext,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.OrderQuery>({
    ...options,
    query: Operations.OrderDocument,
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
export const useOrder = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.OrderQuery, Types.OrderQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.OrderDocument, options as any);
};
export type PageOrderComp = React.FC<{
  data?: Types.OrderQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageOrder =
  (
    optionsFunc?: (
      router: NextRouter,
    ) => QueryHookOptions<Types.OrderQuery, Types.OrderQueryVariables>,
  ) =>
  (WrappedComponent: PageOrderComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.OrderDocument, options as any);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrOrder = {
  getServerPage: getServerPageOrder,
  withPage: withPageOrder,
  usePage: useOrder,
};
