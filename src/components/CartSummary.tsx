import {
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';

import {
  calculateCartPrice,
  formatMoney,
  generateMockArray,
  generateSizes,
  useInMobile,
} from '@/lib';
import { CommonContext } from '@/lib/providers';

import { CloudImage, Puller } from '.';
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
            maxHeight: { xs: '75%', md: '75%' },
            mx: 'auto',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        }}
      >
        <Stack gap={{ xs: 3, md: 5 }}>
          <Puller />
          {totalAmount && <Checkout amount={totalAmount} />}
        </Stack>
      </SwipeableDrawer>
      <Container maxWidth="lg" disableGutters={inMobile}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          <Grid item xs={12} md={8}>
            <Stack gap={{ xs: 2, md: 3 }}>
              <Stack
                bgcolor="primary.main"
                color="primary.contrastText"
                py={{ xs: 1.75, md: 2 }}
                px={{ xs: 2, md: 3 }}
              >
                <Grid
                  container
                  spacing={{ xs: 3, md: 5 }}
                  justifyContent={{ xs: 'flex-start', md: 'center' }}
                  alignItems={{ xs: 'flex-start', md: 'center' }}
                  textAlign={{ xs: 'left', md: 'center' }}
                >
                  <Grid
                    item
                    xs={0}
                    md={3}
                    display={{ xs: 'none', md: 'initial' }}
                  ></Grid>
                  <Grid item xs={3} md={2}>
                    <Typography fontWeight={500}>Product</Typography>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <Typography fontWeight={500}>Price</Typography>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <Typography fontWeight={500}>Quantity</Typography>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <Typography fontWeight={500}>Sub total</Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Stack
                py={{ xs: 1.75, md: 2 }}
                px={{ xs: 2, md: 3 }}
                gap={{ xs: 2, md: 3 }}
              >
                {updating
                  ? generateMockArray(1).map((_, index) => (
                      <Grid
                        container
                        spacing={{ xs: 3, md: 5 }}
                        key={index}
                        justifyContent={{ xs: 'flex-start', md: 'center' }}
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                      >
                        <Grid
                          item
                          xs={0}
                          md={3}
                          display={{ xs: 'none', md: 'initial' }}
                        >
                          <Skeleton variant="rectangular" height={96} />
                        </Grid>
                        <Grid item xs={12} md={9}>
                          <Skeleton variant="rectangular" />
                        </Grid>
                      </Grid>
                    ))
                  : cartItems.map(({ id, quantity, variant }) => {
                      const { product, price } = variant;
                      const { image } = product ?? {};
                      const imageUrl =
                        image?.image?.publicUrlTransformed ?? null;

                      return (
                        <Grid
                          container
                          spacing={{ xs: 3, md: 5 }}
                          key={id}
                          justifyContent={{ xs: 'flex-start', md: 'center' }}
                          alignItems={{ xs: 'flex-start', md: 'center' }}
                          textAlign={{ xs: 'left', md: 'center' }}
                        >
                          <Grid
                            item
                            xs={0}
                            md={3}
                            display={{ xs: 'none', md: 'initial' }}
                          >
                            {imageUrl && (
                              <Stack
                                height={{ xs: 0, md: 96 }}
                                width="100%"
                                position="relative"
                              >
                                <CloudImage
                                  src={imageUrl}
                                  fill
                                  alt={product?.name}
                                  sizes={generateSizes({ xs: 3, md: 3 })}
                                  style={{
                                    aspectRatio: '9 / 16',
                                    objectFit: 'cover',
                                  }}
                                />
                              </Stack>
                            )}
                          </Grid>
                          <Grid item xs={3} md={2}>
                            <Typography>{product?.name}</Typography>
                          </Grid>
                          <Grid item xs={3} md={2}>
                            <Typography>{formatMoney(price)}</Typography>
                          </Grid>
                          <Grid item xs={3} md={2}>
                            <Typography>{quantity}</Typography>
                          </Grid>
                          <Grid item xs={3} md={2}>
                            {formatMoney(price * quantity)}
                          </Grid>
                        </Grid>
                      );
                    })}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              gap={{ xs: 2, md: 3 }}
              bgcolor="primary.main"
              color="primary.contrastText"
              py={{ xs: 1.75, md: 2 }}
              px={{ xs: 2, md: 3 }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h4">Summary</Typography>
              <Grid container justifyContent="center">
                <Grid item xs={6} md={6}>
                  <Typography>Total</Typography>
                </Grid>
                <Grid item xs={6} md={6} textAlign="right">
                  {formatMoney(calculateCartPrice(cartItems))}
                </Grid>
              </Grid>
              <Stack direction="row" width="100%">
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  fullWidth
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
