import { Box, Button, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React from 'react';

import { AllBannersQuery } from '@/lib/graphql';

import { Carousel, CloudImage } from '../common';

const BannerHeight = { xs: 300, md: 700 };
interface IBannersProps extends AllBannersQuery {}
export const Banners = ({ banners }: IBannersProps) => {
  return (
    <Carousel disablePadding>
      {(banners ?? []).map((banner) => {
        if (!banner) return <></>;
        const { title, subtitle, image, href } = banner;
        const { publicUrlTransformed: bannerImage = null } = image ?? {};
        return (
          <Stack key={nanoid()} position="relative">
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
                  priority
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
              width={{ xs: 340, md: 500 }}
              minHeight={{ xs: 300, md: 400 }}
            >
              <Stack
                justifyContent="flex-start"
                alignItems="flex-start"
                gap={{ xs: 2, md: 2 }}
              >
                <Typography
                  variant="h1"
                  color="secondary.main"
                  className="clamp-3"
                >
                  {title}
                </Typography>
                <Typography variant="subtitle1" color="common.black">
                  {subtitle}
                </Typography>
                {href && (
                  <Button href={href} sx={{ mt: 1.5 }}>
                    Learn More
                  </Button>
                )}
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Carousel>
  );
};
