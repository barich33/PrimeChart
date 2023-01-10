import * as React from 'react';
import {
  ThemeProvider as ReThemeProvider,
  TextProps,
  BoxProps,
} from '@shopify/restyle';

type BaseThemeType = typeof BaseTheme & {
  textVariants: {[key: string]: TextProps<typeof BaseTheme>};
  buttonVariants: {[key: string]: BoxProps<typeof BaseTheme>};
};

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
  colors: {
    text: '#252A31',
    background: '#0A4854',
    primary: '#010F12',
    secondary: '#22DAFE',
    black: '#252A31',
    white: 'white',
    red: '#FF3E5C',
    grey: '#BFC8D6',
    transparent: 'transparent',
    buttonlabel:'010F12'
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  buttonVariants: {
    defaults: {
      padding: 'm',
      marginVertical: 's',
      borderRadius: 8,
      width: 280,
    },
    primary: {
      backgroundColor: 'primary',
    },
    outline: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
  },
  textVariants: {
    defaults: {
     //fontFamily: 'Inter',
      color: 'text',
      fontSize: 14,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 32,
    },
    subheader: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    body: {},

    // buttons labels
    button_primary: {
      color: 'buttonlabel',
    },
    button_outline: {
      color: 'primary',
    },
    button_secondary: {
      color: 'white',
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);