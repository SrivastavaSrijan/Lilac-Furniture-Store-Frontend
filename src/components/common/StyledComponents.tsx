import { styled } from '@mui/material';
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
