import { Stack, Typography } from '@mui/material';

import { generateSizes } from '@/lib';

import { CloudImage } from '.';

interface IImageHeaderProps {
  image: string;
  name: string;
  description?: string | null;
  leadingText?: string | false;
}
export const ImageHeader = ({
  image,
  name,
  description,
  leadingText = 'for the',
}: IImageHeaderProps) => {
  return (
    <Stack width="100%">
      <Stack height={{ xs: 256, md: 320 }} position="relative">
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
          alignItems="center"
          position="absolute"
          left="50%"
          top="50%"
          width={{ xs: '80%', md: 'initial' }}
          textAlign="center"
          px={{ xs: 2, md: 3 }}
          py={{ xs: 1, md: 4 }}
          gap={{ xs: 1, md: 1.5 }}
          bgcolor="primary.light"
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          <Typography textAlign="center" variant="h2">
            {leadingText && (
              <Typography
                fontStyle="italic"
                variant="h4"
                component="p"
                lineHeight={1}
                fontWeight={300}
              >
                {leadingText}
              </Typography>
            )}
            {name}
          </Typography>
          <Typography
            variant="body1"
            maxWidth={{ xs: '100%', md: '100ch' }}
            className="clamp-4"
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
