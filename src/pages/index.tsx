import { Container, Stack } from '@mui/material';
import { GetServerSideProps } from 'next';

import { Banners, CategoriesGrid, ProductsGrid, SEO } from '@/components';
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
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          <CategoriesGrid
            title="Browse The Range"
            subtitle=" Lorem ipsum dolor sit amet, labore ea officia sit dolor eu id ex
          excepteur duis aliqua laborum cupidatat proident consectetur."
            categories={data?.categories ?? []}
          />
          <ProductsGrid
            title="Our Products"
            subtitle="Commodo sint voluptate labore excepteur"
            limit={12}
          />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrHome.withPage(() => ({ variables: { take: 4, skip: 4 } }))(Home),
);
