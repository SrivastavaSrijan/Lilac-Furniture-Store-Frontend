import { Container, Stack } from '@mui/material';
import { GetServerSideProps } from 'next';

import { ProductsGrid, SEO } from '@/components/common';
import { Banners, CategoriesGrid } from '@/components/home';
import { AppConfig } from '@/constants';
import { withApollo } from '@/lib';
import { PageAllBannersComp, ssrAllBanners } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return ssrAllBanners.getServerPage({}, context);
};

const Home: PageAllBannersComp = () => {
  const { data } = ssrAllBanners.usePage();
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <Banners {...data} />
      <Container maxWidth="md">
        <Stack
          px={{ xs: 1, md: 0 }}
          gap={{ xs: 6, md: 8 }}
          py={{ xs: 6, md: 8 }}
        >
          <CategoriesGrid />
          <ProductsGrid limit={12} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(Home);
