import { Box, Stack, Typography } from '@mui/material';
import { kebabCase } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React from 'react';

import { AppConfig } from '@/constants';
import { formatMoney, generateSizes, GraphQLNestedProperty } from '@/lib';
import { PaginatedProductsQuery } from '@/lib/graphql';

import { CloudImage } from '.';

const { path } = AppConfig.pages.products;
type IProduct = GraphQLNestedProperty<PaginatedProductsQuery, 'products'>;
interface IProductCardProps extends IProduct {}
export const ProductCard = ({
  image,
  name,
  price,
  meta,
}: IProductCardProps) => {
  const imageURL = image?.image?.publicUrlTransformed;
  if (!name) return <></>;
  return (
    <Link href={path} as={path.replace('[id].tsx', kebabCase(name))}>
      <Stack>
        {imageURL && name && (
          <Box position="relative" width="100%" height={300}>
            <CloudImage
              src={imageURL}
              fill
              alt={name}
              quality={50}
              sizes={generateSizes({ xs: 6, md: 3 })}
            />
          </Box>
        )}
        <Stack
          pt={1}
          pb={{ xs: 1.5, md: 2 }}
          px={{ xs: 1, md: 1.5 }}
          gap={0.25}
          bgcolor="secondary.light"
        >
          <Typography key={nanoid()} variant="body1" fontWeight={600}>
            {name}{' '}
          </Typography>
          <Typography fontWeight={300} variant="caption">
            by {meta?.company}
          </Typography>
          <Typography fontWeight={300} variant="body2">
            {meta?.type}, {meta?.material}
          </Typography>

          <Typography variant="body2">{formatMoney(price)}</Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
