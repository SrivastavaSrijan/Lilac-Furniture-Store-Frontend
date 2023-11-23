import {
  Add,
  Remove,
  RemoveShoppingCartRounded,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { alpha, Button, Stack, Typography } from '@mui/material';

import { useCartActions } from '@/lib';

import { QuantityTextField } from './QuantityTextField';

interface ICartHandleButtonsProps {
  id: string;
  direction?: 'row' | 'column';
}
export const CartHandleButtons = ({
  id,
  direction = 'column',
}: ICartHandleButtonsProps) => {
  const { handleAdd, handleEdit, handleRemove, cartItemId, quantity, loading } =
    useCartActions({ id });
  if (quantity && cartItemId) {
    return (
      <Stack gap={{ xs: 2, md: 2 }} direction={{ xs: 'column', md: direction }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="nowrap"
          height="100%"
        >
          <Button
            variant="contained"
            size="medium"
            disabled={loading}
            sx={{ minWidth: 0, borderRadius: 0 }}
            onClick={handleEdit(cartItemId, quantity + 1)}
          >
            <Add fontSize="small" />
          </Button>
          <Stack
            borderTop={1}
            borderBottom={1}
            borderColor={(theme) =>
              loading
                ? alpha(theme.palette.common.black, 0.12)
                : alpha(theme.palette.primary.main, 0.5)
            }
            width="100%"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
            bgcolor={loading ? 'gray' : 'primary.dark'}
          >
            <QuantityTextField
              id={cartItemId}
              quantity={quantity}
              handleEdit={handleEdit}
              rest={{
                InputProps: { disableUnderline: true, sx: { color: 'white' } },
                disabled: loading,
              }}
            />
          </Stack>
          <Button
            variant="contained"
            size="medium"
            sx={{ minWidth: 0, borderRadius: 0 }}
            disabled={loading}
            onClick={handleEdit(cartItemId, quantity - 1)}
          >
            <Remove fontSize="small" />
          </Button>
        </Stack>
        <Button
          variant="contained"
          color="error"
          size="medium"
          sx={{ minWidth: 0, color: 'error.main' }}
          disabled={loading}
          onClick={handleRemove(cartItemId)}
        >
          <RemoveShoppingCartRounded htmlColor="white" fontSize="small" />
          <Typography variant="body2" color="white" ml={1}>
            Remove
          </Typography>
        </Button>
      </Stack>
    );
  }
  return (
    <Button
      size="medium"
      variant="contained"
      color="primary"
      onClick={handleAdd(id)}
      disabled={loading}
      startIcon={<ShoppingCartOutlined fontSize="small" />}
    >
      Add to cart
    </Button>
  );
};
