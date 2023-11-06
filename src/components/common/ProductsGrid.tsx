import { Grid, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React from 'react';

import { useAllProductsQuery } from '@/lib/graphql';

import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
}
export const ProductsGrid = ({ limit }: IProductsGridProps) => {
  const { data, fetchMore } = useAllProductsQuery({
    variables: {
      offset: 0,
      limit,
    },
  });
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
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {data?.allProducts?.map(
          (val) =>
            val && (
              <Grid item key={nanoid()} xs={6} md={3}>
                <ProductCard {...val} />
              </Grid>
            ),
        )}
      </Grid>
    </Stack>
  );
};
