import { Container, Stack, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';

import { OrderSummary, SEO } from '@/components';
import { AppConfig, withApollo } from '@/lib';
import { PageOrderComp, ssrOrder } from '@/lib/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as Record<'id', string>;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const { props } = await ssrOrder.getServerPage(
    { variables: { where: { id } } },
    ctx,
  );
  if (!props) {
    return {
      notFound: true,
    };
  }
  return {
    props,
  };
};

const Orders: PageOrderComp = ({ data }) => {
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
          <Typography variant="h2">Order</Typography>
        </Container>
      </Stack>
      <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 0, md: 8 }}>
        {data?.order && <OrderSummary {...data?.order} />}
      </Stack>
    </Stack>
  );
};

export default withApollo(
  ssrOrder.withPage((router) => {
    const { id = null } = router.query ?? {};

    if (!id || Array.isArray(id)) {
      return { variables: { where: { id: null } } };
    }
    return { variables: { where: { id } } };
  })(Orders),
);
