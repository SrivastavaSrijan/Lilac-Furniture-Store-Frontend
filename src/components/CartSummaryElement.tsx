import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';

import { formatMoney, generateSizes } from '@/lib';
import { ICartItem } from '@/lib/graphql';

import { CloudImage } from '.';
import { CartHandleButtons } from './CartHandleButtons';

interface ICartSummaryElementProps extends ICartItem {
  divider: boolean;
}
export const CartSummaryElement = ({
  divider,
  id,
  quantity,
  variant,
}: ICartSummaryElementProps) => {
  const { product, price, id: variantId } = variant ?? {};
  const { image } = product ?? {};
  const imageUrl = image?.image?.publicUrlTransformed ?? null;

  return (
    <>
      <Stack
        direction="row"
        gap={{ xs: 2, md: 3 }}
        key={id}
        justifyContent={{
          xs: 'flex-start',
          md: 'flex-start',
        }}
      >
        <Stack height={{ xs: 196, md: 256 }} width="30%" position="relative">
          {imageUrl ? (
            <CloudImage
              src={imageUrl}
              fill
              alt={product?.name ?? ''}
              sizes={generateSizes({ xs: 3, md: 3 })}
              style={{
                aspectRatio: '9 / 16',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Skeleton height="100%" variant="rectangular" />
          )}
        </Stack>
        <Stack width="70%">
          <Stack gap={{ xs: 1, md: 1 }} width="fit-content">
            <Typography variant="h5">
              {product?.name || <Skeleton width="10ch" />}{' '}
            </Typography>
            <Typography variant="body2">
              {product?.shortDescription || (
                <>
                  <Skeleton width="30ch" />
                  <Skeleton width="22ch" />
                </>
              )}
            </Typography>
            <Typography variant="subtitle2">
              {formatMoney(price) || <Skeleton width="10ch" />}
            </Typography>
          </Stack>
          <Box flexGrow={1} />
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            {variantId ? (
              <CartHandleButtons
                direction="row"
                color="primary"
                id={variantId}
                showHandleButtons={false}
              />
            ) : (
              <Skeleton width={96} height={64} />
            )}
            <Stack>
              {price && quantity ? (
                <>
                  <Typography variant="caption">Subtotal</Typography>
                  <Typography variant="subtitle1">
                    {formatMoney(price * quantity)}
                  </Typography>
                </>
              ) : (
                <>
                  <Skeleton height={32} width="7ch" />
                  <Skeleton height={32} width="10ch" />
                </>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {divider && <Divider flexItem variant="fullWidth" />}
    </>
  );
};
