import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Container, Pagination, PaginationItem, Stack } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { ChangeEvent, useState } from 'react';

import { SEO } from '@/components/common';
import { CategoriesGrid } from '@/components/home';
import { AppConfig, withApollo } from '@/lib';
import { PageCategoryIndexComp, ssrCategoryIndex } from '@/lib/graphql';

export const getStaticProps: GetServerSideProps = async (context) => {
  const props = await ssrCategoryIndex.getServerPage({}, context);
  return {
    ...props,
    revalidate: 5 * 60,
  };
};

const limit = 4;
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const CategoryIndex: PageCategoryIndexComp = ({ data }) => {
  const [page, setPage] = useState(1);
  if (!data?.categories || !data.categories.length) return <></>;
  const handleChange = (ev: ChangeEvent<unknown>, newPage: number) => {
    ev.preventDefault();
    setPage(newPage);
  };
  return (
    <Stack>
      <SEO title={AppConfig.pages.index.title} />
      <Container maxWidth="lg">
        <Stack position="relative">
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial="initial"
              exit="exit"
              animate="animate"
              key={page}
              style={{ position: 'absolute' }}
            >
              <CategoriesGrid
                categories={
                  data?.categories?.slice(
                    (page - 1) * limit,
                    (page - 1) * limit + limit,
                  ) ?? []
                }
              />
            </motion.div>
          </AnimatePresence>
        </Stack>
        <Stack
          gap={{ xs: 6, md: 8 }}
          px={{ xs: 3, md: 4 }}
          py={{ xs: 2, md: 2 }}
          justifyContent="center"
          alignItems="center"
          width={{ xs: '100%', md: 'initial' }}
          left={{ xs: 0, md: '50%' }}
          position="fixed"
          bottom={0}
          bgcolor="secondary.light"
          sx={{ transform: { xs: 'initial', md: 'translate(-50%, 0)' } }}
        >
          <Pagination
            size="medium"
            siblingCount={0}
            boundaryCount={2}
            count={Math.ceil(data.categories.length / limit)}
            onChange={handleChange}
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
export default withApollo(ssrCategoryIndex.withPage(() => ({}))(CategoryIndex));
