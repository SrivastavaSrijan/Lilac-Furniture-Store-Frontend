import { Button, Divider, Skeleton, Stack, Typography } from '@mui/material';
import { useContext } from 'react';

import { AppConfig, calculateCartPrice, formatMoney } from '@/lib';
import { CommonContext } from '@/lib/providers';

import { CartPopoverElement } from './CartPopoverElement';

export const CartPopover = () => {
  const { state } = useContext(CommonContext);
  const { items: cartItems, updating } = state.cart;

  return (
    <Stack minWidth={{ xs: 343, md: 343 }} position="relative">
      <Stack
        maxHeight={{ xs: 200, md: 256 }}
        gap={{ xs: 2, md: 2 }}
        sx={{ overflowY: 'auto' }}
        px={{ xs: 3, md: 5 }}
      >
        {!updating && !cartItems.length && (
          <Typography py={2} variant="caption">
            Your cart is empty
          </Typography>
        )}
        {cartItems.map((cartItem) => (
          <CartPopoverElement key={cartItem.id} {...cartItem} />
        ))}
      </Stack>
      {!!cartItems.length && (
        <Stack
          position="sticky"
          bottom={0}
          bgcolor="white"
          py={{ xs: 2, md: 3 }}
          gap={{ xs: 2, md: 2 }}
          px={{ xs: 3, md: 5 }}
        >
          <Divider variant="fullWidth" flexItem />
          <Stack width="100%" direction="row" justifyContent="space-between">
            {updating ? (
              <Skeleton width="9ch" />
            ) : (
              <Typography variant="body2">Sub total</Typography>
            )}
            {updating ? (
              <Skeleton width="15ch" />
            ) : (
              <Typography variant="body2" fontWeight={600}>
                {formatMoney(calculateCartPrice(cartItems))}
              </Typography>
            )}
          </Stack>
          <Stack>
            <Button
              disabled={updating}
              size="large"
              variant="contained"
              color="primary"
              href={AppConfig.pages.checkout.path}
            >
              Checkout
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
