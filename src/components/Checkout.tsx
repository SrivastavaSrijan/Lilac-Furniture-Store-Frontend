import {
  Backdrop,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useSnackbar } from 'notistack';
import { FormEvent, useEffect, useState } from 'react';

import { formatMoney, MessagesMap } from '@/lib';
import { useCreatePaymentIntentMutation } from '@/lib/graphql';
import { StripeProvider } from '@/lib/providers';

interface ICheckoutProps {
  amount: number;
}

const InnerCheckout = ({ amount }: ICheckoutProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();
  const [createPaymentIntent, { loading: intentLoading, error: intentError }] =
    useCreatePaymentIntentMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) throw new Error(MessagesMap.error);
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();

    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message ?? MessagesMap.error);
      return;
    }
    const res = await createPaymentIntent();
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      clientSecret: res?.data?.createPaymentIntent.client_secret,
      confirmParams: {
        return_url: `${document.location.protocol}//${document.location.hostname}/thank-you`,
      },
    });
    if (error) {
      // Show error to your customer
      setErrorMessage(error.message ?? MessagesMap.error);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      setLoading(false);
      enqueueSnackbar({ message: MessagesMap.success, variant: 'success' });
    }
  };

  useEffect(() => {
    if (errorMessage || !!intentError?.message) {
      setLoading(false);
      enqueueSnackbar({ message: errorMessage, variant: 'error' });
    }
  }, [enqueueSnackbar, errorMessage, intentError]);

  return (
    <>
      <Backdrop
        open={loading || intentLoading}
        sx={(theme) => ({
          color: 'common.white',
          zIndex: theme.zIndex.drawer + 1,
        })}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack pt={{ xs: 2, md: 3 }} px={{ xs: 2, md: 3 }} position="relative">
        <Stack component="form" noValidate onSubmit={handleSubmit}>
          <Stack gap={{ xs: 0.875, md: 1 }} py={{ xs: 1, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={500}>
              Pay for your order
            </Typography>
          </Stack>
          <Stack justifyContent="space-between">
            <Stack py={{ xs: 1, md: 2 }} gap={{ xs: 2, md: 3 }}>
              <AddressElement options={{ mode: 'shipping' }} />
              <PaymentElement />
            </Stack>
            <Stack
              py={{ xs: 1, md: 2 }}
              position="sticky"
              bottom={0}
              bgcolor="white"
              direction="row"
              gap={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ width: { xs: 256, md: 343 } }}
              >
                Pay {formatMoney(amount)}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export const Checkout = (props: ICheckoutProps) => (
  <StripeProvider amount={props.amount}>
    <InnerCheckout {...props} />
  </StripeProvider>
);
