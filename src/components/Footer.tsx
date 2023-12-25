import {
  alpha,
  Container,
  Divider,
  Grid,
  Skeleton,
  skeletonClasses,
  Stack,
  Typography,
} from '@mui/material';
import { chunk } from 'lodash';
import Link from 'next/link';

import { AppConfig, useApolloErrorHandler } from '@/lib';
import { useProductDescriptorsQuery } from '@/lib/graphql';

interface IFooterProps {}

const ChunkedColumn = <T extends Object | string>({
  values,
  mapper,
  loading,
}: {
  values: T[] | null;
  mapper: (value: T) => JSX.Element | boolean;
  loading: boolean;
}) => {
  return (
    <Stack
      gap={{ xs: 0.125, md: 0.25 }}
      sx={(theme) => ({
        [`& .${skeletonClasses.root}`]: {
          backgroundColor: alpha(theme.palette.secondary.main, 0.5),
        },
      })}
    >
      <Grid container spacing={{ xs: 1, md: 0 }}>
        {chunk(
          loading ? Array.from(new Array(8)).fill('') : values ?? [],
          4,
        ).map((page, index) => (
          <Grid item xs={6} md={12} key={index}>
            {page?.map(
              loading ? (_, itemIndex) => <Skeleton key={itemIndex} /> : mapper,
            )}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
const handleSearch = (name: string) => ({
  pathname: AppConfig.pages.search.path,
  query: { q: name },
});
export const Footer = (_props: IFooterProps) => {
  const { data, loading, error } = useProductDescriptorsQuery({
    variables: { take: 8, skip: 4 },
  });
  useApolloErrorHandler(error);
  const { categories = null, getAllProductDescriptors } = data ?? {};
  const {
    companies = null,
    styles = null,
    types = null,
  } = getAllProductDescriptors ?? {};
  return (
    <Stack bgcolor="primary.main">
      <Container maxWidth="lg" disableGutters>
        <Stack
          px={{ xs: 2, md: 0 }}
          py={{ xs: 2, md: 3 }}
          color="primary.contrastText"
          gap={{ xs: 6, md: 8 }}
        >
          <Link href={AppConfig.pages.index.path} passHref>
            <Stack direction="row" gap={2}>
              <Typography variant="h4">
                {AppConfig.name.toUpperCase()}
              </Typography>
            </Stack>
          </Link>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="space-between"
          >
            <Grid item xs={12} md="auto">
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="h5">Our Categories</Typography>
                <ChunkedColumn
                  loading={loading}
                  values={categories}
                  mapper={({ name: catName, slug: catSlug }) =>
                    !!catSlug && (
                      <Link
                        key={catSlug}
                        href={AppConfig.pages.category.path.replace(
                          '[slug].tsx',
                          catSlug,
                        )}
                      >
                        <Typography variant="body2">{catName}</Typography>
                      </Link>
                    )
                  }
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md="auto">
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="h5">Our Styles</Typography>
                <ChunkedColumn
                  loading={loading}
                  values={styles as string[]}
                  mapper={(style: string) =>
                    !!style && (
                      <Link key={style} href={handleSearch(style)}>
                        <Typography variant="body2">{style}</Typography>
                      </Link>
                    )
                  }
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md="auto">
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="h5">Our Offerings</Typography>
                <ChunkedColumn
                  loading={loading}
                  values={types as string[]}
                  mapper={(type: string) =>
                    !!type && (
                      <Link key={type} href={handleSearch(type)}>
                        <Typography variant="body2">{type}</Typography>
                      </Link>
                    )
                  }
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md="auto">
              <Stack gap={{ xs: 0.5, md: 1 }}>
                <Typography variant="h5">Our Partners</Typography>
                <ChunkedColumn
                  loading={loading}
                  values={companies as string[]}
                  mapper={(company: string) =>
                    !!company && (
                      <Link key={company} href={handleSearch(company)}>
                        <Typography variant="body2">{company}</Typography>
                      </Link>
                    )
                  }
                />
              </Stack>
            </Grid>
          </Grid>
          <Stack gap={{ xs: 2, md: 3 }}>
            <Divider
              flexItem
              variant="middle"
              sx={{ borderColor: 'secondary.main', mx: { xs: 10, md: 30 } }}
            />
            <Stack>
              <Typography textAlign="center" variant="overline">
                &copy; LILAC 2023 All Rights Reserved
              </Typography>
              <Typography textAlign="center" variant="overline">
                Designed and Developed by Srijan
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
