import { yupResolver } from '@hookform/resolvers/yup';
import {
  EmailOutlined,
  PermIdentityOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { omit } from 'lodash';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import { ApolloErrorHandler, stringRequired } from '@/lib';
import {
  GetUserDocument,
  useSignInMutation,
  useSignUpMutation,
} from '@/lib/graphql';

import { AuthHeader, AuthState, IAuthChildProps } from '.';
import { Text } from './Text';

YupPassword(Yup);

enum SignUpState {
  Success,
  Failure,
  Error,
  Init,
}
const SignUpSchema = Yup.object({
  name: stringRequired(),
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
interface ISignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUp = ({ setCurrentState }: IAuthChildProps) => {
  const [, setState] = useState<SignUpState>(SignUpState.Init);
  const [visibility, setVisibility] = useState(false);
  const [handleSignUp, { loading: signUpLoading }] = useSignUpMutation();
  const [handleSignIn, { loading: signInLoading }] = useSignInMutation({
    refetchQueries: [
      {
        query: GetUserDocument,
      },
    ],
  });
  const loading = signUpLoading || signInLoading;

  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    values: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(SignUpSchema) as Resolver<ISignUpForm, any>,
  });

  const onSubmit: SubmitHandler<ISignUpForm> = async (formValues) => {
    if (!formValues) return;
    const formValuesCleaned = omit(formValues, ['confirmPassword']);
    try {
      const { data: signUpData } = await handleSignUp({
        variables: { data: formValuesCleaned },
      });
      if (signUpData) {
        if (signUpData?.createUser) {
          const { data: signInData } = await handleSignIn({
            variables: omit(formValuesCleaned, ['name']),
          });
          if (signInData)
            if (
              signInData.authenticateUserWithPassword?.__typename ===
              'UserAuthenticationWithPasswordSuccess'
            ) {
              setCurrentState(AuthState.WELCOME);
              setState(SignUpState.Success);
            }
        }
      }
    } catch (thrownError) {
      setState(SignUpState.Error);
      const formattedError = new ApolloErrorHandler(thrownError)?.get();
      if (formattedError)
        enqueueSnackbar(formattedError?.message, { variant: 'error' });
    }
  };

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
        title="Sign up"
        subtitle="Consectetur cupidatat nulla deserunt nulla pariatur culpa incididunt id non cillum incididunt mollit sit fugiat elit non labore."
      />
      <Stack
        gap={{ xs: 1, md: 2 }}
        sx={{ overflowY: 'auto' }}
        pt={2}
        mb={{ xs: '128px', md: '156px' }}
      >
        <Text<ISignUpForm>
          variant="filled"
          label="Email"
          control={control}
          InputProps={{ endAdornment: <EmailOutlined color="primary" /> }}
          name="email"
          errors={errors}
          autoComplete="username"
        />
        <Text<ISignUpForm>
          variant="filled"
          label="Full Name"
          InputProps={{
            endAdornment: <PermIdentityOutlined color="primary" />,
          }}
          control={control}
          name="name"
          autoComplete="name"
          errors={errors}
        />
        <Text<ISignUpForm>
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
        <Text<ISignUpForm>
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
            loading ? <CircularProgress color="inherit" size={14} /> : undefined
          }
        >
          Sign Up
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
