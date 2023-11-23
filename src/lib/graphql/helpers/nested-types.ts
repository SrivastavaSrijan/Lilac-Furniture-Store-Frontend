/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */

import { GraphQLNestedProperty } from '@/lib';

import {
  GetUserQuery,
  HomePageQuery,
  PaginatedProductsQuery,
  ProductBySlugQuery,
  ProductsWhereQuery,
} from '.';

export type IPaginatedProduct = GraphQLNestedProperty<
  PaginatedProductsQuery,
  'products'
>;
export type IProduct = NonNullable<ProductBySlugQuery['product']>;
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
