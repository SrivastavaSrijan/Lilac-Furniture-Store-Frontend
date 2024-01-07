import { ApolloError } from '@apollo/client';
import createCache from '@emotion/cache';
import { random } from 'lodash';
import { PrismaError } from 'prisma-error-enum';
import { DeepRequired } from 'react-hook-form';
import { string } from 'yup';

import { Entries, MessagesMap } from '.';
import { ICartItem } from './graphql';

// eslint-disable-next-line import/prefer-default-export
export function createEmotionCache() {
  return createCache({ key: 'css' });
}

export const formatMoney = (
  str: string | number | undefined | null,
  maximumSignificantDigits = 3,
) =>
  str
    ? `₹${new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits,
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

export const sleep = (ms: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((r) => setTimeout(r, random(0.7 * ms, 1.5 * ms)));

export const stringRequired = () => string().required(MessagesMap.required);

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error || error instanceof ApolloError)
    return error.message;
  return String(error);
};

export class ApolloErrorHandler {
  private apolloError: ApolloError | null;

  private errors: Error[];

  constructor(apolloError: unknown) {
    if (apolloError instanceof ApolloError) this.apolloError = apolloError;
    else this.apolloError = null;
    this.errors = this.processErrors();
  }

  get() {
    return this.errors?.[0] ?? null;
  }

  private processErrors() {
    if (!this.apolloError) return [];
    const errorObjects = this.apolloError.graphQLErrors.map((graphQLError) => {
      // Check for Prisma error
      if (graphQLError.extensions.code === 'KS_PRISMA_ERROR') {
        const prismaError = graphQLError.extensions?.prisma as {
          name: string;
          code: (typeof PrismaError)[keyof typeof PrismaError];
          clientVersion: string;
          meta?: { target: string[] };
          message: string;
        };
        const { message, code } = prismaError;
        if (
          code === PrismaError.UniqueConstraintViolation &&
          prismaError?.meta?.target?.includes('email')
        ) {
          return {
            message: 'Error: Email must be unique.',
            cause: code,
          };
        }

        return { message, cause: code };
      }
      return {
        message: graphQLError?.message || 'An unknown error occurred.',
        cause: graphQLError?.cause,
      };
      // Default to original error message
    });
    // Return the error messages for simplicity, or modify as needed
    return errorObjects.map(
      (errorObject) =>
        new Error(errorObject.message, { cause: errorObject?.cause }),
    );
  }
}

export const calculateCartPrice = (items: DeepRequired<ICartItem>[]) => {
  return items.reduce((p, c) => p + (c.variant.price ?? 0) * c.quantity, 0);
};

export const SizeOptionMap: Record<any, string> = {
  'Extra Small': 'XS',
  Small: 'S',
  Medium: 'M',
  Large: 'L',
  'Extra Large': 'XL',
};

export const generateSlideVariants = (direction: 'x' | 'y') => ({
  initial: (translate: number) => {
    return {
      [direction]: translate > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  in: {
    [direction]: 0,
    opacity: 1,
  },
  out: (translate: number) => {
    return {
      [direction]: translate < 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
});
