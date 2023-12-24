import { alpha, Container, Stack, Typography } from '@mui/material';

import { generateSizes } from '@/lib';

import { CloudImage } from '.';

interface IImageHeaderProps {
  image: string;
  name: string;
  description?: string | null;
}
export const ImageHeader = ({
  image,
  name,
  description,
}: IImageHeaderProps) => {
  return (
    <Stack width="100%">
      <Stack height={{ xs: 256, md: 400 }} position="relative">
        <CloudImage
          fill
          src={image}
          alt={name}
          priority
          sizes={generateSizes({ xs: 6, md: 6 })}
          style={{
            objectFit: 'cover',
          }}
        />
        <Stack
          justifyContent="center"
          position="absolute"
          left="50%"
          top={{ xs: 0, md: '20%' }}
          width="100%"
          px={{ xs: 0, md: 3 }}
          py={{ xs: 1, md: 1 }}
          bgcolor={(theme) => alpha(theme.palette.primary.light, 0.8)}
          color="secondary.contrastText"
          sx={{
            transform: {
              xs: 'translate(-50%, 0)',
              md: 'translate(-50%, -20%)',
            },
            backdropFilter: 'contrast(110%) blur(0.125rem)',
          }}
        >
          <Container maxWidth="lg">
            <Stack gap={{ xs: 1, md: 2 }}>
              <Typography variant="h2">{name}</Typography>
              <Typography
                variant="body1"
                maxWidth={{ xs: '100%', md: '100ch' }}
                className="clamp-4"
              >
                {description}
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
};
