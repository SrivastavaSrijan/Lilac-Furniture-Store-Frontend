import {
  Button,
  Container,
  Grid,
  Stack,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';

import {
  calculateCartPrice,
  formatMoney,
  generateMockArray,
  useInMobile,
} from '@/lib';
import { CommonContext } from '@/lib/providers';

import { Puller } from '.';
import { CartSummaryElement } from './CartSummaryElement';
import { Checkout } from './Checkout';

interface ICartSummaryProps {}
export const CartSummary = (_props: ICartSummaryProps) => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(CommonContext);
  const { items: cartItems, updating } = state.cart;
  const inMobile = useInMobile();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleCheckout = () => {
    toggleDrawer(true)();
  };
  const totalAmount = calculateCartPrice(cartItems);

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            maxWidth: { xs: '100%', md: '50%' },
            height: { xs: '75vh', md: '75vh' },
            overflow: 'hidden',
            mx: 'auto',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        }}
      >
        <Stack gap={{ xs: 3, md: 5 }} flex={1}>
          <Puller />
          {totalAmount && <Checkout amount={totalAmount} />}
        </Stack>
      </SwipeableDrawer>
      <Container maxWidth="lg" disableGutters={inMobile}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid item xs={12} md={8}>
            <Stack
              py={{ xs: 1, md: 2 }}
              px={{ xs: 1, md: 3 }}
              gap={{ xs: 3, md: 5 }}
              bgcolor="primary.light"
            >
              {!updating && !cartItems.length && (
                <Typography py={2} variant="caption">
                  Your cart is empty
                </Typography>
              )}
              {updating
                ? generateMockArray(3).map((_, index) => (
                    <CartSummaryElement
                      divider={index !== 2}
                      key={index}
                      id={index?.toString()}
                    />
                  ))
                : cartItems.map((cartItem, index) => (
                    <CartSummaryElement
                      divider={index !== cartItems.length - 1}
                      key={cartItem?.id}
                      {...cartItem}
                    />
                  ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              gap={{ xs: 2, md: 3 }}
              bgcolor="primary.light"
              py={{ xs: 1.75, md: 2 }}
              px={{ xs: 2, md: 3 }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5">Summary</Typography>
              <Grid container justifyContent="center">
                <Grid item xs={6} md={6}>
                  <Typography>Total</Typography>
                </Grid>
                <Grid item xs={6} md={6} textAlign="right">
                  {formatMoney(calculateCartPrice(cartItems)) ??
                    formatMoney('0')}
                </Grid>
              </Grid>
              <Stack direction="row" width="100%">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  fullWidth
                  disabled={updating || !cartItems.length}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
