import { yupResolver } from '@hookform/resolvers/yup';
import {
  EmailOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { omit } from 'lodash';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import { ApolloErrorHandler, MessagesMap, stringRequired } from '@/lib';
import {
  PasswordResetRedemptionErrorCode,
  useRedeemUserPasswordResetTokenMutation,
} from '@/lib/graphql';

import { AuthHeader, AuthState, IAuthChildProps } from '.';
import { Text } from './Text';

YupPassword(Yup);

enum RedeemResetPasswordState {
  Success,
  Failure,
  Error,
  Init,
}
const RedeemResetPasswordSchema = Yup.object({
  email: stringRequired().email(),
  password: stringRequired().when('$condition', () =>
    process.env.NODE_ENV === 'development'
      ? stringRequired()
      : stringRequired()
          .min(
            8,
            'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and a special character',
          )
          .minLowercase(1, 'Password must contain at least 1 lower case letter')
          .minUppercase(1, 'Password must contain at least 1 upper case letter')
          .minNumbers(1, 'Password must contain at least 1 number')
          .minSymbols(1, 'Password must contain at least 1 special character'),
  ),
  confirmPassword: stringRequired().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});
interface IRedeemResetPasswordForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export const RedeemResetPassword = ({
  setCurrentState,
  token,
}: IAuthChildProps) => {
  const [, setState] = useState<RedeemResetPasswordState>(
    RedeemResetPasswordState.Init,
  );
  const [visibility, setVisibility] = useState(false);
  const [handleRedeemResetPassword, { loading: redeemResetPasswordLoading }] =
    useRedeemUserPasswordResetTokenMutation();

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IRedeemResetPasswordForm>({
    values: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(RedeemResetPasswordSchema) as Resolver<
      IRedeemResetPasswordForm,
      any
    >,
  });

  const onSubmit: SubmitHandler<IRedeemResetPasswordForm> = async (
    formValues,
  ) => {
    if (!formValues || !token) {
      enqueueSnackbar({
        message: MessagesMap.user.reset.redeemedFailure,
        variant: 'error',
      });
      return;
    }
    const formValuesCleaned = omit(formValues, ['confirmPassword']);
    try {
      const { data: redeemResetPasswordData } = await handleRedeemResetPassword(
        {
          variables: { ...formValuesCleaned, token },
        },
      );
      if (redeemResetPasswordData) {
        if (redeemResetPasswordData?.redeemUserPasswordResetToken) {
          const { code: errorCode } =
            redeemResetPasswordData?.redeemUserPasswordResetToken ?? {};
          switch (errorCode) {
            case PasswordResetRedemptionErrorCode.Failure:
            case PasswordResetRedemptionErrorCode.TokenExpired:
            case PasswordResetRedemptionErrorCode.TokenRedeemed:
              enqueueSnackbar({
                message: MessagesMap.user.reset.redeemedFailure,
                variant: 'error',
              });
              break;
            default:
              break;
          }
        } else {
          setCurrentState(AuthState.SIGN_IN);
          enqueueSnackbar({
            message: MessagesMap.user.reset.redeemedSuccess,
            variant: 'success',
          });
        }
      }
    } catch (thrownError) {
      setState(RedeemResetPasswordState.Error);
      const formattedError = new ApolloErrorHandler(thrownError)?.get();
      if (formattedError)
        enqueueSnackbar(formattedError?.message, { variant: 'error' });
    }
  };

  useEffect(() => {
    const { email } = router.query;
    if (router.isReady && email && !Array.isArray(email))
      setValue('email', email);
  }, [router.isReady, router.query, setValue]);

  return (
    <Stack
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      gap={{ xs: 2, md: 3 }}
      height="100%"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthHeader
        title="Reset Password"
        subtitle="Consequat nulla consequat nisi enim in irure cillum ipsum magna proident nisi in culpa irure commodo enim magna."
      />
      <Stack
        gap={{ xs: 1, md: 2 }}
        sx={{ overflowY: 'auto' }}
        pt={2}
        mb={{ xs: '128px', md: '156px' }}
      >
        <Text<IRedeemResetPasswordForm>
          variant="filled"
          label="Email"
          control={control}
          InputProps={{ endAdornment: <EmailOutlined color="primary" /> }}
          name="email"
          errors={errors}
          autoComplete="username"
          disabled
        />
        <Text<IRedeemResetPasswordForm>
          variant="filled"
          label="Password"
          InputProps={{
            endAdornment: (
              <Tooltip title="View">
                <IconButton
                  onClick={() => setVisibility(!visibility)}
                  color="primary"
                  sx={{ p: 0 }}
                >
                  {!visibility ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </Tooltip>
            ),
          }}
          name="password"
          control={control}
          type={visibility ? 'text' : 'password'}
          autoComplete="new-password"
          errors={errors}
        />
        <Text<IRedeemResetPasswordForm>
          variant="filled"
          label="Confirm Password"
          InputProps={{
            endAdornment: (
              <Tooltip title="View">
                <IconButton
                  onClick={() => setVisibility(!visibility)}
                  color="primary"
                  sx={{ p: 0 }}
                >
                  {!visibility ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </Tooltip>
            ),
          }}
          type={visibility ? 'text' : 'password'}
          control={control}
          name="confirmPassword"
          autoComplete="new-password"
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
          type="submit"
          variant="contained"
          endIcon={
            redeemResetPasswordLoading ? (
              <CircularProgress color="inherit" size={14} />
            ) : undefined
          }
        >
          Reset Password
        </Button>
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
