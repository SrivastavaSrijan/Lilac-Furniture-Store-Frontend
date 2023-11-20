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
    revalidate: 5 * 60,
  };
};

const Home: PageHomeComp = ({ data }) => {
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <Banners banners={data?.banners ?? []} />
      <Container maxWidth="md">
        <CategoriesGrid categories={data?.categories ?? []} />
        <ProductsGrid
          title="Our Products"
          subtitle="Commodo sint voluptate labore excepteur"
          limit={12}
        />
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrHome.withPage(() => ({ variables: { take: 4, skip: 4 } }))(Home),
);
