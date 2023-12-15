import {
  IconButton,
  IconButtonProps,
  Popover as MUIPopover,
  PopoverProps,
} from '@mui/material';
import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  useContext,
} from 'react';

import { CommonContext } from '@/lib/providers';

interface IPopoverProps extends Partial<PopoverProps> {
  name: string;
  children: JSX.Element;
  Icon: JSX.Element;
  isButton?: boolean;
}
const InnerIconButtonPopover = (
  props: IPopoverProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const { name, children, Icon, isButton = false, ...rest } = props;
  const { state, dispatch } = useContext(CommonContext);

  const el = state?.popoverEl;
  const isOpen = el?.id === name;

  const handleToggle = (open: boolean) => (event: MouseEvent<HTMLElement>) => {
    dispatch({ type: 'popover', payload: open ? event.currentTarget : null });
  };

  const rootProps: IconButtonProps = {
    color: 'secondary',
    size: 'medium',
    id: name,
    onClick: handleToggle(!el),
    ref,
  };

  return (
    <>
      {isButton ? (
        cloneElement(Icon, { ...rootProps, ...Icon.props })
      ) : (
        <IconButton {...rootProps}>{Icon}</IconButton>
      )}
      <MUIPopover
        id={isOpen ? name : undefined}
        open={isOpen}
        anchorEl={el}
        onClose={handleToggle(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            // elevation: 0,
            sx: { borderRadius: 0, mt: 1, overflow: 'hidden' },
          },
        }}
        {...rest}
      >
        {children}
      </MUIPopover>
    </>
  );
};

export const IconButtonPopover = forwardRef<HTMLButtonElement, IPopoverProps>(
  InnerIconButtonPopover,
);
