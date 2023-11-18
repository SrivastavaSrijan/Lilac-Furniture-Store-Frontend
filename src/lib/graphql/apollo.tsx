/* eslint-disable no-console */
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import merge from 'deepmerge';
import { IncomingMessage } from 'http';
import { isEqual } from 'lodash';
import { NextPage } from 'next';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { useMemo } from 'react';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// Track ongoing requests
let numRequests = 0;
const isBrowser = typeof window !== 'undefined';

const progressLink = new ApolloLink((operation, forward) => {
  // if (isBrowser) nprogress.start();
  numRequests += 1;
  return forward(operation).map((response) => {
    numRequests -= 1;
    if (numRequests === 0) {
      // if (isBrowser) nprogress.done();
    }
    return response;
  });
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // Server URL (must be absolute)
  credentials: 'include', // Needed for cookies, if used
  headers: {
    'content-type': 'application/json', // Set content type
    accept: 'application/json', // Set content type
    // Add any other headers that the backend requires
  },
  fetchOptions: {
    mode: 'cors', // To allow handling CORS
  },
});

export const getApolloClient = (
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject,
) => {
  if (ctx && ctx.req) {
    // const { req } = ctx;
    // TODO: Do something with the cookies here, maybe add a header for authentication
    // req.cookies;
  }
  const cache = new InMemoryCache({ typePolicies: {} }).restore(
    initialState || {},
  );
  return new ApolloClient({
    ssrMode: !isBrowser,
    connectToDevTools: process.env.NODE_ENV !== 'production',
    link: from([progressLink, errorLink, httpLink]),
    cache,
  });
};

export function initializeApollo(initialState = null) {
  const newApolloClient = apolloClient ?? getApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s)),
        ),
      ],
    });

    // Restore the cache with the merged data
    newApolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return newApolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = newApolloClient;

  return newApolloClient;
}

export function addApolloState(client: any, pageProps: any) {
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

export type ApolloClientContext = {
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
};

// eslint-disable-next-line react/display-name
export const withApollo = (Comp: NextPage) => (props: any) => {
  const WrappedWithApollo = (
    <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
  return WrappedWithApollo;
};
