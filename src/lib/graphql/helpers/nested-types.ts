/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */

import { GraphQLNestedProperty } from '@/lib';

import {
  AllOrdersQuery,
  GetUserQuery,
  HomePageQuery,
  PaginatedProductsQuery,
  ProductBySlugQuery,
  ProductReviewsBySlugQuery,
  ProductsWhereQuery,
  SearchProductsQuery,
} from '.';

export type IPaginatedProduct = GraphQLNestedProperty<
  PaginatedProductsQuery,
  'products'
>;
export type IProduct = NonNullable<ProductBySlugQuery['product']>;
export type IReview = NonNullable<
  NonNullable<ProductReviewsBySlugQuery['product']>['reviews']
>[0];
export type ISearchedProducts = NonNullable<SearchProductsQuery['products']>;
export type IProductX = IPaginatedProduct & {
  variant: Required<IPaginatedProduct['variant']> & { id: string };
};
export type IProductWhere = GraphQLNestedProperty<
  ProductsWhereQuery,
  'products'
>;

export type ICategory = GraphQLNestedProperty<HomePageQuery, 'categories'>;
export type ICartItem = GraphQLNestedProperty<
  NonNullable<GetUserQuery['authenticatedItem']>,
  'cart'
>;

export type IOrderItem = GraphQLNestedProperty<
  NonNullable<AllOrdersQuery['authenticatedItem']>,
  'orders'
>;
