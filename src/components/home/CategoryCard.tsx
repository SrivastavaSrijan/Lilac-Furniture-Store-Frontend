import { Grid, Stack, Typography } from '@mui/material';
import { chunk, kebabCase, map } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { AppConfig } from '@/constants';
import { GraphQLNestedProperty } from '@/lib';
import { AllCategoriesQuery, useProductsWhereLazyQuery } from '@/lib/graphql';

import { CloudImage } from '../common';

const COLUMN = 3;
const ROW = 2;
const { path } = AppConfig.pages.category;
interface ICategoryCardProps
  extends GraphQLNestedProperty<AllCategoriesQuery, 'categories'> {}
export const CategoryCard = ({ name, products }: ICategoryCardProps) => {
  const [getProducts, { data: pData, loading: pLoading }] =
    useProductsWhereLazyQuery();

  useEffect(() => {
    getProducts({
      variables: {
        where: { id: { in: map(products, 'id') } },
        take: COLUMN * ROW,
      },
    });
  }, [products, getProducts]);

  if (!name) return <></>;
  return (
    <Link href={path} as={path.replace('[id].tsx', kebabCase(name))}>
      <Stack gap={{ xs: 1, md: 1 }}>
        <Stack sx={{ clipPath: 'inset(10px 10px 10px 10px round 4px)' }}>
          {chunk(pData?.products ?? [], COLUMN).map((page, index) => (
            <Grid container key={index}>
              {page.map(({ image, name: pName }) => {
                const imageURL = image?.image?.publicUrlTransformed;
                return (
                  <Grid item xs={12 / COLUMN} md={12 / COLUMN} key={nanoid()}>
                    {imageURL && pName && (
                      <Stack
                        position="relative"
                        width="100%"
                        height={400 / COLUMN}
                      >
                        <CloudImage
                          src={imageURL}
                          fill
                          alt={pName}
                          style={{ objectFit: 'cover' }}
                          quality={50}
                          sizes="100px"
                        />
                      </Stack>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Stack>
        <Typography textAlign="center" variant="body1" fontWeight={600}>
          {name}
        </Typography>
      </Stack>
    </Link>
  );
};
