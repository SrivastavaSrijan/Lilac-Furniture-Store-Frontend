import { ArrowForwardOutlined } from '@mui/icons-material';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import { HomePageQuery } from '@/lib/graphql';

import { Carousel, CloudImage } from '.';

const BannerHeight = { xs: 300, md: 'calc(100vh - 64px)' };
const BoxWidth = { xs: '100%', md: 700 };

interface IBannersProps extends Pick<HomePageQuery, 'banners'> {}
export const Banners = ({ banners }: IBannersProps) => {
  return (
    <Carousel disablePeek>
      {(banners ?? []).map((banner, index) => {
        if (!banner) return <></>;
        const { title, subtitle, image, href } = banner;
        const { publicUrlTransformed: bannerImage = null } = image ?? {};
        return (
          <Grid container key={banner.id} data-testid="banners">
            <Grid item xs={12} md="auto">
              <Stack
                bgcolor="primary.main"
                color="primary.contrastText"
                maxWidth={BoxWidth}
                height="100%"
                justifyContent="center"
                alignItems="flex-start"
                py={{ xs: 2, md: 3 }}
                px={{ xs: 3, md: 5 }}
              >
                <Stack gap={{ xs: 1, md: 2 }}>
                  <Typography
                    sx={{ typography: { xs: 'h1', md: 'poster' } }}
                    component="h1"
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" className="clamp-3" component="p">
                    {subtitle}
                  </Typography>
                </Stack>
                {href && (
                  <Button
                    size="large"
                    variant="text"
                    color="secondary"
                    sx={{ p: 0, mt: 3 }}
                    endIcon={<ArrowForwardOutlined fontSize="inherit" />}
                  >
                    View more
                  </Button>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md>
              {bannerImage && (
                <Box position="relative" width="100%" height={BannerHeight}>
                  <CloudImage
                    fill
                    src={bannerImage}
                    sizes="50vw"
                    priority={index === 0}
                    alt={banner?.title ?? 'Image'}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Carousel>
  );
};
