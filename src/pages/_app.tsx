import '@/styles/global.scss';
import '@/styles/nprogress.css';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import ModalProvider from 'mui-modal-provider';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import nprogress from 'nprogress';
import { useEffect } from 'react';

import {
  ErrorBoundary,
  Page,
  StyledMaterialDesignContent,
} from '@/components/common';
import { AssetsConfig, createEmotionCache, useApollo } from '@/lib';
import { CommonProvider } from '@/lib/providers/common.provider';
import { poppinsClassName, theme } from '@/styles/theme';

nprogress.configure({ parent: '#__next' });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// pages/_app.js

export interface IMyAppProps {
  Component: any;
  emotionCache: EmotionCache;
  pageProps: Object;
}

export default function MyApp(props: IMyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const apolloClient = useApollo(pageProps);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => nprogress.start());
    router.events.on('routeChangeComplete', () => nprogress.done());
    router.events.on('routeChangeError', () => nprogress.done());
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, user-scalable=yes"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href={AssetsConfig.brand.favicon} key="favicon" />
      </Head>
      <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <SnackbarProvider
                preventDuplicate
                maxSnack={1}
                action={(snackbarId) => (
                  <Button
                    variant="text"
                    onClick={() => closeSnackbar(snackbarId)}
                    sx={{ color: 'white' }}
                  >
                    Dismiss
                  </Button>
                )}
                Components={{
                  success: StyledMaterialDesignContent,
                  error: StyledMaterialDesignContent,
                }}
              >
                <ModalProvider>
                  <CommonProvider>
                    <AnimatePresence mode="wait" initial={false}>
                      <Page key={router.asPath}>
                        <Box
                          className={poppinsClassName}
                          bgcolor="background.main"
                        >
                          <Component {...pageProps} />
                        </Box>
                      </Page>
                    </AnimatePresence>
                  </CommonProvider>
                </ModalProvider>
              </SnackbarProvider>
            </ThemeProvider>
          </CacheProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </>
  );
}
