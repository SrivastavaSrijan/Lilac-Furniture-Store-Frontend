import { Container, Stack } from '@mui/material';
import { upperCase } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Auth, AuthState, SEO } from '@/components/common';
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
  const ogTitle = AppConfig.pages.welcome.title;
  let props = {
    state: AuthState.SIGN_IN,
    token: null as string | null,
    title: ogTitle['sign-in'],
  };
  if (queryState && !Array.isArray(queryState)) {
    const mappedState = mapStringToAuthState(queryState);
    props = {
      ...props,
      state: mappedState,
      title:
        ogTitle?.[queryState as keyof typeof ogTitle] || ogTitle['sign-in'],
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
  title: string;
}>;

const Welcome = ({
  title,
  state,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO title={title} />
      <Container maxWidth="sm" disableGutters>
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
          position="relative"
        >
          <Auth initialState={state} token={token ?? undefined} mode="page" />
        </Stack>
      </Container>
    </>
  );
};

export default Welcome;
