import { Grid, Stack, Typography } from '@mui/material';
import { chunk } from 'lodash';

import { generateMockArray, useApolloErrorHandler, useInMobile } from '@/lib';
import { IPaginatedProduct, usePaginatedProductsQuery } from '@/lib/graphql';

import { Carousel, ProductCard } from '.';

interface IRelatedProductsProps {
  type: string;
  style: string;
  title: string;
  subtitle: string;
}
export const RelatedProducts = ({
  title,
  subtitle,
  type,
  style,
}: IRelatedProductsProps) => {
  const { data, error } = usePaginatedProductsQuery({
    variables: {
      limit: 5,
      where: { OR: [{ type: { equals: type } }, { style: { equals: style } }] },
    },
  });
  useApolloErrorHandler(error);
  const inMobile = useInMobile();
  const pages = chunk(data?.products ?? generateMockArray(5), inMobile ? 1 : 3);

  return (
    <Stack gap={{ xs: 3, md: 5 }}>
      {title && subtitle && (
        <Stack
          gap={0.5}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </Stack>
      )}
      <Carousel>
        {pages.map((page, pIndex) => (
          <Grid container spacing={{ xs: 2, md: 3 }} key={pIndex}>
            {page.map((product: IPaginatedProduct | null, index) => (
              <Grid item key={product?.id ?? index} xs={12} md={4}>
                {product ? (
                  <ProductCard {...product} />
                ) : (
                  <ProductCard id={index.toString()} />
                )}
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Stack>
  );
};
