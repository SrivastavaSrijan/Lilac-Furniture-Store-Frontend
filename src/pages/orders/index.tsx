import { Container, Stack, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';

import { OrdersIndex, SEO } from '@/components';
import { AppConfig, withApollo } from '@/lib';
import { PageAllOrdersComp, ssrAllOrders } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { props } = await ssrAllOrders.getServerPage({}, ctx);
  return {
    props,
  };
};

const Orders: PageAllOrdersComp = ({ data }) => {
  const { title, description } = AppConfig.pages.orders ?? {};

  return (
    <Stack>
      <SEO title={title} description={description} />
      <Stack
        bgcolor="primary.main"
        color="primary.contrastText"
        justifyContent="center"
        px={{ xs: 0, md: 3 }}
        py={{ xs: 1, md: 1 }}
        gap={{ xs: 1, md: 1.5 }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2">Orders</Typography>
        </Container>
      </Stack>
      <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 0, md: 8 }}>
        <OrdersIndex orderItems={data?.authenticatedItem?.orders ?? []} />
      </Stack>
    </Stack>
  );
};
export default withApollo(ssrAllOrders.withPage()(Orders));
