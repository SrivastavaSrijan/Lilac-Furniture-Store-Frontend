import { Container, Stack } from '@mui/material';

import { CartPopover, SEO } from '@/components';
import { AppConfig } from '@/lib';

const Checkout = () => {
  const { title, description } = AppConfig.pages.checkout ?? {};

  return (
    <Stack>
      <SEO title={title} description={description} />
      <Container maxWidth="md">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          <Container maxWidth="sm">
            <CartPopover />
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Checkout;
