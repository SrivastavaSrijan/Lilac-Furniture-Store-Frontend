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
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { FormEvent, useEffect, useState } from 'react';

import { AppConfig, formatMoney, MessagesMap } from '@/lib';
import {
  PaymentIntentStatus,
  useConfirmPaymentAndCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from '@/lib/graphql';
import { StripeProvider } from '@/lib/providers';

interface ICheckoutProps {
  amount: number;
}

const InnerCheckout = ({ amount }: ICheckoutProps) => {
  const [errorMessage, setErrorMessage] = useState<unknown | null>(null);
  const [globalLoading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [createPaymentIntent, { loading: intentLoading, error: intentError }] =
    useCreatePaymentIntentMutation();
  const [
    confirmPaymentAndCreateOrder,
    { loading: orderLoading, error: orderError },
  ] = useConfirmPaymentAndCreateOrderMutation();
  const loading = globalLoading || intentLoading || orderLoading;
  const error =
    (errorMessage as string) || !!intentError?.message || orderError?.message;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // Trigger form validation and wallet collection
    try {
      if (!stripe || !elements) throw new Error(MessagesMap.error);
      const { error: submitError } = await elements.submit();
      if (submitError)
        throw new Error(submitError?.message ?? MessagesMap.error);
      const { data } = await createPaymentIntent();
      if (!data || !data?.createPaymentIntent)
        throw new Error(MessagesMap.error);
      const {
        createPaymentIntent: { client_secret: clientSecret, status },
      } = data;
      if (!clientSecret || status !== PaymentIntentStatus.Succeeded)
        throw new Error(MessagesMap.error);
      const { paymentIntent, error: paymentIntentError } =
        await stripe.confirmPayment({
          elements,
          redirect: 'if_required',
          clientSecret,
          confirmParams: {
            return_url: `${document.location.protocol}//${document.location.hostname}/thank-you`,
          },
        });
      if (!paymentIntent) throw new Error(paymentIntentError.message);
      const { id: paymentIntentId, status: intentStatus } = paymentIntent;
      if (intentStatus === 'succeeded' && paymentIntent) {
        setLoading(false);
        confirmPaymentAndCreateOrder({
          variables: { paymentIntentId },
        });
        router.push(AppConfig.pages.orders.path);
        enqueueSnackbar({ message: MessagesMap.success, variant: 'success' });
      }
    } catch (caughtError) {
      setErrorMessage(caughtError);
    }
  };

  useEffect(() => {
    if (error) {
      setLoading(false);
      enqueueSnackbar({
        message: error,
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <>
      <Backdrop
        open={loading}
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
