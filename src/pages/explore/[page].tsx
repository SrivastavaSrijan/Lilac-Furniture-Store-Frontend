import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Container, Pagination, PaginationItem, Stack } from '@mui/material';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

import { CategoriesGrid, SEO } from '@/components';
import { AppConfig, withApollo } from '@/lib';
import {
  PageCategoryIndexComp,
  ssrCategoryIndex,
  ssrCategoryIndexPath,
} from '@/lib/graphql';

export const getStaticPaths: GetStaticPaths = async () => {
  const { props } = await ssrCategoryIndexPath.getServerPage(
    {},
    { req: undefined },
  );
  const paths =
    Array.from(Array(props?.data?.categoriesCount).keys()).map((val) => {
      return { params: { page: val?.toString() } };
    }) || [];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const props = await ssrCategoryIndex.getServerPage({}, context);
  return {
    ...props,
    revalidate: 5 * 60,
  };
};

const limit = 4;
const CategoryIndex: PageCategoryIndexComp = ({ data }) => {
  const router = useRouter();
  const page = +(router?.query?.page as string);
  if (!data?.categories || !data.categories.length) return <></>;
  const handleChange = (ev: ChangeEvent<unknown>, newPage: number) => {
    ev.preventDefault();
    router.push({
      pathname: AppConfig.pages.explore.path.replace(
        '[page].tsx',
        newPage.toString(),
      ),
    });
  };
  const { title, description } = AppConfig.pages.explore ?? {};
  return (
    <Stack>
      <SEO title={title} description={description} />
      <Container maxWidth="lg">
        <Stack gap={{ xs: 6, md: 8 }} py={{ xs: 6, md: 8 }}>
          <CategoriesGrid
            title="Explore Our Categories"
            subtitle="Et excepteur ipsum sint proident eiusmod mollit labore consequat aute 
                sit irure ea ex proident exercitation enim deserunt."
            categories={
              data?.categories?.slice(
                (page - 1) * limit,
                (page - 1) * limit + limit,
              ) ?? []
            }
          />
          <Pagination
            size="medium"
            siblingCount={0}
            boundaryCount={2}
            sx={{ mx: 'auto' }}
            count={Math.ceil(data.categories.length / limit)}
            onChange={handleChange}
            page={page}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBack, next: ArrowForward }}
                {...item}
              />
            )}
          />
        </Stack>
      </Container>
    </Stack>
  );
};
export default withApollo(ssrCategoryIndex.withPage()(CategoryIndex));
