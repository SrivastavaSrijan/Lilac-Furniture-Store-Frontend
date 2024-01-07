import { CheckRounded } from '@mui/icons-material';
import {
  alpha,
  ButtonBase,
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
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { FormEvent, useEffect, useState } from 'react';

import {
  AppConfig,
  formatMoney,
  generateSlideVariants,
  MessagesMap,
  sleep,
  useUser,
} from '@/lib';
import {
  PaymentIntentStatus,
  useAllOrders,
  useConfirmPaymentAndCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from '@/lib/graphql';
import { StripeProvider } from '@/lib/providers';

import { Countdown } from './Countdown';

interface ICheckoutProps {
  amount: number;
  couponCode: string | null;
}

const InnerCheckout = ({ amount, couponCode }: ICheckoutProps) => {
  const [errorMessage, setErrorMessage] = useState<unknown | null>(null);
  const [globalLoading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { refetch: refetchUser } = useUser();
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
  const { refetch: refetchOrders } = useAllOrders();
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
      const { data } = await createPaymentIntent({ variables: { couponCode } });
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
        const { data: orderDataResponse } = await confirmPaymentAndCreateOrder({
          variables: { paymentIntentId, couponCode },
        });
        const hasOrderCreated =
          orderDataResponse?.confirmPaymentAndCreateOrder?.client_secret;
        if (!hasOrderCreated) throw new Error(MessagesMap?.error);
        setDirection(1);
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

  useEffect(() => {
    if (orderData?.confirmPaymentAndCreateOrder) setDirection(-1);
  }, [orderData]);

  const color = 'primary';
  return (
    <Stack px={{ xs: 1, md: 2 }} flex={1}>
      <Stack gap={{ xs: 0.875, md: 1 }} py={{ xs: 2, md: 2 }} px={1}>
        <Typography variant="subtitle1" fontWeight={500}>
          Pay for your order
        </Typography>
      </Stack>

      <Stack
        justifyContent="space-between"
        component="form"
        noValidate
        onSubmit={handleSubmit}
        position="relative"
        flex={1}
      >
        <AnimatePresence mode="popLayout">
          {processing && (
            <Stack
              sx={(theme) => ({
                top: 0,
                justifyContent: 'center',
                alignItems: 'center',
                left: 0,
                height: '100%',
                width: '100%',
                bgcolor: 'secondary.main',
                position: 'absolute',
                color: 'secondary.contrastText',
                zIndex: theme.zIndex.drawer + 1,
              })}
            >
              <motion.div
                key={loading ? 1 : -1}
                variants={generateSlideVariants('x')}
                custom={direction}
                initial="initial"
                animate="in"
                exit="out"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {loading && (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    gap={{ xs: 2, md: 3 }}
                  >
                    <CircularProgress color="inherit" size={50} />
                    <Typography variant="body1">
                      Checking the status of your payment...
                    </Typography>
                  </Stack>
                )}
                {!!orderData?.confirmPaymentAndCreateOrder && (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    gap={{ xs: 2, md: 3 }}
                  >
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
                      Order ID -{' '}
                      {orderData?.confirmPaymentAndCreateOrder?.order?.id}
                    </Typography>
                    {timerTimestamp && (
                      <Countdown
                        expiryTimestamp={timerTimestamp}
                        onExpire={() => {
                          router
                            .push({
                              pathname: AppConfig.pages.order.path.replace(
                                '[id].tsx',
                                orderData?.confirmPaymentAndCreateOrder?.order
                                  ?.id ?? '404',
                              ),
                            })
                            .then(async () => {
                              refetchOrders();
                              refetchUser();
                            });
                        }}
                        text="Redirecting you in $SECONDS seconds..."
                      />
                    )}
                  </Stack>
                )}
              </motion.div>
            </Stack>
          )}
        </AnimatePresence>
        <Stack
          gap={{ xs: 2, md: 3 }}
          px={1}
          sx={{ overflowY: 'scroll' }}
          height="100%"
          maxHeight="calc(75vh - 128px)"
        >
          <AddressElement options={{ mode: 'shipping' }} />
          <PaymentElement />
        </Stack>
        <ButtonBase type="submit" sx={{ my: { xs: 1, md: 2 } }}>
          <Stack
            mx={{ xs: -2, md: -3 }}
            {...(submitting
              ? {
                  bgcolor: (theme) => alpha(theme.palette.common.black, 0.12),
                  color: (theme) => alpha(theme.palette.common.black, 0.56),
                }
              : { bgcolor: `${color}.main`, color: `${color}.contrastText` })}
            py={{ xs: 1, md: 1 }}
            direction="row"
            position="sticky"
            bottom={0}
            gap={2}
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            {submitting && <CircularProgress size={16} color="inherit" />}
            <Typography variant="subtitle2">
              Pay {formatMoney(amount)}
            </Typography>
          </Stack>
        </ButtonBase>
      </Stack>
    </Stack>
  );
};

export const Checkout = (props: ICheckoutProps) => (
  <StripeProvider amount={props.amount}>
    <InnerCheckout {...props} />
  </StripeProvider>
);
