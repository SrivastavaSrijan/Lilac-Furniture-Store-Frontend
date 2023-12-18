import { CheckRounded } from '@mui/icons-material';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { FormEvent, useEffect, useState } from 'react';

import { AppConfig, formatMoney, MessagesMap, sleep } from '@/lib';
import {
  PaymentIntentStatus,
  useConfirmPaymentAndCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from '@/lib/graphql';
import { StripeProvider } from '@/lib/providers';

import { Countdown } from './Countdown';

interface ICheckoutProps {
  amount: number;
}

const InnerCheckout = ({ amount }: ICheckoutProps) => {
  const [errorMessage, setErrorMessage] = useState<unknown | null>(null);
  const [globalLoading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [timerTimestamp, setTimerTimestamp] = useState<Date | null>(null);
  const [createPaymentIntent, { loading: intentLoading, error: intentError }] =
    useCreatePaymentIntentMutation();
  const [
    confirmPaymentAndCreateOrder,
    { data: orderData, loading: orderLoading, error: orderError },
  ] = useConfirmPaymentAndCreateOrderMutation();
  const loading = globalLoading || intentLoading || orderLoading;
  const error =
    (errorMessage as string) || !!intentError?.message || orderError?.message;
  const processing = loading || !!orderData?.confirmPaymentAndCreateOrder;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    await sleep(500);
    // Trigger form validation and wallet collection
    try {
      if (!stripe || !elements) throw new Error(MessagesMap.error);
      const { error: submitError } = await elements.submit();
      if (submitError)
        throw new Error(submitError?.message ?? MessagesMap.error);
      const { data } = await createPaymentIntent();
      if (!data || !data?.createPaymentIntent)
        throw new Error(MessagesMap.error);
      setSubmitting(true);

      setLoading(true);
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
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        setTimerTimestamp(time); // 10 sec timer
      }
    } catch (caughtError) {
      setErrorMessage((caughtError as any)?.message);
    }
  };

  useEffect(() => {
    if (error) {
      setLoading(false);
      setSubmitting(false);
      enqueueSnackbar({
        message: error,
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <Stack pt={{ xs: 2, md: 3 }} px={{ xs: 2, md: 3 }} position="relative">
      {processing && (
        <Stack
          sx={(theme) => ({
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            left: 0,
            height: '100%',
            width: '100%',
            gap: 3,
            bgcolor: 'secondary.main',
            position: 'absolute',
            color: 'secondary.contrastText',
            zIndex: theme.zIndex.drawer + 1,
          })}
        >
          {loading && (
            <>
              <CircularProgress color="inherit" size={50} />
              <Typography variant="body1">
                Checking the status of your payment...
              </Typography>{' '}
            </>
          )}
          {!!orderData?.confirmPaymentAndCreateOrder && (
            <>
              <Stack
                direction="row"
                fontSize="large"
                gap="1ch"
                color="success.main"
                alignItems="center"
              >
                <CheckRounded
                  fontSize="large"
                  sx={{ border: 2, borderRadius: '50%' }}
                />
                <Typography variant="subtitle1" fontWeight={700}>
                  Payment of {formatMoney(amount)} received!
                </Typography>
              </Stack>
              <Typography variant="subtitle2" color="gray">
                Order ID - {orderData?.confirmPaymentAndCreateOrder?.order?.id}
              </Typography>
              {timerTimestamp && (
                <Countdown
                  expiryTimestamp={timerTimestamp}
                  onExpire={() => {
                    setTimerTimestamp(null);
                    router.push(AppConfig.pages.orders.path);
                  }}
                  text="Redirecting you in $SECONDS seconds..."
                />
              )}
            </>
          )}
        </Stack>
      )}

      <Stack
        component="form"
        noValidate
        height={processing ? 300 : '100%'}
        onSubmit={handleSubmit}
        overflow="auto"
      >
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
              startIcon={submitting && <CircularProgress size={14} />}
              disabled={submitting}
              type="submit"
              sx={{ width: { xs: 256, md: 343 } }}
            >
              Pay {formatMoney(amount)}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Checkout = (props: ICheckoutProps) => (
  <StripeProvider amount={props.amount}>
    <InnerCheckout {...props} />
  </StripeProvider>
);
