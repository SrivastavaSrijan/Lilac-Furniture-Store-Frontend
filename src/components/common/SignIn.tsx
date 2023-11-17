import { yupResolver } from '@hookform/resolvers/yup';
import {
  EmailOutlined,
  HelpOutlineOutlined,
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
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object } from 'yup';

import { ApolloErrorHandler, MessagesMap, stringRequired } from '@/lib';
import { GetUserDocument, useSignInMutation } from '@/lib/graphql';

import { AuthHeader, AuthState, IAuthChildProps } from '.';
import { Text } from './Text';

enum SignInState {
  Success,
  Failure,
  Error,
  Init,
}
const SignInSchema = object({
  email: stringRequired().email(MessagesMap.invalid),
  password: stringRequired(),
});
interface ISignInForm {
  email: string;
  password: string;
}
export const SignIn = ({ setCurrentState }: IAuthChildProps) => {
  const [, setState] = useState<SignInState>(SignInState.Init);
  const [visibility, setVisibility] = useState(false);
  const [handleSignIn, { data, loading, error }] = useSignInMutation({
    refetchQueries: [GetUserDocument],
  });
  const { enqueueSnackbar } = useSnackbar();
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
    try {
      if (data && !error) {
        const { __typename: responseType } =
          data?.authenticateUserWithPassword ?? {};
        if (responseType === 'UserAuthenticationWithPasswordSuccess') {
          setState(SignInState.Success);
          setCurrentState(AuthState.WELCOME);
        } else if (responseType === 'UserAuthenticationWithPasswordFailure') {
          setState(SignInState.Failure);
          setError('root', { message: MessagesMap.user.notFound });
        }
      }
    } catch (thrownError) {
      setState(SignInState.Error);
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
        title="Login"
        subtitle="Lorem ipsum dolor sit amet, sint aliquip deserunt aute ea nisi sint incididunt anim pariatur"
      />
      <Stack
        gap={{ xs: 1, md: 2 }}
        sx={{ overflowY: 'auto' }}
        pb={{ xs: '12vh', md: '12vh' }}
      >
        <Text<ISignInForm>
          variant="filled"
          InputProps={{ endAdornment: <EmailOutlined color="primary" /> }}
          label="Email"
          control={control}
          autoComplete="username email"
          name="email"
          errors={errors}
        />
        <Text<ISignInForm>
          variant="filled"
          InputProps={{
            endAdornment: (
              <Stack gap={1} direction="row">
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
                <Tooltip title="Reset Password" color="primary">
                  <IconButton
                    sx={{ p: 0 }}
                    onClick={() => setCurrentState(AuthState.FORGOT_PASSWORD)}
                  >
                    <HelpOutlineOutlined />
                  </IconButton>
                </Tooltip>
              </Stack>
            ),
          }}
          label="Password"
          type={visibility ? 'text' : 'password'}
          control={control}
          name="password"
          autoComplete="password"
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
          color={error ? 'error' : 'primary'}
          endIcon={
            loading ? <CircularProgress color="inherit" size={14} /> : undefined
          }
        >
          Login
        </Button>
        <Typography>
          Don&apos;t have an account?{' '}
          <Typography
            component="span"
            color="primary.main"
            fontWeight={600}
            onClick={() => setCurrentState(AuthState.SIGN_UP)}
            sx={{ cursor: 'pointer' }}
          >
            Sign Up
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
