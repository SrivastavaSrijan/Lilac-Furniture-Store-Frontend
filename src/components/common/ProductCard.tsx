import {
  Cancel,
  FavoriteOutlined,
  ShareOutlined,
  ShoppingCartOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Skeleton,
  Stack,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnackbar } from 'notistack';
import React, { MouseEvent, useContext, useEffect, useState } from 'react';

import { ApolloErrorHandler, generateSizes } from '@/lib';
import { IProduct, useAddToCartMutation } from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { CloudImage } from '.';
import { ProductMeta } from './ProductMeta';

const overlayVariants = {
  initial: { display: 'none', opacity: 0, zIndex: -2 },
  exit: { opacity: 0 },
  animate: { opacity: 1, zIndex: 1, display: 'flex' },
};

interface IProductCardProps extends IProduct {}
export const ProductCard = (props: IProductCardProps) => {
  const [show, setShow] = useState(false);
  const [handleAddToCart, { loading, error }] = useAddToCartMutation();
  const { image, name } = props;
  const imageURL = image?.image?.publicUrlTransformed;

  const { state, dispatch } = useContext(CommonContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleCart = (id: string) => async (ev: MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    const { element: cartEl, update: updateCart } = state.cart;
    const { data } = await handleAddToCart({
      variables: { id },
    });
    if (!data) return;
    if (updateCart) await updateCart();
    if (cartEl && data) dispatch({ type: 'popover', payload: cartEl });
    setShow(false);
  };

  useEffect(() => {
    if (error) {
      const message = new ApolloErrorHandler(error).get()?.message;
      if (message) enqueueSnackbar({ message, variant: 'error' });
    }
  }, [enqueueSnackbar, error]);

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
                  gap={{ xs: 1, md: 2 }}
                  px={{ xs: 1, md: 1 }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCart(props.id)}
                    startIcon={
                      loading ? (
                        <CircularProgress color="inherit" size={14} />
                      ) : (
                        <ShoppingCartOutlined />
                      )
                    }
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
        </Box>
        <ProductMeta {...props} />
      </Stack>
    </Stack>
  );
};
