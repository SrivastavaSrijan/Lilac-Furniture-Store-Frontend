import createCache from '@emotion/cache';

// eslint-disable-next-line import/prefer-default-export
export function createEmotionCache() {
  return createCache({ key: 'css' });
}
