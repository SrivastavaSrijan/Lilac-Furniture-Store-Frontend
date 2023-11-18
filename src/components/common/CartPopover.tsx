import { Add, Remove } from '@mui/icons-material';
import {
  Button,
  Divider,
  IconButton,
  inputBaseClasses,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { some } from 'lodash';
import { useSnackbar } from 'notistack';
import {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ApolloErrorHandler,
  AppConfig,
  calculateCartPrice,
  formatMoney,
  useIsMobile,
} from '@/lib';
import {
  useDeleteCartItemMutation,
  useUpdateCartItemMutation,
} from '@/lib/graphql';
import { CommonContext } from '@/lib/providers';

import { CloudImage } from '.';

export const CartPopover = () => {
  const [show, setShow] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [changedId, setChangedId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { state } = useContext(CommonContext);
  const {
    items: cartItems,
    update: updateCart,
    updating: cartUpdating,
  } = state.cart;
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = useRef<HTMLInputElement>(null);

  const [handleDeleteCartItem, { loading: deleteLoading, error: deleteError }] =
    useDeleteCartItemMutation();

  const [handleEditCartItem, { loading: editLoading, error: editError }] =
    useUpdateCartItemMutation();

  const handleEdit =
    (id: string, quantity: number) =>
    async (ev: MouseEvent | KeyboardEvent) => {
      if (!updateCart) return;
      ev.preventDefault();
      ev.stopPropagation();
      setChangedId(id);
      const { data: editData } = await handleEditCartItem({
        variables: { where: { id }, data: { quantity } },
      });
      await updateCart();
      if (editData) setShow((old) => ({ ...old, [id]: false }));
    };

  const handleRemove = (id: string) => async (ev: MouseEvent) => {
    if (!updateCart) return;
    ev.preventDefault();
    ev.stopPropagation();
    setChangedId(id);
    await handleDeleteCartItem({
      variables: { where: { id } },
    });
    await updateCart();
  };

  useEffect(() => {
    const error = editError || deleteError;
    if (error) {
      const message = new ApolloErrorHandler(error).get()?.message;
      if (message) enqueueSnackbar({ message, variant: 'error' });
    }
  }, [deleteError, editError, enqueueSnackbar]);

  useEffect(() => {
    const eitherLoading =
      (editLoading || deleteLoading || cartUpdating) && changedId;
    if (eitherLoading) setLoading((old) => ({ ...old, [changedId]: true }));
    else setLoading({});
  }, [deleteLoading, editLoading, changedId, cartUpdating]);

  return (
    <Stack minWidth={{ xs: 343, md: 343 }} position="relative">
      <Stack
        maxHeight={{ xs: 200, md: 256 }}
        gap={{ xs: 2, md: 2 }}
        sx={{ overflowY: 'auto' }}
        px={{ xs: 3, md: 5 }}
      >
        {!cartItems.length && (
          <Typography py={2} variant="caption">
            Your cart is empty
          </Typography>
        )}
        {cartItems.map(({ product: { image, name, price }, quantity, id }) => (
          <Stack
            key={id}
            direction="row"
            gap={{ xs: 2, md: 2 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            {loading?.[id] ? (
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
                {loading?.[id] ? (
                  <Skeleton width="12ch" />
                ) : (
                  <Typography variant="body1" fontWeight={500}>
                    {name}
                  </Typography>
                )}
                {loading?.[id] ? (
                  <Skeleton width="8ch" />
                ) : (
                  <Typography variant="caption">
                    Quantity: {quantity}
                  </Typography>
                )}
                {loading?.[id] ? (
                  <Skeleton width="15ch" />
                ) : (
                  <Stack direction="row" gap={1}>
                    {show?.[id] ? (
                      <Stack direction="row" gap={0.325}>
                        <IconButton
                          onClick={handleEdit(id, quantity - 1)}
                          sx={{ fontSize: 12 }}
                          size="small"
                        >
                          <Remove fontSize="inherit" />
                        </IconButton>
                        <TextField
                          inputRef={inputRef}
                          type="number"
                          defaultValue={quantity}
                          onKeyDown={(ev) => {
                            const value = +(inputRef?.current?.value ?? '0');
                            if (
                              ev.code === 'Enter' &&
                              value &&
                              !Number.isNaN(value)
                            ) {
                              ev.preventDefault();
                              handleEdit(id, value)(ev);
                            }
                          }}
                          sx={{
                            width: '2ch',
                            [`& .${inputBaseClasses.input}`]: {
                              textAlign: 'center',
                              py: 0.25,
                              fontSize: 12,
                            },
                          }}
                          variant="standard"
                        />
                        <IconButton
                          onClick={handleEdit(id, quantity + 1)}
                          sx={{ fontSize: 12 }}
                          size="small"
                        >
                          <Add fontSize="inherit" />
                        </IconButton>
                      </Stack>
                    ) : (
                      <Button
                        size="small"
                        sx={{ minWidth: 0 }}
                        onClick={() =>
                          setShow((old) => ({
                            ...old,
                            [id]: !(old?.[id] || false),
                          }))
                        }
                      >
                        <Typography variant="caption">
                          {!show?.[id] ? 'Edit' : 'Hide'}
                        </Typography>
                      </Button>
                    )}
                    <Divider flexItem variant="middle" orientation="vertical" />
                    <Button
                      size="small"
                      sx={{ minWidth: 0 }}
                      onClick={handleRemove(id)}
                    >
                      <Typography variant="caption">Remove</Typography>
                    </Button>
                  </Stack>
                )}
              </Stack>
              {loading?.[id] ? (
                <Skeleton width="15ch" />
              ) : (
                <Typography variant="body2">{formatMoney(price)}</Typography>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>
      {!!cartItems.length && (
        <Stack
          position="sticky"
          bottom={0}
          bgcolor="white"
          py={{ xs: 2, md: 3 }}
          gap={{ xs: 2, md: 2 }}
          px={{ xs: 3, md: 5 }}
        >
          <Divider variant="fullWidth" flexItem />
          <Stack width="100%" direction="row" justifyContent="space-between">
            {some(loading, Boolean) ? (
              <Skeleton width="9ch" />
            ) : (
              <Typography variant="body2">Sub total</Typography>
            )}
            {some(loading, Boolean) ? (
              <Skeleton width="15ch" />
            ) : (
              <Typography variant="body2" fontWeight={600}>
                {formatMoney(calculateCartPrice(cartItems))}
              </Typography>
            )}
          </Stack>
          <Stack>
            <Button
              disabled={some(loading, Boolean)}
              size="large"
              variant="contained"
              color="primary"
              href={AppConfig.pages.checkout.path}
            >
              Checkout
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
