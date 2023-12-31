import { Container, Stack } from '@mui/material';
import { GetServerSideProps, GetStaticPaths } from 'next';

import { ImageHeader, ProductsGrid, SEO } from '@/components';
import { AppConfig, withApollo } from '@/lib';
import {
  PageCategoryBySlugComp,
  ssrAllCategories,
  ssrCategoryBySlug,
} from '@/lib/graphql';

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrAllCategories.getServerPage(
    {},
    { req: undefined },
  );
  const paths =
    (props?.data?.categories ?? [])
      .filter(({ slug }) => !!slug)
      .map((category) => ({
        params: { slug: category.slug as string },
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
  const props = await ssrCategoryBySlug.getServerPage(
    { variables: { where: { slug } } },
    { req },
  );
  return {
    ...props,
    revalidate: 5 * 60,
  };
};

const CategoryBySlug: PageCategoryBySlugComp = ({ data }) => {
  const { name, description, slug } = data?.category ?? {};
  if (!name || !slug) {
    return <></>;
  }
  const categoryImage = data?.category?.image?.publicUrlTransformed ?? null;
  const { title, description: ogDescription } = AppConfig.pages.category ?? {};
  return (
    <Stack>
      <SEO
        title={title}
        description={ogDescription}
        replacer={{ name: data?.category?.name }}
      />
      {categoryImage && (
        <ImageHeader
          image={categoryImage}
          name={name}
          description={description}
        />
      )}
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 3, md: 4 }}>
          <ProductsGrid
            limit={12}
            variables={{
              where: { category: { slug: { equals: slug } } },
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(
  ssrCategoryBySlug.withPage((router) => {
    const { slug = null } = router.query ?? {};
    if (!slug || Array.isArray(slug)) {
      return { variables: { where: { slug: null } } };
    }
    return { variables: { where: { slug } } };
  })(CategoryBySlug),
);
