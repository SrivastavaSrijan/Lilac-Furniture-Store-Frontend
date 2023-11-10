import { Stack, Typography, useTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { AssetsConfig } from '@/lib';

import { CloudImage } from '.';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Welcome } from './Welcome';

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction: number) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
};

export interface IAuthChildProps {
  setCurrentState: (state: AuthState) => void;
}
const IMAGE_HEIGHT = 200;
interface IAuthProps {}
export enum AuthState {
  SIGN_UP,
  FORGOT_PASSWORD,
  SIGN_IN,
  WELCOME,
}

export const AuthHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <Stack gap={{ xs: 0.875, md: 1 }}>
    <Typography variant="h1">{title}</Typography>
    <Typography variant="body1" color="gray">
      {subtitle}
    </Typography>
  </Stack>
);

export const Auth = (_props: IAuthProps) => {
  const [currentState, setCurrentState] = useState<AuthState>(
    AuthState.SIGN_IN,
  );
  const [prevState, setPrevState] = useState<AuthState[]>([AuthState.SIGN_IN]);
  const [direction, setDirection] = useState(0);

  const theme = useTheme();
  const setNewState = (newState: AuthState) => {
    setDirection(newState > currentState ? 1 : -1);
    setPrevState((oldPreviousState) => [...oldPreviousState, currentState]);
    setCurrentState(newState);
  };
  const childProps = { setCurrentState: setNewState };
  const renderScene = (scene: AuthState) => {
    switch (scene) {
      case AuthState.SIGN_IN:
        return <SignIn {...childProps} />;
      case AuthState.SIGN_UP:
        return <SignUp {...childProps} />;
      case AuthState.WELCOME:
        return <Welcome {...childProps} />;
      default:
        return null;
    }
  };

  return (
    <Stack>
      <CloudImage
        width={theme.breakpoints.values.sm}
        src={AssetsConfig.cloudinary.login}
        height={IMAGE_HEIGHT}
        crop="fill"
        alt="Login to Lilac"
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <Stack
        sx={{ overflowX: 'hidden' }}
        // position="relative"
        // height={`calc(100vh - ${200 + 64}px)`}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentState}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="in"
            exit="out"
            // layout="position"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: `calc(100vh - ${64}px)`,
            }}
          >
            {renderScene(currentState)}
          </motion.div>
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};
