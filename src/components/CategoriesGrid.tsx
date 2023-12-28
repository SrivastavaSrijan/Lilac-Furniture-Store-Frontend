import { Grid, Stack, Typography } from '@mui/material';

import { HomePageQuery } from '@/lib/graphql';

import { CategoryCard } from '.';

interface ICategoriesGridProps extends Pick<HomePageQuery, 'categories'> {
  title?: string;
  subtitle?: string;
}
export const CategoriesGrid = ({
  title,
  subtitle,
  categories,
}: ICategoriesGridProps) => {
  return (
    <Stack gap={{ xs: 3, md: 5 }}>
      {title && subtitle && (
        <Stack
          gap={0.5}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" component="h3">
            {subtitle}
          </Typography>
        </Stack>
      )}
      <Grid container spacing={{ xs: 5, md: 5 }}>
        {(categories ?? []).map((val) => (
          <Grid item key={val?.id} xs={12} md={12 / 2}>
            <CategoryCard {...val} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
