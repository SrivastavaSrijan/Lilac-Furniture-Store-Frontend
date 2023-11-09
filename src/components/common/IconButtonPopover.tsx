import {
  IconButton,
  Popover as MUIPopover,
  PopoverProps,
  SvgIcon,
} from '@mui/material';
import React, { MouseEvent, useState } from 'react';

interface IPopoverProps extends Partial<PopoverProps> {
  name: string;
  children: JSX.Element;
  Icon: JSX.Element;
}
export const IconButtonPopover = ({
  name,
  children,
  Icon,
  ...rest
}: IPopoverProps) => {
  const [el, setEl] = useState<null | HTMLElement>(null);

  const handleToggle = (open: boolean) => (event: MouseEvent<HTMLElement>) => {
    setEl(open ? event.currentTarget : null);
  };

  return (
    <>
      <IconButton color="primary" size="large" onClick={handleToggle(!el)}>
        <SvgIcon fontSize="inherit">{Icon}</SvgIcon>
      </IconButton>
      <MUIPopover
        id={el ? `${name}_popover` : undefined}
        open={!!el}
        anchorEl={el}
        onClose={handleToggle(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...rest}
      >
        {children}
      </MUIPopover>
    </>
  );
};
