import { yupResolver } from '@hookform/resolvers/yup';
import { EmailOutlined, VisibilityOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object } from 'yup';

import { isRequiredString, MessagesMap } from '@/lib';
import { useSignInMutation } from '@/lib/graphql';

import { AuthHeader, AuthState, IAuthChildProps } from '.';
import { Text } from './Text';

enum SignInState {
  Success,
  Failure,
  Error,
  Init,
}
const SignInSchema = object({
  email: isRequiredString().email(MessagesMap.invalid),
  password: isRequiredString(),
});
interface ISignInForm {
  email: string;
  password: string;
}
export const SignIn = ({ setCurrentState }: IAuthChildProps) => {
  const [state, setState] = useState<SignInState>(SignInState.Init);

  const [handleSignIn, { data, loading, error }] = useSignInMutation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignInForm>({
    values: { email: '', password: '' },
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit: SubmitHandler<ISignInForm> = async (formValues) => {
    if (!formValues) return;
    await handleSignIn({ variables: formValues });
  };

  useEffect(() => {
    if (loading) return;
    const { __typename: responseType } =
      data?.authenticateUserWithPassword ?? {};
    if (responseType === 'UserAuthenticationWithPasswordSuccess') {
      setState(SignInState.Success);
      setCurrentState(AuthState.WELCOME);
    } else if (responseType === 'UserAuthenticationWithPasswordFailure') {
      setState(SignInState.Failure);
      setError('root', {
        type: 'value',
        message: MessagesMap.user.notFound,
      });
    }
  }, [data, loading, setCurrentState, setError]);

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
        title="Login"
        subtitle="Lorem ipsum dolor sit amet, sint aliquip deserunt aute ea nisi sint incididunt anim pariatur"
      />
      <Stack gap={{ xs: 1, md: 2 }} sx={{ overflowY: 'auto' }} pb={12}>
        <Text<ISignInForm>
          variant="filled"
          InputProps={{ endAdornment: <EmailOutlined /> }}
          label="Email"
          control={control}
          name="email"
          errors={errors}
        />
        <Text<ISignInForm>
          variant="filled"
          InputProps={{ endAdornment: <VisibilityOutlined /> }}
          label="Password"
          type="password"
          control={control}
          name="password"
          autoComplete="password"
          errors={errors}
        />
        <Typography variant="caption" color="error.main">
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
          color={error ? 'error' : 'primary'}
          endIcon={
            loading ? <CircularProgress color="inherit" size={14} /> : undefined
          }
        >
          Login
        </Button>
        <Typography variant="body2">
          Don&apos;t have an account?{' '}
          <Typography
            component="span"
            color="primary.main"
            fontWeight={600}
            onClick={() => setCurrentState(AuthState.SIGN_UP)}
          >
            Sign Up
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
