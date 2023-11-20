import { Stack } from '@mui/material';
import { motion } from 'framer-motion';

import { Navbar } from './Navbar';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
interface IPageProps {
  children: JSX.Element;
}
export const Page = ({ children }: IPageProps) => {
  return (
    <Stack>
      <Navbar />
      <motion.div
        variants={variants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
    </Stack>
  );
};
