import { Container, Stack } from '@mui/material';
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
    revalidate: 10,
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
          <ProductsGrid limit={12} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrHome.withPage(() => ({ variables: { take: 4, skip: 4 } }))(Home),
);
