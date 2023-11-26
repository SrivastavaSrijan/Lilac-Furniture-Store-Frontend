import { Cancel, VisibilityOutlined } from '@mui/icons-material';
import { Box, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { formatMoney, generateSizes } from '@/lib';
import { IPaginatedProduct } from '@/lib/graphql';

import { CloudImage } from '.';
import { CartHandleButtons } from './CartHandleButtons';
import { ProductInterestButtons } from './ProductInterestButtons';

const overlayVariants = {
  initial: { display: 'none', opacity: 0, zIndex: -2 },
  exit: { opacity: 0 },
  animate: { opacity: 1, zIndex: 1, display: 'flex' },
};

interface IProductCardProps extends IPaginatedProduct {
  direction?: 'row' | 'column';
  description?: string | null;
  height?: number;
}
export const ProductCard = ({
  direction,
  height = 300,
  ...props
}: IProductCardProps) => {
  const [show, setShow] = useState(false);
  const { image, name, type, company, style, variant, description } = props;
  const { id: variantId, price } = variant ?? {};
  const imageURL = image?.image?.publicUrlTransformed;

  return (
    <Stack direction={{ xs: 'column', md: direction || 'column' }}>
      <Stack
        flex={{
          xs: 'initial',
          md: direction === 'row' ? '0 0 40%' : 'initial',
        }}
        sx={{ cursor: 'pointer' }}
        onClick={() => setShow(!show)}
        position="relative"
        width="100%"
        height={height}
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
                <ProductInterestButtons
                  name={name}
                  formattedName={`${style} ${type} "${name}"`}
                />
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
          <Box height="100%">
            <Skeleton variant="rectangular" height="100%" />
          </Box>
        )}
      </Stack>
      <Stack width={{ xs: '100%', md: direction === 'row' ? '60%' : '100%' }}>
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
          <Stack
            pt={direction === 'row' ? { xs: 2, md: 3 } : { xs: 0.5, md: 1 }}
            height="100%"
            pb={{ xs: 1.5, md: 2 }}
            px={{ xs: 1, md: 1.5 }}
            bgcolor="primary.light"
            justifyContent="space-between"
            gap={{ xs: 1.5, md: 2 }}
          >
            <Stack>
              <Typography variant="body1" fontWeight={600}>
                {name}
              </Typography>
              <Typography fontWeight={300} variant="caption">
                by {company}
              </Typography>
              <Typography fontWeight={300} variant="body2">
                {style} {type}
              </Typography>
              <Typography variant="body2">{formatMoney(price)}</Typography>

              {description && (
                <Typography
                  variant="caption"
                  className="clamp-5"
                  mt={{ xs: 1, md: 1 }}
                >
                  {description}
                </Typography>
              )}
              {direction === 'row' && (
                <Stack my={{ xs: 2, md: 2 }}>
                  {variantId && (
                    <CartHandleButtons
                      direction={direction}
                      color="colored"
                      id={variantId}
                    />
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
