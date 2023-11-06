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
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AuthenticatedItem = User;

/**  A keystone list  */
export type Banner = {
  __typename?: 'Banner';
  description?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  photo?: Maybe<CloudinaryImage_File>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BannerCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['Upload']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BannerWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<BannerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<BannerWhereInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_i?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  description_i?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  description_not_i?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_contains_i?: InputMaybe<Scalars['String']['input']>;
  href_ends_with?: InputMaybe<Scalars['String']['input']>;
  href_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  href_i?: InputMaybe<Scalars['String']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  href_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  href_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  href_not_i?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  href_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  href_starts_with?: InputMaybe<Scalars['String']['input']>;
  href_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  photo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photo_not?: InputMaybe<Scalars['String']['input']>;
  photo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  subtitle_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>;
  subtitle_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_i?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  title_i?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  title_not_i?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_i?: InputMaybe<Scalars['String']['input']>;
};

export type BannerWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type BannersCreateInput = {
  data?: InputMaybe<BannerCreateInput>;
};

export type BannersUpdateInput = {
  data?: InputMaybe<BannerUpdateInput>;
  id: Scalars['ID']['input'];
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
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
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
  path?: Maybe<Scalars['String']['output']>;
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

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean']['output'];
  enableSignout: Scalars['Boolean']['output'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  viewsHash: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID']['input'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
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
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
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
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  /**  Create a single Banner item.  */
  createBanner?: Maybe<Banner>;
  /**  Create multiple Banner items.  */
  createBanners?: Maybe<Array<Maybe<Banner>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Banner item by ID.  */
  deleteBanner?: Maybe<Banner>;
  /**  Delete multiple Banner items by ID.  */
  deleteBanners?: Maybe<Array<Maybe<Banner>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  /**  Update a single Banner item by ID.  */
  updateBanner?: Maybe<Banner>;
  /**  Update multiple Banner items by ID.  */
  updateBanners?: Maybe<Array<Maybe<Banner>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateBannerArgs = {
  data?: InputMaybe<BannerCreateInput>;
};

export type MutationCreateBannersArgs = {
  data?: InputMaybe<Array<InputMaybe<BannersCreateInput>>>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateProductArgs = {
  data?: InputMaybe<ProductCreateInput>;
};

export type MutationCreateProductImageArgs = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type MutationCreateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesCreateInput>>>;
};

export type MutationCreateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsCreateInput>>>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteBannersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteProductImageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteProductImagesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationDeleteProductsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationUpdateBannerArgs = {
  data?: InputMaybe<BannerUpdateInput>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateBannersArgs = {
  data?: InputMaybe<Array<InputMaybe<BannersUpdateInput>>>;
};

export type MutationUpdateProductArgs = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateProductImageArgs = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesUpdateInput>>>;
};

export type MutationUpdateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
  SecretNotSet = 'SECRET_NOT_SET',
}

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<ProductImage>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ProductCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/**  A keystone list  */
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
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageRelateToOneInput = {
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  create?: InputMaybe<ProductImageCreateInput>;
  disconnect?: InputMaybe<ProductImageWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  alt?: InputMaybe<Scalars['String']['input']>;
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  alt_contains_i?: InputMaybe<Scalars['String']['input']>;
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  alt_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  alt_i?: InputMaybe<Scalars['String']['input']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alt_not?: InputMaybe<Scalars['String']['input']>;
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  alt_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  alt_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  alt_not_i?: InputMaybe<Scalars['String']['input']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  alt_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  alt_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ProductImagesCreateInput = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars['ID']['input'];
};

export type ProductRelateToOneInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<ProductWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ProductImageRelateToOneInput>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_i?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  description_i?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  description_not_i?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_i?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  name_i?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  name_not_i?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<ProductImageWhereInput>;
  photo_is_null?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  price_not?: InputMaybe<Scalars['Int']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_contains?: InputMaybe<Scalars['String']['input']>;
  status_contains_i?: InputMaybe<Scalars['String']['input']>;
  status_ends_with?: InputMaybe<Scalars['String']['input']>;
  status_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  status_i?: InputMaybe<Scalars['String']['input']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status_not?: InputMaybe<Scalars['String']['input']>;
  status_not_contains?: InputMaybe<Scalars['String']['input']>;
  status_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  status_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  status_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  status_not_i?: InputMaybe<Scalars['String']['input']>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  status_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  status_starts_with?: InputMaybe<Scalars['String']['input']>;
  status_starts_with_i?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ProductsCreateInput = {
  data?: InputMaybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  /**  Search for the Banner item with the matching ID.  */
  Banner?: Maybe<Banner>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the Banner list.  */
  _BannersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Banner items which match the where clause.  */
  _allBannersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Banner items which match the where clause.  */
  allBanners?: Maybe<Array<Maybe<Banner>>>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryBannerArgs = {
  where: BannerWhereUniqueInput;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllBannersMetaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortBannersBy>>;
  where?: InputMaybe<BannerWhereInput>;
};

export type Query_AllProductImagesMetaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type Query_AllProductsMetaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllBannersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortBannersBy>>;
  where?: InputMaybe<BannerWhereInput>;
};

export type QueryAllProductImagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};

export type QueryAllProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortBannersBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SortProductImagesBy {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
}

export enum SortProductsBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
}

export enum SortUsersBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
}

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  magicAuthIssuedAt?: Maybe<Scalars['String']['output']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']['output']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']['output']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']['output']>;
  password_is_set?: Maybe<Scalars['Boolean']['output']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
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
  email?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthToken?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthToken?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_i?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  email_i?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  email_not_i?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars['String']['input']>;
  magicAuthIssuedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars['String']['input']>;
  magicAuthRedeemedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  magicAuthToken_is_set?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_i?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  name_i?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_i?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']['input']>;
  name_not_i?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_i?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars['String']['input']>;
  passwordResetRedeemedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  passwordResetToken_is_set?: InputMaybe<Scalars['Boolean']['input']>;
  password_is_set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID']['input'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']['output']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']['output']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']['output']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']['output']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']['output']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']['output']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']['output']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']['output']>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']['output']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']['output']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']['output']>;
  /** The Keystone list key */
  key?: Maybe<Scalars['String']['output']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']['output']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']['output']>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']['output']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']['output']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']['output']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']['output']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']['output']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']['output']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']['output']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']['output']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']['output']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']['output']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']['output']>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']['output']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']['output']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']['output']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']['output']>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type AllBannersQueryVariables = Exact<{ [key: string]: never }>;

export type AllBannersQuery = {
  __typename?: 'Query';
  allBanners?: Array<{
    __typename?: 'Banner';
    id: string;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    photo?: {
      __typename?: 'CloudinaryImage_File';
      publicUrlTransformed?: string | null;
    } | null;
  } | null> | null;
};

export type AllProductsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type AllProductsQuery = {
  __typename?: 'Query';
  allProducts?: Array<{
    __typename?: 'Product';
    name?: string | null;
    price?: number | null;
    description?: string | null;
    photo?: {
      __typename?: 'ProductImage';
      image?: {
        __typename?: 'CloudinaryImage_File';
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
  } | null> | null;
};

export const AllBannersDocument = gql`
  query AllBanners {
    allBanners {
      id
      title
      subtitle
      description
      photo {
        publicUrlTransformed
      }
    }
  }
`;

/**
 * __useAllBannersQuery__
 *
 * To run a query within a React component, call `useAllBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBannersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllBannersQuery,
    AllBannersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllBannersQuery, AllBannersQueryVariables>(
    AllBannersDocument,
    options,
  );
}
export function useAllBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllBannersQuery,
    AllBannersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllBannersQuery, AllBannersQueryVariables>(
    AllBannersDocument,
    options,
  );
}
export function useAllBannersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllBannersQuery,
    AllBannersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllBannersQuery, AllBannersQueryVariables>(
    AllBannersDocument,
    options,
  );
}
export type AllBannersQueryHookResult = ReturnType<typeof useAllBannersQuery>;
export type AllBannersLazyQueryHookResult = ReturnType<
  typeof useAllBannersLazyQuery
>;
export type AllBannersSuspenseQueryHookResult = ReturnType<
  typeof useAllBannersSuspenseQuery
>;
export type AllBannersQueryResult = Apollo.QueryResult<
  AllBannersQuery,
  AllBannersQueryVariables
>;
export const AllProductsDocument = gql`
  query AllProducts($offset: Int, $limit: Int) {
    allProducts(skip: $offset, first: $limit) {
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
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
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
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
    options,
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
    options,
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
    options,
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
