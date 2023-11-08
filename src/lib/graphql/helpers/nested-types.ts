/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
import { GraphQLNestedProperty } from '@/lib';

import { HomePageQuery, PaginatedProductsQuery } from '.';

export type IProduct = GraphQLNestedProperty<
  PaginatedProductsQuery,
  'products'
>;

export type ICategory = GraphQLNestedProperty<HomePageQuery, 'categories'>;
