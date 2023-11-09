import { AccountCircleOutlined, PasswordOutlined } from '@mui/icons-material';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AssetsConfig } from '@/lib';

import { CloudImage } from '.';
import { Text } from './Text';

interface ILoginProps {}
interface ILoginForm {
  email: string;
  password: string;
}
export const Login = (props: ILoginProps) => {
  const theme = useTheme();
  const { control, handleSubmit } = useForm<ILoginForm>({
    values: { email: '', password: '' },
  });
  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  return (
    <Stack>
      <CloudImage
        width={theme.breakpoints.values.sm}
        height={300}
        src={AssetsConfig.cloudinary.login}
        alt="Login to Lilac"
        style={{
          width: '100%',
        }}
      />
      <Stack
        px={{ xs: 1, md: 2 }}
        py={{ xs: 2, md: 3 }}
        gap={{ xs: 2, md: 3 }}
        flex={1}
        height="100%"
      >
        <Stack gap={{ xs: 2, md: 3 }}>
          <Typography variant="h1">Login</Typography>
          <Typography variant="body1" color="gray">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet.
          </Typography>
        </Stack>
        <Stack
          flex={1}
          justifyContent="center"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          gap={{ xs: 1, md: 2 }}
          height="100%"
        >
          <Text<ILoginForm>
            variant="filled"
            InputProps={{ endAdornment: <AccountCircleOutlined /> }}
            label="Enter your email"
            control={control}
            name="email"
          />
          <Text<ILoginForm>
            variant="filled"
            InputProps={{ endAdornment: <PasswordOutlined /> }}
            label="Enter your password"
            type="password"
            control={control}
            name="password"
          />
          <Stack my={{ xs: 2, md: 3 }}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
