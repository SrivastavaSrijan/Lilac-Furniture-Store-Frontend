import { ArrowForward, Close } from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { chunk, kebabCase, map } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { AppConfig } from '@/constants';
import { generateMockArray } from '@/lib';
import {
  ICategory,
  IProductWhere,
  useProductsWhereLazyQuery,
} from '@/lib/graphql';

import { CloudImage, ProductMeta } from '../common';

const { path } = AppConfig.pages.category;
const Config = {
  COLUMNS: 3,
  ROWS: 2,
  HEIGHT: 450,
  EXPANDED: {
    get HEIGHT() {
      return Config.HEIGHT - Config.COLLAPSED.HEIGHT;
    },
    get width() {
      return 12 - Config.COLLAPSED.width * (Config.COLUMNS - 1);
    },
  },
  COLLAPSED: {
    get HEIGHT() {
      return Config.HEIGHT / 80;
    },
    get width() {
      return 0.1;
    },
  },
};
const { COLLAPSED, COLUMNS, ROWS, EXPANDED, HEIGHT } = Config;
// Animation variants
const variants: Variants = {
  initial: {
    width: '100%',
  },
  expanded: {
    width: '100%',
  },
};
interface ICategoryCardProps extends ICategory {}
export const CategoryCard = ({ name, products }: ICategoryCardProps) => {
  const [pages, setPages] = useState<(IProductWhere | null)[][]>([]);
  const [expandedData, setExpanded] = useState<{
    row: number;
    product: string;
  } | null>(null);

  // Function to handle the product click
  const toggleProductView = (product: string | undefined, row: number) => {
    if (!product) return;
    setExpanded(expandedData?.product === product ? null : { product, row });
  };

  const [getProducts, { data, loading }] = useProductsWhereLazyQuery();

  useEffect(() => {
    getProducts({
      variables: {
        where: { id: { in: map(products, 'id') } },
        take: COLUMNS * ROWS,
      },
    });
  }, [products, getProducts]);

  useEffect(() => {
    const res = chunk(
      loading ? generateMockArray(3) : data?.products ?? [],
      COLUMNS,
    );
    setPages(res);
  }, [data, loading]);

  const handleWidth = (isExpanded: boolean, rowIndex: number) => {
    if (isExpanded) {
      return EXPANDED.width;
    }
    if (expandedData) {
      if (expandedData.row === rowIndex) {
        return COLLAPSED.width;
      }
      return 12 / COLUMNS;
    }
    return 12 / COLUMNS;
  };

  const handleHeight = (isExpanded: boolean, rowIndex: number) => {
    if (isExpanded) {
      return EXPANDED.HEIGHT;
    }
    if (expandedData) {
      if (expandedData.row !== rowIndex) {
        return COLLAPSED.HEIGHT;
      }
      return EXPANDED.HEIGHT;
    }
    return HEIGHT / ROWS;
  };

  if (!name) return <></>;
  return (
    <Stack>
      <Stack gap={{ xs: 1, md: 1 }}>
        <Stack sx={{ clipPath: 'inset(8px 8px 8px 8px round 8px)' }}>
          {pages.map((productPages, index) => (
            <Grid container key={index} position="relative">
              {productPages.map((product, pIndex) => {
                const { image, name: pName, id } = product ?? {};
                const isExpanded = expandedData?.product === id;

                const imageURL = image?.image?.publicUrlTransformed;
                return !imageURL || !pName ? (
                  <Grid item xs={12 / COLUMNS} md={12 / COLUMNS}>
                    <Skeleton variant="rectangular" height={HEIGHT} />
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={handleWidth(isExpanded, index)}
                    md={handleWidth(isExpanded, index)}
                    key={pIndex}
                    sx={{ cursor: 'pointer' }}
                  >
                    <motion.div
                      layout
                      animate={isExpanded ? 'expanded' : 'initial'}
                      initial={false}
                      variants={variants}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                      }}
                      onClick={() =>
                        product && !expandedData && toggleProductView(id, index)
                      }
                      style={{
                        position: 'relative',
                        height: handleHeight(isExpanded, index),
                      }}
                    >
                      <Stack
                        position="relative"
                        height={
                          handleHeight(isExpanded, index) / (isExpanded ? 2 : 1)
                        }
                      >
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              position: 'absolute',
                              width: '100%',
                              zIndex: 3,
                              height: 48,
                            }}
                          >
                            <Stack
                              bgcolor="secondary.light"
                              flex={1}
                              justifyContent="center"
                              alignItems="flex-end"
                              height="100%"
                              px={2}
                            >
                              <IconButton
                                onClick={() => setExpanded(null)}
                                size="small"
                                sx={{ p: 0 }}
                              >
                                <Close />
                              </IconButton>
                            </Stack>
                          </motion.div>
                        )}
                        <CloudImage
                          src={imageURL}
                          fill
                          alt={pName}
                          style={{
                            objectFit: 'cover',
                          }}
                          sizes="100px"
                        />
                      </Stack>
                      {isExpanded && (
                        <Stack
                          position="absolute"
                          width="100%"
                          height={`calc(${handleHeight(
                            isExpanded,
                            index,
                          )}px - 50%)`}
                          bgcolor="secondary.light"
                          px={{ xs: 1, md: 2 }}
                          py={{ xs: 2, md: 3 }}
                        >
                          <ProductMeta {...product} />{' '}
                        </Stack>
                      )}
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Stack>
        <Stack px={1} my={-0.5}>
          <Link href={path} as={path.replace('[id].tsx', kebabCase(name))}>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ArrowForward fontSize="small" />}
              fullWidth
            >
              <Typography textAlign="center" variant="h6" fontWeight={600}>
                {name}
              </Typography>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
