import { useScrollTrigger } from '@mui/material';
import { cloneElement, ReactElement } from 'react';

export const ElevationScroll = ({
  children,
  disableElevation = false,
}: {
  children: ReactElement;
  disableElevation?: boolean;
}) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger && !disableElevation ? 8 : 2,
  });
};
