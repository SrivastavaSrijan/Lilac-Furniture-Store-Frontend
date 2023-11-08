import createCache from '@emotion/cache';

import { Entries } from '.';

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

export const generateSizes = (sizes: { xs: number; md: number }) => {
  const breakpointMap = {
    md: 600,
    xs: 0,
  };
  return (Object.entries(sizes) as Entries<typeof sizes>)
    .map(
      ([key, value]) =>
        `(min-width: ${breakpointMap[key]}px) ${100 / (12 / value)}vw`,
    )
    .join(', ');
};

export const generateMockArray = (size: number): null[] => {
  return Array.from(new Array(size)).fill(null);
};
