import { GraphQLNestedProperty } from '@/lib';

import { HomePageQuery, PaginatedProductsQuery } from '.';

export type IProduct = GraphQLNestedProperty<
  PaginatedProductsQuery,
  'products'
>;

export type ICategory = GraphQLNestedProperty<HomePageQuery, 'categories'>;
