import { Box, Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import React from 'react';

import { formatMoney, generateSizes } from '@/lib';
import { PaginatedProductsQuery } from '@/lib/graphql';

import { CloudImage } from '.';

type IProduct = NonNullable<
  NonNullable<NonNullable<PaginatedProductsQuery>['products']>['0']
>;
interface IProductCardProps extends IProduct {}
export const ProductCard = ({ image, name, price }: IProductCardProps) => {
  const imageURL = image?.image?.publicUrlTransformed;
  return (
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
        py={1}
        px={{ xs: 1, md: 1.5 }}
        gap={0.25}
        bgcolor="secondary.light"
      >
        {name?.split('—').map((text, index) => (
          <Typography
            key={nanoid()}
            variant={!index ? 'body1' : 'caption'}
            fontWeight={600}
          >
            {text}
          </Typography>
        ))}
        <Typography variant="body2">{formatMoney(price)}</Typography>
      </Stack>
    </Stack>
  );
};
