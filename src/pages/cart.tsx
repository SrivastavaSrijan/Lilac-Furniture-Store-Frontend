import { Container, Stack, Typography } from '@mui/material';

import { CartSummary, SEO } from '@/components';
import { AppConfig } from '@/lib';

const Checkout = () => {
  const { title, description } = AppConfig.pages.cart ?? {};

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
          <Typography variant="h2">Cart</Typography>
        </Container>
      </Stack>
      <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
        <CartSummary />
      </Stack>
    </Stack>
  );
};
export default Checkout;
