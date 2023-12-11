import { Stack, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

interface ICheckoutProps {}
const drawerBleeding = 0;

export const Checkout = (props: ICheckoutProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Stack></Stack>
    </SwipeableDrawer>
  );
};
