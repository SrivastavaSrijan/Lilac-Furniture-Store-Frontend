import { Container, Stack } from '@mui/material';
import { GetServerSideProps, GetStaticPaths } from 'next';

import { ProductIndex, SEO } from '@/components';
import { AppConfig, MessagesMap, withApollo } from '@/lib';
import {
  PageProductBySlugComp,
  ssrAllProducts,
  ssrProductBySlug,
} from '@/lib/graphql';

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrAllProducts.getServerPage({}, { req: undefined });
  const paths =
    (props?.data?.products ?? [])
      .filter(({ slug }) => !!slug)
      .map((product) => ({
        params: { slug: product.slug as string },
      })) || [];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params, req }) => {
  const { slug = null } = params ?? {};
  if (!slug || Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }
  const props = await ssrProductBySlug.getServerPage(
    { variables: { where: { slug } } },
    { req },
  );
  return {
    ...props,
    revalidate: 5 * 60,
  };
};

const ProductBySlug: PageProductBySlugComp = ({ data }) => {
  if (!data || !data?.product) throw new Error(MessagesMap.error);
  const { title, description } = AppConfig.pages.products ?? {};

  return (
    <Stack>
      <SEO
        title={title}
        description={description}
        replacer={{ name: data?.product?.name }}
      />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 3, md: 4 }}>
          <ProductIndex {...data.product} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrProductBySlug.withPage((router) => {
    const { slug = null } = router.query ?? {};
    if (!slug || Array.isArray(slug)) {
      return { variables: { where: { slug: null } } };
    }
    return { variables: { where: { slug } } };
  })(ProductBySlug),
);
