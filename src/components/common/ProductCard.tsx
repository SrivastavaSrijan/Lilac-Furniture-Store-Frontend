import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { kebabCase } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React from 'react';

import { AppConfig } from '@/constants';
import { formatMoney, generateSizes } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { CloudImage } from '.';

const { path } = AppConfig.pages.products;
interface IProductCardProps extends IProduct {}
export const ProductCard = ({
  image,
  name,
  price,
  meta,
}: IProductCardProps) => {
  const imageURL = image?.image?.publicUrlTransformed;
  return (
    <Link href={path} as={path.replace('[id].tsx', kebabCase(name || '...'))}>
      <Stack>
        <Box position="relative" width="100%" height={300}>
          {imageURL && name ? (
            <CloudImage
              src={imageURL}
              fill
              alt={name}
              sizes={generateSizes({ xs: 6, md: 3 })}
            />
          ) : (
            <Skeleton variant="rectangular">
              <Box position="relative" width={400} height={300} />
            </Skeleton>
          )}
        </Box>
        <Stack
          pt={1}
          pb={{ xs: 1.5, md: 2 }}
          px={{ xs: 1, md: 1.5 }}
          gap={0.25}
          bgcolor="secondary.light"
        >
          <Typography key={nanoid()} variant="body1" fontWeight={600}>
            {name || <Skeleton />}
          </Typography>
          <Typography fontWeight={300} variant="caption">
            {meta ? `by ${meta?.company}` : <Skeleton />}
          </Typography>
          <Typography fontWeight={300} variant="body2">
            {meta ? `${meta?.type},${meta?.material}` : <Skeleton />}
          </Typography>

          <Typography variant="body2">{formatMoney(price)}</Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
