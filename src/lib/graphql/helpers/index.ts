/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/naming-convention */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';

import { getApolloClient } from '../apollo';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

const apolloClient = getApolloClient();
const defaultOptions = { client: apolloClient } as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CalendarDay: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AuthenticatedItem = User;

export type Banner = {
  __typename?: 'Banner';
  head?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BannerCreateInput = {
  head?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerOrderByInput = {
  head?: InputMaybe<OrderDirection>;
  href?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  subtitle?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type BannerUpdateArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};

export type BannerUpdateInput = {
  head?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerWhereInput = {
  AND?: InputMaybe<Array<BannerWhereInput>>;
  NOT?: InputMaybe<Array<BannerWhereInput>>;
  OR?: InputMaybe<Array<BannerWhereInput>>;
  head?: InputMaybe<StringFilter>;
  href?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CalendarDayFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']['input']>;
  gt?: InputMaybe<Scalars['CalendarDay']['input']>;
  gte?: InputMaybe<Scalars['CalendarDay']['input']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
  lt?: InputMaybe<Scalars['CalendarDay']['input']>;
  lte?: InputMaybe<Scalars['CalendarDay']['input']>;
  not?: InputMaybe<CalendarDayFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  variant?: Maybe<ProductVariant>;
};

export type CartItemCreateInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForCreateInput>;
};

export type CartItemManyRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
};

export type CartItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  create?: InputMaybe<Array<CartItemCreateInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
};

export type CartItemUpdateArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForUpdateInput>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  quantity?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
  variant?: InputMaybe<ProductVariantWhereInput>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};

export type CategoryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type ConfirmPaymentAndCreateOrderResult = {
  __typename?: 'ConfirmPaymentAndCreateOrderResult';
  client_secret?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  status: PaymentIntentStatus;
};

export type Coupon = {
  __typename?: 'Coupon';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountType?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  minimumPurchaseAmount?: Maybe<Scalars['Int']['output']>;
  usageLimit?: Maybe<Scalars['Int']['output']>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type CouponCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  minimumPurchaseAmount?: InputMaybe<Scalars['Int']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CouponOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  discountType?: InputMaybe<OrderDirection>;
  discountValue?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  minimumPurchaseAmount?: InputMaybe<OrderDirection>;
  usageLimit?: InputMaybe<OrderDirection>;
  validFrom?: InputMaybe<OrderDirection>;
  validUntil?: InputMaybe<OrderDirection>;
};

export type CouponUpdateArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type CouponUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountType?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  minimumPurchaseAmount?: InputMaybe<Scalars['Int']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CouponWhereInput = {
  AND?: InputMaybe<Array<CouponWhereInput>>;
  NOT?: InputMaybe<Array<CouponWhereInput>>;
  OR?: InputMaybe<Array<CouponWhereInput>>;
  code?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  discountType?: InputMaybe<StringFilter>;
  discountValue?: InputMaybe<FloatFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  minimumPurchaseAmount?: InputMaybe<IntFilter>;
  usageLimit?: InputMaybe<IntFilter>;
  validFrom?: InputMaybe<DateTimeFilter>;
  validUntil?: InputMaybe<DateTimeFilter>;
};

export type CouponWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePaymentIntentResult = {
  __typename?: 'CreatePaymentIntentResult';
  client_secret?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status: PaymentIntentStatus;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

/**  Min/Max Price  */
export type MinMax = {
  __typename?: 'MinMax';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Add an item to a cart, remove if quantity = 0  */
  addToCart?: Maybe<CartItem>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  /**  Confirm a payment intent and create an order  */
  confirmPaymentAndCreateOrder?: Maybe<ConfirmPaymentAndCreateOrderResult>;
  createBanner?: Maybe<Banner>;
  createBanners?: Maybe<Array<Maybe<Banner>>>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createCoupon?: Maybe<Coupon>;
  createCoupons?: Maybe<Array<Maybe<Coupon>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Create an payment intent  */
  createPaymentIntent?: Maybe<CreatePaymentIntentResult>;
  createProduct?: Maybe<Product>;
  createProductImage?: Maybe<ProductImage>;
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  createProductSnapshot?: Maybe<ProductSnapshot>;
  createProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  createProductVariant?: Maybe<ProductVariant>;
  createProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBanner?: Maybe<Banner>;
  deleteBanners?: Maybe<Array<Maybe<Banner>>>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteCoupon?: Maybe<Coupon>;
  deleteCoupons?: Maybe<Array<Maybe<Coupon>>>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  deleteProduct?: Maybe<Product>;
  deleteProductImage?: Maybe<ProductImage>;
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  deleteProductSnapshot?: Maybe<ProductSnapshot>;
  deleteProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  deleteProductVariant?: Maybe<ProductVariant>;
  deleteProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean']['output'];
  updateBanner?: Maybe<Banner>;
  updateBanners?: Maybe<Array<Maybe<Banner>>>;
  updateCartItem?: Maybe<CartItem>;
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  updateCoupon?: Maybe<Coupon>;
  updateCoupons?: Maybe<Array<Maybe<Coupon>>>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  updateProduct?: Maybe<Product>;
  updateProductImage?: Maybe<ProductImage>;
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  updateProductSnapshot?: Maybe<ProductSnapshot>;
  updateProductSnapshots?: Maybe<Array<Maybe<ProductSnapshot>>>;
  updateProductVariant?: Maybe<ProductVariant>;
  updateProductVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Validate a coupon against a user  */
  validateCoupon?: Maybe<ValidateCouponResult>;
};

export type MutationAddToCartArgs = {
  id: Scalars['ID']['input'];
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationConfirmPaymentAndCreateOrderArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  paymentIntentId: Scalars['String']['input'];
};

export type MutationCreateBannerArgs = {
  data: BannerCreateInput;
};

export type MutationCreateBannersArgs = {
  data: Array<BannerCreateInput>;
};

export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};

export type MutationCreateCartItemsArgs = {
  data: Array<CartItemCreateInput>;
};

export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateCouponArgs = {
  data: CouponCreateInput;
};

export type MutationCreateCouponsArgs = {
  data: Array<CouponCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};

export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};

export type MutationCreateOrderItemsArgs = {
  data: Array<OrderItemCreateInput>;
};

export type MutationCreateOrdersArgs = {
  data: Array<OrderCreateInput>;
};

export type MutationCreatePaymentIntentArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};

export type MutationCreateProductImagesArgs = {
  data: Array<ProductImageCreateInput>;
};

export type MutationCreateProductSnapshotArgs = {
  data: ProductSnapshotCreateInput;
};

export type MutationCreateProductSnapshotsArgs = {
  data: Array<ProductSnapshotCreateInput>;
};

export type MutationCreateProductVariantArgs = {
  data: ProductVariantCreateInput;
};

export type MutationCreateProductVariantsArgs = {
  data: Array<ProductVariantCreateInput>;
};

export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteBannerArgs = {
  where: BannerWhereUniqueInput;
};

export type MutationDeleteBannersArgs = {
  where: Array<BannerWhereUniqueInput>;
};

export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};

export type MutationDeleteCartItemsArgs = {
  where: Array<CartItemWhereUniqueInput>;
};

export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>;
};

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteCouponArgs = {
  where: CouponWhereUniqueInput;
};

export type MutationDeleteCouponsArgs = {
  where: Array<CouponWhereUniqueInput>;
};

export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type MutationDeleteOrderItemsArgs = {
  where: Array<OrderItemWhereUniqueInput>;
};

export type MutationDeleteOrdersArgs = {
  where: Array<OrderWhereUniqueInput>;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type MutationDeleteProductImagesArgs = {
  where: Array<ProductImageWhereUniqueInput>;
};

export type MutationDeleteProductSnapshotArgs = {
  where: ProductSnapshotWhereUniqueInput;
};

export type MutationDeleteProductSnapshotsArgs = {
  where: Array<ProductSnapshotWhereUniqueInput>;
};

export type MutationDeleteProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
};

export type MutationDeleteProductVariantsArgs = {
  where: Array<ProductVariantWhereUniqueInput>;
};

export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String']['input'];
};

export type MutationUpdateBannerArgs = {
  data: BannerUpdateInput;
  where: BannerWhereUniqueInput;
};

export type MutationUpdateBannersArgs = {
  data: Array<BannerUpdateArgs>;
};

export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};

export type MutationUpdateCartItemsArgs = {
  data: Array<CartItemUpdateArgs>;
};

export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};

export type MutationUpdateCouponsArgs = {
  data: Array<CouponUpdateArgs>;
};

export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpdateOrderItemsArgs = {
  data: Array<OrderItemUpdateArgs>;
};

export type MutationUpdateOrdersArgs = {
  data: Array<OrderUpdateArgs>;
};

export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateProductImageArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type MutationUpdateProductImagesArgs = {
  data: Array<ProductImageUpdateArgs>;
};

export type MutationUpdateProductSnapshotArgs = {
  data: ProductSnapshotUpdateInput;
  where: ProductSnapshotWhereUniqueInput;
};

export type MutationUpdateProductSnapshotsArgs = {
  data: Array<ProductSnapshotUpdateArgs>;
};

export type MutationUpdateProductVariantArgs = {
  data: ProductVariantUpdateInput;
  where: ProductVariantWhereUniqueInput;
};

export type MutationUpdateProductVariantsArgs = {
  data: Array<ProductVariantUpdateArgs>;
};

export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type MutationValidateCouponArgs = {
  couponCode: Scalars['String']['input'];
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  charge?: Maybe<Scalars['String']['output']>;
  coupon?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['CalendarDay']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<OrderItem>>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type OrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};

export type OrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type OrderCreateInput = {
  charge?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['CalendarDay']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForCreateInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  price?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  snapshot?: Maybe<ProductSnapshot>;
  variant?: Maybe<ProductVariant>;
};

export type OrderItemCreateInput = {
  order?: InputMaybe<OrderRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  snapshot?: InputMaybe<ProductSnapshotRelateToOneForCreateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForCreateInput>;
};

export type OrderItemManyRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  quantity?: InputMaybe<OrderDirection>;
};

export type OrderItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemUpdateArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateInput = {
  order?: InputMaybe<OrderRelateToOneForUpdateInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  snapshot?: InputMaybe<ProductSnapshotRelateToOneForUpdateInput>;
  variant?: InputMaybe<ProductVariantRelateToOneForUpdateInput>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<OrderWhereInput>;
  price?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  snapshot?: InputMaybe<ProductSnapshotWhereInput>;
  variant?: InputMaybe<ProductVariantWhereInput>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderManyRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderOrderByInput = {
  charge?: InputMaybe<OrderDirection>;
  coupon?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  total?: InputMaybe<OrderDirection>;
};

export type OrderRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  create?: InputMaybe<Array<OrderCreateInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
};

export type OrderRelateToOneForCreateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
};

export type OrderRelateToOneForUpdateInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  create?: InputMaybe<OrderCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderUpdateArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateInput = {
  charge?: InputMaybe<Scalars['String']['input']>;
  coupon?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['CalendarDay']['input']>;
  items?: InputMaybe<OrderItemRelateToManyForUpdateInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  charge?: InputMaybe<StringFilter>;
  coupon?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CalendarDayFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<OrderItemManyRelationFilter>;
  total?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED',
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export enum PaymentIntentStatus {
  Canceled = 'CANCELED',
  Processing = 'PROCESSING',
  RequiresAction = 'REQUIRES_ACTION',
  RequiresCapture = 'REQUIRES_CAPTURE',
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  Succeeded = 'SUCCEEDED',
}

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  company?: Maybe<Scalars['String']['output']>;
  defaultVariantId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  highestPrice?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ProductImage>;
  lowestPrice?: Maybe<Scalars['Int']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<ProductVariant>;
  variants?: Maybe<Array<ProductVariant>>;
  variantsCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductShortDescriptionArgs = {
  length?: Scalars['Int']['input'];
};

export type ProductVariantArgs = {
  skuId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantsArgs = {
  cursor?: InputMaybe<ProductVariantWhereUniqueInput>;
  orderBy?: Array<ProductVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductVariantWhereInput;
};

export type ProductVariantsCountArgs = {
  where?: ProductVariantWhereInput;
};

export type ProductCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  company?: InputMaybe<Scalars['String']['input']>;
  defaultVariantId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highestPrice?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForCreateInput>;
  lowestPrice?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<ProductVariantRelateToManyForCreateInput>;
};

export type ProductDescriptor = {
  __typename?: 'ProductDescriptor';
  companies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  styles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
};

export type ProductImageOrderByInput = {
  alt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ProductImageRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductImageUpdateArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};

export type ProductImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<ProductImageWhereInput>>;
  NOT?: InputMaybe<Array<ProductImageWhereInput>>;
  OR?: InputMaybe<Array<ProductImageWhereInput>>;
  alt?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
};

export type ProductImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  company?: InputMaybe<OrderDirection>;
  defaultVariantId?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  highestPrice?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lowestPrice?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  style?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductSnapshot = {
  __typename?: 'ProductSnapshot';
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductSnapshotCreateInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSnapshotOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  image?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
};

export type ProductSnapshotRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  create?: InputMaybe<ProductSnapshotCreateInput>;
};

export type ProductSnapshotRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  create?: InputMaybe<ProductSnapshotCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductSnapshotUpdateArgs = {
  data: ProductSnapshotUpdateInput;
  where: ProductSnapshotWhereUniqueInput;
};

export type ProductSnapshotUpdateInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSnapshotWhereInput = {
  AND?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  NOT?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  OR?: InputMaybe<Array<ProductSnapshotWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
};

export type ProductSnapshotWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  company?: InputMaybe<Scalars['String']['input']>;
  defaultVariantId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highestPrice?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForUpdateInput>;
  lowestPrice?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<ProductVariantRelateToManyForUpdateInput>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  material?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  size?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type ProductVariantCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  size?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantManyRelationFilter = {
  every?: InputMaybe<ProductVariantWhereInput>;
  none?: InputMaybe<ProductVariantWhereInput>;
  some?: InputMaybe<ProductVariantWhereInput>;
};

export type ProductVariantOrderByInput = {
  color?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  material?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  size?: InputMaybe<OrderDirection>;
  variant?: InputMaybe<OrderDirection>;
};

export type ProductVariantRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductVariantCreateInput>>;
};

export type ProductVariantRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductVariantCreateInput>>;
  disconnect?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductVariantWhereUniqueInput>>;
};

export type ProductVariantRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductVariantWhereUniqueInput>;
  create?: InputMaybe<ProductVariantCreateInput>;
};

export type ProductVariantRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductVariantWhereUniqueInput>;
  create?: InputMaybe<ProductVariantCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVariantUpdateArgs = {
  data: ProductVariantUpdateInput;
  where: ProductVariantWhereUniqueInput;
};

export type ProductVariantUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  material?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  size?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariantWhereInput = {
  AND?: InputMaybe<Array<ProductVariantWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantWhereInput>>;
  color?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  material?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  product?: InputMaybe<ProductWhereInput>;
  size?: InputMaybe<StringFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type ProductVariantWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  company?: InputMaybe<StringFilter>;
  defaultVariantId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  highestPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ProductImageWhereInput>;
  lowestPrice?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  style?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  variants?: InputMaybe<ProductVariantManyRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  banner?: Maybe<Banner>;
  banners?: Maybe<Array<Banner>>;
  bannersCount?: Maybe<Scalars['Int']['output']>;
  cartItem?: Maybe<CartItem>;
  cartItems?: Maybe<Array<CartItem>>;
  cartItemsCount?: Maybe<Scalars['Int']['output']>;
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Category>;
  coupon?: Maybe<Coupon>;
  coupons?: Maybe<Array<Coupon>>;
  couponsCount?: Maybe<Scalars['Int']['output']>;
  /**  Get the distinct over all Products  */
  getAllProductDescriptors?: Maybe<ProductDescriptor>;
  /**  Get price range over a ProductVariant  */
  getPriceRange?: Maybe<MinMax>;
  keystone: KeystoneMeta;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems?: Maybe<Array<OrderItem>>;
  orderItemsCount?: Maybe<Scalars['Int']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productImage?: Maybe<ProductImage>;
  productImages?: Maybe<Array<ProductImage>>;
  productImagesCount?: Maybe<Scalars['Int']['output']>;
  productSnapshot?: Maybe<ProductSnapshot>;
  productSnapshots?: Maybe<Array<ProductSnapshot>>;
  productSnapshotsCount?: Maybe<Scalars['Int']['output']>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<Array<ProductVariant>>;
  productVariantsCount?: Maybe<Scalars['Int']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};

export type QueryBannerArgs = {
  where: BannerWhereUniqueInput;
};

export type QueryBannersArgs = {
  cursor?: InputMaybe<BannerWhereUniqueInput>;
  orderBy?: Array<BannerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BannerWhereInput;
};

export type QueryBannersCountArgs = {
  where?: BannerWhereInput;
};

export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};

export type QueryCartItemsArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};

export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};

export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CategoryWhereInput;
};

export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput;
};

export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type QueryCouponArgs = {
  where: CouponWhereUniqueInput;
};

export type QueryCouponsArgs = {
  cursor?: InputMaybe<CouponWhereUniqueInput>;
  orderBy?: Array<CouponOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CouponWhereInput;
};

export type QueryCouponsCountArgs = {
  where?: CouponWhereInput;
};

export type QueryGetAllProductDescriptorsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryGetPriceRangeArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type QueryOrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: Array<OrderItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderItemWhereInput;
};

export type QueryOrderItemsCountArgs = {
  where?: OrderItemWhereInput;
};

export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};

export type QueryOrdersCountArgs = {
  where?: OrderWhereInput;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type QueryProductImagesArgs = {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  orderBy?: Array<ProductImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductImageWhereInput;
};

export type QueryProductImagesCountArgs = {
  where?: ProductImageWhereInput;
};

export type QueryProductSnapshotArgs = {
  where: ProductSnapshotWhereUniqueInput;
};

export type QueryProductSnapshotsArgs = {
  cursor?: InputMaybe<ProductSnapshotWhereUniqueInput>;
  orderBy?: Array<ProductSnapshotOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductSnapshotWhereInput;
};

export type QueryProductSnapshotsCountArgs = {
  where?: ProductSnapshotWhereInput;
};

export type QueryProductVariantArgs = {
  where: ProductVariantWhereUniqueInput;
};

export type QueryProductVariantsArgs = {
  cursor?: InputMaybe<ProductVariantWhereUniqueInput>;
  orderBy?: Array<ProductVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductVariantWhereInput;
};

export type QueryProductVariantsCountArgs = {
  where?: ProductVariantWhereInput;
};

export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};

export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  cart?: Maybe<Array<CartItem>>;
  cartCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Array<Order>>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
};

export type UserCartArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: Array<CartItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CartItemWhereInput;
};

export type UserCartCountArgs = {
  where?: CartItemWhereInput;
};

export type UserOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: Array<OrderOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OrderWhereInput;
};

export type UserOrdersCountArgs = {
  where?: OrderWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  cart?: InputMaybe<CartItemRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  cart?: InputMaybe<CartItemRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  cart?: InputMaybe<CartItemManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderManyRelationFilter>;
  password?: InputMaybe<PasswordFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ValidateCouponResult = {
  __typename?: 'ValidateCouponResult';
  amount: Scalars['Float']['output'];
  discountedAmount: Scalars['Float']['output'];
  isValid: Scalars['Boolean']['output'];
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type HomePageQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  skip: Scalars['Int']['input'];
}>;

export type HomePageQuery = {
  __typename?: 'Query';
  bannersCount?: number | null;
  banners?: Array<{
    __typename?: 'Banner';
    id: string;
    head?: string | null;
    href?: string | null;
    subtitle?: string | null;
    title?: string | null;
    image?: {
      __typename?: 'CloudinaryImage_File';
      publicUrlTransformed?: string | null;
    } | null;
  }> | null;
  categories?: Array<{
    __typename?: 'Category';
    id: string;
    name?: string | null;
    description?: string | null;
  }> | null;
};

export type CategoryIndexPageQueryVariables = Exact<{ [key: string]: never }>;

export type CategoryIndexPageQuery = {
  __typename?: 'Query';
  categories?: Array<{
    __typename?: 'Category';
    id: string;
    slug?: string | null;
    name?: string | null;
    description?: string | null;
  }> | null;
};

export type CategoryIndexPathQueryVariables = Exact<{ [key: string]: never }>;

export type CategoryIndexPathQuery = {
  __typename?: 'Query';
  categoriesCount?: number | null;
};

export type CreatePaymentIntentMutationVariables = Exact<{
  couponCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreatePaymentIntentMutation = {
  __typename?: 'Mutation';
  createPaymentIntent?: {
    __typename?: 'CreatePaymentIntentResult';
    id?: string | null;
    status: PaymentIntentStatus;
    client_secret?: string | null;
  } | null;
};

export type ConfirmPaymentAndCreateOrderMutationVariables = Exact<{
  paymentIntentId: Scalars['String']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type ConfirmPaymentAndCreateOrderMutation = {
  __typename?: 'Mutation';
  confirmPaymentAndCreateOrder?: {
    __typename?: 'ConfirmPaymentAndCreateOrderResult';
    client_secret?: string | null;
    id?: string | null;
    status: PaymentIntentStatus;
    order?: { __typename?: 'Order'; id: string } | null;
  } | null;
};

export type ValidateCouponMutationVariables = Exact<{
  couponCode: Scalars['String']['input'];
}>;

export type ValidateCouponMutation = {
  __typename?: 'Mutation';
  validateCoupon?: {
    __typename?: 'ValidateCouponResult';
    amount: number;
    isValid: boolean;
    discountedAmount: number;
  } | null;
};

export type AllCategoriesQueryVariables = Exact<{
  if?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderByInput> | CategoryOrderByInput>;
}>;

export type AllCategoriesQuery = {
  __typename?: 'Query';
  categories?: Array<{
    __typename?: 'Category';
    slug?: string | null;
    name?: string | null;
  }> | null;
};

export type CategoryBySlugQueryVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;

export type CategoryBySlugQuery = {
  __typename?: 'Query';
  category?: {
    __typename?: 'Category';
    slug?: string | null;
    name?: string | null;
    description?: string | null;
    productsCount?: number | null;
    image?: {
      __typename?: 'CloudinaryImage_File';
      publicUrlTransformed?: string | null;
    } | null;
  } | null;
};

export type AllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsQuery = {
  __typename?: 'Query';
  products?: Array<{ __typename?: 'Product'; slug?: string | null }> | null;
};

export type ProductBySlugQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;

export type ProductBySlugQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    name?: string | null;
    style?: string | null;
    type?: string | null;
    description?: string | null;
    company?: string | null;
    slug?: string | null;
    category?: { __typename?: 'Category'; name?: string | null } | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
    variants?: Array<{
      __typename?: 'ProductVariant';
      color?: string | null;
      id: string;
      material?: string | null;
      price?: number | null;
      size?: string | null;
      variant?: string | null;
    }> | null;
  } | null;
};

export type GetPriceRangeQueryVariables = Exact<{ [key: string]: never }>;

export type GetPriceRangeQuery = {
  __typename?: 'Query';
  getPriceRange?: {
    __typename?: 'MinMax';
    max?: number | null;
    min?: number | null;
  } | null;
};

export type ProductWhereCountQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
}>;

export type ProductWhereCountQuery = {
  __typename?: 'Query';
  productsCount?: number | null;
};

export type PaginatedProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  where?: InputMaybe<ProductWhereInput>;
  includeDesc?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Array<ProductOrderByInput> | ProductOrderByInput>;
}>;

export type PaginatedProductsQuery = {
  __typename?: 'Query';
  productsCount?: number | null;
  products?: Array<{
    __typename?: 'Product';
    id: string;
    slug?: string | null;
    name?: string | null;
    style?: string | null;
    company?: string | null;
    type?: string | null;
    description?: string | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
    variant?: {
      __typename?: 'ProductVariant';
      price?: number | null;
      id: string;
    } | null;
  }> | null;
};

export type ProductsWhereQueryVariables = Exact<{
  where: ProductWhereInput;
  includeDesc?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ProductsWhereQuery = {
  __typename?: 'Query';
  products?: Array<{
    __typename?: 'Product';
    id: string;
    slug?: string | null;
    name?: string | null;
    style?: string | null;
    company?: string | null;
    type?: string | null;
    description?: string | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
    variant?: {
      __typename?: 'ProductVariant';
      price?: number | null;
      id: string;
    } | null;
  }> | null;
};

export type AddToCartMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type AddToCartMutation = {
  __typename?: 'Mutation';
  addToCart?: {
    __typename?: 'CartItem';
    variant?: {
      __typename?: 'ProductVariant';
      product?: { __typename?: 'Product'; id: string } | null;
    } | null;
  } | null;
};

export type UpdateCartItemMutationVariables = Exact<{
  where: CartItemWhereUniqueInput;
  data: CartItemUpdateInput;
}>;

export type UpdateCartItemMutation = {
  __typename?: 'Mutation';
  updateCartItem?: { __typename?: 'CartItem'; quantity?: number | null } | null;
};

export type DeleteCartItemMutationVariables = Exact<{
  where: CartItemWhereUniqueInput;
}>;

export type DeleteCartItemMutation = {
  __typename?: 'Mutation';
  deleteCartItem?: { __typename?: 'CartItem'; id: string } | null;
};

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchProductsQuery = {
  __typename?: 'Query';
  products?: Array<{
    __typename?: 'Product';
    id: string;
    name?: string | null;
    shortDescription?: string | null;
    type?: string | null;
    style?: string | null;
    company?: string | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
    variant?: {
      __typename?: 'ProductVariant';
      price?: number | null;
      id: string;
    } | null;
    category?: {
      __typename?: 'Category';
      id: string;
      name?: string | null;
    } | null;
  }> | null;
};

export type ProductDescriptorsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ProductDescriptorsQuery = {
  __typename?: 'Query';
  getAllProductDescriptors?: {
    __typename?: 'ProductDescriptor';
    companies?: Array<string | null> | null;
    styles?: Array<string | null> | null;
    types?: Array<string | null> | null;
  } | null;
  categories?: Array<{
    __typename?: 'Category';
    name?: string | null;
    slug?: string | null;
  }> | null;
};

export type GetUserQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<CartItemOrderByInput> | CartItemOrderByInput>;
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  authenticatedItem?: {
    __typename?: 'User';
    id: string;
    email?: string | null;
    name?: string | null;
    cart?: Array<{
      __typename?: 'CartItem';
      id: string;
      quantity?: number | null;
      variant?: {
        __typename?: 'ProductVariant';
        id: string;
        price?: number | null;
        product?: {
          __typename?: 'Product';
          name?: string | null;
          shortDescription?: string | null;
          id: string;
          image?: {
            __typename?: 'ProductImage';
            image?: {
              __typename?: 'CloudinaryImage_File';
              publicUrlTransformed?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }> | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?:
    | { __typename?: 'UserAuthenticationWithPasswordFailure'; message: string }
    | {
        __typename?: 'UserAuthenticationWithPasswordSuccess';
        sessionToken: string;
        item: { __typename?: 'User'; id: string };
      }
    | null;
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: 'Mutation'; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  data: UserCreateInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  createUser?: { __typename?: 'User'; id: string; name?: string | null } | null;
};

export type SendUserPasswordResetLinkMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type SendUserPasswordResetLinkMutation = {
  __typename?: 'Mutation';
  sendUserPasswordResetLink: boolean;
};

export type RedeemUserPasswordResetTokenMutationVariables = Exact<{
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type RedeemUserPasswordResetTokenMutation = {
  __typename?: 'Mutation';
  redeemUserPasswordResetToken?: {
    __typename?: 'RedeemUserPasswordResetTokenResult';
    code: PasswordResetRedemptionErrorCode;
  } | null;
};

export type AllOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type AllOrdersQuery = {
  __typename?: 'Query';
  authenticatedItem?: {
    __typename?: 'User';
    orders?: Array<{
      __typename?: 'Order';
      id: string;
      createdAt?: any | null;
      itemsCount?: number | null;
      total?: number | null;
      charge?: string | null;
      items?: Array<{
        __typename?: 'OrderItem';
        id: string;
        price?: number | null;
        quantity?: number | null;
        snapshot?: {
          __typename?: 'ProductSnapshot';
          id: string;
          image?: string | null;
          meta?: any | null;
          name?: string | null;
          price?: number | null;
        } | null;
      }> | null;
    }> | null;
  } | null;
};

export type OrderQueryVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;

export type OrderQuery = {
  __typename?: 'Query';
  order?: {
    __typename?: 'Order';
    id: string;
    createdAt?: any | null;
    itemsCount?: number | null;
    total?: number | null;
    charge?: string | null;
    items?: Array<{
      __typename?: 'OrderItem';
      id: string;
      price?: number | null;
      quantity?: number | null;
      snapshot?: {
        __typename?: 'ProductSnapshot';
        id: string;
        image?: string | null;
        meta?: any | null;
        name?: string | null;
        price?: number | null;
      } | null;
    }> | null;
  } | null;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  AuthenticatedItem: User;
  UserAuthenticationWithPasswordResult:
    | UserAuthenticationWithPasswordFailure
    | UserAuthenticationWithPasswordSuccess;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticatedItem: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['AuthenticatedItem']
  >;
  Banner: ResolverTypeWrapper<Banner>;
  BannerCreateInput: BannerCreateInput;
  BannerOrderByInput: BannerOrderByInput;
  BannerUpdateArgs: BannerUpdateArgs;
  BannerUpdateInput: BannerUpdateInput;
  BannerWhereInput: BannerWhereInput;
  BannerWhereUniqueInput: BannerWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanFilter: BooleanFilter;
  CalendarDay: ResolverTypeWrapper<Scalars['CalendarDay']['output']>;
  CalendarDayFilter: CalendarDayFilter;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemCreateInput: CartItemCreateInput;
  CartItemManyRelationFilter: CartItemManyRelationFilter;
  CartItemOrderByInput: CartItemOrderByInput;
  CartItemRelateToManyForCreateInput: CartItemRelateToManyForCreateInput;
  CartItemRelateToManyForUpdateInput: CartItemRelateToManyForUpdateInput;
  CartItemUpdateArgs: CartItemUpdateArgs;
  CartItemUpdateInput: CartItemUpdateInput;
  CartItemWhereInput: CartItemWhereInput;
  CartItemWhereUniqueInput: CartItemWhereUniqueInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryRelateToOneForCreateInput: CategoryRelateToOneForCreateInput;
  CategoryRelateToOneForUpdateInput: CategoryRelateToOneForUpdateInput;
  CategoryUpdateArgs: CategoryUpdateArgs;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: ResolverTypeWrapper<CloudinaryImage_File>;
  ConfirmPaymentAndCreateOrderResult: ResolverTypeWrapper<ConfirmPaymentAndCreateOrderResult>;
  Coupon: ResolverTypeWrapper<Coupon>;
  CouponCreateInput: CouponCreateInput;
  CouponOrderByInput: CouponOrderByInput;
  CouponUpdateArgs: CouponUpdateArgs;
  CouponUpdateInput: CouponUpdateInput;
  CouponWhereInput: CouponWhereInput;
  CouponWhereUniqueInput: CouponWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  CreatePaymentIntentResult: ResolverTypeWrapper<CreatePaymentIntentResult>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFilter: FloatFilter;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDFilter: IdFilter;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFilter: IntFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  KeystoneAdminMeta: ResolverTypeWrapper<KeystoneAdminMeta>;
  KeystoneAdminUIFieldGroupMeta: ResolverTypeWrapper<KeystoneAdminUiFieldGroupMeta>;
  KeystoneAdminUIFieldMeta: ResolverTypeWrapper<KeystoneAdminUiFieldMeta>;
  KeystoneAdminUIFieldMetaCreateView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaCreateView>;
  KeystoneAdminUIFieldMetaCreateViewFieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
  KeystoneAdminUIFieldMetaIsNonNull: KeystoneAdminUiFieldMetaIsNonNull;
  KeystoneAdminUIFieldMetaItemView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaItemView>;
  KeystoneAdminUIFieldMetaItemViewFieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
  KeystoneAdminUIFieldMetaItemViewFieldPosition: KeystoneAdminUiFieldMetaItemViewFieldPosition;
  KeystoneAdminUIFieldMetaListView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaListView>;
  KeystoneAdminUIFieldMetaListViewFieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
  KeystoneAdminUIListMeta: ResolverTypeWrapper<KeystoneAdminUiListMeta>;
  KeystoneAdminUISort: ResolverTypeWrapper<KeystoneAdminUiSort>;
  KeystoneAdminUISortDirection: KeystoneAdminUiSortDirection;
  KeystoneMeta: ResolverTypeWrapper<KeystoneMeta>;
  MinMax: ResolverTypeWrapper<MinMax>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedStringFilter: NestedStringFilter;
  Order: ResolverTypeWrapper<Order>;
  OrderCreateInput: OrderCreateInput;
  OrderDirection: OrderDirection;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemManyRelationFilter: OrderItemManyRelationFilter;
  OrderItemOrderByInput: OrderItemOrderByInput;
  OrderItemRelateToManyForCreateInput: OrderItemRelateToManyForCreateInput;
  OrderItemRelateToManyForUpdateInput: OrderItemRelateToManyForUpdateInput;
  OrderItemUpdateArgs: OrderItemUpdateArgs;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyRelationFilter: OrderManyRelationFilter;
  OrderOrderByInput: OrderOrderByInput;
  OrderRelateToManyForCreateInput: OrderRelateToManyForCreateInput;
  OrderRelateToManyForUpdateInput: OrderRelateToManyForUpdateInput;
  OrderRelateToOneForCreateInput: OrderRelateToOneForCreateInput;
  OrderRelateToOneForUpdateInput: OrderRelateToOneForUpdateInput;
  OrderUpdateArgs: OrderUpdateArgs;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PasswordFilter: PasswordFilter;
  PasswordResetRedemptionErrorCode: PasswordResetRedemptionErrorCode;
  PasswordState: ResolverTypeWrapper<PasswordState>;
  PaymentIntentStatus: PaymentIntentStatus;
  Product: ResolverTypeWrapper<Product>;
  ProductCreateInput: ProductCreateInput;
  ProductDescriptor: ResolverTypeWrapper<ProductDescriptor>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductImageCreateInput: ProductImageCreateInput;
  ProductImageOrderByInput: ProductImageOrderByInput;
  ProductImageRelateToOneForCreateInput: ProductImageRelateToOneForCreateInput;
  ProductImageRelateToOneForUpdateInput: ProductImageRelateToOneForUpdateInput;
  ProductImageUpdateArgs: ProductImageUpdateArgs;
  ProductImageUpdateInput: ProductImageUpdateInput;
  ProductImageWhereInput: ProductImageWhereInput;
  ProductImageWhereUniqueInput: ProductImageWhereUniqueInput;
  ProductManyRelationFilter: ProductManyRelationFilter;
  ProductOrderByInput: ProductOrderByInput;
  ProductRelateToManyForCreateInput: ProductRelateToManyForCreateInput;
  ProductRelateToManyForUpdateInput: ProductRelateToManyForUpdateInput;
  ProductRelateToOneForCreateInput: ProductRelateToOneForCreateInput;
  ProductRelateToOneForUpdateInput: ProductRelateToOneForUpdateInput;
  ProductSnapshot: ResolverTypeWrapper<ProductSnapshot>;
  ProductSnapshotCreateInput: ProductSnapshotCreateInput;
  ProductSnapshotOrderByInput: ProductSnapshotOrderByInput;
  ProductSnapshotRelateToOneForCreateInput: ProductSnapshotRelateToOneForCreateInput;
  ProductSnapshotRelateToOneForUpdateInput: ProductSnapshotRelateToOneForUpdateInput;
  ProductSnapshotUpdateArgs: ProductSnapshotUpdateArgs;
  ProductSnapshotUpdateInput: ProductSnapshotUpdateInput;
  ProductSnapshotWhereInput: ProductSnapshotWhereInput;
  ProductSnapshotWhereUniqueInput: ProductSnapshotWhereUniqueInput;
  ProductUpdateArgs: ProductUpdateArgs;
  ProductUpdateInput: ProductUpdateInput;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  ProductVariantCreateInput: ProductVariantCreateInput;
  ProductVariantManyRelationFilter: ProductVariantManyRelationFilter;
  ProductVariantOrderByInput: ProductVariantOrderByInput;
  ProductVariantRelateToManyForCreateInput: ProductVariantRelateToManyForCreateInput;
  ProductVariantRelateToManyForUpdateInput: ProductVariantRelateToManyForUpdateInput;
  ProductVariantRelateToOneForCreateInput: ProductVariantRelateToOneForCreateInput;
  ProductVariantRelateToOneForUpdateInput: ProductVariantRelateToOneForUpdateInput;
  ProductVariantUpdateArgs: ProductVariantUpdateArgs;
  ProductVariantUpdateInput: ProductVariantUpdateInput;
  ProductVariantWhereInput: ProductVariantWhereInput;
  ProductVariantWhereUniqueInput: ProductVariantWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  RedeemUserPasswordResetTokenResult: ResolverTypeWrapper<RedeemUserPasswordResetTokenResult>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserAuthenticationWithPasswordFailure: ResolverTypeWrapper<UserAuthenticationWithPasswordFailure>;
  UserAuthenticationWithPasswordResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserAuthenticationWithPasswordResult']
  >;
  UserAuthenticationWithPasswordSuccess: ResolverTypeWrapper<UserAuthenticationWithPasswordSuccess>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateCouponResult: ResolverTypeWrapper<ValidateCouponResult>;
  ValidateUserPasswordResetTokenResult: ResolverTypeWrapper<ValidateUserPasswordResetTokenResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticatedItem: ResolversUnionTypes<ResolversParentTypes>['AuthenticatedItem'];
  Banner: Banner;
  BannerCreateInput: BannerCreateInput;
  BannerOrderByInput: BannerOrderByInput;
  BannerUpdateArgs: BannerUpdateArgs;
  BannerUpdateInput: BannerUpdateInput;
  BannerWhereInput: BannerWhereInput;
  BannerWhereUniqueInput: BannerWhereUniqueInput;
  Boolean: Scalars['Boolean']['output'];
  BooleanFilter: BooleanFilter;
  CalendarDay: Scalars['CalendarDay']['output'];
  CalendarDayFilter: CalendarDayFilter;
  CartItem: CartItem;
  CartItemCreateInput: CartItemCreateInput;
  CartItemManyRelationFilter: CartItemManyRelationFilter;
  CartItemOrderByInput: CartItemOrderByInput;
  CartItemRelateToManyForCreateInput: CartItemRelateToManyForCreateInput;
  CartItemRelateToManyForUpdateInput: CartItemRelateToManyForUpdateInput;
  CartItemUpdateArgs: CartItemUpdateArgs;
  CartItemUpdateInput: CartItemUpdateInput;
  CartItemWhereInput: CartItemWhereInput;
  CartItemWhereUniqueInput: CartItemWhereUniqueInput;
  Category: Category;
  CategoryCreateInput: CategoryCreateInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryRelateToOneForCreateInput: CategoryRelateToOneForCreateInput;
  CategoryRelateToOneForUpdateInput: CategoryRelateToOneForUpdateInput;
  CategoryUpdateArgs: CategoryUpdateArgs;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: CloudinaryImage_File;
  ConfirmPaymentAndCreateOrderResult: ConfirmPaymentAndCreateOrderResult;
  Coupon: Coupon;
  CouponCreateInput: CouponCreateInput;
  CouponOrderByInput: CouponOrderByInput;
  CouponUpdateArgs: CouponUpdateArgs;
  CouponUpdateInput: CouponUpdateInput;
  CouponWhereInput: CouponWhereInput;
  CouponWhereUniqueInput: CouponWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  CreatePaymentIntentResult: CreatePaymentIntentResult;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Float: Scalars['Float']['output'];
  FloatFilter: FloatFilter;
  ID: Scalars['ID']['output'];
  IDFilter: IdFilter;
  Int: Scalars['Int']['output'];
  IntFilter: IntFilter;
  JSON: Scalars['JSON']['output'];
  KeystoneAdminMeta: KeystoneAdminMeta;
  KeystoneAdminUIFieldGroupMeta: KeystoneAdminUiFieldGroupMeta;
  KeystoneAdminUIFieldMeta: KeystoneAdminUiFieldMeta;
  KeystoneAdminUIFieldMetaCreateView: KeystoneAdminUiFieldMetaCreateView;
  KeystoneAdminUIFieldMetaItemView: KeystoneAdminUiFieldMetaItemView;
  KeystoneAdminUIFieldMetaListView: KeystoneAdminUiFieldMetaListView;
  KeystoneAdminUIListMeta: KeystoneAdminUiListMeta;
  KeystoneAdminUISort: KeystoneAdminUiSort;
  KeystoneMeta: KeystoneMeta;
  MinMax: MinMax;
  Mutation: {};
  NestedStringFilter: NestedStringFilter;
  Order: Order;
  OrderCreateInput: OrderCreateInput;
  OrderItem: OrderItem;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemManyRelationFilter: OrderItemManyRelationFilter;
  OrderItemOrderByInput: OrderItemOrderByInput;
  OrderItemRelateToManyForCreateInput: OrderItemRelateToManyForCreateInput;
  OrderItemRelateToManyForUpdateInput: OrderItemRelateToManyForUpdateInput;
  OrderItemUpdateArgs: OrderItemUpdateArgs;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyRelationFilter: OrderManyRelationFilter;
  OrderOrderByInput: OrderOrderByInput;
  OrderRelateToManyForCreateInput: OrderRelateToManyForCreateInput;
  OrderRelateToManyForUpdateInput: OrderRelateToManyForUpdateInput;
  OrderRelateToOneForCreateInput: OrderRelateToOneForCreateInput;
  OrderRelateToOneForUpdateInput: OrderRelateToOneForUpdateInput;
  OrderUpdateArgs: OrderUpdateArgs;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PasswordFilter: PasswordFilter;
  PasswordState: PasswordState;
  Product: Product;
  ProductCreateInput: ProductCreateInput;
  ProductDescriptor: ProductDescriptor;
  ProductImage: ProductImage;
  ProductImageCreateInput: ProductImageCreateInput;
  ProductImageOrderByInput: ProductImageOrderByInput;
  ProductImageRelateToOneForCreateInput: ProductImageRelateToOneForCreateInput;
  ProductImageRelateToOneForUpdateInput: ProductImageRelateToOneForUpdateInput;
  ProductImageUpdateArgs: ProductImageUpdateArgs;
  ProductImageUpdateInput: ProductImageUpdateInput;
  ProductImageWhereInput: ProductImageWhereInput;
  ProductImageWhereUniqueInput: ProductImageWhereUniqueInput;
  ProductManyRelationFilter: ProductManyRelationFilter;
  ProductOrderByInput: ProductOrderByInput;
  ProductRelateToManyForCreateInput: ProductRelateToManyForCreateInput;
  ProductRelateToManyForUpdateInput: ProductRelateToManyForUpdateInput;
  ProductRelateToOneForCreateInput: ProductRelateToOneForCreateInput;
  ProductRelateToOneForUpdateInput: ProductRelateToOneForUpdateInput;
  ProductSnapshot: ProductSnapshot;
  ProductSnapshotCreateInput: ProductSnapshotCreateInput;
  ProductSnapshotOrderByInput: ProductSnapshotOrderByInput;
  ProductSnapshotRelateToOneForCreateInput: ProductSnapshotRelateToOneForCreateInput;
  ProductSnapshotRelateToOneForUpdateInput: ProductSnapshotRelateToOneForUpdateInput;
  ProductSnapshotUpdateArgs: ProductSnapshotUpdateArgs;
  ProductSnapshotUpdateInput: ProductSnapshotUpdateInput;
  ProductSnapshotWhereInput: ProductSnapshotWhereInput;
  ProductSnapshotWhereUniqueInput: ProductSnapshotWhereUniqueInput;
  ProductUpdateArgs: ProductUpdateArgs;
  ProductUpdateInput: ProductUpdateInput;
  ProductVariant: ProductVariant;
  ProductVariantCreateInput: ProductVariantCreateInput;
  ProductVariantManyRelationFilter: ProductVariantManyRelationFilter;
  ProductVariantOrderByInput: ProductVariantOrderByInput;
  ProductVariantRelateToManyForCreateInput: ProductVariantRelateToManyForCreateInput;
  ProductVariantRelateToManyForUpdateInput: ProductVariantRelateToManyForUpdateInput;
  ProductVariantRelateToOneForCreateInput: ProductVariantRelateToOneForCreateInput;
  ProductVariantRelateToOneForUpdateInput: ProductVariantRelateToOneForUpdateInput;
  ProductVariantUpdateArgs: ProductVariantUpdateArgs;
  ProductVariantUpdateInput: ProductVariantUpdateInput;
  ProductVariantWhereInput: ProductVariantWhereInput;
  ProductVariantWhereUniqueInput: ProductVariantWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: {};
  RedeemUserPasswordResetTokenResult: RedeemUserPasswordResetTokenResult;
  String: Scalars['String']['output'];
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserAuthenticationWithPasswordFailure: UserAuthenticationWithPasswordFailure;
  UserAuthenticationWithPasswordResult: ResolversUnionTypes<ResolversParentTypes>['UserAuthenticationWithPasswordResult'];
  UserAuthenticationWithPasswordSuccess: UserAuthenticationWithPasswordSuccess;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateCouponResult: ValidateCouponResult;
  ValidateUserPasswordResetTokenResult: ValidateUserPasswordResetTokenResult;
};

export type AuthenticatedItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AuthenticatedItem'] = ResolversParentTypes['AuthenticatedItem'],
> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type BannerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Banner'] = ResolversParentTypes['Banner'],
> = {
  head?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes['CloudinaryImage_File']>,
    ParentType,
    ContextType
  >;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CalendarDayScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['CalendarDay'], any> {
  name: 'CalendarDay';
}

export type CartItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  variant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes['CloudinaryImage_File']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<
    Maybe<Array<ResolversTypes['Product']>>,
    ParentType,
    ContextType,
    RequireFields<CategoryProductsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  productsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<CategoryProductsCountArgs, 'where'>
  >;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloudinaryImage_FileResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CloudinaryImage_File'] = ResolversParentTypes['CloudinaryImage_File'],
> = {
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalFilename?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  publicUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  publicUrlTransformed?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    Partial<CloudinaryImage_FilePublicUrlTransformedArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmPaymentAndCreateOrderResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ConfirmPaymentAndCreateOrderResult'] = ResolversParentTypes['ConfirmPaymentAndCreateOrderResult'],
> = {
  client_secret?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['PaymentIntentStatus'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon'],
> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  discountType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  discountValue?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  minimumPurchaseAmount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  usageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  validFrom?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  validUntil?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePaymentIntentResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreatePaymentIntentResult'] = ResolversParentTypes['CreatePaymentIntentResult'],
> = {
  client_secret?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['PaymentIntentStatus'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeystoneAdminMetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminMeta'] = ResolversParentTypes['KeystoneAdminMeta'],
> = {
  list?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIListMeta']>,
    ParentType,
    ContextType,
    RequireFields<KeystoneAdminMetaListArgs, 'key'>
  >;
  lists?: Resolver<
    Array<ResolversTypes['KeystoneAdminUIListMeta']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldGroupMetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIFieldGroupMeta'] = ResolversParentTypes['KeystoneAdminUIFieldGroupMeta'],
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  fields?: Resolver<
    Array<ResolversTypes['KeystoneAdminUIFieldMeta']>,
    ParentType,
    ContextType
  >;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIFieldMeta'] = ResolversParentTypes['KeystoneAdminUIFieldMeta'],
> = {
  createView?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaCreateView'],
    ParentType,
    ContextType
  >;
  customViewsIndex?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  fieldMeta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isFilterable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isNonNull?: Resolver<
    Maybe<Array<ResolversTypes['KeystoneAdminUIFieldMetaIsNonNull']>>,
    ParentType,
    ContextType
  >;
  isOrderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemView?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemView']>,
    ParentType,
    ContextType,
    Partial<KeystoneAdminUiFieldMetaItemViewArgs>
  >;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listView?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaListView'],
    ParentType,
    ContextType
  >;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  search?: Resolver<
    Maybe<ResolversTypes['QueryMode']>,
    ParentType,
    ContextType
  >;
  viewsIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaCreateViewResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'],
> = {
  fieldMode?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaCreateViewFieldMode'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaItemViewResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'],
> = {
  fieldMode?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldMode']>,
    ParentType,
    ContextType
  >;
  fieldPosition?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldPosition']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaListViewResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIFieldMetaListView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaListView'],
> = {
  fieldMode?: Resolver<
    ResolversTypes['KeystoneAdminUIFieldMetaListViewFieldMode'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiListMetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUIListMeta'] = ResolversParentTypes['KeystoneAdminUIListMeta'],
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  fields?: Resolver<
    Array<ResolversTypes['KeystoneAdminUIFieldMeta']>,
    ParentType,
    ContextType
  >;
  groups?: Resolver<
    Array<ResolversTypes['KeystoneAdminUIFieldGroupMeta']>,
    ParentType,
    ContextType
  >;
  hideCreate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialColumns?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  initialSort?: Resolver<
    Maybe<ResolversTypes['KeystoneAdminUISort']>,
    ParentType,
    ContextType
  >;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSingleton?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  singular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiSortResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneAdminUISort'] = ResolversParentTypes['KeystoneAdminUISort'],
> = {
  direction?: Resolver<
    ResolversTypes['KeystoneAdminUISortDirection'],
    ParentType,
    ContextType
  >;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneMetaResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['KeystoneMeta'] = ResolversParentTypes['KeystoneMeta'],
> = {
  adminMeta?: Resolver<
    ResolversTypes['KeystoneAdminMeta'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinMaxResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['MinMax'] = ResolversParentTypes['MinMax'],
> = {
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addToCart?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'id'>
  >;
  authenticateUserWithPassword?: Resolver<
    Maybe<ResolversTypes['UserAuthenticationWithPasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAuthenticateUserWithPasswordArgs,
      'email' | 'password'
    >
  >;
  confirmPaymentAndCreateOrder?: Resolver<
    Maybe<ResolversTypes['ConfirmPaymentAndCreateOrderResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationConfirmPaymentAndCreateOrderArgs, 'paymentIntentId'>
  >;
  createBanner?: Resolver<
    Maybe<ResolversTypes['Banner']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBannerArgs, 'data'>
  >;
  createBanners?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Banner']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBannersArgs, 'data'>
  >;
  createCartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCartItemArgs, 'data'>
  >;
  createCartItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CartItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCartItemsArgs, 'data'>
  >;
  createCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoriesArgs, 'data'>
  >;
  createCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, 'data'>
  >;
  createCoupon?: Resolver<
    Maybe<ResolversTypes['Coupon']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCouponArgs, 'data'>
  >;
  createCoupons?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Coupon']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCouponsArgs, 'data'>
  >;
  createInitialUser?: Resolver<
    ResolversTypes['UserAuthenticationWithPasswordSuccess'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateInitialUserArgs, 'data'>
  >;
  createOrder?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, 'data'>
  >;
  createOrderItem?: Resolver<
    Maybe<ResolversTypes['OrderItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderItemArgs, 'data'>
  >;
  createOrderItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderItemsArgs, 'data'>
  >;
  createOrders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrdersArgs, 'data'>
  >;
  createPaymentIntent?: Resolver<
    Maybe<ResolversTypes['CreatePaymentIntentResult']>,
    ParentType,
    ContextType,
    Partial<MutationCreatePaymentIntentArgs>
  >;
  createProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, 'data'>
  >;
  createProductImage?: Resolver<
    Maybe<ResolversTypes['ProductImage']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductImageArgs, 'data'>
  >;
  createProductImages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductImagesArgs, 'data'>
  >;
  createProductSnapshot?: Resolver<
    Maybe<ResolversTypes['ProductSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductSnapshotArgs, 'data'>
  >;
  createProductSnapshots?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductSnapshotsArgs, 'data'>
  >;
  createProductVariant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductVariantArgs, 'data'>
  >;
  createProductVariants?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductVariantsArgs, 'data'>
  >;
  createProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductsArgs, 'data'>
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >;
  createUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUsersArgs, 'data'>
  >;
  deleteBanner?: Resolver<
    Maybe<ResolversTypes['Banner']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBannerArgs, 'where'>
  >;
  deleteBanners?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Banner']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBannersArgs, 'where'>
  >;
  deleteCartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartItemArgs, 'where'>
  >;
  deleteCartItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CartItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartItemsArgs, 'where'>
  >;
  deleteCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoriesArgs, 'where'>
  >;
  deleteCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoryArgs, 'where'>
  >;
  deleteCoupon?: Resolver<
    Maybe<ResolversTypes['Coupon']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCouponArgs, 'where'>
  >;
  deleteCoupons?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Coupon']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCouponsArgs, 'where'>
  >;
  deleteOrder?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrderArgs, 'where'>
  >;
  deleteOrderItem?: Resolver<
    Maybe<ResolversTypes['OrderItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrderItemArgs, 'where'>
  >;
  deleteOrderItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrderItemsArgs, 'where'>
  >;
  deleteOrders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOrdersArgs, 'where'>
  >;
  deleteProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, 'where'>
  >;
  deleteProductImage?: Resolver<
    Maybe<ResolversTypes['ProductImage']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductImageArgs, 'where'>
  >;
  deleteProductImages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductImagesArgs, 'where'>
  >;
  deleteProductSnapshot?: Resolver<
    Maybe<ResolversTypes['ProductSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductSnapshotArgs, 'where'>
  >;
  deleteProductSnapshots?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductSnapshotsArgs, 'where'>
  >;
  deleteProductVariant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductVariantArgs, 'where'>
  >;
  deleteProductVariants?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductVariantsArgs, 'where'>
  >;
  deleteProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductsArgs, 'where'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'where'>
  >;
  deleteUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUsersArgs, 'where'>
  >;
  endSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  redeemUserPasswordResetToken?: Resolver<
    Maybe<ResolversTypes['RedeemUserPasswordResetTokenResult']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRedeemUserPasswordResetTokenArgs,
      'email' | 'password' | 'token'
    >
  >;
  sendUserPasswordResetLink?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationSendUserPasswordResetLinkArgs, 'email'>
  >;
  updateBanner?: Resolver<
    Maybe<ResolversTypes['Banner']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBannerArgs, 'data' | 'where'>
  >;
  updateBanners?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Banner']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBannersArgs, 'data'>
  >;
  updateCartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCartItemArgs, 'data' | 'where'>
  >;
  updateCartItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['CartItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCartItemsArgs, 'data'>
  >;
  updateCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoriesArgs, 'data'>
  >;
  updateCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryArgs, 'data' | 'where'>
  >;
  updateCoupon?: Resolver<
    Maybe<ResolversTypes['Coupon']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCouponArgs, 'data' | 'where'>
  >;
  updateCoupons?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Coupon']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCouponsArgs, 'data'>
  >;
  updateOrder?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderArgs, 'data' | 'where'>
  >;
  updateOrderItem?: Resolver<
    Maybe<ResolversTypes['OrderItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderItemArgs, 'data' | 'where'>
  >;
  updateOrderItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderItemsArgs, 'data'>
  >;
  updateOrders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrdersArgs, 'data'>
  >;
  updateProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, 'data' | 'where'>
  >;
  updateProductImage?: Resolver<
    Maybe<ResolversTypes['ProductImage']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductImageArgs, 'data' | 'where'>
  >;
  updateProductImages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductImagesArgs, 'data'>
  >;
  updateProductSnapshot?: Resolver<
    Maybe<ResolversTypes['ProductSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductSnapshotArgs, 'data' | 'where'>
  >;
  updateProductSnapshots?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductSnapshot']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductSnapshotsArgs, 'data'>
  >;
  updateProductVariant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductVariantArgs, 'data' | 'where'>
  >;
  updateProductVariants?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductVariantsArgs, 'data'>
  >;
  updateProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductsArgs, 'data'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'data' | 'where'>
  >;
  updateUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUsersArgs, 'data'>
  >;
  validateCoupon?: Resolver<
    Maybe<ResolversTypes['ValidateCouponResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationValidateCouponArgs, 'couponCode'>
  >;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Order'] = ResolversParentTypes['Order'],
> = {
  charge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coupon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['CalendarDay']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<
    Maybe<Array<ResolversTypes['OrderItem']>>,
    ParentType,
    ContextType,
    RequireFields<OrderItemsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  itemsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<OrderItemsCountArgs, 'where'>
  >;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  snapshot?: Resolver<
    Maybe<ResolversTypes['ProductSnapshot']>,
    ParentType,
    ContextType
  >;
  variant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordStateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PasswordState'] = ResolversParentTypes['PasswordState'],
> = {
  isSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = {
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultVariantId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  highestPrice?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes['ProductImage']>,
    ParentType,
    ContextType
  >;
  lowestPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDescription?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<ProductShortDescriptionArgs, 'length'>
  >;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType,
    RequireFields<ProductVariantArgs, 'skuId'>
  >;
  variants?: Resolver<
    Maybe<Array<ResolversTypes['ProductVariant']>>,
    ParentType,
    ContextType,
    RequireFields<ProductVariantsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  variantsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<ProductVariantsCountArgs, 'where'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDescriptorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductDescriptor'] = ResolversParentTypes['ProductDescriptor'],
> = {
  companies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  styles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  types?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage'],
> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes['CloudinaryImage_File']>,
    ParentType,
    ContextType
  >;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSnapshotResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductSnapshot'] = ResolversParentTypes['ProductSnapshot'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant'],
> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  authenticatedItem?: Resolver<
    Maybe<ResolversTypes['AuthenticatedItem']>,
    ParentType,
    ContextType
  >;
  banner?: Resolver<
    Maybe<ResolversTypes['Banner']>,
    ParentType,
    ContextType,
    RequireFields<QueryBannerArgs, 'where'>
  >;
  banners?: Resolver<
    Maybe<Array<ResolversTypes['Banner']>>,
    ParentType,
    ContextType,
    RequireFields<QueryBannersArgs, 'orderBy' | 'skip' | 'where'>
  >;
  bannersCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryBannersCountArgs, 'where'>
  >;
  cartItem?: Resolver<
    Maybe<ResolversTypes['CartItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartItemArgs, 'where'>
  >;
  cartItems?: Resolver<
    Maybe<Array<ResolversTypes['CartItem']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCartItemsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  cartItemsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartItemsCountArgs, 'where'>
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes['Category']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoriesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  categoriesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoriesCountArgs, 'where'>
  >;
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, 'where'>
  >;
  coupon?: Resolver<
    Maybe<ResolversTypes['Coupon']>,
    ParentType,
    ContextType,
    RequireFields<QueryCouponArgs, 'where'>
  >;
  coupons?: Resolver<
    Maybe<Array<ResolversTypes['Coupon']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCouponsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  couponsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryCouponsCountArgs, 'where'>
  >;
  getAllProductDescriptors?: Resolver<
    Maybe<ResolversTypes['ProductDescriptor']>,
    ParentType,
    ContextType,
    Partial<QueryGetAllProductDescriptorsArgs>
  >;
  getPriceRange?: Resolver<
    Maybe<ResolversTypes['MinMax']>,
    ParentType,
    ContextType,
    Partial<QueryGetPriceRangeArgs>
  >;
  keystone?: Resolver<ResolversTypes['KeystoneMeta'], ParentType, ContextType>;
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, 'where'>
  >;
  orderItem?: Resolver<
    Maybe<ResolversTypes['OrderItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderItemArgs, 'where'>
  >;
  orderItems?: Resolver<
    Maybe<Array<ResolversTypes['OrderItem']>>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderItemsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  orderItemsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderItemsCountArgs, 'where'>
  >;
  orders?: Resolver<
    Maybe<Array<ResolversTypes['Order']>>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersArgs, 'orderBy' | 'skip' | 'where'>
  >;
  ordersCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersCountArgs, 'where'>
  >;
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'where'>
  >;
  productImage?: Resolver<
    Maybe<ResolversTypes['ProductImage']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductImageArgs, 'where'>
  >;
  productImages?: Resolver<
    Maybe<Array<ResolversTypes['ProductImage']>>,
    ParentType,
    ContextType,
    RequireFields<QueryProductImagesArgs, 'orderBy' | 'skip' | 'where'>
  >;
  productImagesCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductImagesCountArgs, 'where'>
  >;
  productSnapshot?: Resolver<
    Maybe<ResolversTypes['ProductSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductSnapshotArgs, 'where'>
  >;
  productSnapshots?: Resolver<
    Maybe<Array<ResolversTypes['ProductSnapshot']>>,
    ParentType,
    ContextType,
    RequireFields<QueryProductSnapshotsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  productSnapshotsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductSnapshotsCountArgs, 'where'>
  >;
  productVariant?: Resolver<
    Maybe<ResolversTypes['ProductVariant']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductVariantArgs, 'where'>
  >;
  productVariants?: Resolver<
    Maybe<Array<ResolversTypes['ProductVariant']>>,
    ParentType,
    ContextType,
    RequireFields<QueryProductVariantsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  productVariantsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductVariantsCountArgs, 'where'>
  >;
  products?: Resolver<
    Maybe<Array<ResolversTypes['Product']>>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsArgs, 'orderBy' | 'skip' | 'where'>
  >;
  productsCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsCountArgs, 'where'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'where'>
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'orderBy' | 'skip' | 'where'>
  >;
  usersCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersCountArgs, 'where'>
  >;
  validateUserPasswordResetToken?: Resolver<
    Maybe<ResolversTypes['ValidateUserPasswordResetTokenResult']>,
    ParentType,
    ContextType,
    RequireFields<QueryValidateUserPasswordResetTokenArgs, 'email' | 'token'>
  >;
};

export type RedeemUserPasswordResetTokenResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['RedeemUserPasswordResetTokenResult'] = ResolversParentTypes['RedeemUserPasswordResetTokenResult'],
> = {
  code?: Resolver<
    ResolversTypes['PasswordResetRedemptionErrorCode'],
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  cart?: Resolver<
    Maybe<Array<ResolversTypes['CartItem']>>,
    ParentType,
    ContextType,
    RequireFields<UserCartArgs, 'orderBy' | 'skip' | 'where'>
  >;
  cartCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<UserCartCountArgs, 'where'>
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<
    Maybe<Array<ResolversTypes['Order']>>,
    ParentType,
    ContextType,
    RequireFields<UserOrdersArgs, 'orderBy' | 'skip' | 'where'>
  >;
  ordersCount?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<UserOrdersCountArgs, 'where'>
  >;
  password?: Resolver<
    Maybe<ResolversTypes['PasswordState']>,
    ParentType,
    ContextType
  >;
  passwordResetIssuedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  passwordResetRedeemedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  passwordResetToken?: Resolver<
    Maybe<ResolversTypes['PasswordState']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordFailureResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAuthenticationWithPasswordFailure'] = ResolversParentTypes['UserAuthenticationWithPasswordFailure'],
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAuthenticationWithPasswordResult'] = ResolversParentTypes['UserAuthenticationWithPasswordResult'],
> = {
  __resolveType: TypeResolveFn<
    | 'UserAuthenticationWithPasswordFailure'
    | 'UserAuthenticationWithPasswordSuccess',
    ParentType,
    ContextType
  >;
};

export type UserAuthenticationWithPasswordSuccessResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] = ResolversParentTypes['UserAuthenticationWithPasswordSuccess'],
> = {
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateCouponResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ValidateCouponResult'] = ResolversParentTypes['ValidateCouponResult'],
> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  discountedAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateUserPasswordResetTokenResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ValidateUserPasswordResetTokenResult'] = ResolversParentTypes['ValidateUserPasswordResetTokenResult'],
> = {
  code?: Resolver<
    ResolversTypes['PasswordResetRedemptionErrorCode'],
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticatedItem?: AuthenticatedItemResolvers<ContextType>;
  Banner?: BannerResolvers<ContextType>;
  CalendarDay?: GraphQLScalarType;
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CloudinaryImage_File?: CloudinaryImage_FileResolvers<ContextType>;
  ConfirmPaymentAndCreateOrderResult?: ConfirmPaymentAndCreateOrderResultResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  CreatePaymentIntentResult?: CreatePaymentIntentResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  KeystoneAdminMeta?: KeystoneAdminMetaResolvers<ContextType>;
  KeystoneAdminUIFieldGroupMeta?: KeystoneAdminUiFieldGroupMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMeta?: KeystoneAdminUiFieldMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMetaCreateView?: KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaItemView?: KeystoneAdminUiFieldMetaItemViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaListView?: KeystoneAdminUiFieldMetaListViewResolvers<ContextType>;
  KeystoneAdminUIListMeta?: KeystoneAdminUiListMetaResolvers<ContextType>;
  KeystoneAdminUISort?: KeystoneAdminUiSortResolvers<ContextType>;
  KeystoneMeta?: KeystoneMetaResolvers<ContextType>;
  MinMax?: MinMaxResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  PasswordState?: PasswordStateResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDescriptor?: ProductDescriptorResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductSnapshot?: ProductSnapshotResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RedeemUserPasswordResetTokenResult?: RedeemUserPasswordResetTokenResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAuthenticationWithPasswordFailure?: UserAuthenticationWithPasswordFailureResolvers<ContextType>;
  UserAuthenticationWithPasswordResult?: UserAuthenticationWithPasswordResultResolvers<ContextType>;
  UserAuthenticationWithPasswordSuccess?: UserAuthenticationWithPasswordSuccessResolvers<ContextType>;
  ValidateCouponResult?: ValidateCouponResultResolvers<ContextType>;
  ValidateUserPasswordResetTokenResult?: ValidateUserPasswordResetTokenResultResolvers<ContextType>;
};

export const HomePageDocument = gql`
  query HomePage($take: Int, $cursor: CategoryWhereUniqueInput, $skip: Int!) {
    banners(take: $take, skip: $skip) {
      id
      head
      href
      image {
        publicUrlTransformed
      }
      subtitle
      title
    }
    bannersCount
    categories(take: $take, skip: $skip, cursor: $cursor) {
      id
      name
      description
    }
  }
`;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useHomePageQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options as any,
  );
}
export function useHomePageLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options as any,
  );
}
export function useHomePageSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    HomePageQuery,
    HomePageQueryVariables
  >(HomePageDocument, options as any);
}
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<
  typeof useHomePageLazyQuery
>;
export type HomePageSuspenseQueryHookResult = ReturnType<
  typeof useHomePageSuspenseQuery
>;
export type HomePageQueryResult = Apollo.QueryResult<
  HomePageQuery,
  HomePageQueryVariables
>;
export const CategoryIndexPageDocument = gql`
  query CategoryIndexPage {
    categories {
      id
      slug
      name
      description
    }
  }
`;

/**
 * __useCategoryIndexPageQuery__
 *
 * To run a query within a React component, call `useCategoryIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryIndexPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryIndexPageQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >(CategoryIndexPageDocument, options as any);
}
export function useCategoryIndexPageLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >(CategoryIndexPageDocument, options as any);
}
export function useCategoryIndexPageSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >(CategoryIndexPageDocument, options as any);
}
export type CategoryIndexPageQueryHookResult = ReturnType<
  typeof useCategoryIndexPageQuery
>;
export type CategoryIndexPageLazyQueryHookResult = ReturnType<
  typeof useCategoryIndexPageLazyQuery
>;
export type CategoryIndexPageSuspenseQueryHookResult = ReturnType<
  typeof useCategoryIndexPageSuspenseQuery
>;
export type CategoryIndexPageQueryResult = Apollo.QueryResult<
  CategoryIndexPageQuery,
  CategoryIndexPageQueryVariables
>;
export const CategoryIndexPathDocument = gql`
  query CategoryIndexPath {
    categoriesCount
  }
`;

/**
 * __useCategoryIndexPathQuery__
 *
 * To run a query within a React component, call `useCategoryIndexPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryIndexPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryIndexPathQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryIndexPathQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >(CategoryIndexPathDocument, options as any);
}
export function useCategoryIndexPathLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >(CategoryIndexPathDocument, options as any);
}
export function useCategoryIndexPathSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >(CategoryIndexPathDocument, options as any);
}
export type CategoryIndexPathQueryHookResult = ReturnType<
  typeof useCategoryIndexPathQuery
>;
export type CategoryIndexPathLazyQueryHookResult = ReturnType<
  typeof useCategoryIndexPathLazyQuery
>;
export type CategoryIndexPathSuspenseQueryHookResult = ReturnType<
  typeof useCategoryIndexPathSuspenseQuery
>;
export type CategoryIndexPathQueryResult = Apollo.QueryResult<
  CategoryIndexPathQuery,
  CategoryIndexPathQueryVariables
>;
export const CreatePaymentIntentDocument = gql`
  mutation CreatePaymentIntent($couponCode: String) {
    createPaymentIntent(couponCode: $couponCode) {
      id
      status
      client_secret
    }
  }
`;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables
>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      couponCode: // value for 'couponCode'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >(CreatePaymentIntentDocument, options as any);
}
export type CreatePaymentIntentMutationHookResult = ReturnType<
  typeof useCreatePaymentIntentMutation
>;
export type CreatePaymentIntentMutationResult =
  Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<
  CreatePaymentIntentMutation,
  CreatePaymentIntentMutationVariables
>;
export const ConfirmPaymentAndCreateOrderDocument = gql`
  mutation ConfirmPaymentAndCreateOrder(
    $paymentIntentId: String!
    $couponCode: String
  ) {
    confirmPaymentAndCreateOrder(
      paymentIntentId: $paymentIntentId
      couponCode: $couponCode
    ) {
      client_secret
      id
      order {
        id
      }
      status
    }
  }
`;
export type ConfirmPaymentAndCreateOrderMutationFn = Apollo.MutationFunction<
  ConfirmPaymentAndCreateOrderMutation,
  ConfirmPaymentAndCreateOrderMutationVariables
>;

/**
 * __useConfirmPaymentAndCreateOrderMutation__
 *
 * To run a mutation, you first call `useConfirmPaymentAndCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmPaymentAndCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmPaymentAndCreateOrderMutation, { data, loading, error }] = useConfirmPaymentAndCreateOrderMutation({
 *   variables: {
 *      paymentIntentId: // value for 'paymentIntentId'
 *      couponCode: // value for 'couponCode'
 *   },
 * });
 */
export function useConfirmPaymentAndCreateOrderMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ConfirmPaymentAndCreateOrderMutation,
    ConfirmPaymentAndCreateOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    ConfirmPaymentAndCreateOrderMutation,
    ConfirmPaymentAndCreateOrderMutationVariables
  >(ConfirmPaymentAndCreateOrderDocument, options as any);
}
export type ConfirmPaymentAndCreateOrderMutationHookResult = ReturnType<
  typeof useConfirmPaymentAndCreateOrderMutation
>;
export type ConfirmPaymentAndCreateOrderMutationResult =
  Apollo.MutationResult<ConfirmPaymentAndCreateOrderMutation>;
export type ConfirmPaymentAndCreateOrderMutationOptions =
  Apollo.BaseMutationOptions<
    ConfirmPaymentAndCreateOrderMutation,
    ConfirmPaymentAndCreateOrderMutationVariables
  >;
export const ValidateCouponDocument = gql`
  mutation ValidateCoupon($couponCode: String!) {
    validateCoupon(couponCode: $couponCode) {
      amount
      isValid
      discountedAmount
    }
  }
`;
export type ValidateCouponMutationFn = Apollo.MutationFunction<
  ValidateCouponMutation,
  ValidateCouponMutationVariables
>;

/**
 * __useValidateCouponMutation__
 *
 * To run a mutation, you first call `useValidateCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateCouponMutation, { data, loading, error }] = useValidateCouponMutation({
 *   variables: {
 *      couponCode: // value for 'couponCode'
 *   },
 * });
 */
export function useValidateCouponMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ValidateCouponMutation,
    ValidateCouponMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    ValidateCouponMutation,
    ValidateCouponMutationVariables
  >(ValidateCouponDocument, options as any);
}
export type ValidateCouponMutationHookResult = ReturnType<
  typeof useValidateCouponMutation
>;
export type ValidateCouponMutationResult =
  Apollo.MutationResult<ValidateCouponMutation>;
export type ValidateCouponMutationOptions = Apollo.BaseMutationOptions<
  ValidateCouponMutation,
  ValidateCouponMutationVariables
>;
export const AllCategoriesDocument = gql`
  query AllCategories(
    $if: Boolean = false
    $orderBy: [CategoryOrderByInput!] = [{ name: asc }]
  ) {
    categories(orderBy: $orderBy) {
      slug
      name @include(if: $if)
    }
  }
`;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *      if: // value for 'if'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAllCategoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >(AllCategoriesDocument, options as any);
}
export function useAllCategoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >(AllCategoriesDocument, options as any);
}
export function useAllCategoriesSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >(AllCategoriesDocument, options as any);
}
export type AllCategoriesQueryHookResult = ReturnType<
  typeof useAllCategoriesQuery
>;
export type AllCategoriesLazyQueryHookResult = ReturnType<
  typeof useAllCategoriesLazyQuery
>;
export type AllCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useAllCategoriesSuspenseQuery
>;
export type AllCategoriesQueryResult = Apollo.QueryResult<
  AllCategoriesQuery,
  AllCategoriesQueryVariables
>;
export const CategoryBySlugDocument = gql`
  query CategoryBySlug($where: CategoryWhereUniqueInput!) {
    category(where: $where) {
      slug
      name
      description
      image {
        publicUrlTransformed
      }
      productsCount
    }
  }
`;

/**
 * __useCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryBySlugQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoryBySlugQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >(CategoryBySlugDocument, options as any);
}
export function useCategoryBySlugLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >(CategoryBySlugDocument, options as any);
}
export function useCategoryBySlugSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >(CategoryBySlugDocument, options as any);
}
export type CategoryBySlugQueryHookResult = ReturnType<
  typeof useCategoryBySlugQuery
>;
export type CategoryBySlugLazyQueryHookResult = ReturnType<
  typeof useCategoryBySlugLazyQuery
>;
export type CategoryBySlugSuspenseQueryHookResult = ReturnType<
  typeof useCategoryBySlugSuspenseQuery
>;
export type CategoryBySlugQueryResult = Apollo.QueryResult<
  CategoryBySlugQuery,
  CategoryBySlugQueryVariables
>;
export const AllProductsDocument = gql`
  query AllProducts {
    products {
      slug
    }
  }
`;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options as any,
  );
}
export function useAllProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    AllProductsQuery,
    AllProductsQueryVariables
  >(AllProductsDocument, options as any);
}
export function useAllProductsSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    AllProductsQuery,
    AllProductsQueryVariables
  >(AllProductsDocument, options as any);
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<
  typeof useAllProductsLazyQuery
>;
export type AllProductsSuspenseQueryHookResult = ReturnType<
  typeof useAllProductsSuspenseQuery
>;
export type AllProductsQueryResult = Apollo.QueryResult<
  AllProductsQuery,
  AllProductsQueryVariables
>;
export const ProductBySlugDocument = gql`
  query ProductBySlug($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      category {
        name
      }
      name
      style
      type
      image {
        image {
          publicUrlTransformed
        }
      }
      description
      company
      slug
      variants {
        color
        id
        material
        price
        size
        variant
      }
    }
  }
`;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductBySlugQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >(ProductBySlugDocument, options as any);
}
export function useProductBySlugLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >(ProductBySlugDocument, options as any);
}
export function useProductBySlugSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >(ProductBySlugDocument, options as any);
}
export type ProductBySlugQueryHookResult = ReturnType<
  typeof useProductBySlugQuery
>;
export type ProductBySlugLazyQueryHookResult = ReturnType<
  typeof useProductBySlugLazyQuery
>;
export type ProductBySlugSuspenseQueryHookResult = ReturnType<
  typeof useProductBySlugSuspenseQuery
>;
export type ProductBySlugQueryResult = Apollo.QueryResult<
  ProductBySlugQuery,
  ProductBySlugQueryVariables
>;
export const GetPriceRangeDocument = gql`
  query GetPriceRange {
    getPriceRange {
      max
      min
    }
  }
`;

/**
 * __useGetPriceRangeQuery__
 *
 * To run a query within a React component, call `useGetPriceRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceRangeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceRangeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >(GetPriceRangeDocument, options as any);
}
export function useGetPriceRangeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >(GetPriceRangeDocument, options as any);
}
export function useGetPriceRangeSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >(GetPriceRangeDocument, options as any);
}
export type GetPriceRangeQueryHookResult = ReturnType<
  typeof useGetPriceRangeQuery
>;
export type GetPriceRangeLazyQueryHookResult = ReturnType<
  typeof useGetPriceRangeLazyQuery
>;
export type GetPriceRangeSuspenseQueryHookResult = ReturnType<
  typeof useGetPriceRangeSuspenseQuery
>;
export type GetPriceRangeQueryResult = Apollo.QueryResult<
  GetPriceRangeQuery,
  GetPriceRangeQueryVariables
>;
export const ProductWhereCountDocument = gql`
  query ProductWhereCount($where: ProductWhereInput) {
    productsCount(where: $where)
  }
`;

/**
 * __useProductWhereCountQuery__
 *
 * To run a query within a React component, call `useProductWhereCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductWhereCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductWhereCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductWhereCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >(ProductWhereCountDocument, options as any);
}
export function useProductWhereCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >(ProductWhereCountDocument, options as any);
}
export function useProductWhereCountSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >(ProductWhereCountDocument, options as any);
}
export type ProductWhereCountQueryHookResult = ReturnType<
  typeof useProductWhereCountQuery
>;
export type ProductWhereCountLazyQueryHookResult = ReturnType<
  typeof useProductWhereCountLazyQuery
>;
export type ProductWhereCountSuspenseQueryHookResult = ReturnType<
  typeof useProductWhereCountSuspenseQuery
>;
export type ProductWhereCountQueryResult = Apollo.QueryResult<
  ProductWhereCountQuery,
  ProductWhereCountQueryVariables
>;
export const PaginatedProductsDocument = gql`
  query PaginatedProducts(
    $limit: Int
    $skip: Int
    $cursor: ProductWhereUniqueInput
    $where: ProductWhereInput
    $includeDesc: Boolean = false
    $orderBy: [ProductOrderByInput!]
  ) {
    products(
      take: $limit
      skip: $skip
      cursor: $cursor
      where: $where
      orderBy: $orderBy
    ) {
      id
      slug
      image {
        image {
          publicUrlTransformed
        }
      }
      variant {
        price
        id
      }
      name
      style
      company
      type
      description @include(if: $includeDesc)
    }
    productsCount(where: $where)
  }
`;

/**
 * __usePaginatedProductsQuery__
 *
 * To run a query within a React component, call `usePaginatedProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      cursor: // value for 'cursor'
 *      where: // value for 'where'
 *      includeDesc: // value for 'includeDesc'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function usePaginatedProductsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >(PaginatedProductsDocument, options as any);
}
export function usePaginatedProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >(PaginatedProductsDocument, options as any);
}
export function usePaginatedProductsSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >(PaginatedProductsDocument, options as any);
}
export type PaginatedProductsQueryHookResult = ReturnType<
  typeof usePaginatedProductsQuery
>;
export type PaginatedProductsLazyQueryHookResult = ReturnType<
  typeof usePaginatedProductsLazyQuery
>;
export type PaginatedProductsSuspenseQueryHookResult = ReturnType<
  typeof usePaginatedProductsSuspenseQuery
>;
export type PaginatedProductsQueryResult = Apollo.QueryResult<
  PaginatedProductsQuery,
  PaginatedProductsQueryVariables
>;
export const ProductsWhereDocument = gql`
  query ProductsWhere(
    $where: ProductWhereInput!
    $includeDesc: Boolean = false
    $take: Int
  ) {
    products(where: $where, take: $take) {
      id
      slug
      image {
        image {
          publicUrlTransformed
        }
      }
      variant {
        price
        id
      }
      name
      style
      company
      type
      description @include(if: $includeDesc)
    }
  }
`;

/**
 * __useProductsWhereQuery__
 *
 * To run a query within a React component, call `useProductsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *      includeDesc: // value for 'includeDesc'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useProductsWhereQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >(ProductsWhereDocument, options as any);
}
export function useProductsWhereLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >(ProductsWhereDocument, options as any);
}
export function useProductsWhereSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >(ProductsWhereDocument, options as any);
}
export type ProductsWhereQueryHookResult = ReturnType<
  typeof useProductsWhereQuery
>;
export type ProductsWhereLazyQueryHookResult = ReturnType<
  typeof useProductsWhereLazyQuery
>;
export type ProductsWhereSuspenseQueryHookResult = ReturnType<
  typeof useProductsWhereSuspenseQuery
>;
export type ProductsWhereQueryResult = Apollo.QueryResult<
  ProductsWhereQuery,
  ProductsWhereQueryVariables
>;
export const AddToCartDocument = gql`
  mutation AddToCart($id: ID!) {
    addToCart(id: $id) {
      variant {
        product {
          id
        }
      }
    }
  }
`;
export type AddToCartMutationFn = Apollo.MutationFunction<
  AddToCartMutation,
  AddToCartMutationVariables
>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddToCartMutation,
    AddToCartMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    AddToCartMutation,
    AddToCartMutationVariables
  >(AddToCartDocument, options as any);
}
export type AddToCartMutationHookResult = ReturnType<
  typeof useAddToCartMutation
>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<
  AddToCartMutation,
  AddToCartMutationVariables
>;
export const UpdateCartItemDocument = gql`
  mutation UpdateCartItem(
    $where: CartItemWhereUniqueInput!
    $data: CartItemUpdateInput!
  ) {
    updateCartItem(where: $where, data: $data) {
      quantity
    }
  }
`;
export type UpdateCartItemMutationFn = Apollo.MutationFunction<
  UpdateCartItemMutation,
  UpdateCartItemMutationVariables
>;

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCartItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCartItemMutation,
    UpdateCartItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    UpdateCartItemMutation,
    UpdateCartItemMutationVariables
  >(UpdateCartItemDocument, options as any);
}
export type UpdateCartItemMutationHookResult = ReturnType<
  typeof useUpdateCartItemMutation
>;
export type UpdateCartItemMutationResult =
  Apollo.MutationResult<UpdateCartItemMutation>;
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateCartItemMutation,
  UpdateCartItemMutationVariables
>;
export const DeleteCartItemDocument = gql`
  mutation DeleteCartItem($where: CartItemWhereUniqueInput!) {
    deleteCartItem(where: $where) {
      id
    }
  }
`;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteCartItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
  >(DeleteCartItemDocument, options as any);
}
export type DeleteCartItemMutationHookResult = ReturnType<
  typeof useDeleteCartItemMutation
>;
export type DeleteCartItemMutationResult =
  Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>;
export const SearchProductsDocument = gql`
  query SearchProducts($searchTerm: String!, $limit: Int, $offset: Int) {
    products(
      where: {
        OR: [
          { name: { contains: $searchTerm, mode: insensitive } }
          { type: { contains: $searchTerm, mode: insensitive } }
          { style: { contains: $searchTerm, mode: insensitive } }
          { company: { contains: $searchTerm, mode: insensitive } }
        ]
      }
      take: $limit
      skip: $offset
    ) {
      id
      name
      shortDescription
      type
      image {
        image {
          publicUrlTransformed
        }
      }
      style
      company
      variant {
        price
        id
      }
      category {
        id
        name
      }
    }
  }
`;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >(SearchProductsDocument, options as any);
}
export function useSearchProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >(SearchProductsDocument, options as any);
}
export function useSearchProductsSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >(SearchProductsDocument, options as any);
}
export type SearchProductsQueryHookResult = ReturnType<
  typeof useSearchProductsQuery
>;
export type SearchProductsLazyQueryHookResult = ReturnType<
  typeof useSearchProductsLazyQuery
>;
export type SearchProductsSuspenseQueryHookResult = ReturnType<
  typeof useSearchProductsSuspenseQuery
>;
export type SearchProductsQueryResult = Apollo.QueryResult<
  SearchProductsQuery,
  SearchProductsQueryVariables
>;
export const ProductDescriptorsDocument = gql`
  query ProductDescriptors($take: Int, $skip: Int) {
    getAllProductDescriptors(take: $take, skip: $skip) {
      companies
      styles
      types
    }
    categories(take: $take, skip: $skip) {
      name
      slug
    }
  }
`;

/**
 * __useProductDescriptorsQuery__
 *
 * To run a query within a React component, call `useProductDescriptorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDescriptorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDescriptorsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProductDescriptorsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >(ProductDescriptorsDocument, options as any);
}
export function useProductDescriptorsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >(ProductDescriptorsDocument, options as any);
}
export function useProductDescriptorsSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    ProductDescriptorsQuery,
    ProductDescriptorsQueryVariables
  >(ProductDescriptorsDocument, options as any);
}
export type ProductDescriptorsQueryHookResult = ReturnType<
  typeof useProductDescriptorsQuery
>;
export type ProductDescriptorsLazyQueryHookResult = ReturnType<
  typeof useProductDescriptorsLazyQuery
>;
export type ProductDescriptorsSuspenseQueryHookResult = ReturnType<
  typeof useProductDescriptorsSuspenseQuery
>;
export type ProductDescriptorsQueryResult = Apollo.QueryResult<
  ProductDescriptorsQuery,
  ProductDescriptorsQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($orderBy: [CartItemOrderByInput!] = [{ id: asc }]) {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart(orderBy: $orderBy) {
          id
          quantity
          variant {
            id
            product {
              name
              shortDescription
              image {
                image {
                  publicUrlTransformed
                }
              }
              id
            }
            price
          }
        }
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options as any,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options as any,
  );
}
export function useGetUserSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options as any,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<
  typeof useGetUserSuspenseQuery
>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const SignInDocument = gql`
  mutation SignIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
        }
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options as any,
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignOutDocument = gql`
  mutation SignOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    SignOutMutation,
    SignOutMutationVariables
  >(SignOutDocument, options as any);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      name
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options as any,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const SendUserPasswordResetLinkDocument = gql`
  mutation SendUserPasswordResetLink($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;
export type SendUserPasswordResetLinkMutationFn = Apollo.MutationFunction<
  SendUserPasswordResetLinkMutation,
  SendUserPasswordResetLinkMutationVariables
>;

/**
 * __useSendUserPasswordResetLinkMutation__
 *
 * To run a mutation, you first call `useSendUserPasswordResetLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendUserPasswordResetLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendUserPasswordResetLinkMutation, { data, loading, error }] = useSendUserPasswordResetLinkMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendUserPasswordResetLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SendUserPasswordResetLinkMutation,
    SendUserPasswordResetLinkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    SendUserPasswordResetLinkMutation,
    SendUserPasswordResetLinkMutationVariables
  >(SendUserPasswordResetLinkDocument, options as any);
}
export type SendUserPasswordResetLinkMutationHookResult = ReturnType<
  typeof useSendUserPasswordResetLinkMutation
>;
export type SendUserPasswordResetLinkMutationResult =
  Apollo.MutationResult<SendUserPasswordResetLinkMutation>;
export type SendUserPasswordResetLinkMutationOptions =
  Apollo.BaseMutationOptions<
    SendUserPasswordResetLinkMutation,
    SendUserPasswordResetLinkMutationVariables
  >;
export const RedeemUserPasswordResetTokenDocument = gql`
  mutation RedeemUserPasswordResetToken(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
    }
  }
`;
export type RedeemUserPasswordResetTokenMutationFn = Apollo.MutationFunction<
  RedeemUserPasswordResetTokenMutation,
  RedeemUserPasswordResetTokenMutationVariables
>;

/**
 * __useRedeemUserPasswordResetTokenMutation__
 *
 * To run a mutation, you first call `useRedeemUserPasswordResetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemUserPasswordResetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemUserPasswordResetTokenMutation, { data, loading, error }] = useRedeemUserPasswordResetTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRedeemUserPasswordResetTokenMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RedeemUserPasswordResetTokenMutation,
    RedeemUserPasswordResetTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    RedeemUserPasswordResetTokenMutation,
    RedeemUserPasswordResetTokenMutationVariables
  >(RedeemUserPasswordResetTokenDocument, options as any);
}
export type RedeemUserPasswordResetTokenMutationHookResult = ReturnType<
  typeof useRedeemUserPasswordResetTokenMutation
>;
export type RedeemUserPasswordResetTokenMutationResult =
  Apollo.MutationResult<RedeemUserPasswordResetTokenMutation>;
export type RedeemUserPasswordResetTokenMutationOptions =
  Apollo.BaseMutationOptions<
    RedeemUserPasswordResetTokenMutation,
    RedeemUserPasswordResetTokenMutationVariables
  >;
export const AllOrdersDocument = gql`
  query AllOrders {
    authenticatedItem {
      ... on User {
        orders {
          items {
            id
            price
            snapshot {
              id
              image
              meta
              name
              price
            }
            quantity
          }
          id
          createdAt
          itemsCount
          total
          charge
        }
      }
    }
  }
`;

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(
    AllOrdersDocument,
    options as any,
  );
}
export function useAllOrdersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(
    AllOrdersDocument,
    options as any,
  );
}
export function useAllOrdersSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >(AllOrdersDocument, options as any);
}
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<
  typeof useAllOrdersLazyQuery
>;
export type AllOrdersSuspenseQueryHookResult = ReturnType<
  typeof useAllOrdersSuspenseQuery
>;
export type AllOrdersQueryResult = Apollo.QueryResult<
  AllOrdersQuery,
  AllOrdersQueryVariables
>;
export const OrderDocument = gql`
  query Order($where: OrderWhereUniqueInput!) {
    order(where: $where) {
      items {
        id
        price
        snapshot {
          id
          image
          meta
          name
          price
        }
        quantity
      }
      id
      createdAt
      itemsCount
      total
      charge
    }
  }
`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOrderQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    OrderQuery,
    OrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<OrderQuery, OrderQueryVariables>(
    OrderDocument,
    options as any,
  );
}
export function useOrderLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    OrderQuery,
    OrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<OrderQuery, OrderQueryVariables>(
    OrderDocument,
    options as any,
  );
}
export function useOrderSuspenseQuery(
  baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<
    OrderQuery,
    OrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<OrderQuery, OrderQueryVariables>(
    OrderDocument,
    options as any,
  );
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<
  typeof useOrderSuspenseQuery
>;
export type OrderQueryResult = Apollo.QueryResult<
  OrderQuery,
  OrderQueryVariables
>;

export const aBanner = (
  overrides?: Partial<Banner>,
  _relationshipsToOmit: Set<string> = new Set(),
): Banner => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Banner');
  return {
    head:
      overrides && overrides.hasOwnProperty('head') ? overrides.head! : 'modi',
    href:
      overrides && overrides.hasOwnProperty('href')
        ? overrides.href!
        : 'tenetur',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'bd6e67fc-41e2-45a6-8899-0262d2d95387',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('CloudinaryImage_File')
          ? ({} as CloudinaryImage_File)
          : aCloudinaryImage_File({}, relationshipsToOmit),
    subtitle:
      overrides && overrides.hasOwnProperty('subtitle')
        ? overrides.subtitle!
        : 'possimus',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'omnis',
  };
};

export const aBannerCreateInput = (
  overrides?: Partial<BannerCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerCreateInput');
  return {
    head:
      overrides && overrides.hasOwnProperty('head')
        ? overrides.head!
        : 'quibusdam',
    href:
      overrides && overrides.hasOwnProperty('href')
        ? overrides.href!
        : 'dolorem',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'rerum',
    subtitle:
      overrides && overrides.hasOwnProperty('subtitle')
        ? overrides.subtitle!
        : 'veritatis',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'vero',
  };
};

export const aBannerOrderByInput = (
  overrides?: Partial<BannerOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerOrderByInput');
  return {
    head:
      overrides && overrides.hasOwnProperty('head')
        ? overrides.head!
        : OrderDirection.Asc,
    href:
      overrides && overrides.hasOwnProperty('href')
        ? overrides.href!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    subtitle:
      overrides && overrides.hasOwnProperty('subtitle')
        ? overrides.subtitle!
        : OrderDirection.Asc,
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : OrderDirection.Asc,
  };
};

export const aBannerUpdateArgs = (
  overrides?: Partial<BannerUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('BannerUpdateInput')
          ? ({} as BannerUpdateInput)
          : aBannerUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('BannerWhereUniqueInput')
          ? ({} as BannerWhereUniqueInput)
          : aBannerWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aBannerUpdateInput = (
  overrides?: Partial<BannerUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerUpdateInput');
  return {
    head:
      overrides && overrides.hasOwnProperty('head')
        ? overrides.head!
        : 'quisquam',
    href:
      overrides && overrides.hasOwnProperty('href')
        ? overrides.href!
        : 'pariatur',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'esse',
    subtitle:
      overrides && overrides.hasOwnProperty('subtitle')
        ? overrides.subtitle!
        : 'et',
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : 'odio',
  };
};

export const aBannerWhereInput = (
  overrides?: Partial<BannerWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('BannerWhereInput')
              ? ({} as BannerWhereInput)
              : aBannerWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('BannerWhereInput')
              ? ({} as BannerWhereInput)
              : aBannerWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('BannerWhereInput')
              ? ({} as BannerWhereInput)
              : aBannerWhereInput({}, relationshipsToOmit),
          ],
    head:
      overrides && overrides.hasOwnProperty('head')
        ? overrides.head!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    href:
      overrides && overrides.hasOwnProperty('href')
        ? overrides.href!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    subtitle:
      overrides && overrides.hasOwnProperty('subtitle')
        ? overrides.subtitle!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    title:
      overrides && overrides.hasOwnProperty('title')
        ? overrides.title!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
  };
};

export const aBannerWhereUniqueInput = (
  overrides?: Partial<BannerWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): BannerWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BannerWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '1d92b4b9-6acd-45bd-8332-14ceba713e85',
  };
};

export const aBooleanFilter = (
  overrides?: Partial<BooleanFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): BooleanFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('BooleanFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : true,
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('BooleanFilter')
          ? ({} as BooleanFilter)
          : aBooleanFilter({}, relationshipsToOmit),
  };
};

export const aCalendarDayFilter = (
  overrides?: Partial<CalendarDayFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): CalendarDayFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CalendarDayFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'nesciunt',
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'error',
    gte:
      overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'nihil',
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['et'],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'at',
    lte:
      overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'aliquam',
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('CalendarDayFilter')
          ? ({} as CalendarDayFilter)
          : aCalendarDayFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['magni'],
  };
};

export const aCartItem = (
  overrides?: Partial<CartItem>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItem => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItem');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'c0a6e20d-ac48-4d0f-b244-16be13b393de',
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 8788,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
  };
};

export const aCartItemCreateInput = (
  overrides?: Partial<CartItemCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemCreateInput');
  return {
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 5569,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserRelateToOneForCreateInput')
          ? ({} as UserRelateToOneForCreateInput)
          : aUserRelateToOneForCreateInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantRelateToOneForCreateInput')
          ? ({} as ProductVariantRelateToOneForCreateInput)
          : aProductVariantRelateToOneForCreateInput({}, relationshipsToOmit),
  };
};

export const aCartItemManyRelationFilter = (
  overrides?: Partial<CartItemManyRelationFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemManyRelationFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemManyRelationFilter');
  return {
    every:
      overrides && overrides.hasOwnProperty('every')
        ? overrides.every!
        : relationshipsToOmit.has('CartItemWhereInput')
          ? ({} as CartItemWhereInput)
          : aCartItemWhereInput({}, relationshipsToOmit),
    none:
      overrides && overrides.hasOwnProperty('none')
        ? overrides.none!
        : relationshipsToOmit.has('CartItemWhereInput')
          ? ({} as CartItemWhereInput)
          : aCartItemWhereInput({}, relationshipsToOmit),
    some:
      overrides && overrides.hasOwnProperty('some')
        ? overrides.some!
        : relationshipsToOmit.has('CartItemWhereInput')
          ? ({} as CartItemWhereInput)
          : aCartItemWhereInput({}, relationshipsToOmit),
  };
};

export const aCartItemOrderByInput = (
  overrides?: Partial<CartItemOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemOrderByInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : OrderDirection.Asc,
  };
};

export const aCartItemRelateToManyForCreateInput = (
  overrides?: Partial<CartItemRelateToManyForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemRelateToManyForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemRelateToManyForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('CartItemWhereUniqueInput')
              ? ({} as CartItemWhereUniqueInput)
              : aCartItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('CartItemCreateInput')
              ? ({} as CartItemCreateInput)
              : aCartItemCreateInput({}, relationshipsToOmit),
          ],
  };
};

export const aCartItemRelateToManyForUpdateInput = (
  overrides?: Partial<CartItemRelateToManyForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemRelateToManyForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemRelateToManyForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('CartItemWhereUniqueInput')
              ? ({} as CartItemWhereUniqueInput)
              : aCartItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('CartItemCreateInput')
              ? ({} as CartItemCreateInput)
              : aCartItemCreateInput({}, relationshipsToOmit),
          ],
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : [
            relationshipsToOmit.has('CartItemWhereUniqueInput')
              ? ({} as CartItemWhereUniqueInput)
              : aCartItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    set:
      overrides && overrides.hasOwnProperty('set')
        ? overrides.set!
        : [
            relationshipsToOmit.has('CartItemWhereUniqueInput')
              ? ({} as CartItemWhereUniqueInput)
              : aCartItemWhereUniqueInput({}, relationshipsToOmit),
          ],
  };
};

export const aCartItemUpdateArgs = (
  overrides?: Partial<CartItemUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('CartItemUpdateInput')
          ? ({} as CartItemUpdateInput)
          : aCartItemUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('CartItemWhereUniqueInput')
          ? ({} as CartItemWhereUniqueInput)
          : aCartItemWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aCartItemUpdateInput = (
  overrides?: Partial<CartItemUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemUpdateInput');
  return {
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 5897,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserRelateToOneForUpdateInput')
          ? ({} as UserRelateToOneForUpdateInput)
          : aUserRelateToOneForUpdateInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantRelateToOneForUpdateInput')
          ? ({} as ProductVariantRelateToOneForUpdateInput)
          : aProductVariantRelateToOneForUpdateInput({}, relationshipsToOmit),
  };
};

export const aCartItemWhereInput = (
  overrides?: Partial<CartItemWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('CartItemWhereInput')
              ? ({} as CartItemWhereInput)
              : aCartItemWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('CartItemWhereInput')
              ? ({} as CartItemWhereInput)
              : aCartItemWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('CartItemWhereInput')
              ? ({} as CartItemWhereInput)
              : aCartItemWhereInput({}, relationshipsToOmit),
          ],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserWhereInput')
          ? ({} as UserWhereInput)
          : aUserWhereInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantWhereInput')
          ? ({} as ProductVariantWhereInput)
          : aProductVariantWhereInput({}, relationshipsToOmit),
  };
};

export const aCartItemWhereUniqueInput = (
  overrides?: Partial<CartItemWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CartItemWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CartItemWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '1f72deca-5c54-4a0e-93a0-99d8672cd3ad',
  };
};

export const aCategory = (
  overrides?: Partial<Category>,
  _relationshipsToOmit: Set<string> = new Set(),
): Category => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Category');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'voluptatibus',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '0121e50d-386e-403c-a8a7-2e59fbbef7e7',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('CloudinaryImage_File')
          ? ({} as CloudinaryImage_File)
          : aCloudinaryImage_File({}, relationshipsToOmit),
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'eos',
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : [
            relationshipsToOmit.has('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    productsCount:
      overrides && overrides.hasOwnProperty('productsCount')
        ? overrides.productsCount!
        : 7829,
    slug:
      overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'rem',
  };
};

export const aCategoryCreateInput = (
  overrides?: Partial<CategoryCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryCreateInput');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'accusantium',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'tenetur',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'corrupti',
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : relationshipsToOmit.has('ProductRelateToManyForCreateInput')
          ? ({} as ProductRelateToManyForCreateInput)
          : aProductRelateToManyForCreateInput({}, relationshipsToOmit),
    slug:
      overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'cum',
  };
};

export const aCategoryOrderByInput = (
  overrides?: Partial<CategoryOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryOrderByInput');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : OrderDirection.Asc,
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : OrderDirection.Asc,
  };
};

export const aCategoryRelateToOneForCreateInput = (
  overrides?: Partial<CategoryRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('CategoryWhereUniqueInput')
          ? ({} as CategoryWhereUniqueInput)
          : aCategoryWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('CategoryCreateInput')
          ? ({} as CategoryCreateInput)
          : aCategoryCreateInput({}, relationshipsToOmit),
  };
};

export const aCategoryRelateToOneForUpdateInput = (
  overrides?: Partial<CategoryRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('CategoryWhereUniqueInput')
          ? ({} as CategoryWhereUniqueInput)
          : aCategoryWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('CategoryCreateInput')
          ? ({} as CategoryCreateInput)
          : aCategoryCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const aCategoryUpdateArgs = (
  overrides?: Partial<CategoryUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('CategoryUpdateInput')
          ? ({} as CategoryUpdateInput)
          : aCategoryUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('CategoryWhereUniqueInput')
          ? ({} as CategoryWhereUniqueInput)
          : aCategoryWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aCategoryUpdateInput = (
  overrides?: Partial<CategoryUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryUpdateInput');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'eum',
    image:
      overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'id',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'velit',
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : relationshipsToOmit.has('ProductRelateToManyForUpdateInput')
          ? ({} as ProductRelateToManyForUpdateInput)
          : aProductRelateToManyForUpdateInput({}, relationshipsToOmit),
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : 'dolores',
  };
};

export const aCategoryWhereInput = (
  overrides?: Partial<CategoryWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('CategoryWhereInput')
              ? ({} as CategoryWhereInput)
              : aCategoryWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('CategoryWhereInput')
              ? ({} as CategoryWhereInput)
              : aCategoryWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('CategoryWhereInput')
              ? ({} as CategoryWhereInput)
              : aCategoryWhereInput({}, relationshipsToOmit),
          ],
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : relationshipsToOmit.has('ProductManyRelationFilter')
          ? ({} as ProductManyRelationFilter)
          : aProductManyRelationFilter({}, relationshipsToOmit),
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
  };
};

export const aCategoryWhereUniqueInput = (
  overrides?: Partial<CategoryWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CategoryWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CategoryWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '68c96e59-1534-4f3c-b123-f06b13b1b57b',
    slug:
      overrides && overrides.hasOwnProperty('slug') ? overrides.slug! : 'ipsam',
  };
};

export const aCloudinaryImageFormat = (
  overrides?: Partial<CloudinaryImageFormat>,
  _relationshipsToOmit: Set<string> = new Set(),
): CloudinaryImageFormat => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CloudinaryImageFormat');
  return {
    angle:
      overrides && overrides.hasOwnProperty('angle') ? overrides.angle! : 'quo',
    aspect_ratio:
      overrides && overrides.hasOwnProperty('aspect_ratio')
        ? overrides.aspect_ratio!
        : 'qui',
    background:
      overrides && overrides.hasOwnProperty('background')
        ? overrides.background!
        : 'laudantium',
    border:
      overrides && overrides.hasOwnProperty('border')
        ? overrides.border!
        : 'numquam',
    color:
      overrides && overrides.hasOwnProperty('color')
        ? overrides.color!
        : 'facere',
    color_space:
      overrides && overrides.hasOwnProperty('color_space')
        ? overrides.color_space!
        : 'dolorum',
    crop:
      overrides && overrides.hasOwnProperty('crop') ? overrides.crop! : 'quia',
    default_image:
      overrides && overrides.hasOwnProperty('default_image')
        ? overrides.default_image!
        : 'aperiam',
    delay:
      overrides && overrides.hasOwnProperty('delay') ? overrides.delay! : 'aut',
    density:
      overrides && overrides.hasOwnProperty('density')
        ? overrides.density!
        : 'voluptates',
    dpr:
      overrides && overrides.hasOwnProperty('dpr')
        ? overrides.dpr!
        : 'accusantium',
    effect:
      overrides && overrides.hasOwnProperty('effect')
        ? overrides.effect!
        : 'impedit',
    fetch_format:
      overrides && overrides.hasOwnProperty('fetch_format')
        ? overrides.fetch_format!
        : 'voluptate',
    flags:
      overrides && overrides.hasOwnProperty('flags')
        ? overrides.flags!
        : 'error',
    format:
      overrides && overrides.hasOwnProperty('format')
        ? overrides.format!
        : 'placeat',
    gravity:
      overrides && overrides.hasOwnProperty('gravity')
        ? overrides.gravity!
        : 'ducimus',
    height:
      overrides && overrides.hasOwnProperty('height')
        ? overrides.height!
        : 'inventore',
    opacity:
      overrides && overrides.hasOwnProperty('opacity')
        ? overrides.opacity!
        : 'doloribus',
    overlay:
      overrides && overrides.hasOwnProperty('overlay')
        ? overrides.overlay!
        : 'impedit',
    page:
      overrides && overrides.hasOwnProperty('page') ? overrides.page! : 'sunt',
    prettyName:
      overrides && overrides.hasOwnProperty('prettyName')
        ? overrides.prettyName!
        : 'officia',
    quality:
      overrides && overrides.hasOwnProperty('quality')
        ? overrides.quality!
        : 'officia',
    radius:
      overrides && overrides.hasOwnProperty('radius')
        ? overrides.radius!
        : 'tempore',
    transformation:
      overrides && overrides.hasOwnProperty('transformation')
        ? overrides.transformation!
        : 'accusamus',
    underlay:
      overrides && overrides.hasOwnProperty('underlay')
        ? overrides.underlay!
        : 'molestiae',
    width:
      overrides && overrides.hasOwnProperty('width')
        ? overrides.width!
        : 'officiis',
    x: overrides && overrides.hasOwnProperty('x') ? overrides.x! : 'velit',
    y: overrides && overrides.hasOwnProperty('y') ? overrides.y! : 'corrupti',
    zoom:
      overrides && overrides.hasOwnProperty('zoom') ? overrides.zoom! : 'omnis',
  };
};

export const aCloudinaryImage_File = (
  overrides?: Partial<CloudinaryImage_File>,
  _relationshipsToOmit: Set<string> = new Set(),
): CloudinaryImage_File => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CloudinaryImage_File');
  return {
    encoding:
      overrides && overrides.hasOwnProperty('encoding')
        ? overrides.encoding!
        : 'et',
    filename:
      overrides && overrides.hasOwnProperty('filename')
        ? overrides.filename!
        : 'animi',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '6c664b4c-76cd-40b4-951b-b1b851f8d1c0',
    mimetype:
      overrides && overrides.hasOwnProperty('mimetype')
        ? overrides.mimetype!
        : 'iste',
    originalFilename:
      overrides && overrides.hasOwnProperty('originalFilename')
        ? overrides.originalFilename!
        : 'eveniet',
    publicUrl:
      overrides && overrides.hasOwnProperty('publicUrl')
        ? overrides.publicUrl!
        : 'suscipit',
    publicUrlTransformed:
      overrides && overrides.hasOwnProperty('publicUrlTransformed')
        ? overrides.publicUrlTransformed!
        : 'sit',
  };
};

export const aConfirmPaymentAndCreateOrderResult = (
  overrides?: Partial<ConfirmPaymentAndCreateOrderResult>,
  _relationshipsToOmit: Set<string> = new Set(),
): ConfirmPaymentAndCreateOrderResult => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ConfirmPaymentAndCreateOrderResult');
  return {
    client_secret:
      overrides && overrides.hasOwnProperty('client_secret')
        ? overrides.client_secret!
        : 'vel',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'et',
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : PaymentIntentStatus.Canceled,
  };
};

export const aCoupon = (
  overrides?: Partial<Coupon>,
  _relationshipsToOmit: Set<string> = new Set(),
): Coupon => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Coupon');
  return {
    code:
      overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'vitae',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'et',
    discountType:
      overrides && overrides.hasOwnProperty('discountType')
        ? overrides.discountType!
        : 'repellat',
    discountValue:
      overrides && overrides.hasOwnProperty('discountValue')
        ? overrides.discountValue!
        : 6.61,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'eef7ff5f-08eb-4313-b470-452195df68d4',
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : true,
    minimumPurchaseAmount:
      overrides && overrides.hasOwnProperty('minimumPurchaseAmount')
        ? overrides.minimumPurchaseAmount!
        : 5557,
    usageLimit:
      overrides && overrides.hasOwnProperty('usageLimit')
        ? overrides.usageLimit!
        : 9961,
    validFrom:
      overrides && overrides.hasOwnProperty('validFrom')
        ? overrides.validFrom!
        : 'voluptates',
    validUntil:
      overrides && overrides.hasOwnProperty('validUntil')
        ? overrides.validUntil!
        : 'amet',
  };
};

export const aCouponCreateInput = (
  overrides?: Partial<CouponCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponCreateInput');
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : 'expedita',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'rerum',
    discountType:
      overrides && overrides.hasOwnProperty('discountType')
        ? overrides.discountType!
        : 'sunt',
    discountValue:
      overrides && overrides.hasOwnProperty('discountValue')
        ? overrides.discountValue!
        : 2.45,
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : true,
    minimumPurchaseAmount:
      overrides && overrides.hasOwnProperty('minimumPurchaseAmount')
        ? overrides.minimumPurchaseAmount!
        : 604,
    usageLimit:
      overrides && overrides.hasOwnProperty('usageLimit')
        ? overrides.usageLimit!
        : 2466,
    validFrom:
      overrides && overrides.hasOwnProperty('validFrom')
        ? overrides.validFrom!
        : 'laborum',
    validUntil:
      overrides && overrides.hasOwnProperty('validUntil')
        ? overrides.validUntil!
        : 'quam',
  };
};

export const aCouponOrderByInput = (
  overrides?: Partial<CouponOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponOrderByInput');
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : OrderDirection.Asc,
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : OrderDirection.Asc,
    discountType:
      overrides && overrides.hasOwnProperty('discountType')
        ? overrides.discountType!
        : OrderDirection.Asc,
    discountValue:
      overrides && overrides.hasOwnProperty('discountValue')
        ? overrides.discountValue!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : OrderDirection.Asc,
    minimumPurchaseAmount:
      overrides && overrides.hasOwnProperty('minimumPurchaseAmount')
        ? overrides.minimumPurchaseAmount!
        : OrderDirection.Asc,
    usageLimit:
      overrides && overrides.hasOwnProperty('usageLimit')
        ? overrides.usageLimit!
        : OrderDirection.Asc,
    validFrom:
      overrides && overrides.hasOwnProperty('validFrom')
        ? overrides.validFrom!
        : OrderDirection.Asc,
    validUntil:
      overrides && overrides.hasOwnProperty('validUntil')
        ? overrides.validUntil!
        : OrderDirection.Asc,
  };
};

export const aCouponUpdateArgs = (
  overrides?: Partial<CouponUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('CouponUpdateInput')
          ? ({} as CouponUpdateInput)
          : aCouponUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('CouponWhereUniqueInput')
          ? ({} as CouponWhereUniqueInput)
          : aCouponWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aCouponUpdateInput = (
  overrides?: Partial<CouponUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponUpdateInput');
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : 'accusantium',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'ipsum',
    discountType:
      overrides && overrides.hasOwnProperty('discountType')
        ? overrides.discountType!
        : 'ducimus',
    discountValue:
      overrides && overrides.hasOwnProperty('discountValue')
        ? overrides.discountValue!
        : 6.67,
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : false,
    minimumPurchaseAmount:
      overrides && overrides.hasOwnProperty('minimumPurchaseAmount')
        ? overrides.minimumPurchaseAmount!
        : 9664,
    usageLimit:
      overrides && overrides.hasOwnProperty('usageLimit')
        ? overrides.usageLimit!
        : 9000,
    validFrom:
      overrides && overrides.hasOwnProperty('validFrom')
        ? overrides.validFrom!
        : 'quod',
    validUntil:
      overrides && overrides.hasOwnProperty('validUntil')
        ? overrides.validUntil!
        : 'molestiae',
  };
};

export const aCouponWhereInput = (
  overrides?: Partial<CouponWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('CouponWhereInput')
              ? ({} as CouponWhereInput)
              : aCouponWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('CouponWhereInput')
              ? ({} as CouponWhereInput)
              : aCouponWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('CouponWhereInput')
              ? ({} as CouponWhereInput)
              : aCouponWhereInput({}, relationshipsToOmit),
          ],
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    discountType:
      overrides && overrides.hasOwnProperty('discountType')
        ? overrides.discountType!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    discountValue:
      overrides && overrides.hasOwnProperty('discountValue')
        ? overrides.discountValue!
        : relationshipsToOmit.has('FloatFilter')
          ? ({} as FloatFilter)
          : aFloatFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    isActive:
      overrides && overrides.hasOwnProperty('isActive')
        ? overrides.isActive!
        : relationshipsToOmit.has('BooleanFilter')
          ? ({} as BooleanFilter)
          : aBooleanFilter({}, relationshipsToOmit),
    minimumPurchaseAmount:
      overrides && overrides.hasOwnProperty('minimumPurchaseAmount')
        ? overrides.minimumPurchaseAmount!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    usageLimit:
      overrides && overrides.hasOwnProperty('usageLimit')
        ? overrides.usageLimit!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    validFrom:
      overrides && overrides.hasOwnProperty('validFrom')
        ? overrides.validFrom!
        : relationshipsToOmit.has('DateTimeFilter')
          ? ({} as DateTimeFilter)
          : aDateTimeFilter({}, relationshipsToOmit),
    validUntil:
      overrides && overrides.hasOwnProperty('validUntil')
        ? overrides.validUntil!
        : relationshipsToOmit.has('DateTimeFilter')
          ? ({} as DateTimeFilter)
          : aDateTimeFilter({}, relationshipsToOmit),
  };
};

export const aCouponWhereUniqueInput = (
  overrides?: Partial<CouponWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CouponWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CouponWhereUniqueInput');
  return {
    code:
      overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'non',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '897b4fd0-696b-452e-a40c-4f678cd0e5c5',
  };
};

export const aCreateInitialUserInput = (
  overrides?: Partial<CreateInitialUserInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): CreateInitialUserInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CreateInitialUserInput');
  return {
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'qui',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'perspiciatis',
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'ea',
  };
};

export const aCreatePaymentIntentResult = (
  overrides?: Partial<CreatePaymentIntentResult>,
  _relationshipsToOmit: Set<string> = new Set(),
): CreatePaymentIntentResult => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('CreatePaymentIntentResult');
  return {
    client_secret:
      overrides && overrides.hasOwnProperty('client_secret')
        ? overrides.client_secret!
        : 'minus',
    id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'rerum',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : PaymentIntentStatus.Canceled,
  };
};

export const aDateTimeFilter = (
  overrides?: Partial<DateTimeFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): DateTimeFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('DateTimeFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'officia',
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'eum',
    gte:
      overrides && overrides.hasOwnProperty('gte')
        ? overrides.gte!
        : 'accusantium',
    in:
      overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['impedit'],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'sit',
    lte:
      overrides && overrides.hasOwnProperty('lte')
        ? overrides.lte!
        : 'quibusdam',
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('DateTimeFilter')
          ? ({} as DateTimeFilter)
          : aDateTimeFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['aut'],
  };
};

export const aDateTimeNullableFilter = (
  overrides?: Partial<DateTimeNullableFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): DateTimeNullableFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('DateTimeNullableFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'inventore',
    gt:
      overrides && overrides.hasOwnProperty('gt')
        ? overrides.gt!
        : 'cupiditate',
    gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'id',
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['qui'],
    lt:
      overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'mollitia',
    lte:
      overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'magni',
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('DateTimeNullableFilter')
          ? ({} as DateTimeNullableFilter)
          : aDateTimeNullableFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['enim'],
  };
};

export const aFloatFilter = (
  overrides?: Partial<FloatFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): FloatFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('FloatFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 5.67,
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 5.81,
    gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 8.02,
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [6.16],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 8.06,
    lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 2.07,
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('FloatFilter')
          ? ({} as FloatFilter)
          : aFloatFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : [6.14],
  };
};

export const anIdFilter = (
  overrides?: Partial<IdFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): IdFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('IdFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : '18ebb630-9955-4fb0-b34a-c5e1ef7fc7c8',
    gt:
      overrides && overrides.hasOwnProperty('gt')
        ? overrides.gt!
        : '0a9518c8-9e1a-4285-8f45-60d6950bb005',
    gte:
      overrides && overrides.hasOwnProperty('gte')
        ? overrides.gte!
        : '24a9c4ff-254b-45f1-92bd-02ea0ea3f04b',
    in:
      overrides && overrides.hasOwnProperty('in')
        ? overrides.in!
        : ['7fe718b5-aa68-4388-8ade-7507e321ec5f'],
    lt:
      overrides && overrides.hasOwnProperty('lt')
        ? overrides.lt!
        : '9a21195d-48f4-4ad3-962f-e6992bfa7079',
    lte:
      overrides && overrides.hasOwnProperty('lte')
        ? overrides.lte!
        : 'a2113bfa-1c76-4474-9758-295d33850dfd',
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['96f5425b-a22b-41a1-aaf9-9fe4540b6f25'],
  };
};

export const anIntFilter = (
  overrides?: Partial<IntFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): IntFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('IntFilter');
  return {
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 7948,
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 2833,
    gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 492,
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : [8490],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 8311,
    lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 6047,
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : [8093],
  };
};

export const aKeystoneAdminMeta = (
  overrides?: Partial<KeystoneAdminMeta>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminMeta => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminMeta');
  return {
    list:
      overrides && overrides.hasOwnProperty('list')
        ? overrides.list!
        : relationshipsToOmit.has('KeystoneAdminUiListMeta')
          ? ({} as KeystoneAdminUiListMeta)
          : aKeystoneAdminUiListMeta({}, relationshipsToOmit),
    lists:
      overrides && overrides.hasOwnProperty('lists')
        ? overrides.lists!
        : [
            relationshipsToOmit.has('KeystoneAdminUiListMeta')
              ? ({} as KeystoneAdminUiListMeta)
              : aKeystoneAdminUiListMeta({}, relationshipsToOmit),
          ],
  };
};

export const aKeystoneAdminUiFieldGroupMeta = (
  overrides?: Partial<KeystoneAdminUiFieldGroupMeta>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiFieldGroupMeta => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiFieldGroupMeta');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'minus',
    fields:
      overrides && overrides.hasOwnProperty('fields')
        ? overrides.fields!
        : [
            relationshipsToOmit.has('KeystoneAdminUiFieldMeta')
              ? ({} as KeystoneAdminUiFieldMeta)
              : aKeystoneAdminUiFieldMeta({}, relationshipsToOmit),
          ],
    label:
      overrides && overrides.hasOwnProperty('label')
        ? overrides.label!
        : 'consequatur',
  };
};

export const aKeystoneAdminUiFieldMeta = (
  overrides?: Partial<KeystoneAdminUiFieldMeta>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiFieldMeta => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiFieldMeta');
  return {
    createView:
      overrides && overrides.hasOwnProperty('createView')
        ? overrides.createView!
        : relationshipsToOmit.has('KeystoneAdminUiFieldMetaCreateView')
          ? ({} as KeystoneAdminUiFieldMetaCreateView)
          : aKeystoneAdminUiFieldMetaCreateView({}, relationshipsToOmit),
    customViewsIndex:
      overrides && overrides.hasOwnProperty('customViewsIndex')
        ? overrides.customViewsIndex!
        : 8198,
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'corporis',
    fieldMeta:
      overrides && overrides.hasOwnProperty('fieldMeta')
        ? overrides.fieldMeta!
        : 'maxime',
    isFilterable:
      overrides && overrides.hasOwnProperty('isFilterable')
        ? overrides.isFilterable!
        : false,
    isNonNull:
      overrides && overrides.hasOwnProperty('isNonNull')
        ? overrides.isNonNull!
        : [KeystoneAdminUiFieldMetaIsNonNull.Create],
    isOrderable:
      overrides && overrides.hasOwnProperty('isOrderable')
        ? overrides.isOrderable!
        : false,
    itemView:
      overrides && overrides.hasOwnProperty('itemView')
        ? overrides.itemView!
        : relationshipsToOmit.has('KeystoneAdminUiFieldMetaItemView')
          ? ({} as KeystoneAdminUiFieldMetaItemView)
          : aKeystoneAdminUiFieldMetaItemView({}, relationshipsToOmit),
    label:
      overrides && overrides.hasOwnProperty('label') ? overrides.label! : 'qui',
    listView:
      overrides && overrides.hasOwnProperty('listView')
        ? overrides.listView!
        : relationshipsToOmit.has('KeystoneAdminUiFieldMetaListView')
          ? ({} as KeystoneAdminUiFieldMetaListView)
          : aKeystoneAdminUiFieldMetaListView({}, relationshipsToOmit),
    path:
      overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'quis',
    search:
      overrides && overrides.hasOwnProperty('search')
        ? overrides.search!
        : QueryMode.Default,
    viewsIndex:
      overrides && overrides.hasOwnProperty('viewsIndex')
        ? overrides.viewsIndex!
        : 4895,
  };
};

export const aKeystoneAdminUiFieldMetaCreateView = (
  overrides?: Partial<KeystoneAdminUiFieldMetaCreateView>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiFieldMetaCreateView => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiFieldMetaCreateView');
  return {
    fieldMode:
      overrides && overrides.hasOwnProperty('fieldMode')
        ? overrides.fieldMode!
        : KeystoneAdminUiFieldMetaCreateViewFieldMode.Edit,
  };
};

export const aKeystoneAdminUiFieldMetaItemView = (
  overrides?: Partial<KeystoneAdminUiFieldMetaItemView>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiFieldMetaItemView => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiFieldMetaItemView');
  return {
    fieldMode:
      overrides && overrides.hasOwnProperty('fieldMode')
        ? overrides.fieldMode!
        : KeystoneAdminUiFieldMetaItemViewFieldMode.Edit,
    fieldPosition:
      overrides && overrides.hasOwnProperty('fieldPosition')
        ? overrides.fieldPosition!
        : KeystoneAdminUiFieldMetaItemViewFieldPosition.Form,
  };
};

export const aKeystoneAdminUiFieldMetaListView = (
  overrides?: Partial<KeystoneAdminUiFieldMetaListView>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiFieldMetaListView => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiFieldMetaListView');
  return {
    fieldMode:
      overrides && overrides.hasOwnProperty('fieldMode')
        ? overrides.fieldMode!
        : KeystoneAdminUiFieldMetaListViewFieldMode.Hidden,
  };
};

export const aKeystoneAdminUiListMeta = (
  overrides?: Partial<KeystoneAdminUiListMeta>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiListMeta => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiListMeta');
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'quo',
    fields:
      overrides && overrides.hasOwnProperty('fields')
        ? overrides.fields!
        : [
            relationshipsToOmit.has('KeystoneAdminUiFieldMeta')
              ? ({} as KeystoneAdminUiFieldMeta)
              : aKeystoneAdminUiFieldMeta({}, relationshipsToOmit),
          ],
    groups:
      overrides && overrides.hasOwnProperty('groups')
        ? overrides.groups!
        : [
            relationshipsToOmit.has('KeystoneAdminUiFieldGroupMeta')
              ? ({} as KeystoneAdminUiFieldGroupMeta)
              : aKeystoneAdminUiFieldGroupMeta({}, relationshipsToOmit),
          ],
    hideCreate:
      overrides && overrides.hasOwnProperty('hideCreate')
        ? overrides.hideCreate!
        : false,
    hideDelete:
      overrides && overrides.hasOwnProperty('hideDelete')
        ? overrides.hideDelete!
        : false,
    initialColumns:
      overrides && overrides.hasOwnProperty('initialColumns')
        ? overrides.initialColumns!
        : ['necessitatibus'],
    initialSort:
      overrides && overrides.hasOwnProperty('initialSort')
        ? overrides.initialSort!
        : relationshipsToOmit.has('KeystoneAdminUiSort')
          ? ({} as KeystoneAdminUiSort)
          : aKeystoneAdminUiSort({}, relationshipsToOmit),
    isHidden:
      overrides && overrides.hasOwnProperty('isHidden')
        ? overrides.isHidden!
        : true,
    isSingleton:
      overrides && overrides.hasOwnProperty('isSingleton')
        ? overrides.isSingleton!
        : false,
    itemQueryName:
      overrides && overrides.hasOwnProperty('itemQueryName')
        ? overrides.itemQueryName!
        : 'nesciunt',
    key:
      overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'dolor',
    label:
      overrides && overrides.hasOwnProperty('label')
        ? overrides.label!
        : 'eveniet',
    labelField:
      overrides && overrides.hasOwnProperty('labelField')
        ? overrides.labelField!
        : 'unde',
    listQueryName:
      overrides && overrides.hasOwnProperty('listQueryName')
        ? overrides.listQueryName!
        : 'aut',
    pageSize:
      overrides && overrides.hasOwnProperty('pageSize')
        ? overrides.pageSize!
        : 5946,
    path:
      overrides && overrides.hasOwnProperty('path') ? overrides.path! : 'quia',
    plural:
      overrides && overrides.hasOwnProperty('plural')
        ? overrides.plural!
        : 'laborum',
    singular:
      overrides && overrides.hasOwnProperty('singular')
        ? overrides.singular!
        : 'temporibus',
  };
};

export const aKeystoneAdminUiSort = (
  overrides?: Partial<KeystoneAdminUiSort>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneAdminUiSort => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneAdminUiSort');
  return {
    direction:
      overrides && overrides.hasOwnProperty('direction')
        ? overrides.direction!
        : KeystoneAdminUiSortDirection.Asc,
    field:
      overrides && overrides.hasOwnProperty('field')
        ? overrides.field!
        : 'tempore',
  };
};

export const aKeystoneMeta = (
  overrides?: Partial<KeystoneMeta>,
  _relationshipsToOmit: Set<string> = new Set(),
): KeystoneMeta => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('KeystoneMeta');
  return {
    adminMeta:
      overrides && overrides.hasOwnProperty('adminMeta')
        ? overrides.adminMeta!
        : relationshipsToOmit.has('KeystoneAdminMeta')
          ? ({} as KeystoneAdminMeta)
          : aKeystoneAdminMeta({}, relationshipsToOmit),
  };
};

export const aMinMax = (
  overrides?: Partial<MinMax>,
  _relationshipsToOmit: Set<string> = new Set(),
): MinMax => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('MinMax');
  return {
    max: overrides && overrides.hasOwnProperty('max') ? overrides.max! : 2.78,
    min: overrides && overrides.hasOwnProperty('min') ? overrides.min! : 9.48,
  };
};

export const aMutation = (
  overrides?: Partial<Mutation>,
  _relationshipsToOmit: Set<string> = new Set(),
): Mutation => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Mutation');
  return {
    addToCart:
      overrides && overrides.hasOwnProperty('addToCart')
        ? overrides.addToCart!
        : relationshipsToOmit.has('CartItem')
          ? ({} as CartItem)
          : aCartItem({}, relationshipsToOmit),
    authenticateUserWithPassword:
      overrides && overrides.hasOwnProperty('authenticateUserWithPassword')
        ? overrides.authenticateUserWithPassword!
        : relationshipsToOmit.has('UserAuthenticationWithPasswordFailure')
          ? ({} as UserAuthenticationWithPasswordFailure)
          : aUserAuthenticationWithPasswordFailure({}, relationshipsToOmit),
    confirmPaymentAndCreateOrder:
      overrides && overrides.hasOwnProperty('confirmPaymentAndCreateOrder')
        ? overrides.confirmPaymentAndCreateOrder!
        : relationshipsToOmit.has('ConfirmPaymentAndCreateOrderResult')
          ? ({} as ConfirmPaymentAndCreateOrderResult)
          : aConfirmPaymentAndCreateOrderResult({}, relationshipsToOmit),
    createBanner:
      overrides && overrides.hasOwnProperty('createBanner')
        ? overrides.createBanner!
        : relationshipsToOmit.has('Banner')
          ? ({} as Banner)
          : aBanner({}, relationshipsToOmit),
    createBanners:
      overrides && overrides.hasOwnProperty('createBanners')
        ? overrides.createBanners!
        : [
            relationshipsToOmit.has('Banner')
              ? ({} as Banner)
              : aBanner({}, relationshipsToOmit),
          ],
    createCartItem:
      overrides && overrides.hasOwnProperty('createCartItem')
        ? overrides.createCartItem!
        : relationshipsToOmit.has('CartItem')
          ? ({} as CartItem)
          : aCartItem({}, relationshipsToOmit),
    createCartItems:
      overrides && overrides.hasOwnProperty('createCartItems')
        ? overrides.createCartItems!
        : [
            relationshipsToOmit.has('CartItem')
              ? ({} as CartItem)
              : aCartItem({}, relationshipsToOmit),
          ],
    createCategories:
      overrides && overrides.hasOwnProperty('createCategories')
        ? overrides.createCategories!
        : [
            relationshipsToOmit.has('Category')
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    createCategory:
      overrides && overrides.hasOwnProperty('createCategory')
        ? overrides.createCategory!
        : relationshipsToOmit.has('Category')
          ? ({} as Category)
          : aCategory({}, relationshipsToOmit),
    createCoupon:
      overrides && overrides.hasOwnProperty('createCoupon')
        ? overrides.createCoupon!
        : relationshipsToOmit.has('Coupon')
          ? ({} as Coupon)
          : aCoupon({}, relationshipsToOmit),
    createCoupons:
      overrides && overrides.hasOwnProperty('createCoupons')
        ? overrides.createCoupons!
        : [
            relationshipsToOmit.has('Coupon')
              ? ({} as Coupon)
              : aCoupon({}, relationshipsToOmit),
          ],
    createInitialUser:
      overrides && overrides.hasOwnProperty('createInitialUser')
        ? overrides.createInitialUser!
        : relationshipsToOmit.has('UserAuthenticationWithPasswordSuccess')
          ? ({} as UserAuthenticationWithPasswordSuccess)
          : aUserAuthenticationWithPasswordSuccess({}, relationshipsToOmit),
    createOrder:
      overrides && overrides.hasOwnProperty('createOrder')
        ? overrides.createOrder!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    createOrderItem:
      overrides && overrides.hasOwnProperty('createOrderItem')
        ? overrides.createOrderItem!
        : relationshipsToOmit.has('OrderItem')
          ? ({} as OrderItem)
          : anOrderItem({}, relationshipsToOmit),
    createOrderItems:
      overrides && overrides.hasOwnProperty('createOrderItems')
        ? overrides.createOrderItems!
        : [
            relationshipsToOmit.has('OrderItem')
              ? ({} as OrderItem)
              : anOrderItem({}, relationshipsToOmit),
          ],
    createOrders:
      overrides && overrides.hasOwnProperty('createOrders')
        ? overrides.createOrders!
        : [
            relationshipsToOmit.has('Order')
              ? ({} as Order)
              : anOrder({}, relationshipsToOmit),
          ],
    createPaymentIntent:
      overrides && overrides.hasOwnProperty('createPaymentIntent')
        ? overrides.createPaymentIntent!
        : relationshipsToOmit.has('CreatePaymentIntentResult')
          ? ({} as CreatePaymentIntentResult)
          : aCreatePaymentIntentResult({}, relationshipsToOmit),
    createProduct:
      overrides && overrides.hasOwnProperty('createProduct')
        ? overrides.createProduct!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
    createProductImage:
      overrides && overrides.hasOwnProperty('createProductImage')
        ? overrides.createProductImage!
        : relationshipsToOmit.has('ProductImage')
          ? ({} as ProductImage)
          : aProductImage({}, relationshipsToOmit),
    createProductImages:
      overrides && overrides.hasOwnProperty('createProductImages')
        ? overrides.createProductImages!
        : [
            relationshipsToOmit.has('ProductImage')
              ? ({} as ProductImage)
              : aProductImage({}, relationshipsToOmit),
          ],
    createProductSnapshot:
      overrides && overrides.hasOwnProperty('createProductSnapshot')
        ? overrides.createProductSnapshot!
        : relationshipsToOmit.has('ProductSnapshot')
          ? ({} as ProductSnapshot)
          : aProductSnapshot({}, relationshipsToOmit),
    createProductSnapshots:
      overrides && overrides.hasOwnProperty('createProductSnapshots')
        ? overrides.createProductSnapshots!
        : [
            relationshipsToOmit.has('ProductSnapshot')
              ? ({} as ProductSnapshot)
              : aProductSnapshot({}, relationshipsToOmit),
          ],
    createProductVariant:
      overrides && overrides.hasOwnProperty('createProductVariant')
        ? overrides.createProductVariant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
    createProductVariants:
      overrides && overrides.hasOwnProperty('createProductVariants')
        ? overrides.createProductVariants!
        : [
            relationshipsToOmit.has('ProductVariant')
              ? ({} as ProductVariant)
              : aProductVariant({}, relationshipsToOmit),
          ],
    createProducts:
      overrides && overrides.hasOwnProperty('createProducts')
        ? overrides.createProducts!
        : [
            relationshipsToOmit.has('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    createUser:
      overrides && overrides.hasOwnProperty('createUser')
        ? overrides.createUser!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    createUsers:
      overrides && overrides.hasOwnProperty('createUsers')
        ? overrides.createUsers!
        : [
            relationshipsToOmit.has('User')
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
    deleteBanner:
      overrides && overrides.hasOwnProperty('deleteBanner')
        ? overrides.deleteBanner!
        : relationshipsToOmit.has('Banner')
          ? ({} as Banner)
          : aBanner({}, relationshipsToOmit),
    deleteBanners:
      overrides && overrides.hasOwnProperty('deleteBanners')
        ? overrides.deleteBanners!
        : [
            relationshipsToOmit.has('Banner')
              ? ({} as Banner)
              : aBanner({}, relationshipsToOmit),
          ],
    deleteCartItem:
      overrides && overrides.hasOwnProperty('deleteCartItem')
        ? overrides.deleteCartItem!
        : relationshipsToOmit.has('CartItem')
          ? ({} as CartItem)
          : aCartItem({}, relationshipsToOmit),
    deleteCartItems:
      overrides && overrides.hasOwnProperty('deleteCartItems')
        ? overrides.deleteCartItems!
        : [
            relationshipsToOmit.has('CartItem')
              ? ({} as CartItem)
              : aCartItem({}, relationshipsToOmit),
          ],
    deleteCategories:
      overrides && overrides.hasOwnProperty('deleteCategories')
        ? overrides.deleteCategories!
        : [
            relationshipsToOmit.has('Category')
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    deleteCategory:
      overrides && overrides.hasOwnProperty('deleteCategory')
        ? overrides.deleteCategory!
        : relationshipsToOmit.has('Category')
          ? ({} as Category)
          : aCategory({}, relationshipsToOmit),
    deleteCoupon:
      overrides && overrides.hasOwnProperty('deleteCoupon')
        ? overrides.deleteCoupon!
        : relationshipsToOmit.has('Coupon')
          ? ({} as Coupon)
          : aCoupon({}, relationshipsToOmit),
    deleteCoupons:
      overrides && overrides.hasOwnProperty('deleteCoupons')
        ? overrides.deleteCoupons!
        : [
            relationshipsToOmit.has('Coupon')
              ? ({} as Coupon)
              : aCoupon({}, relationshipsToOmit),
          ],
    deleteOrder:
      overrides && overrides.hasOwnProperty('deleteOrder')
        ? overrides.deleteOrder!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    deleteOrderItem:
      overrides && overrides.hasOwnProperty('deleteOrderItem')
        ? overrides.deleteOrderItem!
        : relationshipsToOmit.has('OrderItem')
          ? ({} as OrderItem)
          : anOrderItem({}, relationshipsToOmit),
    deleteOrderItems:
      overrides && overrides.hasOwnProperty('deleteOrderItems')
        ? overrides.deleteOrderItems!
        : [
            relationshipsToOmit.has('OrderItem')
              ? ({} as OrderItem)
              : anOrderItem({}, relationshipsToOmit),
          ],
    deleteOrders:
      overrides && overrides.hasOwnProperty('deleteOrders')
        ? overrides.deleteOrders!
        : [
            relationshipsToOmit.has('Order')
              ? ({} as Order)
              : anOrder({}, relationshipsToOmit),
          ],
    deleteProduct:
      overrides && overrides.hasOwnProperty('deleteProduct')
        ? overrides.deleteProduct!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
    deleteProductImage:
      overrides && overrides.hasOwnProperty('deleteProductImage')
        ? overrides.deleteProductImage!
        : relationshipsToOmit.has('ProductImage')
          ? ({} as ProductImage)
          : aProductImage({}, relationshipsToOmit),
    deleteProductImages:
      overrides && overrides.hasOwnProperty('deleteProductImages')
        ? overrides.deleteProductImages!
        : [
            relationshipsToOmit.has('ProductImage')
              ? ({} as ProductImage)
              : aProductImage({}, relationshipsToOmit),
          ],
    deleteProductSnapshot:
      overrides && overrides.hasOwnProperty('deleteProductSnapshot')
        ? overrides.deleteProductSnapshot!
        : relationshipsToOmit.has('ProductSnapshot')
          ? ({} as ProductSnapshot)
          : aProductSnapshot({}, relationshipsToOmit),
    deleteProductSnapshots:
      overrides && overrides.hasOwnProperty('deleteProductSnapshots')
        ? overrides.deleteProductSnapshots!
        : [
            relationshipsToOmit.has('ProductSnapshot')
              ? ({} as ProductSnapshot)
              : aProductSnapshot({}, relationshipsToOmit),
          ],
    deleteProductVariant:
      overrides && overrides.hasOwnProperty('deleteProductVariant')
        ? overrides.deleteProductVariant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
    deleteProductVariants:
      overrides && overrides.hasOwnProperty('deleteProductVariants')
        ? overrides.deleteProductVariants!
        : [
            relationshipsToOmit.has('ProductVariant')
              ? ({} as ProductVariant)
              : aProductVariant({}, relationshipsToOmit),
          ],
    deleteProducts:
      overrides && overrides.hasOwnProperty('deleteProducts')
        ? overrides.deleteProducts!
        : [
            relationshipsToOmit.has('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    deleteUser:
      overrides && overrides.hasOwnProperty('deleteUser')
        ? overrides.deleteUser!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    deleteUsers:
      overrides && overrides.hasOwnProperty('deleteUsers')
        ? overrides.deleteUsers!
        : [
            relationshipsToOmit.has('User')
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
    endSession:
      overrides && overrides.hasOwnProperty('endSession')
        ? overrides.endSession!
        : true,
    redeemUserPasswordResetToken:
      overrides && overrides.hasOwnProperty('redeemUserPasswordResetToken')
        ? overrides.redeemUserPasswordResetToken!
        : relationshipsToOmit.has('RedeemUserPasswordResetTokenResult')
          ? ({} as RedeemUserPasswordResetTokenResult)
          : aRedeemUserPasswordResetTokenResult({}, relationshipsToOmit),
    sendUserPasswordResetLink:
      overrides && overrides.hasOwnProperty('sendUserPasswordResetLink')
        ? overrides.sendUserPasswordResetLink!
        : true,
    updateBanner:
      overrides && overrides.hasOwnProperty('updateBanner')
        ? overrides.updateBanner!
        : relationshipsToOmit.has('Banner')
          ? ({} as Banner)
          : aBanner({}, relationshipsToOmit),
    updateBanners:
      overrides && overrides.hasOwnProperty('updateBanners')
        ? overrides.updateBanners!
        : [
            relationshipsToOmit.has('Banner')
              ? ({} as Banner)
              : aBanner({}, relationshipsToOmit),
          ],
    updateCartItem:
      overrides && overrides.hasOwnProperty('updateCartItem')
        ? overrides.updateCartItem!
        : relationshipsToOmit.has('CartItem')
          ? ({} as CartItem)
          : aCartItem({}, relationshipsToOmit),
    updateCartItems:
      overrides && overrides.hasOwnProperty('updateCartItems')
        ? overrides.updateCartItems!
        : [
            relationshipsToOmit.has('CartItem')
              ? ({} as CartItem)
              : aCartItem({}, relationshipsToOmit),
          ],
    updateCategories:
      overrides && overrides.hasOwnProperty('updateCategories')
        ? overrides.updateCategories!
        : [
            relationshipsToOmit.has('Category')
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    updateCategory:
      overrides && overrides.hasOwnProperty('updateCategory')
        ? overrides.updateCategory!
        : relationshipsToOmit.has('Category')
          ? ({} as Category)
          : aCategory({}, relationshipsToOmit),
    updateCoupon:
      overrides && overrides.hasOwnProperty('updateCoupon')
        ? overrides.updateCoupon!
        : relationshipsToOmit.has('Coupon')
          ? ({} as Coupon)
          : aCoupon({}, relationshipsToOmit),
    updateCoupons:
      overrides && overrides.hasOwnProperty('updateCoupons')
        ? overrides.updateCoupons!
        : [
            relationshipsToOmit.has('Coupon')
              ? ({} as Coupon)
              : aCoupon({}, relationshipsToOmit),
          ],
    updateOrder:
      overrides && overrides.hasOwnProperty('updateOrder')
        ? overrides.updateOrder!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    updateOrderItem:
      overrides && overrides.hasOwnProperty('updateOrderItem')
        ? overrides.updateOrderItem!
        : relationshipsToOmit.has('OrderItem')
          ? ({} as OrderItem)
          : anOrderItem({}, relationshipsToOmit),
    updateOrderItems:
      overrides && overrides.hasOwnProperty('updateOrderItems')
        ? overrides.updateOrderItems!
        : [
            relationshipsToOmit.has('OrderItem')
              ? ({} as OrderItem)
              : anOrderItem({}, relationshipsToOmit),
          ],
    updateOrders:
      overrides && overrides.hasOwnProperty('updateOrders')
        ? overrides.updateOrders!
        : [
            relationshipsToOmit.has('Order')
              ? ({} as Order)
              : anOrder({}, relationshipsToOmit),
          ],
    updateProduct:
      overrides && overrides.hasOwnProperty('updateProduct')
        ? overrides.updateProduct!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
    updateProductImage:
      overrides && overrides.hasOwnProperty('updateProductImage')
        ? overrides.updateProductImage!
        : relationshipsToOmit.has('ProductImage')
          ? ({} as ProductImage)
          : aProductImage({}, relationshipsToOmit),
    updateProductImages:
      overrides && overrides.hasOwnProperty('updateProductImages')
        ? overrides.updateProductImages!
        : [
            relationshipsToOmit.has('ProductImage')
              ? ({} as ProductImage)
              : aProductImage({}, relationshipsToOmit),
          ],
    updateProductSnapshot:
      overrides && overrides.hasOwnProperty('updateProductSnapshot')
        ? overrides.updateProductSnapshot!
        : relationshipsToOmit.has('ProductSnapshot')
          ? ({} as ProductSnapshot)
          : aProductSnapshot({}, relationshipsToOmit),
    updateProductSnapshots:
      overrides && overrides.hasOwnProperty('updateProductSnapshots')
        ? overrides.updateProductSnapshots!
        : [
            relationshipsToOmit.has('ProductSnapshot')
              ? ({} as ProductSnapshot)
              : aProductSnapshot({}, relationshipsToOmit),
          ],
    updateProductVariant:
      overrides && overrides.hasOwnProperty('updateProductVariant')
        ? overrides.updateProductVariant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
    updateProductVariants:
      overrides && overrides.hasOwnProperty('updateProductVariants')
        ? overrides.updateProductVariants!
        : [
            relationshipsToOmit.has('ProductVariant')
              ? ({} as ProductVariant)
              : aProductVariant({}, relationshipsToOmit),
          ],
    updateProducts:
      overrides && overrides.hasOwnProperty('updateProducts')
        ? overrides.updateProducts!
        : [
            relationshipsToOmit.has('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    updateUser:
      overrides && overrides.hasOwnProperty('updateUser')
        ? overrides.updateUser!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    updateUsers:
      overrides && overrides.hasOwnProperty('updateUsers')
        ? overrides.updateUsers!
        : [
            relationshipsToOmit.has('User')
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
    validateCoupon:
      overrides && overrides.hasOwnProperty('validateCoupon')
        ? overrides.validateCoupon!
        : relationshipsToOmit.has('ValidateCouponResult')
          ? ({} as ValidateCouponResult)
          : aValidateCouponResult({}, relationshipsToOmit),
  };
};

export const aNestedStringFilter = (
  overrides?: Partial<NestedStringFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): NestedStringFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('NestedStringFilter');
  return {
    contains:
      overrides && overrides.hasOwnProperty('contains')
        ? overrides.contains!
        : 'voluptas',
    endsWith:
      overrides && overrides.hasOwnProperty('endsWith')
        ? overrides.endsWith!
        : 'qui',
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'accusamus',
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'velit',
    gte:
      overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'vitae',
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['quas'],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'id',
    lte:
      overrides && overrides.hasOwnProperty('lte')
        ? overrides.lte!
        : 'voluptatem',
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('NestedStringFilter')
          ? ({} as NestedStringFilter)
          : aNestedStringFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['debitis'],
    startsWith:
      overrides && overrides.hasOwnProperty('startsWith')
        ? overrides.startsWith!
        : 'molestiae',
  };
};

export const anOrder = (
  overrides?: Partial<Order>,
  _relationshipsToOmit: Set<string> = new Set(),
): Order => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Order');
  return {
    charge:
      overrides && overrides.hasOwnProperty('charge')
        ? overrides.charge!
        : 'et',
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : 'aliquid',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'ea',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9614fc2f-1dc8-4b20-94e9-ff966e8bfd93',
    items:
      overrides && overrides.hasOwnProperty('items')
        ? overrides.items!
        : [
            relationshipsToOmit.has('OrderItem')
              ? ({} as OrderItem)
              : anOrderItem({}, relationshipsToOmit),
          ],
    itemsCount:
      overrides && overrides.hasOwnProperty('itemsCount')
        ? overrides.itemsCount!
        : 1981,
    total:
      overrides && overrides.hasOwnProperty('total') ? overrides.total! : 393,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
  };
};

export const anOrderCreateInput = (
  overrides?: Partial<OrderCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderCreateInput');
  return {
    charge:
      overrides && overrides.hasOwnProperty('charge')
        ? overrides.charge!
        : 'earum',
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : 'in',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'ut',
    items:
      overrides && overrides.hasOwnProperty('items')
        ? overrides.items!
        : relationshipsToOmit.has('OrderItemRelateToManyForCreateInput')
          ? ({} as OrderItemRelateToManyForCreateInput)
          : anOrderItemRelateToManyForCreateInput({}, relationshipsToOmit),
    total:
      overrides && overrides.hasOwnProperty('total') ? overrides.total! : 8615,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserRelateToOneForCreateInput')
          ? ({} as UserRelateToOneForCreateInput)
          : aUserRelateToOneForCreateInput({}, relationshipsToOmit),
  };
};

export const anOrderItem = (
  overrides?: Partial<OrderItem>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItem => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItem');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '90667681-1bcc-4bc5-81c6-a0f296aa1a9b',
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 3357,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 4143,
    snapshot:
      overrides && overrides.hasOwnProperty('snapshot')
        ? overrides.snapshot!
        : relationshipsToOmit.has('ProductSnapshot')
          ? ({} as ProductSnapshot)
          : aProductSnapshot({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
  };
};

export const anOrderItemCreateInput = (
  overrides?: Partial<OrderItemCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemCreateInput');
  return {
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('OrderRelateToOneForCreateInput')
          ? ({} as OrderRelateToOneForCreateInput)
          : anOrderRelateToOneForCreateInput({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 8415,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 8397,
    snapshot:
      overrides && overrides.hasOwnProperty('snapshot')
        ? overrides.snapshot!
        : relationshipsToOmit.has('ProductSnapshotRelateToOneForCreateInput')
          ? ({} as ProductSnapshotRelateToOneForCreateInput)
          : aProductSnapshotRelateToOneForCreateInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantRelateToOneForCreateInput')
          ? ({} as ProductVariantRelateToOneForCreateInput)
          : aProductVariantRelateToOneForCreateInput({}, relationshipsToOmit),
  };
};

export const anOrderItemManyRelationFilter = (
  overrides?: Partial<OrderItemManyRelationFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemManyRelationFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemManyRelationFilter');
  return {
    every:
      overrides && overrides.hasOwnProperty('every')
        ? overrides.every!
        : relationshipsToOmit.has('OrderItemWhereInput')
          ? ({} as OrderItemWhereInput)
          : anOrderItemWhereInput({}, relationshipsToOmit),
    none:
      overrides && overrides.hasOwnProperty('none')
        ? overrides.none!
        : relationshipsToOmit.has('OrderItemWhereInput')
          ? ({} as OrderItemWhereInput)
          : anOrderItemWhereInput({}, relationshipsToOmit),
    some:
      overrides && overrides.hasOwnProperty('some')
        ? overrides.some!
        : relationshipsToOmit.has('OrderItemWhereInput')
          ? ({} as OrderItemWhereInput)
          : anOrderItemWhereInput({}, relationshipsToOmit),
  };
};

export const anOrderItemOrderByInput = (
  overrides?: Partial<OrderItemOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemOrderByInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : OrderDirection.Asc,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : OrderDirection.Asc,
  };
};

export const anOrderItemRelateToManyForCreateInput = (
  overrides?: Partial<OrderItemRelateToManyForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemRelateToManyForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemRelateToManyForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('OrderItemWhereUniqueInput')
              ? ({} as OrderItemWhereUniqueInput)
              : anOrderItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('OrderItemCreateInput')
              ? ({} as OrderItemCreateInput)
              : anOrderItemCreateInput({}, relationshipsToOmit),
          ],
  };
};

export const anOrderItemRelateToManyForUpdateInput = (
  overrides?: Partial<OrderItemRelateToManyForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemRelateToManyForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemRelateToManyForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('OrderItemWhereUniqueInput')
              ? ({} as OrderItemWhereUniqueInput)
              : anOrderItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('OrderItemCreateInput')
              ? ({} as OrderItemCreateInput)
              : anOrderItemCreateInput({}, relationshipsToOmit),
          ],
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : [
            relationshipsToOmit.has('OrderItemWhereUniqueInput')
              ? ({} as OrderItemWhereUniqueInput)
              : anOrderItemWhereUniqueInput({}, relationshipsToOmit),
          ],
    set:
      overrides && overrides.hasOwnProperty('set')
        ? overrides.set!
        : [
            relationshipsToOmit.has('OrderItemWhereUniqueInput')
              ? ({} as OrderItemWhereUniqueInput)
              : anOrderItemWhereUniqueInput({}, relationshipsToOmit),
          ],
  };
};

export const anOrderItemUpdateArgs = (
  overrides?: Partial<OrderItemUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('OrderItemUpdateInput')
          ? ({} as OrderItemUpdateInput)
          : anOrderItemUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('OrderItemWhereUniqueInput')
          ? ({} as OrderItemWhereUniqueInput)
          : anOrderItemWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const anOrderItemUpdateInput = (
  overrides?: Partial<OrderItemUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemUpdateInput');
  return {
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('OrderRelateToOneForUpdateInput')
          ? ({} as OrderRelateToOneForUpdateInput)
          : anOrderRelateToOneForUpdateInput({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 4512,
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : 7891,
    snapshot:
      overrides && overrides.hasOwnProperty('snapshot')
        ? overrides.snapshot!
        : relationshipsToOmit.has('ProductSnapshotRelateToOneForUpdateInput')
          ? ({} as ProductSnapshotRelateToOneForUpdateInput)
          : aProductSnapshotRelateToOneForUpdateInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantRelateToOneForUpdateInput')
          ? ({} as ProductVariantRelateToOneForUpdateInput)
          : aProductVariantRelateToOneForUpdateInput({}, relationshipsToOmit),
  };
};

export const anOrderItemWhereInput = (
  overrides?: Partial<OrderItemWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('OrderItemWhereInput')
              ? ({} as OrderItemWhereInput)
              : anOrderItemWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('OrderItemWhereInput')
              ? ({} as OrderItemWhereInput)
              : anOrderItemWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('OrderItemWhereInput')
              ? ({} as OrderItemWhereInput)
              : anOrderItemWhereInput({}, relationshipsToOmit),
          ],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('OrderWhereInput')
          ? ({} as OrderWhereInput)
          : anOrderWhereInput({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    quantity:
      overrides && overrides.hasOwnProperty('quantity')
        ? overrides.quantity!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    snapshot:
      overrides && overrides.hasOwnProperty('snapshot')
        ? overrides.snapshot!
        : relationshipsToOmit.has('ProductSnapshotWhereInput')
          ? ({} as ProductSnapshotWhereInput)
          : aProductSnapshotWhereInput({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariantWhereInput')
          ? ({} as ProductVariantWhereInput)
          : aProductVariantWhereInput({}, relationshipsToOmit),
  };
};

export const anOrderItemWhereUniqueInput = (
  overrides?: Partial<OrderItemWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderItemWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderItemWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '402cc447-686f-423f-a307-a011a23f6d89',
  };
};

export const anOrderManyRelationFilter = (
  overrides?: Partial<OrderManyRelationFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderManyRelationFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderManyRelationFilter');
  return {
    every:
      overrides && overrides.hasOwnProperty('every')
        ? overrides.every!
        : relationshipsToOmit.has('OrderWhereInput')
          ? ({} as OrderWhereInput)
          : anOrderWhereInput({}, relationshipsToOmit),
    none:
      overrides && overrides.hasOwnProperty('none')
        ? overrides.none!
        : relationshipsToOmit.has('OrderWhereInput')
          ? ({} as OrderWhereInput)
          : anOrderWhereInput({}, relationshipsToOmit),
    some:
      overrides && overrides.hasOwnProperty('some')
        ? overrides.some!
        : relationshipsToOmit.has('OrderWhereInput')
          ? ({} as OrderWhereInput)
          : anOrderWhereInput({}, relationshipsToOmit),
  };
};

export const anOrderOrderByInput = (
  overrides?: Partial<OrderOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderOrderByInput');
  return {
    charge:
      overrides && overrides.hasOwnProperty('charge')
        ? overrides.charge!
        : OrderDirection.Asc,
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : OrderDirection.Asc,
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    total:
      overrides && overrides.hasOwnProperty('total')
        ? overrides.total!
        : OrderDirection.Asc,
  };
};

export const anOrderRelateToManyForCreateInput = (
  overrides?: Partial<OrderRelateToManyForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderRelateToManyForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderRelateToManyForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('OrderWhereUniqueInput')
              ? ({} as OrderWhereUniqueInput)
              : anOrderWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('OrderCreateInput')
              ? ({} as OrderCreateInput)
              : anOrderCreateInput({}, relationshipsToOmit),
          ],
  };
};

export const anOrderRelateToManyForUpdateInput = (
  overrides?: Partial<OrderRelateToManyForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderRelateToManyForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderRelateToManyForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('OrderWhereUniqueInput')
              ? ({} as OrderWhereUniqueInput)
              : anOrderWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('OrderCreateInput')
              ? ({} as OrderCreateInput)
              : anOrderCreateInput({}, relationshipsToOmit),
          ],
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : [
            relationshipsToOmit.has('OrderWhereUniqueInput')
              ? ({} as OrderWhereUniqueInput)
              : anOrderWhereUniqueInput({}, relationshipsToOmit),
          ],
    set:
      overrides && overrides.hasOwnProperty('set')
        ? overrides.set!
        : [
            relationshipsToOmit.has('OrderWhereUniqueInput')
              ? ({} as OrderWhereUniqueInput)
              : anOrderWhereUniqueInput({}, relationshipsToOmit),
          ],
  };
};

export const anOrderRelateToOneForCreateInput = (
  overrides?: Partial<OrderRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('OrderWhereUniqueInput')
          ? ({} as OrderWhereUniqueInput)
          : anOrderWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('OrderCreateInput')
          ? ({} as OrderCreateInput)
          : anOrderCreateInput({}, relationshipsToOmit),
  };
};

export const anOrderRelateToOneForUpdateInput = (
  overrides?: Partial<OrderRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('OrderWhereUniqueInput')
          ? ({} as OrderWhereUniqueInput)
          : anOrderWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('OrderCreateInput')
          ? ({} as OrderCreateInput)
          : anOrderCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const anOrderUpdateArgs = (
  overrides?: Partial<OrderUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('OrderUpdateInput')
          ? ({} as OrderUpdateInput)
          : anOrderUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('OrderWhereUniqueInput')
          ? ({} as OrderWhereUniqueInput)
          : anOrderWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const anOrderUpdateInput = (
  overrides?: Partial<OrderUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderUpdateInput');
  return {
    charge:
      overrides && overrides.hasOwnProperty('charge')
        ? overrides.charge!
        : 'iusto',
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : 'nisi',
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : 'autem',
    items:
      overrides && overrides.hasOwnProperty('items')
        ? overrides.items!
        : relationshipsToOmit.has('OrderItemRelateToManyForUpdateInput')
          ? ({} as OrderItemRelateToManyForUpdateInput)
          : anOrderItemRelateToManyForUpdateInput({}, relationshipsToOmit),
    total:
      overrides && overrides.hasOwnProperty('total') ? overrides.total! : 5838,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserRelateToOneForUpdateInput')
          ? ({} as UserRelateToOneForUpdateInput)
          : aUserRelateToOneForUpdateInput({}, relationshipsToOmit),
  };
};

export const anOrderWhereInput = (
  overrides?: Partial<OrderWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('OrderWhereInput')
              ? ({} as OrderWhereInput)
              : anOrderWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('OrderWhereInput')
              ? ({} as OrderWhereInput)
              : anOrderWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('OrderWhereInput')
              ? ({} as OrderWhereInput)
              : anOrderWhereInput({}, relationshipsToOmit),
          ],
    charge:
      overrides && overrides.hasOwnProperty('charge')
        ? overrides.charge!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    createdAt:
      overrides && overrides.hasOwnProperty('createdAt')
        ? overrides.createdAt!
        : relationshipsToOmit.has('CalendarDayFilter')
          ? ({} as CalendarDayFilter)
          : aCalendarDayFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    items:
      overrides && overrides.hasOwnProperty('items')
        ? overrides.items!
        : relationshipsToOmit.has('OrderItemManyRelationFilter')
          ? ({} as OrderItemManyRelationFilter)
          : anOrderItemManyRelationFilter({}, relationshipsToOmit),
    total:
      overrides && overrides.hasOwnProperty('total')
        ? overrides.total!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('UserWhereInput')
          ? ({} as UserWhereInput)
          : aUserWhereInput({}, relationshipsToOmit),
  };
};

export const anOrderWhereUniqueInput = (
  overrides?: Partial<OrderWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): OrderWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('OrderWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'cce8b275-3c14-443b-a98b-818f867f1835',
  };
};

export const aPasswordFilter = (
  overrides?: Partial<PasswordFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): PasswordFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('PasswordFilter');
  return {
    isSet:
      overrides && overrides.hasOwnProperty('isSet') ? overrides.isSet! : true,
  };
};

export const aPasswordState = (
  overrides?: Partial<PasswordState>,
  _relationshipsToOmit: Set<string> = new Set(),
): PasswordState => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('PasswordState');
  return {
    isSet:
      overrides && overrides.hasOwnProperty('isSet') ? overrides.isSet! : false,
  };
};

export const aProduct = (
  overrides?: Partial<Product>,
  _relationshipsToOmit: Set<string> = new Set(),
): Product => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Product');
  return {
    category:
      overrides && overrides.hasOwnProperty('category')
        ? overrides.category!
        : relationshipsToOmit.has('Category')
          ? ({} as Category)
          : aCategory({}, relationshipsToOmit),
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : 'sed',
    defaultVariantId:
      overrides && overrides.hasOwnProperty('defaultVariantId')
        ? overrides.defaultVariantId!
        : 'in',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'qui',
    highestPrice:
      overrides && overrides.hasOwnProperty('highestPrice')
        ? overrides.highestPrice!
        : 617,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9983bd3e-4f2a-444b-8e81-349ed54ed801',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('ProductImage')
          ? ({} as ProductImage)
          : aProductImage({}, relationshipsToOmit),
    lowestPrice:
      overrides && overrides.hasOwnProperty('lowestPrice')
        ? overrides.lowestPrice!
        : 1571,
    meta:
      overrides && overrides.hasOwnProperty('meta')
        ? overrides.meta!
        : 'molestias',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nihil',
    shortDescription:
      overrides && overrides.hasOwnProperty('shortDescription')
        ? overrides.shortDescription!
        : 'optio',
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : 'facilis',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'et',
    style:
      overrides && overrides.hasOwnProperty('style')
        ? overrides.style!
        : 'rerum',
    type:
      overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'nulla',
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
    variants:
      overrides && overrides.hasOwnProperty('variants')
        ? overrides.variants!
        : [
            relationshipsToOmit.has('ProductVariant')
              ? ({} as ProductVariant)
              : aProductVariant({}, relationshipsToOmit),
          ],
    variantsCount:
      overrides && overrides.hasOwnProperty('variantsCount')
        ? overrides.variantsCount!
        : 1839,
  };
};

export const aProductCreateInput = (
  overrides?: Partial<ProductCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductCreateInput');
  return {
    category:
      overrides && overrides.hasOwnProperty('category')
        ? overrides.category!
        : relationshipsToOmit.has('CategoryRelateToOneForCreateInput')
          ? ({} as CategoryRelateToOneForCreateInput)
          : aCategoryRelateToOneForCreateInput({}, relationshipsToOmit),
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : 'unde',
    defaultVariantId:
      overrides && overrides.hasOwnProperty('defaultVariantId')
        ? overrides.defaultVariantId!
        : 'voluptates',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'commodi',
    highestPrice:
      overrides && overrides.hasOwnProperty('highestPrice')
        ? overrides.highestPrice!
        : 8427,
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('ProductImageRelateToOneForCreateInput')
          ? ({} as ProductImageRelateToOneForCreateInput)
          : aProductImageRelateToOneForCreateInput({}, relationshipsToOmit),
    lowestPrice:
      overrides && overrides.hasOwnProperty('lowestPrice')
        ? overrides.lowestPrice!
        : 1615,
    meta:
      overrides && overrides.hasOwnProperty('meta')
        ? overrides.meta!
        : 'voluptate',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'non',
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : 'ducimus',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'qui',
    style:
      overrides && overrides.hasOwnProperty('style')
        ? overrides.style!
        : 'provident',
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : 'deserunt',
    variants:
      overrides && overrides.hasOwnProperty('variants')
        ? overrides.variants!
        : relationshipsToOmit.has('ProductVariantRelateToManyForCreateInput')
          ? ({} as ProductVariantRelateToManyForCreateInput)
          : aProductVariantRelateToManyForCreateInput({}, relationshipsToOmit),
  };
};

export const aProductDescriptor = (
  overrides?: Partial<ProductDescriptor>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductDescriptor => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductDescriptor');
  return {
    companies:
      overrides && overrides.hasOwnProperty('companies')
        ? overrides.companies!
        : ['aut'],
    styles:
      overrides && overrides.hasOwnProperty('styles')
        ? overrides.styles!
        : ['at'],
    types:
      overrides && overrides.hasOwnProperty('types')
        ? overrides.types!
        : ['praesentium'],
  };
};

export const aProductImage = (
  overrides?: Partial<ProductImage>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImage => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImage');
  return {
    alt:
      overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'vitae',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '7541b7c5-5e66-445c-bcd4-bd5882a3094d',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('CloudinaryImage_File')
          ? ({} as CloudinaryImage_File)
          : aCloudinaryImage_File({}, relationshipsToOmit),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
  };
};

export const aProductImageCreateInput = (
  overrides?: Partial<ProductImageCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageCreateInput');
  return {
    alt: overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'et',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'expedita',
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductRelateToOneForCreateInput')
          ? ({} as ProductRelateToOneForCreateInput)
          : aProductRelateToOneForCreateInput({}, relationshipsToOmit),
  };
};

export const aProductImageOrderByInput = (
  overrides?: Partial<ProductImageOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageOrderByInput');
  return {
    alt:
      overrides && overrides.hasOwnProperty('alt')
        ? overrides.alt!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
  };
};

export const aProductImageRelateToOneForCreateInput = (
  overrides?: Partial<ProductImageRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductImageWhereUniqueInput')
          ? ({} as ProductImageWhereUniqueInput)
          : aProductImageWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductImageCreateInput')
          ? ({} as ProductImageCreateInput)
          : aProductImageCreateInput({}, relationshipsToOmit),
  };
};

export const aProductImageRelateToOneForUpdateInput = (
  overrides?: Partial<ProductImageRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductImageWhereUniqueInput')
          ? ({} as ProductImageWhereUniqueInput)
          : aProductImageWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductImageCreateInput')
          ? ({} as ProductImageCreateInput)
          : aProductImageCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const aProductImageUpdateArgs = (
  overrides?: Partial<ProductImageUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('ProductImageUpdateInput')
          ? ({} as ProductImageUpdateInput)
          : aProductImageUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('ProductImageWhereUniqueInput')
          ? ({} as ProductImageWhereUniqueInput)
          : aProductImageWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aProductImageUpdateInput = (
  overrides?: Partial<ProductImageUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageUpdateInput');
  return {
    alt: overrides && overrides.hasOwnProperty('alt') ? overrides.alt! : 'qui',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'quaerat',
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductRelateToOneForUpdateInput')
          ? ({} as ProductRelateToOneForUpdateInput)
          : aProductRelateToOneForUpdateInput({}, relationshipsToOmit),
  };
};

export const aProductImageWhereInput = (
  overrides?: Partial<ProductImageWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('ProductImageWhereInput')
              ? ({} as ProductImageWhereInput)
              : aProductImageWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('ProductImageWhereInput')
              ? ({} as ProductImageWhereInput)
              : aProductImageWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('ProductImageWhereInput')
              ? ({} as ProductImageWhereInput)
              : aProductImageWhereInput({}, relationshipsToOmit),
          ],
    alt:
      overrides && overrides.hasOwnProperty('alt')
        ? overrides.alt!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductWhereInput')
          ? ({} as ProductWhereInput)
          : aProductWhereInput({}, relationshipsToOmit),
  };
};

export const aProductImageWhereUniqueInput = (
  overrides?: Partial<ProductImageWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductImageWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductImageWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '8e1c623c-0c69-4302-adc2-a533f28c44e7',
  };
};

export const aProductManyRelationFilter = (
  overrides?: Partial<ProductManyRelationFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductManyRelationFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductManyRelationFilter');
  return {
    every:
      overrides && overrides.hasOwnProperty('every')
        ? overrides.every!
        : relationshipsToOmit.has('ProductWhereInput')
          ? ({} as ProductWhereInput)
          : aProductWhereInput({}, relationshipsToOmit),
    none:
      overrides && overrides.hasOwnProperty('none')
        ? overrides.none!
        : relationshipsToOmit.has('ProductWhereInput')
          ? ({} as ProductWhereInput)
          : aProductWhereInput({}, relationshipsToOmit),
    some:
      overrides && overrides.hasOwnProperty('some')
        ? overrides.some!
        : relationshipsToOmit.has('ProductWhereInput')
          ? ({} as ProductWhereInput)
          : aProductWhereInput({}, relationshipsToOmit),
  };
};

export const aProductOrderByInput = (
  overrides?: Partial<ProductOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductOrderByInput');
  return {
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : OrderDirection.Asc,
    defaultVariantId:
      overrides && overrides.hasOwnProperty('defaultVariantId')
        ? overrides.defaultVariantId!
        : OrderDirection.Asc,
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : OrderDirection.Asc,
    highestPrice:
      overrides && overrides.hasOwnProperty('highestPrice')
        ? overrides.highestPrice!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    lowestPrice:
      overrides && overrides.hasOwnProperty('lowestPrice')
        ? overrides.lowestPrice!
        : OrderDirection.Asc,
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : OrderDirection.Asc,
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : OrderDirection.Asc,
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : OrderDirection.Asc,
    style:
      overrides && overrides.hasOwnProperty('style')
        ? overrides.style!
        : OrderDirection.Asc,
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : OrderDirection.Asc,
  };
};

export const aProductRelateToManyForCreateInput = (
  overrides?: Partial<ProductRelateToManyForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductRelateToManyForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductRelateToManyForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('ProductWhereUniqueInput')
              ? ({} as ProductWhereUniqueInput)
              : aProductWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('ProductCreateInput')
              ? ({} as ProductCreateInput)
              : aProductCreateInput({}, relationshipsToOmit),
          ],
  };
};

export const aProductRelateToManyForUpdateInput = (
  overrides?: Partial<ProductRelateToManyForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductRelateToManyForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductRelateToManyForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('ProductWhereUniqueInput')
              ? ({} as ProductWhereUniqueInput)
              : aProductWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('ProductCreateInput')
              ? ({} as ProductCreateInput)
              : aProductCreateInput({}, relationshipsToOmit),
          ],
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : [
            relationshipsToOmit.has('ProductWhereUniqueInput')
              ? ({} as ProductWhereUniqueInput)
              : aProductWhereUniqueInput({}, relationshipsToOmit),
          ],
    set:
      overrides && overrides.hasOwnProperty('set')
        ? overrides.set!
        : [
            relationshipsToOmit.has('ProductWhereUniqueInput')
              ? ({} as ProductWhereUniqueInput)
              : aProductWhereUniqueInput({}, relationshipsToOmit),
          ],
  };
};

export const aProductRelateToOneForCreateInput = (
  overrides?: Partial<ProductRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductWhereUniqueInput')
          ? ({} as ProductWhereUniqueInput)
          : aProductWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductCreateInput')
          ? ({} as ProductCreateInput)
          : aProductCreateInput({}, relationshipsToOmit),
  };
};

export const aProductRelateToOneForUpdateInput = (
  overrides?: Partial<ProductRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductWhereUniqueInput')
          ? ({} as ProductWhereUniqueInput)
          : aProductWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductCreateInput')
          ? ({} as ProductCreateInput)
          : aProductCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const aProductSnapshot = (
  overrides?: Partial<ProductSnapshot>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshot => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshot');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '6577a401-9a66-426f-b06d-8ee7c85f83b6',
    image:
      overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'eum',
    meta:
      overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : 'fugit',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'officia',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 1979,
  };
};

export const aProductSnapshotCreateInput = (
  overrides?: Partial<ProductSnapshotCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotCreateInput');
  return {
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'nobis',
    meta:
      overrides && overrides.hasOwnProperty('meta') ? overrides.meta! : 'sed',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'ratione',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 2397,
  };
};

export const aProductSnapshotOrderByInput = (
  overrides?: Partial<ProductSnapshotOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotOrderByInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : OrderDirection.Asc,
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : OrderDirection.Asc,
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : OrderDirection.Asc,
  };
};

export const aProductSnapshotRelateToOneForCreateInput = (
  overrides?: Partial<ProductSnapshotRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductSnapshotWhereUniqueInput')
          ? ({} as ProductSnapshotWhereUniqueInput)
          : aProductSnapshotWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductSnapshotCreateInput')
          ? ({} as ProductSnapshotCreateInput)
          : aProductSnapshotCreateInput({}, relationshipsToOmit),
  };
};

export const aProductSnapshotRelateToOneForUpdateInput = (
  overrides?: Partial<ProductSnapshotRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductSnapshotWhereUniqueInput')
          ? ({} as ProductSnapshotWhereUniqueInput)
          : aProductSnapshotWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductSnapshotCreateInput')
          ? ({} as ProductSnapshotCreateInput)
          : aProductSnapshotCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : false,
  };
};

export const aProductSnapshotUpdateArgs = (
  overrides?: Partial<ProductSnapshotUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('ProductSnapshotUpdateInput')
          ? ({} as ProductSnapshotUpdateInput)
          : aProductSnapshotUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('ProductSnapshotWhereUniqueInput')
          ? ({} as ProductSnapshotWhereUniqueInput)
          : aProductSnapshotWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aProductSnapshotUpdateInput = (
  overrides?: Partial<ProductSnapshotUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotUpdateInput');
  return {
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'neque',
    meta:
      overrides && overrides.hasOwnProperty('meta')
        ? overrides.meta!
        : 'voluptas',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'dignissimos',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 5592,
  };
};

export const aProductSnapshotWhereInput = (
  overrides?: Partial<ProductSnapshotWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('ProductSnapshotWhereInput')
              ? ({} as ProductSnapshotWhereInput)
              : aProductSnapshotWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('ProductSnapshotWhereInput')
              ? ({} as ProductSnapshotWhereInput)
              : aProductSnapshotWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('ProductSnapshotWhereInput')
              ? ({} as ProductSnapshotWhereInput)
              : aProductSnapshotWhereInput({}, relationshipsToOmit),
          ],
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
  };
};

export const aProductSnapshotWhereUniqueInput = (
  overrides?: Partial<ProductSnapshotWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductSnapshotWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductSnapshotWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '22ffdbee-2289-4f9b-8637-28ba731de1ca',
  };
};

export const aProductUpdateArgs = (
  overrides?: Partial<ProductUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('ProductUpdateInput')
          ? ({} as ProductUpdateInput)
          : aProductUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('ProductWhereUniqueInput')
          ? ({} as ProductWhereUniqueInput)
          : aProductWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aProductUpdateInput = (
  overrides?: Partial<ProductUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductUpdateInput');
  return {
    category:
      overrides && overrides.hasOwnProperty('category')
        ? overrides.category!
        : relationshipsToOmit.has('CategoryRelateToOneForUpdateInput')
          ? ({} as CategoryRelateToOneForUpdateInput)
          : aCategoryRelateToOneForUpdateInput({}, relationshipsToOmit),
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : 'sequi',
    defaultVariantId:
      overrides && overrides.hasOwnProperty('defaultVariantId')
        ? overrides.defaultVariantId!
        : 'vel',
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'veritatis',
    highestPrice:
      overrides && overrides.hasOwnProperty('highestPrice')
        ? overrides.highestPrice!
        : 9264,
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('ProductImageRelateToOneForUpdateInput')
          ? ({} as ProductImageRelateToOneForUpdateInput)
          : aProductImageRelateToOneForUpdateInput({}, relationshipsToOmit),
    lowestPrice:
      overrides && overrides.hasOwnProperty('lowestPrice')
        ? overrides.lowestPrice!
        : 9989,
    meta:
      overrides && overrides.hasOwnProperty('meta')
        ? overrides.meta!
        : 'similique',
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : 'dignissimos',
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : 'voluptatem',
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : 'omnis',
    style:
      overrides && overrides.hasOwnProperty('style')
        ? overrides.style!
        : 'numquam',
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : 'perspiciatis',
    variants:
      overrides && overrides.hasOwnProperty('variants')
        ? overrides.variants!
        : relationshipsToOmit.has('ProductVariantRelateToManyForUpdateInput')
          ? ({} as ProductVariantRelateToManyForUpdateInput)
          : aProductVariantRelateToManyForUpdateInput({}, relationshipsToOmit),
  };
};

export const aProductVariant = (
  overrides?: Partial<ProductVariant>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariant => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariant');
  return {
    color:
      overrides && overrides.hasOwnProperty('color')
        ? overrides.color!
        : 'molestiae',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'dd49ff0e-9e0e-418a-8f2c-b8370e39dc01',
    material:
      overrides && overrides.hasOwnProperty('material')
        ? overrides.material!
        : 'iusto',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 472,
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
    size:
      overrides && overrides.hasOwnProperty('size') ? overrides.size! : 'odit',
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : 'dolor',
  };
};

export const aProductVariantCreateInput = (
  overrides?: Partial<ProductVariantCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantCreateInput');
  return {
    color:
      overrides && overrides.hasOwnProperty('color')
        ? overrides.color!
        : 'suscipit',
    material:
      overrides && overrides.hasOwnProperty('material')
        ? overrides.material!
        : 'veniam',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 7913,
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductRelateToOneForCreateInput')
          ? ({} as ProductRelateToOneForCreateInput)
          : aProductRelateToOneForCreateInput({}, relationshipsToOmit),
    size:
      overrides && overrides.hasOwnProperty('size') ? overrides.size! : 'totam',
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : 'minus',
  };
};

export const aProductVariantManyRelationFilter = (
  overrides?: Partial<ProductVariantManyRelationFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantManyRelationFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantManyRelationFilter');
  return {
    every:
      overrides && overrides.hasOwnProperty('every')
        ? overrides.every!
        : relationshipsToOmit.has('ProductVariantWhereInput')
          ? ({} as ProductVariantWhereInput)
          : aProductVariantWhereInput({}, relationshipsToOmit),
    none:
      overrides && overrides.hasOwnProperty('none')
        ? overrides.none!
        : relationshipsToOmit.has('ProductVariantWhereInput')
          ? ({} as ProductVariantWhereInput)
          : aProductVariantWhereInput({}, relationshipsToOmit),
    some:
      overrides && overrides.hasOwnProperty('some')
        ? overrides.some!
        : relationshipsToOmit.has('ProductVariantWhereInput')
          ? ({} as ProductVariantWhereInput)
          : aProductVariantWhereInput({}, relationshipsToOmit),
  };
};

export const aProductVariantOrderByInput = (
  overrides?: Partial<ProductVariantOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantOrderByInput');
  return {
    color:
      overrides && overrides.hasOwnProperty('color')
        ? overrides.color!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    material:
      overrides && overrides.hasOwnProperty('material')
        ? overrides.material!
        : OrderDirection.Asc,
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : OrderDirection.Asc,
    size:
      overrides && overrides.hasOwnProperty('size')
        ? overrides.size!
        : OrderDirection.Asc,
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : OrderDirection.Asc,
  };
};

export const aProductVariantRelateToManyForCreateInput = (
  overrides?: Partial<ProductVariantRelateToManyForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantRelateToManyForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantRelateToManyForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('ProductVariantWhereUniqueInput')
              ? ({} as ProductVariantWhereUniqueInput)
              : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('ProductVariantCreateInput')
              ? ({} as ProductVariantCreateInput)
              : aProductVariantCreateInput({}, relationshipsToOmit),
          ],
  };
};

export const aProductVariantRelateToManyForUpdateInput = (
  overrides?: Partial<ProductVariantRelateToManyForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantRelateToManyForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantRelateToManyForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : [
            relationshipsToOmit.has('ProductVariantWhereUniqueInput')
              ? ({} as ProductVariantWhereUniqueInput)
              : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
          ],
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : [
            relationshipsToOmit.has('ProductVariantCreateInput')
              ? ({} as ProductVariantCreateInput)
              : aProductVariantCreateInput({}, relationshipsToOmit),
          ],
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : [
            relationshipsToOmit.has('ProductVariantWhereUniqueInput')
              ? ({} as ProductVariantWhereUniqueInput)
              : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
          ],
    set:
      overrides && overrides.hasOwnProperty('set')
        ? overrides.set!
        : [
            relationshipsToOmit.has('ProductVariantWhereUniqueInput')
              ? ({} as ProductVariantWhereUniqueInput)
              : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
          ],
  };
};

export const aProductVariantRelateToOneForCreateInput = (
  overrides?: Partial<ProductVariantRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductVariantWhereUniqueInput')
          ? ({} as ProductVariantWhereUniqueInput)
          : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductVariantCreateInput')
          ? ({} as ProductVariantCreateInput)
          : aProductVariantCreateInput({}, relationshipsToOmit),
  };
};

export const aProductVariantRelateToOneForUpdateInput = (
  overrides?: Partial<ProductVariantRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('ProductVariantWhereUniqueInput')
          ? ({} as ProductVariantWhereUniqueInput)
          : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('ProductVariantCreateInput')
          ? ({} as ProductVariantCreateInput)
          : aProductVariantCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const aProductVariantUpdateArgs = (
  overrides?: Partial<ProductVariantUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('ProductVariantUpdateInput')
          ? ({} as ProductVariantUpdateInput)
          : aProductVariantUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('ProductVariantWhereUniqueInput')
          ? ({} as ProductVariantWhereUniqueInput)
          : aProductVariantWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aProductVariantUpdateInput = (
  overrides?: Partial<ProductVariantUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantUpdateInput');
  return {
    color:
      overrides && overrides.hasOwnProperty('color') ? overrides.color! : 'id',
    material:
      overrides && overrides.hasOwnProperty('material')
        ? overrides.material!
        : 'ut',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 9105,
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductRelateToOneForUpdateInput')
          ? ({} as ProductRelateToOneForUpdateInput)
          : aProductRelateToOneForUpdateInput({}, relationshipsToOmit),
    size:
      overrides && overrides.hasOwnProperty('size')
        ? overrides.size!
        : 'ratione',
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : 'aliquam',
  };
};

export const aProductVariantWhereInput = (
  overrides?: Partial<ProductVariantWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('ProductVariantWhereInput')
              ? ({} as ProductVariantWhereInput)
              : aProductVariantWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('ProductVariantWhereInput')
              ? ({} as ProductVariantWhereInput)
              : aProductVariantWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('ProductVariantWhereInput')
              ? ({} as ProductVariantWhereInput)
              : aProductVariantWhereInput({}, relationshipsToOmit),
          ],
    color:
      overrides && overrides.hasOwnProperty('color')
        ? overrides.color!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    material:
      overrides && overrides.hasOwnProperty('material')
        ? overrides.material!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty('price')
        ? overrides.price!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('ProductWhereInput')
          ? ({} as ProductWhereInput)
          : aProductWhereInput({}, relationshipsToOmit),
    size:
      overrides && overrides.hasOwnProperty('size')
        ? overrides.size!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    variant:
      overrides && overrides.hasOwnProperty('variant')
        ? overrides.variant!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
  };
};

export const aProductVariantWhereUniqueInput = (
  overrides?: Partial<ProductVariantWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductVariantWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductVariantWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '7209767c-18ae-4e23-984c-958ed133f711',
  };
};

export const aProductWhereInput = (
  overrides?: Partial<ProductWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('ProductWhereInput')
              ? ({} as ProductWhereInput)
              : aProductWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('ProductWhereInput')
              ? ({} as ProductWhereInput)
              : aProductWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('ProductWhereInput')
              ? ({} as ProductWhereInput)
              : aProductWhereInput({}, relationshipsToOmit),
          ],
    category:
      overrides && overrides.hasOwnProperty('category')
        ? overrides.category!
        : relationshipsToOmit.has('CategoryWhereInput')
          ? ({} as CategoryWhereInput)
          : aCategoryWhereInput({}, relationshipsToOmit),
    company:
      overrides && overrides.hasOwnProperty('company')
        ? overrides.company!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    defaultVariantId:
      overrides && overrides.hasOwnProperty('defaultVariantId')
        ? overrides.defaultVariantId!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    highestPrice:
      overrides && overrides.hasOwnProperty('highestPrice')
        ? overrides.highestPrice!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : relationshipsToOmit.has('ProductImageWhereInput')
          ? ({} as ProductImageWhereInput)
          : aProductImageWhereInput({}, relationshipsToOmit),
    lowestPrice:
      overrides && overrides.hasOwnProperty('lowestPrice')
        ? overrides.lowestPrice!
        : relationshipsToOmit.has('IntFilter')
          ? ({} as IntFilter)
          : anIntFilter({}, relationshipsToOmit),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    status:
      overrides && overrides.hasOwnProperty('status')
        ? overrides.status!
        : relationshipsToOmit.has('StringNullableFilter')
          ? ({} as StringNullableFilter)
          : aStringNullableFilter({}, relationshipsToOmit),
    style:
      overrides && overrides.hasOwnProperty('style')
        ? overrides.style!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    type:
      overrides && overrides.hasOwnProperty('type')
        ? overrides.type!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    variants:
      overrides && overrides.hasOwnProperty('variants')
        ? overrides.variants!
        : relationshipsToOmit.has('ProductVariantManyRelationFilter')
          ? ({} as ProductVariantManyRelationFilter)
          : aProductVariantManyRelationFilter({}, relationshipsToOmit),
  };
};

export const aProductWhereUniqueInput = (
  overrides?: Partial<ProductWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): ProductWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ProductWhereUniqueInput');
  return {
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'e4cb9b09-b5a9-4340-bb60-f04771096175',
    slug:
      overrides && overrides.hasOwnProperty('slug')
        ? overrides.slug!
        : 'voluptatibus',
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Set<string> = new Set(),
): Query => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('Query');
  return {
    authenticatedItem:
      overrides && overrides.hasOwnProperty('authenticatedItem')
        ? overrides.authenticatedItem!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    banner:
      overrides && overrides.hasOwnProperty('banner')
        ? overrides.banner!
        : relationshipsToOmit.has('Banner')
          ? ({} as Banner)
          : aBanner({}, relationshipsToOmit),
    banners:
      overrides && overrides.hasOwnProperty('banners')
        ? overrides.banners!
        : [
            relationshipsToOmit.has('Banner')
              ? ({} as Banner)
              : aBanner({}, relationshipsToOmit),
          ],
    bannersCount:
      overrides && overrides.hasOwnProperty('bannersCount')
        ? overrides.bannersCount!
        : 760,
    cartItem:
      overrides && overrides.hasOwnProperty('cartItem')
        ? overrides.cartItem!
        : relationshipsToOmit.has('CartItem')
          ? ({} as CartItem)
          : aCartItem({}, relationshipsToOmit),
    cartItems:
      overrides && overrides.hasOwnProperty('cartItems')
        ? overrides.cartItems!
        : [
            relationshipsToOmit.has('CartItem')
              ? ({} as CartItem)
              : aCartItem({}, relationshipsToOmit),
          ],
    cartItemsCount:
      overrides && overrides.hasOwnProperty('cartItemsCount')
        ? overrides.cartItemsCount!
        : 2314,
    categories:
      overrides && overrides.hasOwnProperty('categories')
        ? overrides.categories!
        : [
            relationshipsToOmit.has('Category')
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    categoriesCount:
      overrides && overrides.hasOwnProperty('categoriesCount')
        ? overrides.categoriesCount!
        : 2503,
    category:
      overrides && overrides.hasOwnProperty('category')
        ? overrides.category!
        : relationshipsToOmit.has('Category')
          ? ({} as Category)
          : aCategory({}, relationshipsToOmit),
    coupon:
      overrides && overrides.hasOwnProperty('coupon')
        ? overrides.coupon!
        : relationshipsToOmit.has('Coupon')
          ? ({} as Coupon)
          : aCoupon({}, relationshipsToOmit),
    coupons:
      overrides && overrides.hasOwnProperty('coupons')
        ? overrides.coupons!
        : [
            relationshipsToOmit.has('Coupon')
              ? ({} as Coupon)
              : aCoupon({}, relationshipsToOmit),
          ],
    couponsCount:
      overrides && overrides.hasOwnProperty('couponsCount')
        ? overrides.couponsCount!
        : 9904,
    getAllProductDescriptors:
      overrides && overrides.hasOwnProperty('getAllProductDescriptors')
        ? overrides.getAllProductDescriptors!
        : relationshipsToOmit.has('ProductDescriptor')
          ? ({} as ProductDescriptor)
          : aProductDescriptor({}, relationshipsToOmit),
    getPriceRange:
      overrides && overrides.hasOwnProperty('getPriceRange')
        ? overrides.getPriceRange!
        : relationshipsToOmit.has('MinMax')
          ? ({} as MinMax)
          : aMinMax({}, relationshipsToOmit),
    keystone:
      overrides && overrides.hasOwnProperty('keystone')
        ? overrides.keystone!
        : relationshipsToOmit.has('KeystoneMeta')
          ? ({} as KeystoneMeta)
          : aKeystoneMeta({}, relationshipsToOmit),
    order:
      overrides && overrides.hasOwnProperty('order')
        ? overrides.order!
        : relationshipsToOmit.has('Order')
          ? ({} as Order)
          : anOrder({}, relationshipsToOmit),
    orderItem:
      overrides && overrides.hasOwnProperty('orderItem')
        ? overrides.orderItem!
        : relationshipsToOmit.has('OrderItem')
          ? ({} as OrderItem)
          : anOrderItem({}, relationshipsToOmit),
    orderItems:
      overrides && overrides.hasOwnProperty('orderItems')
        ? overrides.orderItems!
        : [
            relationshipsToOmit.has('OrderItem')
              ? ({} as OrderItem)
              : anOrderItem({}, relationshipsToOmit),
          ],
    orderItemsCount:
      overrides && overrides.hasOwnProperty('orderItemsCount')
        ? overrides.orderItemsCount!
        : 6039,
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : [
            relationshipsToOmit.has('Order')
              ? ({} as Order)
              : anOrder({}, relationshipsToOmit),
          ],
    ordersCount:
      overrides && overrides.hasOwnProperty('ordersCount')
        ? overrides.ordersCount!
        : 6776,
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.has('Product')
          ? ({} as Product)
          : aProduct({}, relationshipsToOmit),
    productImage:
      overrides && overrides.hasOwnProperty('productImage')
        ? overrides.productImage!
        : relationshipsToOmit.has('ProductImage')
          ? ({} as ProductImage)
          : aProductImage({}, relationshipsToOmit),
    productImages:
      overrides && overrides.hasOwnProperty('productImages')
        ? overrides.productImages!
        : [
            relationshipsToOmit.has('ProductImage')
              ? ({} as ProductImage)
              : aProductImage({}, relationshipsToOmit),
          ],
    productImagesCount:
      overrides && overrides.hasOwnProperty('productImagesCount')
        ? overrides.productImagesCount!
        : 5285,
    productSnapshot:
      overrides && overrides.hasOwnProperty('productSnapshot')
        ? overrides.productSnapshot!
        : relationshipsToOmit.has('ProductSnapshot')
          ? ({} as ProductSnapshot)
          : aProductSnapshot({}, relationshipsToOmit),
    productSnapshots:
      overrides && overrides.hasOwnProperty('productSnapshots')
        ? overrides.productSnapshots!
        : [
            relationshipsToOmit.has('ProductSnapshot')
              ? ({} as ProductSnapshot)
              : aProductSnapshot({}, relationshipsToOmit),
          ],
    productSnapshotsCount:
      overrides && overrides.hasOwnProperty('productSnapshotsCount')
        ? overrides.productSnapshotsCount!
        : 4588,
    productVariant:
      overrides && overrides.hasOwnProperty('productVariant')
        ? overrides.productVariant!
        : relationshipsToOmit.has('ProductVariant')
          ? ({} as ProductVariant)
          : aProductVariant({}, relationshipsToOmit),
    productVariants:
      overrides && overrides.hasOwnProperty('productVariants')
        ? overrides.productVariants!
        : [
            relationshipsToOmit.has('ProductVariant')
              ? ({} as ProductVariant)
              : aProductVariant({}, relationshipsToOmit),
          ],
    productVariantsCount:
      overrides && overrides.hasOwnProperty('productVariantsCount')
        ? overrides.productVariantsCount!
        : 2601,
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : [
            relationshipsToOmit.has('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
    productsCount:
      overrides && overrides.hasOwnProperty('productsCount')
        ? overrides.productsCount!
        : 5072,
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : [
            relationshipsToOmit.has('User')
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
    usersCount:
      overrides && overrides.hasOwnProperty('usersCount')
        ? overrides.usersCount!
        : 5001,
    validateUserPasswordResetToken:
      overrides && overrides.hasOwnProperty('validateUserPasswordResetToken')
        ? overrides.validateUserPasswordResetToken!
        : relationshipsToOmit.has('ValidateUserPasswordResetTokenResult')
          ? ({} as ValidateUserPasswordResetTokenResult)
          : aValidateUserPasswordResetTokenResult({}, relationshipsToOmit),
  };
};

export const aRedeemUserPasswordResetTokenResult = (
  overrides?: Partial<RedeemUserPasswordResetTokenResult>,
  _relationshipsToOmit: Set<string> = new Set(),
): RedeemUserPasswordResetTokenResult => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('RedeemUserPasswordResetTokenResult');
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : PasswordResetRedemptionErrorCode.Failure,
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'asperiores',
  };
};

export const aStringFilter = (
  overrides?: Partial<StringFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): StringFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('StringFilter');
  return {
    contains:
      overrides && overrides.hasOwnProperty('contains')
        ? overrides.contains!
        : 'et',
    endsWith:
      overrides && overrides.hasOwnProperty('endsWith')
        ? overrides.endsWith!
        : 'molestiae',
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'quaerat',
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'et',
    gte:
      overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'placeat',
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['est'],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'dolorem',
    lte:
      overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'eaque',
    mode:
      overrides && overrides.hasOwnProperty('mode')
        ? overrides.mode!
        : QueryMode.Default,
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('NestedStringFilter')
          ? ({} as NestedStringFilter)
          : aNestedStringFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['reiciendis'],
    startsWith:
      overrides && overrides.hasOwnProperty('startsWith')
        ? overrides.startsWith!
        : 'repellendus',
  };
};

export const aStringNullableFilter = (
  overrides?: Partial<StringNullableFilter>,
  _relationshipsToOmit: Set<string> = new Set(),
): StringNullableFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('StringNullableFilter');
  return {
    contains:
      overrides && overrides.hasOwnProperty('contains')
        ? overrides.contains!
        : 'odit',
    endsWith:
      overrides && overrides.hasOwnProperty('endsWith')
        ? overrides.endsWith!
        : 'laudantium',
    equals:
      overrides && overrides.hasOwnProperty('equals')
        ? overrides.equals!
        : 'ut',
    gt: overrides && overrides.hasOwnProperty('gt') ? overrides.gt! : 'aut',
    gte: overrides && overrides.hasOwnProperty('gte') ? overrides.gte! : 'quia',
    in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['esse'],
    lt: overrides && overrides.hasOwnProperty('lt') ? overrides.lt! : 'et',
    lte: overrides && overrides.hasOwnProperty('lte') ? overrides.lte! : 'eos',
    mode:
      overrides && overrides.hasOwnProperty('mode')
        ? overrides.mode!
        : QueryMode.Default,
    not:
      overrides && overrides.hasOwnProperty('not')
        ? overrides.not!
        : relationshipsToOmit.has('StringNullableFilter')
          ? ({} as StringNullableFilter)
          : aStringNullableFilter({}, relationshipsToOmit),
    notIn:
      overrides && overrides.hasOwnProperty('notIn')
        ? overrides.notIn!
        : ['ducimus'],
    startsWith:
      overrides && overrides.hasOwnProperty('startsWith')
        ? overrides.startsWith!
        : 'omnis',
  };
};

export const aUser = (
  overrides?: Partial<User>,
  _relationshipsToOmit: Set<string> = new Set(),
): User => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('User');
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart')
        ? overrides.cart!
        : [
            relationshipsToOmit.has('CartItem')
              ? ({} as CartItem)
              : aCartItem({}, relationshipsToOmit),
          ],
    cartCount:
      overrides && overrides.hasOwnProperty('cartCount')
        ? overrides.cartCount!
        : 6618,
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'sunt',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'a5756f00-41a6-422a-8a7d-d13ee6a63750',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'porro',
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : [
            relationshipsToOmit.has('Order')
              ? ({} as Order)
              : anOrder({}, relationshipsToOmit),
          ],
    ordersCount:
      overrides && overrides.hasOwnProperty('ordersCount')
        ? overrides.ordersCount!
        : 6461,
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : relationshipsToOmit.has('PasswordState')
          ? ({} as PasswordState)
          : aPasswordState({}, relationshipsToOmit),
    passwordResetIssuedAt:
      overrides && overrides.hasOwnProperty('passwordResetIssuedAt')
        ? overrides.passwordResetIssuedAt!
        : 'omnis',
    passwordResetRedeemedAt:
      overrides && overrides.hasOwnProperty('passwordResetRedeemedAt')
        ? overrides.passwordResetRedeemedAt!
        : 'quidem',
    passwordResetToken:
      overrides && overrides.hasOwnProperty('passwordResetToken')
        ? overrides.passwordResetToken!
        : relationshipsToOmit.has('PasswordState')
          ? ({} as PasswordState)
          : aPasswordState({}, relationshipsToOmit),
  };
};

export const aUserAuthenticationWithPasswordFailure = (
  overrides?: Partial<UserAuthenticationWithPasswordFailure>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserAuthenticationWithPasswordFailure => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserAuthenticationWithPasswordFailure');
  return {
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'reiciendis',
  };
};

export const aUserAuthenticationWithPasswordSuccess = (
  overrides?: Partial<UserAuthenticationWithPasswordSuccess>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserAuthenticationWithPasswordSuccess => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserAuthenticationWithPasswordSuccess');
  return {
    item:
      overrides && overrides.hasOwnProperty('item')
        ? overrides.item!
        : relationshipsToOmit.has('User')
          ? ({} as User)
          : aUser({}, relationshipsToOmit),
    sessionToken:
      overrides && overrides.hasOwnProperty('sessionToken')
        ? overrides.sessionToken!
        : 'aut',
  };
};

export const aUserCreateInput = (
  overrides?: Partial<UserCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserCreateInput');
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart')
        ? overrides.cart!
        : relationshipsToOmit.has('CartItemRelateToManyForCreateInput')
          ? ({} as CartItemRelateToManyForCreateInput)
          : aCartItemRelateToManyForCreateInput({}, relationshipsToOmit),
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'ut',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'autem',
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : relationshipsToOmit.has('OrderRelateToManyForCreateInput')
          ? ({} as OrderRelateToManyForCreateInput)
          : anOrderRelateToManyForCreateInput({}, relationshipsToOmit),
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'excepturi',
    passwordResetIssuedAt:
      overrides && overrides.hasOwnProperty('passwordResetIssuedAt')
        ? overrides.passwordResetIssuedAt!
        : 'ullam',
    passwordResetRedeemedAt:
      overrides && overrides.hasOwnProperty('passwordResetRedeemedAt')
        ? overrides.passwordResetRedeemedAt!
        : 'placeat',
    passwordResetToken:
      overrides && overrides.hasOwnProperty('passwordResetToken')
        ? overrides.passwordResetToken!
        : 'sint',
  };
};

export const aUserOrderByInput = (
  overrides?: Partial<UserOrderByInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserOrderByInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserOrderByInput');
  return {
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : OrderDirection.Asc,
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : OrderDirection.Asc,
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : OrderDirection.Asc,
    passwordResetIssuedAt:
      overrides && overrides.hasOwnProperty('passwordResetIssuedAt')
        ? overrides.passwordResetIssuedAt!
        : OrderDirection.Asc,
    passwordResetRedeemedAt:
      overrides && overrides.hasOwnProperty('passwordResetRedeemedAt')
        ? overrides.passwordResetRedeemedAt!
        : OrderDirection.Asc,
  };
};

export const aUserRelateToOneForCreateInput = (
  overrides?: Partial<UserRelateToOneForCreateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserRelateToOneForCreateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserRelateToOneForCreateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('UserWhereUniqueInput')
          ? ({} as UserWhereUniqueInput)
          : aUserWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('UserCreateInput')
          ? ({} as UserCreateInput)
          : aUserCreateInput({}, relationshipsToOmit),
  };
};

export const aUserRelateToOneForUpdateInput = (
  overrides?: Partial<UserRelateToOneForUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserRelateToOneForUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserRelateToOneForUpdateInput');
  return {
    connect:
      overrides && overrides.hasOwnProperty('connect')
        ? overrides.connect!
        : relationshipsToOmit.has('UserWhereUniqueInput')
          ? ({} as UserWhereUniqueInput)
          : aUserWhereUniqueInput({}, relationshipsToOmit),
    create:
      overrides && overrides.hasOwnProperty('create')
        ? overrides.create!
        : relationshipsToOmit.has('UserCreateInput')
          ? ({} as UserCreateInput)
          : aUserCreateInput({}, relationshipsToOmit),
    disconnect:
      overrides && overrides.hasOwnProperty('disconnect')
        ? overrides.disconnect!
        : true,
  };
};

export const aUserUpdateArgs = (
  overrides?: Partial<UserUpdateArgs>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserUpdateArgs => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserUpdateArgs');
  return {
    data:
      overrides && overrides.hasOwnProperty('data')
        ? overrides.data!
        : relationshipsToOmit.has('UserUpdateInput')
          ? ({} as UserUpdateInput)
          : aUserUpdateInput({}, relationshipsToOmit),
    where:
      overrides && overrides.hasOwnProperty('where')
        ? overrides.where!
        : relationshipsToOmit.has('UserWhereUniqueInput')
          ? ({} as UserWhereUniqueInput)
          : aUserWhereUniqueInput({}, relationshipsToOmit),
  };
};

export const aUserUpdateInput = (
  overrides?: Partial<UserUpdateInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserUpdateInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserUpdateInput');
  return {
    cart:
      overrides && overrides.hasOwnProperty('cart')
        ? overrides.cart!
        : relationshipsToOmit.has('CartItemRelateToManyForUpdateInput')
          ? ({} as CartItemRelateToManyForUpdateInput)
          : aCartItemRelateToManyForUpdateInput({}, relationshipsToOmit),
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'hic',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quis',
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : relationshipsToOmit.has('OrderRelateToManyForUpdateInput')
          ? ({} as OrderRelateToManyForUpdateInput)
          : anOrderRelateToManyForUpdateInput({}, relationshipsToOmit),
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : 'inventore',
    passwordResetIssuedAt:
      overrides && overrides.hasOwnProperty('passwordResetIssuedAt')
        ? overrides.passwordResetIssuedAt!
        : 'voluptas',
    passwordResetRedeemedAt:
      overrides && overrides.hasOwnProperty('passwordResetRedeemedAt')
        ? overrides.passwordResetRedeemedAt!
        : 'ut',
    passwordResetToken:
      overrides && overrides.hasOwnProperty('passwordResetToken')
        ? overrides.passwordResetToken!
        : 'doloribus',
  };
};

export const aUserWhereInput = (
  overrides?: Partial<UserWhereInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserWhereInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserWhereInput');
  return {
    AND:
      overrides && overrides.hasOwnProperty('AND')
        ? overrides.AND!
        : [
            relationshipsToOmit.has('UserWhereInput')
              ? ({} as UserWhereInput)
              : aUserWhereInput({}, relationshipsToOmit),
          ],
    NOT:
      overrides && overrides.hasOwnProperty('NOT')
        ? overrides.NOT!
        : [
            relationshipsToOmit.has('UserWhereInput')
              ? ({} as UserWhereInput)
              : aUserWhereInput({}, relationshipsToOmit),
          ],
    OR:
      overrides && overrides.hasOwnProperty('OR')
        ? overrides.OR!
        : [
            relationshipsToOmit.has('UserWhereInput')
              ? ({} as UserWhereInput)
              : aUserWhereInput({}, relationshipsToOmit),
          ],
    cart:
      overrides && overrides.hasOwnProperty('cart')
        ? overrides.cart!
        : relationshipsToOmit.has('CartItemManyRelationFilter')
          ? ({} as CartItemManyRelationFilter)
          : aCartItemManyRelationFilter({}, relationshipsToOmit),
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : relationshipsToOmit.has('IdFilter')
          ? ({} as IdFilter)
          : anIdFilter({}, relationshipsToOmit),
    name:
      overrides && overrides.hasOwnProperty('name')
        ? overrides.name!
        : relationshipsToOmit.has('StringFilter')
          ? ({} as StringFilter)
          : aStringFilter({}, relationshipsToOmit),
    orders:
      overrides && overrides.hasOwnProperty('orders')
        ? overrides.orders!
        : relationshipsToOmit.has('OrderManyRelationFilter')
          ? ({} as OrderManyRelationFilter)
          : anOrderManyRelationFilter({}, relationshipsToOmit),
    password:
      overrides && overrides.hasOwnProperty('password')
        ? overrides.password!
        : relationshipsToOmit.has('PasswordFilter')
          ? ({} as PasswordFilter)
          : aPasswordFilter({}, relationshipsToOmit),
    passwordResetIssuedAt:
      overrides && overrides.hasOwnProperty('passwordResetIssuedAt')
        ? overrides.passwordResetIssuedAt!
        : relationshipsToOmit.has('DateTimeNullableFilter')
          ? ({} as DateTimeNullableFilter)
          : aDateTimeNullableFilter({}, relationshipsToOmit),
    passwordResetRedeemedAt:
      overrides && overrides.hasOwnProperty('passwordResetRedeemedAt')
        ? overrides.passwordResetRedeemedAt!
        : relationshipsToOmit.has('DateTimeNullableFilter')
          ? ({} as DateTimeNullableFilter)
          : aDateTimeNullableFilter({}, relationshipsToOmit),
    passwordResetToken:
      overrides && overrides.hasOwnProperty('passwordResetToken')
        ? overrides.passwordResetToken!
        : relationshipsToOmit.has('PasswordFilter')
          ? ({} as PasswordFilter)
          : aPasswordFilter({}, relationshipsToOmit),
  };
};

export const aUserWhereUniqueInput = (
  overrides?: Partial<UserWhereUniqueInput>,
  _relationshipsToOmit: Set<string> = new Set(),
): UserWhereUniqueInput => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('UserWhereUniqueInput');
  return {
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'sunt',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'f29341a0-1f1a-4713-a463-49cb3eab5601',
  };
};

export const aValidateCouponResult = (
  overrides?: Partial<ValidateCouponResult>,
  _relationshipsToOmit: Set<string> = new Set(),
): ValidateCouponResult => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ValidateCouponResult');
  return {
    amount:
      overrides && overrides.hasOwnProperty('amount')
        ? overrides.amount!
        : 8.81,
    discountedAmount:
      overrides && overrides.hasOwnProperty('discountedAmount')
        ? overrides.discountedAmount!
        : 6.15,
    isValid:
      overrides && overrides.hasOwnProperty('isValid')
        ? overrides.isValid!
        : false,
  };
};

export const aValidateUserPasswordResetTokenResult = (
  overrides?: Partial<ValidateUserPasswordResetTokenResult>,
  _relationshipsToOmit: Set<string> = new Set(),
): ValidateUserPasswordResetTokenResult => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add('ValidateUserPasswordResetTokenResult');
  return {
    code:
      overrides && overrides.hasOwnProperty('code')
        ? overrides.code!
        : PasswordResetRedemptionErrorCode.Failure,
    message:
      overrides && overrides.hasOwnProperty('message')
        ? overrides.message!
        : 'nobis',
  };
};
