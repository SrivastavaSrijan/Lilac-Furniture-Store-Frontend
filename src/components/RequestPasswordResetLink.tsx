import { yupResolver } from '@hookform/resolvers/yup';
import { EmailOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object } from 'yup';

import { ApolloErrorHandler, MessagesMap, stringRequired } from '@/lib';
import {
  GetUserDocument,
  useSendUserPasswordResetLinkMutation,
} from '@/lib/graphql';

import { AuthHeader, AuthState, IAuthChildProps } from '.';
import { Countdown } from './Countdown';
import { Text } from './Text';

enum RequestPasswordResetLinkState {
  Success,
  Failure,
  Error,
  Init,
}
const RequestPasswordResetLinkSchema = object({
  email: stringRequired().email(MessagesMap.invalid),
});
interface IRequestPasswordResetLinkForm {
  email: string;
}
export const RequestPasswordResetLink = ({
  setCurrentState,
}: IAuthChildProps) => {
  const [state, setState] = useState<RequestPasswordResetLinkState>(
    RequestPasswordResetLinkState.Init,
  );
  const [timerTimestamp, setTimerTimestamp] = useState<Date | null>(null);
  const [handleRequestPasswordResetLink, { data, loading, error }] =
    useSendUserPasswordResetLinkMutation({
      refetchQueries: [
        {
          query: GetUserDocument,
        },
      ],
    });
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRequestPasswordResetLinkForm>({
    values: { email: '' },
    resolver: yupResolver(RequestPasswordResetLinkSchema),
  });
  const onSubmit: SubmitHandler<IRequestPasswordResetLinkForm> = async (
    formValues,
  ) => {
    if (!formValues) return;
    await handleRequestPasswordResetLink({ variables: formValues });
  };

  useEffect(() => {
    if (loading) return;
    try {
      if (data && !error) {
        const result = data?.sendUserPasswordResetLink ?? {};
        if (result) {
          setState(RequestPasswordResetLinkState.Success);
          const time = new Date();
          time.setSeconds(time.getSeconds() + 10);
          setTimerTimestamp(time); // 10 minutes timer
          enqueueSnackbar(MessagesMap.user.reset.requestedSuccess, {
            variant: 'success',
          });
        } else if (!result) {
          setState(RequestPasswordResetLinkState.Failure);
          enqueueSnackbar(MessagesMap.user.reset.requestedFailure, {
            variant: 'error',
          });
        }
      }
    } catch (thrownError) {
      setState(RequestPasswordResetLinkState.Error);
      const formattedError = new ApolloErrorHandler(thrownError)?.get();
      if (formattedError)
        enqueueSnackbar(formattedError?.message, { variant: 'error' });
    }
  }, [data, loading, error, setCurrentState, setError, enqueueSnackbar]);

  return (
    <Stack
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 1 }}
      gap={{ xs: 2, md: 3 }}
      height="100%"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthHeader
        title="Reset Password"
        subtitle="Lorem ipsum dolor sit amet, esse eiusmod ea incididunt id occaecat enim elit ipsum do commodo Lorem Lorem anim ad excepteur."
      />
      <Stack
        gap={{ xs: 1, md: 2 }}
        sx={{ overflowY: 'auto' }}
        pt={2}
        mb={{ xs: '128px', md: '156px' }}
      >
        <Text<IRequestPasswordResetLinkForm>
          variant="filled"
          InputProps={{ endAdornment: <EmailOutlined color="primary" /> }}
          label="Email"
          control={control}
          autoComplete="username email"
          name="email"
          errors={errors}
        />

        <Typography variant="caption" color="error.main" mb={2}>
          {errors.root?.message}
        </Typography>
      </Stack>
      <Box flexGrow={1} />
      <Stack
        py={{ xs: 2, md: 3 }}
        gap={{ xs: 2, md: 2 }}
        position="sticky"
        bottom={0}
        width="100%"
        bgcolor="white"
        zIndex={2}
      >
        <Button
          disabled={state === RequestPasswordResetLinkState.Success}
          type="submit"
          variant="contained"
          color={error ? 'error' : 'primary'}
          endIcon={
            loading ? <CircularProgress color="inherit" size={14} /> : undefined
          }
        >
          Reset Password
        </Button>
        {timerTimestamp && (
          <Countdown
            expiryTimestamp={timerTimestamp}
            onExpire={() => {
              setState(RequestPasswordResetLinkState.Init);
              setTimerTimestamp(null);
            }}
            text="Request again in $SECONDS seconds..."
          />
        )}
        <Typography>
          Already have an account?{' '}
          <Typography
            component="span"
            fontWeight={600}
            onClick={() => setCurrentState(AuthState.SIGN_IN)}
            sx={{ cursor: 'pointer' }}
          >
            Login
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
