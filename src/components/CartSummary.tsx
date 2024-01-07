import { Clear, DiscountOutlined } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, MouseEvent, useContext, useState } from 'react';

import {
  calculateCartPrice,
  formatMoney,
  generateMockArray,
  MessagesMap,
  useInMobile,
} from '@/lib';
import { useValidateCouponMutation } from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { Puller } from '.';
import { CartSummaryElement } from './CartSummaryElement';
import { Checkout } from './Checkout';

interface ICartSummaryProps {}
export const CartSummary = (_props: ICartSummaryProps) => {
  const [open, setOpen] = useState(false);
  const [couponValue, setCouponValue] = useState<string | null>(null);
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  const { state } = useContext(CommonContext);
  const { items: cartItems, updating } = state.cart;
  const inMobile = useInMobile();
  const totalAmount = calculateCartPrice(cartItems);

  const [
    handleValidateCoupon,
    {
      data: couponValidateData,
      loading: couponValidateLoading,
      error: couponValidateError,
    },
  ] = useValidateCouponMutation();
  const discountedAmount =
    couponValidateData?.validateCoupon?.discountedAmount ?? totalAmount;

  const finalAmount = couponApplied
    ? Math.round(discountedAmount / 100)
    : totalAmount;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleCouponApply =
    (clear = false, toggle = false) =>
    async (ev: MouseEvent) => {
      ev.preventDefault();
      if (!couponValue) return;
      if (clear) {
        setCouponApplied(null);
        return;
      }
      const { data } = await handleValidateCoupon({
        variables: { couponCode: couponValue },
      });
      const { isValid = false } = data?.validateCoupon ?? {};

      if (isValid) {
        setCouponApplied(couponValue);
        setCouponError(null);
        if (toggle) toggleDrawer(true)();
      }
      setCouponError(
        couponValidateError?.message ?? MessagesMap.coupon.invalid,
      );
    };

  const handleCouponChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setCouponValue(ev.target.value);
  };

  const handleCheckout = async (ev: MouseEvent) => {
    if (couponApplied !== couponValue) {
      await handleCouponApply(false, true)(ev);
    } else toggleDrawer(true)();
  };

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
          {finalAmount && (
            <Checkout amount={finalAmount} couponCode={couponApplied} />
          )}
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
              <Stack gap={1} width="100%">
                <Grid container justifyContent="center">
                  <Grid item xs={6} md={6}>
                    <Typography fontWeight={couponApplied ? 400 : 500}>
                      {couponApplied ? 'Sub Total' : 'Total'}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={6}
                    textAlign="right"
                    fontWeight={couponApplied ? 400 : 500}
                  >
                    {formatMoney(totalAmount) ?? formatMoney('0')}
                  </Grid>
                </Grid>
                {couponApplied && (
                  <>
                    <Grid container justifyContent="center">
                      <Grid item xs={6} md={6}>
                        <Typography variant="body2" color="success.main">
                          Coupon Applied
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} textAlign="right">
                        <Typography variant="body2" color="success.main">
                          {couponApplied}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item xs={6} md={6}>
                        <Typography variant="body2" color="success.main">
                          Discount
                        </Typography>
                      </Grid>
                      <Grid item xs={6} md={6} textAlign="right">
                        <Typography variant="body2" color="success.main">
                          {formatMoney(finalAmount - totalAmount, 10) ??
                            formatMoney('0')}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item xs={6} md={6}>
                        <Typography fontWeight={500}>Total</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        md={6}
                        textAlign="right"
                        fontWeight={500}
                      >
                        {formatMoney(finalAmount) ?? formatMoney('0')}
                      </Grid>
                    </Grid>
                  </>
                )}
              </Stack>
              <TextField
                helperText={
                  <Typography
                    variant="caption"
                    color={
                      // eslint-disable-next-line no-nested-ternary
                      couponApplied
                        ? 'success.main'
                        : couponError
                          ? 'error.main'
                          : 'secondary.contrastText'
                    }
                  >
                    {couponApplied
                      ? "Yay, you're getting a discount!"
                      : couponError ??
                        'Psst! - Use code "FREE" to test payments'}
                  </Typography>
                }
                onChange={handleCouponChange}
                size="small"
                label="Have a coupon?"
                placeholder="Enter coupon code..."
                variant="filled"
                error={!!couponError}
                fullWidth
                disabled={!!couponApplied}
                InputProps={{
                  endAdornment: couponApplied ? (
                    <IconButton onClick={handleCouponApply(true)}>
                      <Clear />
                    </IconButton>
                  ) : (
                    <Button
                      onClick={handleCouponApply()}
                      size="small"
                      color="inherit"
                      endIcon={
                        couponValidateLoading ? (
                          <CircularProgress size={12} />
                        ) : (
                          <DiscountOutlined color="inherit" fontSize="small" />
                        )
                      }
                      variant="text"
                    >
                      Apply
                    </Button>
                  ),
                }}
              />
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
