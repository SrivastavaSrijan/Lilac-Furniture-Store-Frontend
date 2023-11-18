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

import { useGetUserQuery } from './graphql';

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
