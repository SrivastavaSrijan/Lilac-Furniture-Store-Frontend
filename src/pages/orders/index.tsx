import { Container, Stack } from '@mui/material';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { ImageHeader, SEO } from '@/components';
import { AppConfig, AssetsConfig, withApollo } from '@/lib';
import { ssrGetAllOrders } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { props } = await ssrGetAllOrders.getServerPage({}, ctx);
  return {
    props,
  };
};

const Orders = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, description } = AppConfig.pages.cart ?? {};

  return (
    <Stack>
      <SEO title={title} description={description} />
      <ImageHeader
        image={AssetsConfig.cloudinary.cart}
        name="My Orders"
        description="Irure culpa ex nulla et elit non ex cillum eiusmod quis dolore quis ad eu quis anim sint minim velit. Laborum occaecat anim id nulla incididunt veniam."
        leadingText={false}
      />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          {JSON.stringify(data?.authenticatedItem?.orders, null, 2)}
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(ssrGetAllOrders.withPage()(Orders));
