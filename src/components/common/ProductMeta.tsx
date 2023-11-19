import {
  Add,
  Remove,
  RemoveShoppingCartRounded,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { alpha, Button, Stack, Typography } from '@mui/material';

import { formatMoney, useCartActions } from '@/lib';
import { IProduct } from '@/lib/graphql';

import { QuantityTextField } from './QuantityTextField';

interface IProductMetaProps extends IProduct {
  description?: string | null;
}
export const ProductMeta = ({
  name,
  price,
  meta,
  id,
  description,
}: IProductMetaProps) => {
  const { handleAdd, handleEdit, handleRemove, cartItemId, quantity, loading } =
    useCartActions({ id });
  return (
    <Stack
      pt={{ xs: 0.5, md: 1 }}
      height="100%"
      pb={{ xs: 1.5, md: 2 }}
      px={{ xs: 1, md: 1.5 }}
      bgcolor="secondary.light"
      justifyContent="space-between"
      gap={{ xs: 1.5, md: 2 }}
    >
      <Stack gap={0.25}>
        <Typography variant="body1" fontWeight={600}>
          {name}
        </Typography>

        <Typography fontWeight={300} variant="caption">
          {`by ${meta?.company}`}
        </Typography>
        <Typography fontWeight={300} variant="body2">
          {`${meta?.type},${meta?.material}`}
        </Typography>
        <Typography variant="body2">{formatMoney(price)}</Typography>

        {description && (
          <Typography
            variant="caption"
            className="clamp-5"
            mt={{ xs: 2, md: 3 }}
          >
            {description}
          </Typography>
        )}
      </Stack>

      {(() => {
        if (quantity && cartItemId) {
          return (
            <Stack
              gap={1}
              direction={{ xs: 'column-reverse', md: 'row' }}
              justifyContent="center"
            >
              <Stack
                flex={1}
                direction="row"
                justifyContent="space-between"
                flexWrap="nowrap"
                height="100%"
              >
                <Button
                  variant="contained"
                  size="medium"
                  disabled={loading}
                  sx={{ minWidth: 0 }}
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
                >
                  <QuantityTextField
                    id={cartItemId}
                    quantity={quantity}
                    handleEdit={handleEdit}
                    rest={{
                      InputProps: { disableUnderline: true },
                      disabled: loading,
                    }}
                  />
                </Stack>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ minWidth: 0 }}
                  disabled={loading}
                  onClick={handleEdit(cartItemId, quantity - 1)}
                >
                  <Remove fontSize="small" />
                </Button>
              </Stack>
              <Button
                variant="outlined"
                color="error"
                size="medium"
                sx={{ minWidth: 0, color: 'error.main' }}
                disabled={loading}
                onClick={handleRemove(cartItemId)}
              >
                <RemoveShoppingCartRounded color="inherit" fontSize="small" />
              </Button>
            </Stack>
          );
        }
        return (
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            onClick={handleAdd(id)}
            disabled={loading}
            startIcon={<ShoppingCartOutlined fontSize="small" />}
          >
            Add to cart
          </Button>
        );
      })()}
    </Stack>
  );
};
