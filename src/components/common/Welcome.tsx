import { Stack } from '@mui/material';
import { useMotionValue } from 'framer-motion';
import { useModal } from 'mui-modal-provider';
import React, { useEffect } from 'react';

import { useUser } from '@/lib';

import { AuthHeader } from '.';
import { AnimatedCheckmark } from './AnimatedCheckmark';

interface IWelcomeProps {}
export const Welcome = (_props: IWelcomeProps) => {
  const user = useUser();
  const progress = useMotionValue(20);
  const { hideModal, state } = useModal();

  useEffect(() => {
    const hide = () =>
      setTimeout(() => hideModal(Object.keys(state)?.[0]), 100);
    progress.on('animationComplete', () => hide());
  }, [progress, hideModal, state]);

  return (
    <Stack
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 1 }}
      gap={{ xs: 4, md: 5 }}
      height="100%"
      alignItems="center"
    >
      <AnimatedCheckmark progress={progress} />
      <AuthHeader title={`Welcome back!`} subtitle={`${user?.email}`} />
    </Stack>
  );
};
