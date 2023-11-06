import {
  accordionClasses,
  buttonBaseClasses,
  buttonClasses,
  createTheme,
  filledInputClasses,
  responsiveFontSizes,
  tabScrollButtonClasses,
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

// Calculate unitless line height
const computeUnitlessLineHeight = (fontSize: number, lineHeightPx: number) => {
  return lineHeightPx / fontSize;
};
const themeColors = {
  background: {
    paper: '#fbfefb',
    main: '#fff',
  },
  text: {
    secondary: '#ffffff',
    primary: '#333333',
  },
  common: {
    white: '#FFFFFF',
    black: '#333333',
  },
  primary: {
    light: '#356B80', // A lighter, more marine blue that harmonizes with lilac
    main: '#042A3A', // Original deep navy blue
    dark: '#000', // A darker, more muted navy to provide depth
    contrastText: '#FFFFFF', // White for maximum contrast
  },
  secondary: {
    light: '#F5F3F6', // A softer, grey-infused lilac that pairs well with blues
    main: '#65475A', // Original muted lilac
    dark: '#3D182F', // A darker shade of lilac for depth
    contrastText: '#FFFFFF', // White to stand out against the darker lilac
  },
  error: {
    light: '#F9D1D1', // Soft pastel red for error light
    main: '#F2A3A3', // Mid-tone red for error main
    dark: '#EB6B6B', // Darker red for error dark
    contrastText: '#FFFFFF', // White for readability
  },
  success: {
    light: '#A9E5BA', // Soft pastel green for success light
    main: '#5AC18E', // Vibrant green for success main
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
    fontSize: 12,
    fontFamily: TEXT_PRIMARY,
    button: {
      textTransform: 'none' as const,
      fontWeight: 500,
    },
    poster: {
      fontSize: '5rem',
      component: 'h1',
      lineHeight: computeUnitlessLineHeight(90, 108).toString(),
      letterSpacing: '-0.02em', // -2%
      fontFamily: TEXT_SECONDARY,
    },
    h1: {
      fontSize: '4.5rem',
      lineHeight: computeUnitlessLineHeight(72, 86).toString(),
      letterSpacing: '-0.02em', // -2%
      fontFamily: TEXT_SECONDARY,
    },
    h2: {
      fontSize: '3.75rem',
      lineHeight: computeUnitlessLineHeight(60, 72).toString(),
      letterSpacing: '-0.02em',
      fontFamily: TEXT_SECONDARY,
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: computeUnitlessLineHeight(48, 60).toString(),
      letterSpacing: '-0.02em',
      fontFamily: TEXT_SECONDARY,
    },
    h4: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: computeUnitlessLineHeight(36, 44).toString(),
      letterSpacing: '-0.02em',
      fontFamily: TEXT_SECONDARY,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: computeUnitlessLineHeight(24, 32).toString(),
      fontFamily: TEXT_SECONDARY,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: computeUnitlessLineHeight(16, 22).toString(),
      fontFamily: TEXT_SECONDARY,
    },
    subtitle1: {
      fontSize: '1.25rem',
      lineHeight: computeUnitlessLineHeight(20, 24).toString(),
      fontFamily: TEXT_PRIMARY,
    },
    subtitle2: {
      fontSize: '1.125rem',
      lineHeight: computeUnitlessLineHeight(18, 22).toString(),
      fontFamily: TEXT_PRIMARY,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: computeUnitlessLineHeight(16, 20).toString(),
      fontFamily: TEXT_PRIMARY,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: computeUnitlessLineHeight(14, 20).toString(),
      fontFamily: TEXT_PRIMARY,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: computeUnitlessLineHeight(12, 18).toString(),
      fontFamily: TEXT_PRIMARY,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        .${buttonClasses.root}.${buttonClasses.contained}, .${buttonClasses.root}.${buttonClasses.outlined} {
          padding: 8px 32px !important;
          border-radius: 0px !important;
          height: fit-content !important;
        },
        .${buttonClasses.root}.${buttonClasses.text} {
          min-width: 0 !important;
        },
        .${filledInputClasses.root} {
          background-color: white !important;
        },
        .${buttonBaseClasses.root}.${tabScrollButtonClasses.root} {
          opacity: 1 !important;
          pointer-events: initial !important;
          cursor: initial !important;
        },
        .${accordionClasses.root}.${accordionClasses.expanded} {
          margin: 0 !important;
          &:before {
            opacity: 1 !important;
          }
        },
      `,
    },
  },
};

export const theme = responsiveFontSizes(createTheme(THEME), { factor: 4 });
