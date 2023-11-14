import '@/styles/global.scss';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import ModalProvider from 'mui-modal-provider';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import {
  ErrorBoundary,
  Page,
  StyledMaterialDesignContent,
} from '@/components/common';
import { AssetsConfig, createEmotionCache, useApollo } from '@/lib';
import { poppinsClassName, theme } from '@/styles/theme';

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
                Components={{
                  success: StyledMaterialDesignContent,
                  error: StyledMaterialDesignContent,
                }}
              >
                <ModalProvider>
                  <Page>
                    <Box className={poppinsClassName} bgcolor="background.main">
                      <Component {...pageProps} />
                    </Box>
                  </Page>
                </ModalProvider>
              </SnackbarProvider>
            </ThemeProvider>
          </CacheProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </>
  );
}
