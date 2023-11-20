import { ArrowForwardOutlined, Close } from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { chunk, kebabCase } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { AppConfig, generateMockArray, sleep } from '@/lib';
import {
  ICategory,
  IProductWhere,
  useProductsWhereLazyQuery,
} from '@/lib/graphql';

import { CloudImage, ProductCard } from '../common';

const { path } = AppConfig.pages.category;
const Config = {
  COLUMNS: 3,
  ROWS: 3,
  HEIGHT: 300,
  EXPANDED: {
    get HEIGHT() {
      return Config.HEIGHT;
    },
    get WIDTH() {
      return 12 - Config.COLLAPSED.WIDTH * (Config.COLUMNS - 1);
    },
  },
  COLLAPSED: {
    get HEIGHT() {
      return 0;
    },
    get WIDTH() {
      return 0.1;
    },
  },
};
const { COLLAPSED, COLUMNS, ROWS, EXPANDED, HEIGHT } = Config;
// Animation variants
const variants: Variants = {
  initial: {
    height: '100%',
  },
  expanded: {
    height: 0,
  },
};
const MOCK_ARRAY = chunk(generateMockArray(COLUMNS * ROWS), COLUMNS);
interface ICategoryCardProps extends ICategory {}
export const CategoryCard = ({ name, id, description }: ICategoryCardProps) => {
  const [pages, setPages] = useState<(IProductWhere | null)[][]>(MOCK_ARRAY);
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
    (async () => {
      await sleep(2000);
      await getProducts({
        variables: {
          includeDesc: true,
          where: { category: { id: { equals: id } } },
          take: COLUMNS * ROWS,
        },
      });
    })();
  }, [getProducts, id]);

  useEffect(() => {
    if (loading || !data?.products?.length) return;
    const res = chunk(data.products, COLUMNS);
    setPages(res);
  }, [data, loading]);

  const handleWidth = (isExpanded: boolean, rowIndex: number) => {
    if (isExpanded) {
      return EXPANDED.WIDTH;
    }
    if (expandedData) {
      if (expandedData.row === rowIndex) {
        return COLLAPSED.WIDTH;
      }
      return 12 / COLUMNS;
    }
    return 12 / COLUMNS;
  };

  const handleHeight = (isExpanded: boolean, rowIndex: number) => {
    if (isExpanded) {
      return 0;
    }
    if (expandedData) {
      if (expandedData.row !== rowIndex) {
        return COLLAPSED.HEIGHT;
      }
      return EXPANDED.HEIGHT;
    }
    return HEIGHT / ROWS;
  };
  if (!name || !id) return null;
  const linkProps = {
    href: {
      pathname: path.replace('[slug].tsx', kebabCase(name)),
    },
  };
  return (
    <Stack gap={{ xs: 1, md: 1 }}>
      <Stack
        px={{ xs: 1, md: 2 }}
        py={{ xs: 2, md: 2 }}
        gap={{ xs: 0.5, md: 0.75 }}
        bgcolor="secondary.light"
      >
        <Typography textAlign="center" variant="h5" color="secondary.dark">
          <Typography
            fontStyle="italic"
            variant="h6"
            component="p"
            lineHeight={1}
            fontWeight={300}
          >
            for the
          </Typography>{' '}
          {name}
        </Typography>
        <Typography variant="body2">
          {description}
          <Link {...linkProps} passHref>
            <Button
              variant="text"
              color="primary"
              sx={{ p: 0, minWidth: 0, ml: '1ch', typography: 'body2' }}
              endIcon={<ArrowForwardOutlined fontSize="inherit" />}
            >
              View more
            </Button>
          </Link>
        </Typography>
      </Stack>
      <Stack minHeight={HEIGHT}>
        {pages.map((productPages, index) => (
          <Grid container key={`parent_${index}`} position="relative">
            {productPages.map((product, pIndex) => {
              const { image, name: pName, id: pid } = product ?? {};
              const isExpanded = expandedData?.product === pid;
              const imageURL = image?.image?.publicUrlTransformed;
              return !product || !imageURL || !pName ? (
                <Grid
                  item
                  xs={12 / COLUMNS}
                  md={12 / COLUMNS}
                  key={`child_${pIndex}_loading`}
                >
                  <Skeleton
                    variant="rectangular"
                    height={HEIGHT / ROWS}
                    sx={{
                      clipPath: 'inset(2px 2px 2px 2px round 4px)',
                    }}
                  />
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
                      product && !expandedData && toggleProductView(pid, index)
                    }
                    style={{
                      position: 'relative',
                      height: handleHeight(isExpanded, index),
                    }}
                  >
                    <Stack
                      position="relative"
                      height={handleHeight(isExpanded, index)}
                      sx={
                        isExpanded
                          ? {}
                          : {
                              clipPath: 'inset(2px 2px 2px 2px round 4px)',
                            }
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
                            zIndex: 2,
                            top: 10,
                          }}
                        >
                          <Close color="inherit" fontSize="inherit" />
                        </IconButton>
                        <ProductCard direction="row" {...product} />
                      </Stack>
                    )}
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Stack>
    </Stack>
  );
};
