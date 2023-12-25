import { Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

import { generateMockArray, useInMobile } from '@/lib';
import { SearchProductsQuery } from '@/lib/graphql';

import { ProductCard } from './ProductCard';

const item = {
  hidden: {
    y: 50, // start 50 pixels to the right
    opacity: 0, // fully transparent
    scale: 0.95, // slightly smaller
  },
  visible: {
    y: 0, // move to final position
    opacity: 1, // fully visible
    scale: 1, // scale to normal size
  },
};

interface ISearchGridProps {
  query: string;
  data: SearchProductsQuery | undefined;
  loading: boolean;
}
export const SearchGrid = ({ data, loading }: ISearchGridProps) => {
  // const [handleSearch, { data, loading, error }] = useSearchProductsLazyQuery();
  const inMobile = useInMobile();

  return (
    <Stack>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {(loading || !data?.products
          ? generateMockArray(12)
          : data?.products
        )?.map((product, index) => (
          <Grid item key={index} xs={6} md={3}>
            {product ? (
              <motion.div
                variants={item}
                whileInView="visible"
                initial="hidden"
                viewport={{
                  once: true,
                  amount: 'some',
                  margin: inMobile ? '56px' : '64px',
                }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  type: 'spring',
                  damping: 15,
                  stiffness: 100,
                }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ) : (
              <ProductCard id={index.toString()} />
            )}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
