import { Container, Stack, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';

import { ProductsGrid, SEO } from '@/components/common';
import { Banners, CategoriesGrid } from '@/components/home';
import { AppConfig, withApollo } from '@/lib';
import { PageHomeComp, ssrHome } from '@/lib/graphql';

export const getStaticProps: GetServerSideProps = async (context) => {
  const props = await ssrHome.getServerPage(
    { variables: { take: 4, skip: 4 } },
    context,
  );
  return {
    ...props,
    revalidate: 5 * 60,
  };
};

const Home: PageHomeComp = ({ data }) => {
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <Banners banners={data?.banners ?? []} />
      <Container maxWidth="md">
        <Stack
          px={{ xs: 1, md: 0 }}
          gap={{ xs: 6, md: 8 }}
          py={{ xs: 6, md: 8 }}
        >
          <CategoriesGrid categories={data?.categories ?? []} />
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
            <ProductsGrid limit={12} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrHome.withPage(() => ({ variables: { take: 4, skip: 4 } }))(Home),
);
