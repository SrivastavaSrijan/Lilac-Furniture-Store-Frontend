import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { useAllBannersQuery } from '@/lib/graphql';

import { Carousel, CloudImage } from '../common';

const BannerHeight = { xs: 300, md: 500 };
interface IBannersProps {}
export const Banners = (_props: IBannersProps) => {
  const { data, loading, error } = useAllBannersQuery();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Carousel disablePadding>
      {(data?.allBanners ?? []).map((banner) => {
        if (!banner) return <></>;
        const { id, title, subtitle, photo } = banner;
        const { publicUrlTransformed: bannerImage = null } = photo ?? {};
        return (
          <Stack key={id} position="relative">
            {bannerImage && (
              <Box
                position="relative"
                width="100%"
                height={{ xs: BannerHeight.xs, md: BannerHeight.md }}
              >
                <CloudImage
                  fill
                  src={bannerImage}
                  sizes="100vw"
                  quality={70}
                  alt={banner?.title ?? 'Image'}
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            )}
            <Stack
              sx={{
                bgcolor: 'secondary.light',
                position: 'absolute',
                bottom: {
                  xs: `calc(50% - ${BannerHeight.xs / 4}px)`,
                  md: `calc(50% - ${BannerHeight.md / 3}px)`,
                },
                left: 'calc(70% - 250px)',
                color: '#fff',
              }}
              p={{ xs: 1, md: 2 }}
              gap={{ xs: 1, md: 1.5 }}
              width={{ xs: 340, md: 500 }}
            >
              <Typography
                variant="h1"
                color="secondary.main"
                className="clamp-3"
              >
                {title}
              </Typography>
              <Typography variant="subtitle2" color="common.black">
                {subtitle}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Carousel>
  );
};
