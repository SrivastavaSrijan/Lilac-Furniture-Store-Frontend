import { Container, Stack } from '@mui/material';

import { CartSummary, ImageHeader, SEO } from '@/components';
import { AppConfig, AssetsConfig } from '@/lib';

const Checkout = () => {
  const { title, description } = AppConfig.pages.cart ?? {};

  return (
    <Stack>
      <SEO title={title} description={description} />
      <ImageHeader
        image={AssetsConfig.cloudinary.cart}
        name="Cart"
        description="Irure culpa ex nulla et elit non ex cillum eiusmod quis dolore quis ad eu quis anim sint minim velit. Laborum occaecat anim id nulla incididunt veniam."
        leadingText={false}
      />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          <CartSummary />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Checkout;
