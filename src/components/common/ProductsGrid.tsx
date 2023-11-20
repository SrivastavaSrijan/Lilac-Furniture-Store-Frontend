import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { generateMockArray, sleep } from '@/lib';
import {
  IProduct,
  PaginatedProductsQueryVariables,
  usePaginatedProductsQuery,
} from '@/lib/graphql';

import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
  where?: PaginatedProductsQueryVariables['where'];
}
export const ProductsGrid = ({ limit, where }: IProductsGridProps) => {
  const [fetched, setFetched] = useState(limit);
  const [max, setMax] = useState<number>(10e5);
  const [dataArray, setDataArray] = useState<(IProduct | null)[]>(
    generateMockArray(limit),
  );
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const { data, loading, fetchMore } = usePaginatedProductsQuery({
    variables: { limit, where },
  });

  const handleFetchMore = async () => {
    setIsFetchingMore(true);
    await sleep(1000);
    const lastProduct = dataArray?.[dataArray.length - 1] ?? null;
    if (!lastProduct) return;
    await fetchMore({
      variables: { cursor: { id: lastProduct.id }, limit: limit + 1, where },
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

  // Prepare the product cards or skeletons
  const productCards = dataArray.map((product: IProduct | null, index) => (
    <Grid item key={`${product?.name}_${index}`} xs={6} md={3}>
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
    <>
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
    </>
  );
};
