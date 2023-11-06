import createCache from '@emotion/cache';

// eslint-disable-next-line import/prefer-default-export
export function createEmotionCache() {
  return createCache({ key: 'css' });
}

export const formatMoney = (str: string | number | undefined | null) =>
  str
    ? `₹${new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3,
      }).format(Number.parseInt(str?.toString(), 10))}`
    : null;
