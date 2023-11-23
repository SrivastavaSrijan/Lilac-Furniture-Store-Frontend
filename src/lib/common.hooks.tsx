import { NetworkStatus } from '@apollo/client';
import { Cancel } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogProps,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ApolloErrorHandler, MessagesMap } from '.';
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useGetUserQuery,
  useUpdateCartItemMutation,
} from './graphql';
import { CommonContext } from './providers';

export const useUser = () => {
  const { data, networkStatus, refetch } = useGetUserQuery({
    notifyOnNetworkStatusChange: true,
  });

  return {
    user: data?.authenticatedItem,
    loading: networkStatus === NetworkStatus.loading,
    updating: networkStatus === NetworkStatus.refetch,
    refetch,
  };
};

export const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

interface IGenericDialogProps extends DialogProps {}
export const asModal = (children: JSX.Element) => {
  const OuterDialog = ({ onClose, ...props }: IGenericDialogProps) => {
    return (
      <Dialog {...props} fullScreen={useIsMobile()}>
        <Box position="absolute" right={0}>
          <IconButton
            onClick={() => onClose && onClose({}, 'escapeKeyDown')}
            sx={{ color: 'white' }}
          >
            <Cancel color="inherit" />
          </IconButton>
        </Box>
        {children}
      </Dialog>
    );
  };
  const withWrappedDialog = (props: IGenericDialogProps) => (
    <OuterDialog {...props} />
  );
  return withWrappedDialog;
};

interface ICartActionsHookProps {
  id?: string | null;
}
export const useCartActions = ({ id }: ICartActionsHookProps) => {
  const [updateLoading, setUpdateLoading] = useState(false);

  const [handleAddToCart, { loading: addLoading, error: addError }] =
    useAddToCartMutation();
  const [handleDeleteCartItem, { loading: deleteLoading, error: deleteError }] =
    useDeleteCartItemMutation();
  const [handleEditCartItem, { loading: editLoading, error: editError }] =
    useUpdateCartItemMutation();
  const loading = addLoading || editLoading || deleteLoading || updateLoading;

  const { state, dispatch } = useContext(CommonContext);
  const { enqueueSnackbar } = useSnackbar();
  const { element: cartEl, update: updateCart, items: cartItems } = state.cart;
  const productInCart = cartItems.find((val) => val.variant.id === id);
  const isProductInCart = !!productInCart;

  const handleUpdate = async () => {
    setUpdateLoading(true);
    if (updateCart) await updateCart();
    setUpdateLoading(false);
  };

  const handleError = () => {
    enqueueSnackbar({ message: MessagesMap.error });
  };

  const handleAdd = (variantId?: string) => async (ev: MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (!variantId) return handleError();
    const { data: addData } = await handleAddToCart({
      variables: { id: variantId },
    });
    await handleUpdate();
    if (cartEl && addData) dispatch({ type: 'popover', payload: cartEl });
    return addData;
  };

  const handleRemove =
    (cartItemId: string) => async (ev: MouseEvent | KeyboardEvent) => {
      ev.preventDefault();
      ev.stopPropagation();
      const { data: removeData } = await handleDeleteCartItem({
        variables: { where: { id: cartItemId } },
      });
      await handleUpdate();
      return removeData;
    };

  const handleEdit =
    (cartItemId: string, quantity: number) =>
    async (ev: MouseEvent | KeyboardEvent) => {
      ev.preventDefault();
      ev.stopPropagation();
      if (!quantity) {
        return handleRemove(cartItemId)(ev);
      }
      const { data: editData } = await handleEditCartItem({
        variables: { where: { id: cartItemId }, data: { quantity } },
      });
      await handleUpdate();
      return editData;
    };

  useEffect(() => {
    const error = editError || deleteError || addError;

    if (error) {
      const message = new ApolloErrorHandler(error).get()?.message;
      if (message) enqueueSnackbar({ message, variant: 'error' });
    }
  }, [addError, deleteError, editError, enqueueSnackbar]);

  return {
    handleAdd,
    handleEdit,
    handleRemove,
    loading,
    quantity: isProductInCart ? productInCart?.quantity ?? 0 : 0,
    cartItemId: isProductInCart ? productInCart?.id ?? null : null,
  };
};
