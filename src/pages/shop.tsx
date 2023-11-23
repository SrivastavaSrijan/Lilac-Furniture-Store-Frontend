import { Container, Stack } from '@mui/material';

import { CategoryHeader, ProductsGrid, SEO } from '@/components';
import { AppConfig, AssetsConfig } from '@/lib';

const Shop = () => {
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <CategoryHeader
        image={AssetsConfig.cloudinary.shop}
        name="Shop"
        description="Nostrud mollit amet irure est cillum excepteur ullamco. Eu aliquip magna in in. Ut est nulla proident eiusmod dolor ipsum cupidatat."
      />
      <Container maxWidth="md">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 3, md: 4 }}>
          <ProductsGrid limit={12} variables={{ if: true }} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Shop;
