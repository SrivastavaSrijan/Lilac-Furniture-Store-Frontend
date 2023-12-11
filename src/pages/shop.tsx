import { Container, Stack } from '@mui/material';

import { ImageHeader, ProductsGrid, SEO } from '@/components';
import { AppConfig, AssetsConfig } from '@/lib';

const Shop = () => {
  const { title, description } = AppConfig.pages.shop ?? {};
  return (
    <Stack>
      <SEO title={title} description={description} />
      <ImageHeader
        image={AssetsConfig.cloudinary.shop}
        name="Shop"
        description="Nostrud mollit amet irure est cillum excepteur ullamco. Eu aliquip magna in in. Ut est nulla proident eiusmod dolor ipsum cupidatat."
        leadingText={false}
      />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 3, md: 4 }}>
          <ProductsGrid limit={12} showFilters />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Shop;
