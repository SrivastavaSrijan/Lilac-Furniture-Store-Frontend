import { Stack } from '@mui/material';

import { Navbar } from './Navbar';

interface IPageProps {
  children: JSX.Element;
}
export const Page = ({ children }: IPageProps) => {
  return (
    <Stack>
      <Navbar />
      {children}
    </Stack>
  );
};
