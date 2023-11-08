import { ArrowForward } from '@mui/icons-material';
import { Button, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { chunk, kebabCase, map } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { AppConfig } from '@/constants';
import { generateMockArray } from '@/lib';
import { ICategory, useProductsWhereLazyQuery } from '@/lib/graphql';

import { CloudImage } from '../common';

const COLUMN = 3;
const ROW = 2;
const { path } = AppConfig.pages.category;
interface ICategoryCardProps extends ICategory {}
export const CategoryCard = ({ name, products }: ICategoryCardProps) => {
  const [getProducts, { data, loading }] = useProductsWhereLazyQuery();

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
    <Stack>
      <Stack gap={{ xs: 1, md: 1 }}>
        <Stack sx={{ clipPath: 'inset(8px 8px 8px 8px round 8px)' }}>
          {chunk(!loading ? data?.products : generateMockArray(3), COLUMN).map(
            (page, index) => (
              <Grid container key={index}>
                {page.map((val) => {
                  const { image, name: pName } = val ?? {};
                  const imageURL = image?.image?.publicUrlTransformed;
                  return (
                    <Grid item xs={12 / COLUMN} md={12 / COLUMN} key={nanoid()}>
                      {imageURL && pName ? (
                        <Stack
                          position="relative"
                          width="100%"
                          height={300 / ROW}
                        >
                          <CloudImage
                            src={imageURL}
                            fill
                            alt={pName}
                            style={{ objectFit: 'cover' }}
                            sizes="100px"
                          />
                        </Stack>
                      ) : (
                        <Skeleton variant="rectangular" height={300} />
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            ),
          )}
        </Stack>
        <Stack px={1} my={-0.5}>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForward fontSize="small" />}
            fullWidth
          >
            <Link href={path} as={path.replace('[id].tsx', kebabCase(name))}>
              <Typography textAlign="center" variant="h6" fontWeight={600}>
                {name}
              </Typography>
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
