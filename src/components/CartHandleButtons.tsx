import {
  Add,
  AddShoppingCartOutlined,
  ArrowForward,
  Remove,
  RemoveShoppingCartRounded,
} from '@mui/icons-material';
import { alpha, Button, buttonClasses, Stack } from '@mui/material';
import Link from 'next/link';

import { AppConfig, useCartActions } from '@/lib';

import { QuantityTextField } from './QuantityTextField';

interface ICartHandleButtonsProps {
  id: string;
  direction?: 'row' | 'column';
  color?: 'secondary' | 'primary';
  showHandleButtons?: boolean;
}
export const CartHandleButtons = ({
  id,
  direction = 'column',
  color = 'secondary',
  showHandleButtons = true,
}: ICartHandleButtonsProps) => {
  const { handleAdd, handleEdit, handleRemove, cartItemId, quantity, loading } =
    useCartActions({ id });
  if (quantity && cartItemId) {
    return (
      <Stack
        gap={{ xs: 1, md: 1 }}
        direction={{ xs: direction, md: direction }}
        sx={{
          [`& .${buttonClasses.startIcon}`]: { m: 0 },
          [`& .${buttonClasses.root}`]: { minWidth: 56 },
          ...(loading && { pointerEvents: 'none' }),
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="nowrap"
          height="100%"
          borderRadius={1}
          {...(loading
            ? {
                bgcolor: (theme) => alpha(theme.palette.common.black, 0.12),
                color: (theme) => alpha(theme.palette.common.black, 0.56),
              }
            : { bgcolor: `${color}.main`, color: `${color}.contrastText` })}
          sx={{ button: { maxWidth: 'fit-content' } }}
        >
          <Button
            variant="text"
            size="large"
            color="inherit"
            disabled={loading}
            onClick={handleEdit(cartItemId, quantity + 1)}
            startIcon={<Add fontSize="inherit" />}
          />

          <Stack
            width="100%"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <QuantityTextField
              id={cartItemId}
              quantity={quantity}
              handleEdit={handleEdit}
              rest={{
                InputProps: {
                  disableUnderline: true,
                  sx: { color: 'inherit' },
                },
                disabled: loading,
              }}
            />
          </Stack>
          <Button
            variant="text"
            size="large"
            color="inherit"
            disabled={loading}
            onClick={handleEdit(cartItemId, quantity - 1)}
            startIcon={<Remove fontSize="inherit" />}
          />
        </Stack>
        <Stack
          direction="row"
          gap={0.5}
          display={showHandleButtons ? 'flex' : 'none'}
        >
          <Button
            variant={color === 'secondary' ? 'contained' : 'text'}
            size="large"
            color="error"
            disabled={loading}
            onClick={handleRemove(cartItemId)}
            startIcon={
              <RemoveShoppingCartRounded
                htmlColor="inherit"
                fontSize="inherit"
              />
            }
          />
          <Link href={AppConfig.pages.cart.path} passHref>
            <Button
              size="large"
              variant="text"
              fullWidth
              color={color}
              disabled={loading}
              endIcon={<ArrowForward fontSize="inherit" />}
            >
              Checkout
            </Button>
          </Link>
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack gap={{ xs: 1, md: 1 }} direction={{ xs: direction, md: direction }}>
      <Link href={AppConfig.pages.cart.path} passHref>
        <Button
          size="large"
          variant="contained"
          fullWidth
          color={color}
          disabled={loading}
          endIcon={<ArrowForward fontSize="inherit" />}
        >
          Buy Now
        </Button>
      </Link>
      <Button
        variant="outlined"
        size="large"
        color={color}
        onClick={handleAdd(id)}
        disabled={loading}
        startIcon={<AddShoppingCartOutlined fontSize="small" />}
      >
        Add To Cart
      </Button>
    </Stack>
  );
};
