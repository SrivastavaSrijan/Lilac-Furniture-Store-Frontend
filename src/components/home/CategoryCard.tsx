import { ArrowForward, Close, ShoppingCartOutlined } from '@mui/icons-material';
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
import React, { MouseEvent, useEffect, useState } from 'react';

import { AppConfig, generateMockArray } from '@/lib';
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

  const handleCart = (ev: MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
  };

  if (!name) return <></>;
  return (
    <Stack>
      <Stack gap={{ xs: 1, md: 1 }}>
        <Stack sx={{ clipPath: 'inset(8px 8px 8px 8px round 8px)' }}>
          {pages.map((productPages, index) => (
            <Grid container key={`parent_${index}`} position="relative">
              {productPages.map((product, pIndex) => {
                if (!product) return <></>;
                const { image, name: pName, id } = product ?? {};
                const isExpanded = expandedData?.product === id;

                const imageURL = image?.image?.publicUrlTransformed;
                return !imageURL || !pName ? (
                  <Grid
                    item
                    xs={12 / COLUMNS}
                    md={12 / COLUMNS}
                    key={`child_${pIndex}`}
                  >
                    <Skeleton variant="rectangular" height={HEIGHT} />
                  </Grid>
                ) : (
                  <Grid
                    item
                    xs={handleWidth(isExpanded, index)}
                    md={handleWidth(isExpanded, index)}
                    key={`child_${pIndex}`}
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
                          px={{ xs: 0.5, md: 0.5 }}
                        >
                          <IconButton
                            onClick={() => setExpanded(null)}
                            size="medium"
                            sx={{
                              p: 0,
                              color: 'secondary.dark',
                              position: 'absolute',
                              right: 16,
                              top: 10,
                            }}
                          >
                            <Close color="inherit" fontSize="inherit" />
                          </IconButton>
                          <ProductMeta {...product} />
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleCart}
                            sx={{ mb: 3, mx: 2 }}
                            startIcon={<ShoppingCartOutlined />}
                          >
                            Add to cart
                          </Button>
                        </Stack>
                      )}
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Stack>
        <Stack px={1} my={{ xs: -1, md: -1 }}>
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
