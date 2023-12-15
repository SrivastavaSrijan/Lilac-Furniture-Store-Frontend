import { Container, Stack, Typography } from '@mui/material';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { SEO } from '@/components';
import { AppConfig, withApollo } from '@/lib';
import { ssrAllOrders } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { props } = await ssrAllOrders.getServerPage({}, ctx);
  return {
    props,
  };
};

const Orders = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { title, description } = AppConfig.pages.orders ?? {};

  return (
    <Stack>
      <SEO title={title} description={description} />
      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={{ xs: 2, md: 3 }}
        py={{ xs: 1, md: 4 }}
        gap={{ xs: 1, md: 1.5 }}
      >
        <Typography textAlign="center" variant="h2">
          My Orders
        </Typography>
      </Stack>
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          {JSON.stringify(data?.authenticatedItem?.orders, null, 2)}
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(ssrAllOrders.withPage()(Orders));
