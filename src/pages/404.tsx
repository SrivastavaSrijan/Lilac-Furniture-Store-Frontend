import { Button, Stack, Typography } from '@mui/material';

import { SEO } from '@/components';
import { AppConfig } from '@/lib';

export default function Custom404() {
  return (
    <>
      <SEO title={AppConfig.pages['404'].title} />
      <Stack
        width="100%"
        height="calc(100vh - 100px)"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Stack>
          <Typography variant="h1" color="primary.main">
            404
          </Typography>
          <Typography>Page Not Found</Typography>
        </Stack>
        <Button variant="contained" href={AppConfig.pages.index.path}>
          Go back home
        </Button>
      </Stack>
    </>
  );
}
