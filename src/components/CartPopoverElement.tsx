import { Add, Remove } from '@mui/icons-material';
import {
  Button,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { DeepRequired } from 'react-hook-form';

import { formatMoney, useCartActions, useIsMobile } from '@/lib';
import { ICartItem } from '@/lib/graphql';

import { CloudImage } from '.';
import { QuantityTextField } from './QuantityTextField';

interface ICartPopoverElementProps extends DeepRequired<ICartItem> {}
export const CartPopoverElement = ({
  id: cartItemId,
  quantity,
  product: { name, price, image },
}: ICartPopoverElementProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { handleEdit, handleRemove, loading } = useCartActions({
    id: cartItemId,
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    setShow(false);
  }, [loading]);

  return (
    <Stack
      direction="row"
      gap={{ xs: 2, md: 2 }}
      justifyContent="flex-start"
      alignItems="center"
    >
      {loading ? (
        <Skeleton
          width={isMobile ? 64 : 96}
          height={isMobile ? 96 : 128}
          variant="rectangular"
          sx={{ transform: 'none' }}
        />
      ) : (
        <CloudImage
          src={image?.image?.publicUrlTransformed}
          alt={name}
          width={isMobile ? 64 : 96}
          height={isMobile ? 96 : 128}
          style={{ objectFit: 'cover' }}
        />
      )}
      <Stack
        height={isMobile ? 96 : 128}
        justifyContent="space-between"
        py={0.5}
      >
        <Stack gap={0.5}>
          {loading ? (
            <Skeleton width="12ch" />
          ) : (
            <Typography variant="body1" fontWeight={500}>
              {name}
            </Typography>
          )}
          {loading ? (
            <Skeleton width="8ch" />
          ) : (
            <Typography variant="caption">Quantity: {quantity}</Typography>
          )}
          {loading ? (
            <Skeleton width="15ch" />
          ) : (
            <Stack direction="row" gap={1}>
              {show ? (
                <Stack direction="row" gap={0.325}>
                  <IconButton
                    onClick={handleEdit(cartItemId, quantity - 1)}
                    sx={{ fontSize: 14 }}
                    size="small"
                  >
                    <Remove fontSize="inherit" />
                  </IconButton>
                  <QuantityTextField
                    id={cartItemId}
                    quantity={quantity}
                    handleEdit={handleEdit}
                  />
                  <IconButton
                    onClick={handleEdit(cartItemId, quantity + 1)}
                    sx={{ fontSize: 14 }}
                    size="small"
                  >
                    <Add fontSize="inherit" />
                  </IconButton>
                </Stack>
              ) : (
                <Button
                  size="small"
                  sx={{ minWidth: 0 }}
                  onClick={() => setShow(!show)}
                >
                  <Typography variant="caption">
                    {!show ? 'Edit' : 'Hide'}
                  </Typography>
                </Button>
              )}
              <Divider flexItem variant="middle" orientation="vertical" />
              <Button
                size="small"
                sx={{ minWidth: 0 }}
                onClick={handleRemove(cartItemId)}
              >
                <Typography variant="caption">Remove</Typography>
              </Button>
            </Stack>
          )}
        </Stack>
        {loading ? (
          <Skeleton width="15ch" />
        ) : (
          <Typography variant="body2">{formatMoney(price)}</Typography>
        )}
      </Stack>
    </Stack>
  );
};
