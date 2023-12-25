import { Container, Stack } from '@mui/material';
import { startCase } from 'lodash';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { ImageHeader, SearchGrid, SEO } from '@/components';
import { AppConfig, AssetsConfig, withApollo } from '@/lib';
import { PageSearchProductsComp, ssrSearchProducts } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { props } = await ssrSearchProducts.getServerPage(
    { variables: { searchTerm: (ctx.query.q as string) ?? '' } },
    ctx,
  );
  return {
    props,
  };
};

const Shop: PageSearchProductsComp = ({ data }) => {
  const { title, description } = AppConfig.pages.shop ?? {};
  const router = useRouter();
  const query = startCase((router.query?.q as string) || 'Shop');
  return (
    <Stack>
      <SEO title={title} description={description} />
      <ImageHeader
        image={AssetsConfig.cloudinary.shop}
        name={query}
        description="Nostrud mollit amet irure est cillum excepteur ullamco. Eu aliquip magna in in. Ut est nulla proident eiusmod dolor ipsum cupidatat."
      />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 3, md: 4 }}>
          <SearchGrid data={data} loading={false} query={query} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrSearchProducts.withPage((router) => ({
    variables: { searchTerm: (router.query.q as string) ?? '' },
  }))(Shop),
);
