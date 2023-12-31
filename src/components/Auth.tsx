import { Stack, Typography, useTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { snakeCase } from 'lodash';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { AppConfig, AssetsConfig, generateSlideVariants } from '@/lib';

import { CloudImage } from '.';
import { RedeemResetPassword } from './RedeemResetPassword';
import { RequestPasswordResetLink } from './RequestPasswordResetLink';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Welcome } from './Welcome';

export interface IAuthChildProps {
  setCurrentState: (state: AuthState) => void;
  token?: string;
}
const IMAGE_HEIGHT = 200;
interface IAuthProps {
  initialState?: AuthState;
  token?: string;
  mode?: 'dialog' | 'page';
}
export enum AuthState {
  SIGN_UP,
  FORGOT_PASSWORD,
  REQUEST_PASSWORD,
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

export const Auth = ({ initialState, token, mode = 'dialog' }: IAuthProps) => {
  const [currentState, setCurrentState] = useState<AuthState>(
    initialState || AuthState.SIGN_IN,
  );
  const [, setPrevState] = useState<AuthState[]>([AuthState.SIGN_IN]);
  const [direction, setDirection] = useState(0);
  const router = useRouter();
  const theme = useTheme();
  const setNewState = (newState: AuthState) => {
    setDirection(newState > currentState ? 1 : -1);
    if (router.asPath.includes(AppConfig.pages.welcome.path))
      router.replace(
        {
          query: { state: snakeCase(AuthState[newState]) },
        },
        { pathname: AppConfig.pages.welcome.path },
        { shallow: true },
      );
    setPrevState((oldPreviousState) => [...oldPreviousState, currentState]);
    setCurrentState(newState);
  };
  const childProps = { setCurrentState: setNewState, token };
  const renderScene = (scene: AuthState) => {
    switch (scene) {
      case AuthState.SIGN_IN:
        return <SignIn {...childProps} />;
      case AuthState.SIGN_UP:
        return <SignUp {...childProps} />;
      case AuthState.WELCOME:
        return <Welcome {...childProps} />;
      case AuthState.FORGOT_PASSWORD:
        return <RequestPasswordResetLink {...childProps} />;
      case AuthState.REQUEST_PASSWORD:
        return <RedeemResetPassword {...childProps} />;
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
      <Stack sx={{ overflowX: 'hidden' }} minHeight={500}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentState}
            custom={direction}
            variants={generateSlideVariants('x')}
            initial="initial"
            animate="in"
            exit="out"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: 'absolute',
              width: '100%',
              ...(mode === 'dialog' ? { height: `calc(100vh - ${64}px)` } : {}),
            }}
          >
            {renderScene(currentState)}
          </motion.div>
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};
