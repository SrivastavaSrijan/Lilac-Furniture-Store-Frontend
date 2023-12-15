import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { useInMobile } from '@/lib';

import { Navbar } from './Navbar';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren',
};
interface IPageProps {
  children: JSX.Element;
}
export const Page = ({ children }: IPageProps) => {
  const router = useRouter();
  const inMobile = useInMobile();
  return (
    <Stack sx={{ overflowX: 'hidden' }} component="main">
      <Navbar />
      <motion.div
        transition={spring}
        key={router.asPath}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -30, opacity: 0 }}
        style={{ paddingTop: inMobile ? 56 : 64, overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    </Stack>
  );
};
