import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
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

import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
  variables?: PaginatedProductsQueryVariables;
  title?: string;
  subtitle?: string;
}
export const ProductsGrid = ({
  title,
  subtitle,
  limit,
  variables,
}: IProductsGridProps) => {
  const [fetched, setFetched] = useState(limit);
  const [max, setMax] = useState<number>(10e5);
  const [dataArray, setDataArray] = useState<(IProduct | null)[]>(
    generateMockArray(limit),
  );
  const [hasFilterApplied, setFilterApplied] = useState<string[]>([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const { data, loading, refetch, fetchMore } = usePaginatedProductsQuery({
    variables: { limit, ...variables },
    notifyOnNetworkStatusChange: true,
  });

  const { state, dispatch } = useContext(CommonContext);

  const handleFetchMore = async () => {
    setIsFetchingMore(true);
    await sleep(1000);
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
        setFetched((oldLimit) => oldLimit + newProducts.length);
        return {
          __typename: previousResult.__typename,
          products: [...(previousResult?.products ?? []), ...newProducts],
        };
      },
    });
    setIsFetchingMore(false);
  };

  useEffect(() => {
    if (data && max === 10e5 && data?.productsCount) {
      setMax(data?.productsCount);
    }
  }, [data, max]);

  useEffect(() => {
    if (!loading && data?.products) {
      // Append new products to the existing list
      setDataArray(data.products);
    }
  }, [data?.products, loading]);

  useEffect(() => {
    if (variables?.if && data?.getPriceRange && data?.productsCount)
      dispatch({
        type: 'filter-meta',
        payload: {
          maxPrice: data?.getPriceRange?.max ?? null,
          minPrice: data?.getPriceRange?.min ?? null,
          fetched:
            fetched > data?.productsCount ? data?.productsCount : fetched,
          max: data?.productsCount,
        },
      });
  }, [
    data?.getPriceRange,
    dispatch,
    fetched,
    variables?.if,
    data?.productsCount,
    max,
  ]);

  useEffect(() => {
    const { price } = state?.filters ?? {};
    const { if: ifV, where } = variables ?? {};
    if (price.length === 2 && ifV) {
      const [selectedMin, selectedMax] = price;
      if (selectedMin && selectedMax)
        refetch({
          limit,
          where: { ...where, price: { gte: selectedMin, lte: selectedMax } },
        });
      setFilterApplied((old) => [...old, 'price']);
    }
  }, [limit, refetch, state?.filters, variables]);

  useEffect(() => {
    const { price } = state?.filters ?? {};
    if (!price.length && hasFilterApplied.includes('price'))
      refetch({ limit, ...variables });
  }, [hasFilterApplied, limit, refetch, state?.filters, variables]);

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
      <Collapse
        in={limit > (max ?? 0) || fetched !== limit}
        collapsedSize="60vh"
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {productCards}
          {skeletons}
        </Grid>
      </Collapse>
      <Button
        variant="outlined"
        disabled={fetched >= limit && fetched >= (max ?? 0)}
        onClick={() => {
          handleFetchMore();
        }}
        endIcon={isFetchingMore ? <CircularProgress size={12} /> : undefined}
        sx={{ mx: 'auto' }}
      >
        Show more
      </Button>
    </Stack>
  );
};
