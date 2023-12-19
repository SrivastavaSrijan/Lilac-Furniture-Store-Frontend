/* eslint-disable import/no-duplicates */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/naming-convention */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

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
const defaultOptions = {} as const;
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
};

export type MutationAddToCartArgs = {
  id: Scalars['ID']['input'];
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationConfirmPaymentAndCreateOrderArgs = {
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
  createdAt?: InputMaybe<CalendarDayFilter>;
  id?: InputMaybe<IdFilter>;
  items?: InputMaybe<OrderItemManyRelationFilter>;
  total?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type OrderWhereUniqueInput = {
  createdAt?: InputMaybe<Scalars['CalendarDay']['input']>;
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
  [key: string]: never;
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
  baseOptions: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options as any,
  );
}
export function useHomePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options as any,
  );
}
export function useHomePageSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    HomePageQuery,
    HomePageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<HomePageQuery, HomePageQueryVariables>(
    HomePageDocument,
    options as any,
  );
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
  baseOptions?: Apollo.QueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >(CategoryIndexPageDocument, options as any);
}
export function useCategoryIndexPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >(CategoryIndexPageDocument, options as any);
}
export function useCategoryIndexPageSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CategoryIndexPageQuery,
    CategoryIndexPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.QueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >(CategoryIndexPathDocument, options as any);
}
export function useCategoryIndexPathLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >(CategoryIndexPathDocument, options as any);
}
export function useCategoryIndexPathSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CategoryIndexPathQuery,
    CategoryIndexPathQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  mutation CreatePaymentIntent {
    createPaymentIntent {
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
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePaymentIntentMutation,
    CreatePaymentIntentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  mutation ConfirmPaymentAndCreateOrder($paymentIntentId: String!) {
    confirmPaymentAndCreateOrder(paymentIntentId: $paymentIntentId) {
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
 *   },
 * });
 */
export function useConfirmPaymentAndCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmPaymentAndCreateOrderMutation,
    ConfirmPaymentAndCreateOrderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  baseOptions?: Apollo.QueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options as any,
  );
}
export function useAllCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(
    AllCategoriesDocument,
    options as any,
  );
}
export function useAllCategoriesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllCategoriesQuery,
    AllCategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions: Apollo.QueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryBySlugQuery, CategoryBySlugQueryVariables>(
    CategoryBySlugDocument,
    options as any,
  );
}
export function useCategoryBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryBySlugQuery, CategoryBySlugQueryVariables>(
    CategoryBySlugDocument,
    options as any,
  );
}
export function useCategoryBySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.QueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options as any,
  );
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options as any,
  );
}
export function useAllProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options as any,
  );
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
  baseOptions: Apollo.QueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(
    ProductBySlugDocument,
    options as any,
  );
}
export function useProductBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(
    ProductBySlugDocument,
    options as any,
  );
}
export function useProductBySlugSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.QueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPriceRangeQuery, GetPriceRangeQueryVariables>(
    GetPriceRangeDocument,
    options as any,
  );
}
export function useGetPriceRangeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPriceRangeQuery, GetPriceRangeQueryVariables>(
    GetPriceRangeDocument,
    options as any,
  );
}
export function useGetPriceRangeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPriceRangeQuery,
    GetPriceRangeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.QueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >(ProductWhereCountDocument, options as any);
}
export function useProductWhereCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >(ProductWhereCountDocument, options as any);
}
export function useProductWhereCountSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProductWhereCountQuery,
    ProductWhereCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.QueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >(PaginatedProductsDocument, options as any);
}
export function usePaginatedProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >(PaginatedProductsDocument, options as any);
}
export function usePaginatedProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginatedProductsQuery,
    PaginatedProductsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions: Apollo.QueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductsWhereQuery, ProductsWhereQueryVariables>(
    ProductsWhereDocument,
    options as any,
  );
}
export function useProductsWhereLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductsWhereQuery, ProductsWhereQueryVariables>(
    ProductsWhereDocument,
    options as any,
  );
}
export function useProductsWhereSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ProductsWhereQuery,
    ProductsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
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
  baseOptions?: Apollo.MutationHookOptions<
    AddToCartMutation,
    AddToCartMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(
    AddToCartDocument,
    options as any,
  );
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
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCartItemMutation,
    UpdateCartItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options as any,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options as any,
  );
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
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
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
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
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options as any,
  );
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
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
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
  baseOptions?: Apollo.MutationHookOptions<
    SendUserPasswordResetLinkMutation,
    SendUserPasswordResetLinkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  baseOptions?: Apollo.MutationHookOptions<
    RedeemUserPasswordResetTokenMutation,
    RedeemUserPasswordResetTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
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
  baseOptions?: Apollo.QueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(
    AllOrdersDocument,
    options as any,
  );
}
export function useAllOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(
    AllOrdersDocument,
    options as any,
  );
}
export function useAllOrdersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllOrdersQuery,
    AllOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllOrdersQuery, AllOrdersQueryVariables>(
    AllOrdersDocument,
    options as any,
  );
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
  baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrderQuery, OrderQueryVariables>(
    OrderDocument,
    options as any,
  );
}
export function useOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(
    OrderDocument,
    options as any,
  );
}
export function useOrderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    OrderQuery,
    OrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(
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
