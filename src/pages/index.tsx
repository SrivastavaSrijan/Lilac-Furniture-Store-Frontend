import { Container, Stack } from '@mui/material';

import { ProductsGrid, SEO } from '@/components/common';
import { Banners } from '@/components/home';
import { AppConfig } from '@/constants';

export default function Home() {
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <Banners />
      <Container maxWidth="md">
        <Stack
          py={{ xs: 2, md: 3 }}
          px={{ xs: 1, md: 0 }}
          gap={{ xs: 2, md: 3 }}
        >
          <ProductsGrid limit={12} />
        </Stack>
      </Container>
    </Stack>
  );
}
