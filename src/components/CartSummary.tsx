import {
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useContext } from 'react';

import {
  calculateCartPrice,
  formatMoney,
  generateMockArray,
  generateSizes,
} from '@/lib';
import { CommonContext } from '@/lib/providers';

import { CloudImage } from '.';

interface ICartSummaryProps {}
export const CartSummary = (_props: ICartSummaryProps) => {
  const { state } = useContext(CommonContext);
  const { items: cartItems, updating } = state.cart;
  const handleCheckout = () => {};
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Stack gap={{ xs: 2, md: 3 }}>
            <Stack
              bgcolor="primary.light"
              py={{ xs: 1.75, md: 2 }}
              px={{ xs: 2, md: 3 }}
            >
              <Grid
                container
                spacing={{ xs: 3, md: 5 }}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
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
                <Grid item xs md={2}>
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
                      justifyContent="center"
                      alignItems="center"
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
                    const imageUrl = image?.image?.publicUrlTransformed ?? null;

                    return (
                      <Grid
                        container
                        spacing={{ xs: 3, md: 5 }}
                        key={id}
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
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
                        <Grid item xs md={2}>
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
            bgcolor="primary.light"
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
  );
};
