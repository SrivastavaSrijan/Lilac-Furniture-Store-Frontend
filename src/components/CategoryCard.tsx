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

import { AppConfig, generateMockArray, sleep, useInMobile } from '@/lib';
import {
  ICategory,
  IProductWhere,
  useProductsWhereLazyQuery,
} from '@/lib/graphql';

import { CloudImage, ProductCard } from '.';

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
      return 0.01;
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
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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
  const inMobile = useInMobile();
  useEffect(() => {
    (async () => {
      await sleep(1500);
      await getProducts({
        variables: {
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
        bgcolor="primary.main"
        color="primary.contrastText"
      >
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">
          {description}
          <Link {...linkProps} passHref>
            <Button
              variant="text"
              color="secondary"
              sx={{ p: 0, minWidth: 0, ml: '1ch', typography: 'body2' }}
              endIcon={<ArrowForwardOutlined fontSize="inherit" />}
            >
              View more
            </Button>
          </Link>
        </Typography>
      </Stack>
      <Stack minHeight={HEIGHT}>
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 'some',
            margin: inMobile ? '56px' : '64px',
          }}
        >
          {pages.map((productPages, index) => (
            <motion.div variants={item} key={`parent_${index}`}>
              <Grid container position="relative">
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
                      sx={!isExpanded ? { cursor: 'pointer' } : {}}
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
                          product &&
                          !expandedData &&
                          toggleProductView(pid, index)
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
                            bgcolor="primary.main"
                            color="primary.contrastText"
                            px={{ xs: 0.5, md: 0.5 }}
                          >
                            <IconButton
                              onClick={() => setExpanded(null)}
                              color="secondary"
                              size="medium"
                              sx={{
                                p: 0,
                                position: 'absolute',
                                right: 16,
                                zIndex: 2,
                                top: (HEIGHT / ROWS) * 2 + 8,
                              }}
                            >
                              <Close color="inherit" fontSize="inherit" />
                            </IconButton>
                            <Stack boxShadow={10}>
                              <ProductCard
                                direction="column"
                                height={(HEIGHT / ROWS) * 2}
                                {...product}
                              />
                            </Stack>
                          </Stack>
                        )}
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>
          ))}
        </motion.div>
      </Stack>
    </Stack>
  );
};
