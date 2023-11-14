import { Stack } from '@mui/material';
import { useMotionValue } from 'framer-motion';
import { useModal } from 'mui-modal-provider';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useUser } from '@/lib';

import { AuthHeader } from '.';
import { AnimatedCheckmark } from './AnimatedCheckmark';

interface IWelcomeProps {}
export const Welcome = (_props: IWelcomeProps) => {
  const user = useUser();
  const router = useRouter();
  const progress = useMotionValue(20);
  const { destroyModal, state } = useModal();

  useEffect(() => {
    const handleLoggedIn = () => {
      destroyModal(Object.keys(state)?.[0]);
      router.replace(router.asPath);
    };
    const hide = () => setTimeout(handleLoggedIn, 500);
    progress.on('animationComplete', () => hide());
  }, [progress, router, destroyModal, state]);

  return (
    <Stack
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 1 }}
      gap={{ xs: 4, md: 5 }}
      height="100%"
      alignItems="center"
    >
      <AnimatedCheckmark progress={progress} />
      <AuthHeader title={`Welcome!`} subtitle={`${user?.email}`} />
    </Stack>
  );
};
