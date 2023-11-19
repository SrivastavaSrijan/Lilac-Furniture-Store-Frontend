import {
  Button,
  CircularProgress,
  Collapse,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { generateMockArray, sleep } from '@/lib';
import { IProduct, usePaginatedProductsQuery } from '@/lib/graphql';

import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
}
export const ProductsGrid = ({ limit }: IProductsGridProps) => {
  const [cursor, setCursor] = useState(limit);
  const [dataArray, setDataArray] = useState<(IProduct | null)[]>(
    generateMockArray(limit),
  );
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const { data, loading, fetchMore } = usePaginatedProductsQuery({
    variables: {
      offset: 0,
      limit,
    },
  });

  const handleFetchMore = async () => {
    setIsFetchingMore(true);
    await sleep(1000);
    await fetchMore({
      variables: { offset: cursor, limit },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return {
          __typename: previousResult.__typename,
          products: [
            ...(previousResult?.products ?? []),
            ...(fetchMoreResult?.products ?? []),
          ],
        };
      },
    });
    setIsFetchingMore(false);
  };

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
    <Stack gap={{ xs: 2, md: 3 }}>
      <Stack
        gap={0.5}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h4">Our Products</Typography>
        <Typography variant="body1">
          Commodo sint voluptate labore excepteur
        </Typography>
      </Stack>
      <Collapse in={cursor !== limit} collapsedSize="80vh">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {productCards}
          {skeletons}
        </Grid>
      </Collapse>
      <Button
        variant="outlined"
        onClick={() => {
          setCursor((oldLimit) => oldLimit + limit);
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
