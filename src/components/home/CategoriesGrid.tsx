import { Grid, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';

import { HomePageQuery } from '@/lib/graphql';

import { CategoryCard } from '.';

interface ICategoriesGridProps extends Pick<HomePageQuery, 'categories'> {}
export const CategoriesGrid = ({ categories }: ICategoriesGridProps) => {
  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <Stack
        gap={0.5}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h4">Browse The Range</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, labore ea officia sit dolor eu id ex
          excepteur duis aliqua laborum cupidatat proident consectetur.
        </Typography>
      </Stack>
      <Grid container spacing={{ xs: 5, md: 5 }}>
        {(categories ?? []).map((val) => (
          <Grid item key={nanoid()} xs={12} md={12 / 2}>
            <CategoryCard {...val} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
