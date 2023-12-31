import {
  buttonClasses,
  createTheme,
  formLabelClasses,
  responsiveFontSizes,
  toggleButtonClasses,
} from '@mui/material';
import { EB_Garamond, Source_Sans_3 } from 'next/font/google';

const FONT_BODY = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
export const { className: poppinsClassName } = FONT_BODY;
export const TEXT_PRIMARY = FONT_BODY.style.fontFamily;

const FONT_HEADINGS = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
export const TEXT_SECONDARY = FONT_HEADINGS.style.fontFamily;

const themeColors = {
  background: {
    paper: '#fff',
    main: '#fff',
    header: '#F7FAFC',
  },
  text: {
    secondary: '#ffffff',
    primary: '#000',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
  secondary: {
    main: '#fff',
    contrastText: '#000000', // Black for readability
  },
  primary: {
    light: '#F5F3F6', // A softer, grey-infused lilac that pairs well with blues
    main: '#3D182F', // Original muted lilac
    contrastText: '#FFFFFF', // White to stand out against the darker lilac
  },
  error: {
    light: '#E97070', // Soft pastel red for error light
    main: '#A52222', // Mid-tone red for error main
    dark: '#560000', // Darker red for error dark
    contrastText: '#FFFFFF', // White for readability
  },
  success: {
    light: '#A9E5BA', // Soft pastel green for success light
    main: '#2A8B5E', // Vibrant green for success main
    dark: '#2A8B5E', // Deep green for success dark
    contrastText: '#000000', // Black for readability
  },
  info: {
    light: '#8FCBDF', // Soft blue for info light
    main: '#39A2DB', // Bright blue for info main
    dark: '#1B7CA8', // Deep blue for info dark
    contrastText: '#000000', // Black for readability
  },
  warning: {
    light: '#FFE8A1', // Light golden for warning light
    main: '#FFD479', // Golden yellow for warning main
    dark: '#CCAB52', // Dark golden for warning dark
    contrastText: '#000000', // Black for readability
  },
};

const THEME = {
  palette: themeColors,
  typography: {
    fontSize: 14,
    fontFamily: TEXT_PRIMARY,
    button: {
      textTransform: 'none' as const,
      lineHeight: 1.5,
    },
    poster: {
      fontSize: '6rem',
      lineHeight: 1, // Tight for large headings
      fontFamily: TEXT_SECONDARY,
    },
    h1: {
      fontSize: '4rem',
      lineHeight: 1.1, // Tight for large headings
      fontFamily: TEXT_SECONDARY,
    },
    h2: {
      fontSize: '3.75rem',
      lineHeight: 1.1,
      fontFamily: TEXT_SECONDARY,
    },
    h3: {
      fontSize: '3rem',
      lineHeight: 1.2,
      fontWeight: 500,
      fontFamily: TEXT_SECONDARY,
    },
    h4: {
      fontSize: '2.25rem',
      lineHeight: 1.2,
      fontWeight: 500,
      fontFamily: TEXT_SECONDARY,
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.3, // Slightly looser for medium headings
      fontWeight: 500,
      fontFamily: TEXT_SECONDARY,
    },
    h6: {
      fontSize: '1.25rem',
      lineHeight: 1.4, // Standard for text
      fontFamily: TEXT_SECONDARY,
    },
    subtitle1: {
      fontSize: '1.25rem',
      lineHeight: 1.4,
      fontFamily: TEXT_PRIMARY,
    },
    subtitle2: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontFamily: TEXT_PRIMARY,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5, // More generous for body text to improve readability
      fontFamily: TEXT_PRIMARY,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
        lineHeight: 1.5, // Maintain line height for readability at larger sizes
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontFamily: TEXT_PRIMARY,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.6, // Most generous to ensure legibility at small sizes
      fontFamily: TEXT_PRIMARY,
    },
    overline: {
      fontSize: '0.625rem',
      lineHeight: 1.7, // Most generous to ensure legibility at small sizes
      fontFamily: TEXT_PRIMARY,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        .${buttonClasses.root}.${buttonClasses.contained}, .${buttonClasses.root}.${buttonClasses.outlined}, .${toggleButtonClasses.root} {
          // border-radius: 0px !important;
          & .${buttonClasses.startIcon}>*:nth-of-type(1) {
            font-size: 18px !important;
          }
        },
        .${formLabelClasses.root}.${formLabelClasses.root} {
          color: rgba(0, 0, 0, 0.7) !important;
        }
      `,
    },
  },
};

export const theme = responsiveFontSizes(createTheme(THEME), { factor: 4 });
