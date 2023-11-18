/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
import { GraphQLNestedProperty } from '@/lib';

import {
  GetUserQuery,
  HomePageQuery,
  PaginatedProductsQuery,
  ProductsWhereQuery,
} from '.';

export type IProduct = GraphQLNestedProperty<
  PaginatedProductsQuery,
  'products'
>;

export type IProductWhere = GraphQLNestedProperty<
  ProductsWhereQuery,
  'products'
>;

export type ICategory = GraphQLNestedProperty<HomePageQuery, 'categories'>;
export type ICartItem = GraphQLNestedProperty<
  NonNullable<GetUserQuery['authenticatedItem']>,
  'cart'
>;
