import { Container, Stack } from '@mui/material';
import React from 'react';

import { Navbar } from './Navbar';

interface IPageProps {
  children: JSX.Element;
}
export const Page = ({ children }: IPageProps) => {
  return (
    <Stack>
      <Navbar />
      <Container maxWidth="md">
        <Stack py={{ xs: 2, md: 3 }} px={{ xs: 1, md: 0 }}>
          {children}
        </Stack>
      </Container>
    </Stack>
  );
};
