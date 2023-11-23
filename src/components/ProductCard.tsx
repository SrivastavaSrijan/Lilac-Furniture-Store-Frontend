import {
  Cancel,
  FavoriteOutlined,
  ShareOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Box, IconButton, Skeleton, Stack, StackProps } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { kebabCase } from 'lodash';
import Link from 'next/link';
import React, { useState } from 'react';

import { AppConfig, generateSizes } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { CloudImage } from '.';
import { CartHandleButtons } from './CartHandleButtons';
import { ProductMeta } from './ProductMeta';

const overlayVariants = {
  initial: { display: 'none', opacity: 0, zIndex: -2 },
  exit: { opacity: 0 },
  animate: { opacity: 1, zIndex: 1, display: 'flex' },
};
const { path } = AppConfig.pages.products;

interface IProductCardProps extends IProduct {
  direction?: StackProps['direction'];
}
export const ProductCard = ({ direction, ...props }: IProductCardProps) => {
  const [show, setShow] = useState(false);
  const { image, name, variant } = props;
  const { id: variantId } = variant ?? {};
  const imageURL = image?.image?.publicUrlTransformed;

  return (
    <Stack direction={direction}>
      <Stack
        flex={direction && '0 0 50%'}
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
            color="primary"
          >
            {!show ? (
              <VisibilityOutlined
                htmlColor="white"
                sx={{ fontSize: 18, display: { xs: 'flex', md: 'none' } }}
              />
            ) : (
              <Cancel htmlColor="white" sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Stack>
        <AnimatePresence>
          {show && (
            <motion.div
              initial="initial"
              exit="exit"
              animate="animate"
              variants={overlayVariants}
              style={{
                backdropFilter: 'blur(0.5rem) brightness(50%)',
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
            >
              <Stack
                height="100%"
                justifyContent="center"
                alignItems="center"
                flex={1}
                px={{ xs: 1, md: 1 }}
                gap={{ xs: 3, md: 3 }}
              >
                <Stack direction="row" gap={1}>
                  <IconButton size="small">
                    <FavoriteOutlined color="inherit" htmlColor="white" />
                  </IconButton>
                  <IconButton size="small">
                    <ShareOutlined color="inherit" htmlColor="white" />
                  </IconButton>
                  <Link
                    href={path}
                    as={path.replace('[id].tsx', kebabCase(name || '...'))}
                    style={{ height: '100%' }}
                  >
                    <IconButton size="small">
                      <VisibilityOutlined color="inherit" htmlColor="white" />
                    </IconButton>
                  </Link>
                </Stack>
                {variantId && <CartHandleButtons id={variantId} />}
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
        {imageURL && name ? (
          <CloudImage
            src={imageURL}
            fill
            alt={name}
            sizes={generateSizes({ xs: 6, md: 3 })}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <Skeleton variant="rectangular">
            <Box position="relative" width={400} height={300} />
          </Skeleton>
        )}
      </Stack>
      <Stack>
        {!name ? (
          <Stack
            pt={{ xs: 0.5, md: 1 }}
            height="100%"
            px={{ xs: 1, md: 1.5 }}
            pb={{ xs: 1.5, md: 2 }}
            bgcolor="primary.light"
            justifyContent="space-between"
            gap={{ xs: 0.5, md: 1 }}
          >
            <Stack gap={0.25}>
              <Skeleton width="10ch" />
              <Skeleton width="8ch" />
              <Skeleton width="12ch" />
              <Skeleton width="10ch" />
            </Stack>
          </Stack>
        ) : (
          <ProductMeta {...props} />
        )}
      </Stack>
    </Stack>
  );
};
