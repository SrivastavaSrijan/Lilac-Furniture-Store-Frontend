import {
  Cancel,
  FavoriteOutlined,
  ShareOutlined,
  ShoppingCartOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Box, Button, IconButton, Skeleton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React, { MouseEvent, useState } from 'react';

import { generateSizes } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { CloudImage } from '.';
import { ProductMeta } from './ProductMeta';

interface IProductCardProps extends IProduct {}
export const ProductCard = (props: IProductCardProps) => {
  const { image, name } = props;
  const imageURL = image?.image?.publicUrlTransformed;
  const [show, setShow] = useState(false);

  const handleCart = (ev: MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
  };
  return (
    <Stack>
      <Stack>
        <Box
          sx={{ cursor: 'pointer' }}
          onClick={() => setShow(!show)}
          position="relative"
          width="100%"
          height={300}
        >
          <Stack
            height={36}
            width="100%"
            justifyContent="center"
            alignItems="flex-end"
            position="absolute"
            zIndex={2}
          >
            <IconButton
              onClick={() => setShow(!show)}
              size="small"
              color="secondary"
            >
              {!show ? (
                <VisibilityOutlined
                  htmlColor="white"
                  sx={{ fontSize: 18, display: 'none' }}
                />
              ) : (
                <Cancel htmlColor="white" sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </Stack>
          <motion.div
            exit={{ opacity: 0, zIndex: -2 }}
            animate={show ? { opacity: 1, zIndex: 1 } : { opacity: 0 }}
            style={{
              backdropFilter: 'blur(0.5rem) brightness(50%)',
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 1,
            }}
          >
            <Stack
              height="100%"
              justifyContent="center"
              alignItems="center"
              flex={1}
              gap={{ xs: 1, md: 2 }}
              px={{ xs: 1, md: 1 }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCart}
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
        <ProductMeta {...props} />
      </Stack>
    </Stack>
  );
};
