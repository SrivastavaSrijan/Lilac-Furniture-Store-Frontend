import { yupResolver } from '@hookform/resolvers/yup';
import {
  EmailOutlined,
  PermIdentityOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import { isRequiredString } from '@/lib';

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
  name: isRequiredString().email(),
  email: isRequiredString().email(),
  password: isRequiredString()
    .min(
      8,
      'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and a special character',
    )
    .minLowercase(1, 'Password must contain at least 1 lower case letter')
    .minUppercase(1, 'Password must contain at least 1 upper case letter')
    .minNumbers(1, 'Password must contain at least 1 number')
    .minSymbols(1, 'Password must contain at least 1 special character'),
  confirmPassword: isRequiredString().oneOf(
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
  const [state, setState] = useState<SignUpState>(SignUpState.Init);

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
    // if (!formValues) return;
    // await handleSignUp({ variables: formValues });
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
      <Stack gap={{ xs: 1, md: 2 }} sx={{ overflowY: 'auto' }} pb={12}>
        <Text<ISignUpForm>
          variant="filled"
          label="Email"
          control={control}
          InputProps={{ endAdornment: <EmailOutlined /> }}
          name="email"
          errors={errors}
        />
        <Text<ISignUpForm>
          variant="filled"
          label="Full Name"
          InputProps={{ endAdornment: <PermIdentityOutlined /> }}
          control={control}
          name="name"
          autoComplete="name"
          errors={errors}
        />
        <Text<ISignUpForm>
          variant="filled"
          label="Password"
          InputProps={{ endAdornment: <VisibilityOutlined /> }}
          type="password"
          control={control}
          name="password"
          autoComplete="new-password"
          errors={errors}
        />
        <Text<ISignUpForm>
          variant="filled"
          label="Confirm Password"
          InputProps={{ endAdornment: <VisibilityOutlined /> }}
          type="password"
          control={control}
          name="confirmPassword"
          autoComplete="new-password"
          errors={errors}
        />
      </Stack>
      <Box flexGrow={1} />
      <Stack
        py={{ xs: 2, md: 1 }}
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
            false ? <CircularProgress color="inherit" size={14} /> : undefined
          }
        >
          Sign Up
        </Button>
        <Typography variant="body2">
          Already have an account?{' '}
          <Typography
            component="span"
            fontWeight={600}
            onClick={() => setCurrentState(AuthState.SIGN_IN)}
          >
            Login
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};
