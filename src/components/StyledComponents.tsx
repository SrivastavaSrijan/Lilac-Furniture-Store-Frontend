import {
  Box,
  darken,
  styled,
  toggleButtonClasses,
  ToggleButtonGroup,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    '&.notistack-MuiContent': {
      width: '50vw',
      '@media only screen and (max-width: 600px)': {
        width: 'initial',
      },
    },
    '&.notistack-MuiContent-success': {
      backgroundColor: '#5AC18E',
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: '#EB6B6B',
    },
  }),
);

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    [`& .${toggleButtonClasses.root}`]: {
      py: '6px',
      [`&.${toggleButtonClasses.selected}`]: {
        bgcolor: 'primary.main',
        color: 'primary.light',
        '&:hover, &:focus, &:active': {
          bgcolor: darken(theme.palette.primary.main, 0.2),
        },
      },
    },
  }),
);

export const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
