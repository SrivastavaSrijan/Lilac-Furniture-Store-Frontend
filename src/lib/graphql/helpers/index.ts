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

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
};

export type CartItemCreateInput = {
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
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
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
  quantity?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserWhereInput>;
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

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
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

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
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

export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<CartItem>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBanner?: Maybe<Banner>;
  createBanners?: Maybe<Array<Maybe<Banner>>>;
  createCartItem?: Maybe<CartItem>;
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createProduct?: Maybe<Product>;
  createProductImage?: Maybe<ProductImage>;
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBanner?: Maybe<Banner>;
  deleteBanners?: Maybe<Array<Maybe<Banner>>>;
  deleteCartItem?: Maybe<CartItem>;
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteProduct?: Maybe<Product>;
  deleteProductImage?: Maybe<ProductImage>;
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
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
  updateProduct?: Maybe<Product>;
  updateProductImage?: Maybe<ProductImage>;
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
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

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};

export type MutationCreateProductImagesArgs = {
  data: Array<ProductImageCreateInput>;
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

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type MutationDeleteProductImagesArgs = {
  where: Array<ProductImageWhereUniqueInput>;
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

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

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

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ProductImage>;
  meta?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ProductCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForCreateInput>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
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

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ProductImageRelateToOneForUpdateInput>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<ProductImageWhereInput>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
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
  keystone: KeystoneMeta;
  product?: Maybe<Product>;
  productImage?: Maybe<ProductImage>;
  productImages?: Maybe<Array<ProductImage>>;
  productImagesCount?: Maybe<Scalars['Int']['output']>;
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

export type CategoryIndexQueryVariables = Exact<{ [key: string]: never }>;

export type CategoryIndexQuery = {
  __typename?: 'Query';
  categories?: Array<{
    __typename?: 'Category';
    id: string;
    slug?: string | null;
    name?: string | null;
    description?: string | null;
  }> | null;
};

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllCategoriesQuery = {
  __typename?: 'Query';
  categories?: Array<{ __typename?: 'Category'; slug?: string | null }> | null;
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

export type PaginatedProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  where?: InputMaybe<ProductWhereInput>;
}>;

export type PaginatedProductsQuery = {
  __typename?: 'Query';
  productsCount?: number | null;
  products?: Array<{
    __typename?: 'Product';
    id: string;
    slug?: string | null;
    name?: string | null;
    meta?: any | null;
    price?: number | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
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
    meta?: any | null;
    description?: string | null;
    image?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
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
    product?: { __typename?: 'Product'; id: string } | null;
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
      product?: {
        __typename?: 'Product';
        name?: string | null;
        price?: number | null;
        meta?: any | null;
        id: string;
        image?: {
          __typename?: 'ProductImage';
          image?: {
            __typename?: 'CloudinaryImage_File';
            publicUrlTransformed?: string | null;
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

export const HomePageDocument = gql`
  query HomePage($take: Int, $cursor: CategoryWhereUniqueInput, $skip: Int!) {
    banners(take: $take) {
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
export const CategoryIndexDocument = gql`
  query CategoryIndex {
    categories {
      id
      slug
      name
      description
    }
  }
`;

/**
 * __useCategoryIndexQuery__
 *
 * To run a query within a React component, call `useCategoryIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryIndexQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CategoryIndexQuery,
    CategoryIndexQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryIndexQuery, CategoryIndexQueryVariables>(
    CategoryIndexDocument,
    options as any,
  );
}
export function useCategoryIndexLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoryIndexQuery,
    CategoryIndexQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryIndexQuery, CategoryIndexQueryVariables>(
    CategoryIndexDocument,
    options as any,
  );
}
export function useCategoryIndexSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    CategoryIndexQuery,
    CategoryIndexQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CategoryIndexQuery,
    CategoryIndexQueryVariables
  >(CategoryIndexDocument, options as any);
}
export type CategoryIndexQueryHookResult = ReturnType<
  typeof useCategoryIndexQuery
>;
export type CategoryIndexLazyQueryHookResult = ReturnType<
  typeof useCategoryIndexLazyQuery
>;
export type CategoryIndexSuspenseQueryHookResult = ReturnType<
  typeof useCategoryIndexSuspenseQuery
>;
export type CategoryIndexQueryResult = Apollo.QueryResult<
  CategoryIndexQuery,
  CategoryIndexQueryVariables
>;
export const AllCategoriesDocument = gql`
  query AllCategories {
    categories {
      slug
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
export const PaginatedProductsDocument = gql`
  query PaginatedProducts(
    $limit: Int
    $cursor: ProductWhereUniqueInput
    $where: ProductWhereInput
  ) {
    products(take: $limit, cursor: $cursor, where: $where) {
      id
      slug
      image {
        image {
          publicUrlTransformed
        }
      }
      name
      meta
      price
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
 *      cursor: // value for 'cursor'
 *      where: // value for 'where'
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
      name
      meta
      image {
        image {
          publicUrlTransformed
        }
      }
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
      product {
        id
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
          product {
            name
            price
            meta
            image {
              image {
                publicUrlTransformed
              }
            }
            id
          }
          quantity
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
