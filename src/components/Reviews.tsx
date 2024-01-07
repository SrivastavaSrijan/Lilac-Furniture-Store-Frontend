import { RateReviewOutlined } from '@mui/icons-material';
import {
  Button,
  Grid,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { chunk } from 'lodash';

import { generateMockArray, useApolloErrorHandler, useInMobile } from '@/lib';
import {
  IReview,
  OrderDirection,
  useProductReviewsBySlugQuery,
} from '@/lib/graphql';

import { Carousel } from '.';

interface IReviewsProps {
  title: string;
  subtitle: string;
  slug: string;
}
export const Reviews = ({ title, subtitle, slug }: IReviewsProps) => {
  const { data, loading, error } = useProductReviewsBySlugQuery({
    variables: { where: { slug }, orderBy: { createdAt: OrderDirection.Desc } },
  });
  useApolloErrorHandler(error);
  const inMobile = useInMobile();
  const reviews = data?.product?.reviews ?? [];
  const pages = chunk(
    !loading ? reviews ?? generateMockArray(5) : generateMockArray(5),
    inMobile ? 1 : 3,
  );
  const averageRating = !loading
    ? (reviews?.reduce((p, review) => p + (review?.rating ?? 0), 0) ?? 5) /
      reviews.length
    : null;
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
      <Stack
        bgcolor="primary.light"
        px={{ xs: 1, md: 2 }}
        py={{ xs: 1, md: 2 }}
        gap={{ xs: 2, md: 3 }}
        justifyContent="space-between"
        color="secondary.contrastText"
        direction="row"
      >
        <Stack direction="row" alignItems="center" gap={2}>
          {averageRating ? (
            <Stack direction="row" gap={1} alignItems="flex-end">
              <Rating value={averageRating} readOnly size="large" />
              <Typography variant="caption">
                (based on {reviews.length} reviews)
              </Typography>
            </Stack>
          ) : (
            <Skeleton width="5ch" />
          )}
        </Stack>
        <Stack>
          <Button
            disabled={loading}
            startIcon={<RateReviewOutlined />}
            color="primary"
            size="large"
            sx={{ typography: 'body2' }}
          >
            Rate & Review
          </Button>
        </Stack>
      </Stack>
      <Carousel>
        {pages.map((page, pIndex) => (
          <Grid container spacing={{ xs: 2, md: 3 }} key={pIndex}>
            {page.map((review: IReview | null, index) => {
              const { author, content, createdAt, rating } = review ?? {};
              return (
                <Grid item key={review?.id ?? index} xs={12} md={4}>
                  <Stack
                    bgcolor="primary.light"
                    px={{ xs: 1, md: 2 }}
                    py={{ xs: 1, md: 2 }}
                    gap={{ xs: 0.5, md: 1 }}
                    height="100%"
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography variant="body1" fontWeight={500}>
                        {author || <Skeleton variant="text" width="10ch" />}
                      </Typography>
                      <Stack alignItems="flex-end" gap={0.5}>
                        {rating ? (
                          <Rating value={rating} readOnly size="small" />
                        ) : (
                          <Skeleton width="5ch" />
                        )}{' '}
                        <Typography variant="caption" component="span">
                          {createdAt ? (
                            `${new Date(createdAt).toLocaleDateString()}`
                          ) : (
                            <Skeleton variant="text" width="10ch" />
                          )}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="body2">
                      {content || (
                        <Skeleton
                          variant="rectangular"
                          height={100}
                          width="100%"
                        />
                      )}
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Carousel>
    </Stack>
  );
};
