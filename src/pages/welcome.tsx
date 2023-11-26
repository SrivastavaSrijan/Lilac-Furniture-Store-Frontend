import { Container, Stack } from '@mui/material';
import { upperCase } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Auth, AuthState, SEO } from '@/components';
import { AppConfig } from '@/lib';

const mapStringToAuthState = (stateString: string): AuthState => {
  const stateKey = Object.keys(AuthState).find(
    (key) =>
      upperCase(key).replace(/ /g, '_') ===
      upperCase(stateString).replace(/ /g, '_'),
  );

  return stateKey !== undefined
    ? AuthState[stateKey as keyof typeof AuthState]
    : AuthState.SIGN_IN;
};

export const getServerSideProps = (async ({ query }) => {
  const { state: queryState, token } = query;
  let props = {
    state: AuthState.SIGN_IN,
    token: null as string | null,
  };
  if (queryState && !Array.isArray(queryState)) {
    const mappedState = mapStringToAuthState(queryState);
    props = {
      ...props,
      state: mappedState,
    };
  }
  if (token && !Array.isArray(token))
    props = {
      ...props,
      token,
    };
  return {
    props,
  };
}) satisfies GetServerSideProps<{
  token: string | null;
  state: AuthState;
}>;

const Welcome = ({
  state,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [pageTitle, setTitle] = useState<string>(AppConfig.pages.welcome.title);
  const [pageDescription, setDescription] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();

  useEffect(() => {
    const { title, description } = (AppConfig.pages?.[
      (router.query.state ??
        AuthState[state]?.toLowerCase()) as keyof typeof AppConfig.pages
    ] ?? {}) as any;
    setTitle(title);
    setDescription(description);
  }, [router.query, state]);

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} />
      <Container maxWidth="sm" disableGutters>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100vh"
          position="relative"
          className="welcome"
        >
          <Auth initialState={state} token={token ?? undefined} mode="page" />
        </Stack>
      </Container>
    </>
  );
};

export default Welcome;
