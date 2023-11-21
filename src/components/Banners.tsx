import { Box, Button, Stack, Typography } from '@mui/material';

import { HomePageQuery } from '@/lib/graphql';

import { Carousel, CloudImage } from '.';

const BannerHeight = { xs: 500, md: 700 };
const BoxWidth = { xs: 340, md: 500 };
const BoxHeight = {
  xs: BannerHeight.xs - 300,
  md: BannerHeight.md - 250,
};
interface IBannersProps extends Pick<HomePageQuery, 'banners'> {}
export const Banners = ({ banners }: IBannersProps) => {
  return (
    <Carousel disablePadding>
      {(banners ?? []).map((banner, index) => {
        if (!banner) return <></>;
        const { title, subtitle, image, href } = banner;
        const { publicUrlTransformed: bannerImage = null } = image ?? {};
        return (
          <Stack key={banner.id} position="relative">
            {bannerImage && (
              <Box position="relative" width="100%" height={BannerHeight}>
                <CloudImage
                  fill
                  src={bannerImage}
                  sizes="100vw"
                  quality={70}
                  priority={index === 0}
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
                  xs: `calc(75% - ${BoxHeight.xs / 2}px)`,
                  md: `calc(50% - ${BoxHeight.md / 2}px)`,
                },
                left: {
                  xs: `calc(50% - ${BoxWidth.xs / 2}px)`,
                  md: `calc(70% - ${BoxWidth.md / 2}px)`,
                },
                color: '#fff',
              }}
              py={{ xs: 2, md: 3 }}
              px={{ xs: 2, md: 2 }}
              width={BoxWidth}
              height={BoxHeight}
            >
              <Stack
                height="100%"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap={{ xs: 1, md: 2 }}
              >
                <Typography variant="h1" color="secondary.main">
                  {title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="common.black"
                  className="clamp-3"
                >
                  {subtitle}
                </Typography>
                <Box flexGrow={1} />
                {href && (
                  <Button href={href} variant="outlined">
                    <Typography
                      sx={{ typography: { xs: 'caption', md: 'subtitle1' } }}
                      color="common.black"
                    >
                      Learn More
                    </Typography>
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
