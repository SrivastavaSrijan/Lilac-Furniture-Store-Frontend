import { ArrowForwardOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

import { HomePageQuery } from '@/lib/graphql';

import { Carousel, CloudImage } from '.';

const BannerHeight = { xs: 300, md: 700 };
const BoxWidth = { xs: 320, md: 500 };

interface IBannersProps extends Pick<HomePageQuery, 'banners'> {}
export const Banners = ({ banners }: IBannersProps) => {
  return (
    <Carousel disablePeek>
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
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                position: 'absolute',
                top: { xs: '50%', md: '30%' },
                left: { xs: '50%', md: '90%' },
                transform: {
                  xs: 'translate(-50%, -50%)',
                  md: 'translate(-90%, -30%)',
                },
              }}
              py={{ xs: 2, md: 3 }}
              px={{ xs: 2, md: 2 }}
              width={BoxWidth}
            >
              <Stack
                height="100%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Stack gap={{ xs: 1, md: 2 }}>
                  <Typography variant="h1">{title}</Typography>
                  <Typography variant="subtitle1" className="clamp-3">
                    {subtitle}
                  </Typography>
                </Stack>
                <Box flexGrow={1} />
                {href && (
                  <Button
                    variant="text"
                    color="inverted"
                    endIcon={<ArrowForwardOutlined fontSize="inherit" />}
                  >
                    View more
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
