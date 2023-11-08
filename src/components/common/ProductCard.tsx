import {
  FavoriteOutlined,
  ShareOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { kebabCase } from 'lodash';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React from 'react';

import { AppConfig } from '@/constants';
import { formatMoney, generateSizes } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { CloudImage } from '.';

// Define the variants for the animation of the overlay
const overlayVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};
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
          <motion.div
            initial={{ opacity: 0 }}
            animate="animate"
            exit="exit"
            whileHover={{ opacity: 1 }}
            style={{
              backdropFilter: 'blur(0.5rem) brightness(50%)',
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 2,
            }}
          >
            <Stack
              height="100%"
              justifyContent="center"
              alignItems="center"
              flex={1}
              gap={{ xs: 1, md: 2 }}
            >
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartOutlined />}
              >
                Add to cart
              </Button>
              <Stack direction="row" gap={1}>
                <IconButton size="small">
                  <FavoriteOutlined color="inherit" htmlColor="white" />
                </IconButton>
                <IconButton size="small">
                  <ShareOutlined color="inherit" htmlColor="white" />
                </IconButton>
              </Stack>
            </Stack>
          </motion.div>
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
            {name || <Skeleton width="10ch" />}
          </Typography>
          <Typography fontWeight={300} variant="caption">
            {meta ? `by ${meta?.company}` : <Skeleton width="8ch" />}
          </Typography>
          <Typography fontWeight={300} variant="body2">
            {meta ? (
              `${meta?.type},${meta?.material}`
            ) : (
              <>
                <Skeleton width="6ch" /> <Skeleton width="8ch" />
              </>
            )}
          </Typography>

          <Typography variant="body2">{formatMoney(price)}</Typography>
        </Stack>
      </Stack>
    </Link>
  );
};
