import { NetworkStatus } from '@apollo/client';
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import { generateMockArray, sleep } from '@/lib';
import {
  IProduct,
  PaginatedProductsQueryVariables,
  usePaginatedProductsQuery,
} from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { ProductFilterBar } from '.';
import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
  variables?: PaginatedProductsQueryVariables;
  title?: string;
  subtitle?: string;
}
export interface IFilters {
  category: string[];
  price: number[];
  view: 'grid' | 'card';
  sort: 'name' | 'price';
  applied: boolean;
}

export const ProductsGrid = ({
  title,
  subtitle,
  limit,
  variables,
}: IProductsGridProps) => {
  const [productsShown, setProductsShown] = useState(limit);
  const [productsCount, setProductsCount] = useState<number>(10e5);
  const [dataArray, setDataArray] = useState<(IProduct | null)[]>(
    generateMockArray(limit),
  );
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { data, refetch, fetchMore, networkStatus } = usePaginatedProductsQuery(
    {
      variables: { limit, ...variables },
      notifyOnNetworkStatusChange: true,
    },
  );
  const loading = [
    NetworkStatus.loading,
    NetworkStatus.fetchMore,
    NetworkStatus.refetch,
  ].includes(networkStatus);
  const { max: maxPrice = null, min: minPrice = null } =
    data?.getPriceRange ?? {};
  const { dispatch } = useContext(CommonContext);

  const handleFetchMore = async () => {
    const lastProduct = dataArray?.[dataArray.length - 1] ?? null;
    if (!lastProduct) return;
    await fetchMore({
      variables: {
        cursor: { id: lastProduct.id },
        limit: limit + 1,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        const newProducts = fetchMoreResult?.products ?? [];
        newProducts?.shift();
        setProductsShown((oldLimit) => oldLimit + newProducts.length);
        return {
          __typename: previousResult.__typename,
          products: [...(previousResult?.products ?? []), ...newProducts],
        };
      },
    });
    setIsFetchingMore(false);
  };

  const handleApply = async (config: IFilters) => {
    setIsFetchingMore(true);
    await sleep(2000);
    const handleRefetch = async (
      refetchWhereVariables?: PaginatedProductsQueryVariables['where'],
    ) => {
      const { data: refetchData } = await refetch({
        limit: undefined,
        where: {
          ...variables?.where,
          ...(refetchWhereVariables ?? {}),
        },
      });
      if (refetchData?.productsCount) {
        setProductsShown(refetchData?.productsCount);
        setProductsCount(refetchData?.productsCount);
      }
      setIsFetchingMore(false);
      dispatch({ type: 'popover', payload: null });
    };

    if (config.price.length === 2) {
      const [selectedMin, selectedMax] = config.price;
      if (selectedMax && selectedMin) {
        handleRefetch({
          variants: {
            every: { price: { gte: selectedMin, lte: selectedMax } },
          },
        });
      }
    } else if (!config.applied) {
      handleRefetch({});
    }
  };

  const handleClose = () => {
    dispatch({ type: 'popover', payload: null });
  };

  useEffect(() => {
    if (data && productsCount === 10e5 && data?.productsCount) {
      setProductsCount(data?.productsCount);
    }
  }, [data, productsCount]);

  useEffect(() => {
    if (!loading && data?.products) {
      // Append new products to the existing list
      setDataArray(
        data.products.filter((val) => val.variant?.id) as IProduct[],
      );
    }
  }, [data?.products, loading]);

  // Prepare the product cards or skeletons
  const productCards = dataArray.map((product: IProduct | null, index) => (
    <Grid item key={product?.id ?? index} xs={6} md={3}>
      {product ? (
        <ProductCard {...product} />
      ) : (
        <ProductCard id={index.toString()} />
      )}
    </Grid>
  ));

  // Append skeletons to the end if more items are being fetched
  const skeletons = isFetchingMore
    ? generateMockArray(limit).map((_, index) => (
        <Grid item key={`skeleton-${index}`} xs={6} md={3}>
          <ProductCard id={index?.toString()} />
        </Grid>
      ))
    : null;

  return (
    <Stack gap={{ xs: 3, md: 5 }}>
      {title && subtitle && (
        <Stack
          gap={0.5}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </Stack>
      )}
      {!dataArray.length && (
        <Alert variant="standard" severity="error">
          <Typography textAlign="center">No products found</Typography>
        </Alert>
      )}
      {variables?.if && (
        <ProductFilterBar
          apply={handleApply}
          handleClose={handleClose}
          loading={isFetchingMore || loading}
          meta={{
            maxPrice,
            minPrice,
            productsCount: productsCount === 10e5 ? null : productsCount,
            productsShown:
              productsCount < productsShown ? productsCount : productsShown,
          }}
        />
      )}

      <Grid container spacing={{ xs: 2, md: 3 }}>
        {productCards}
        {skeletons}
      </Grid>
      <Button
        variant="outlined"
        disabled={productsCount <= limit || productsShown === productsCount}
        onClick={() => {
          handleFetchMore();
        }}
        endIcon={isFetchingMore ? <CircularProgress size={14} /> : undefined}
        sx={{ mx: 'auto' }}
      >
        Show more
      </Button>
    </Stack>
  );
};
