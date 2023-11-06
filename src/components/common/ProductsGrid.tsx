import { Button, Collapse, Grid, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { usePaginatedProductsQuery } from '@/lib/graphql';

import { ProductCard } from './ProductCard';

interface IProductsGridProps {
  limit: number;
}
export const ProductsGrid = ({ limit }: IProductsGridProps) => {
  const [expanded, setExpanded] = useState(false);
  const { data, fetchMore } = usePaginatedProductsQuery({
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
      <Collapse collapsedSize="70vh" in={expanded}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {(data?.products ?? [])?.map(
            (val) =>
              val && (
                <Grid item key={nanoid()} xs={6} md={3}>
                  <ProductCard {...val} />
                </Grid>
              ),
          )}
        </Grid>
      </Collapse>

      <Button
        variant="outlined"
        onClick={() => setExpanded(!expanded)}
        sx={{ mx: 'auto' }}
      >
        Show more
      </Button>
    </Stack>
  );
};
