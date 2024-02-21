import { extendTheme } from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

const theme: Dict = extendTheme({
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  },
  colors: {
    algorand: {
      50: '#000000',
      100: '#000000',
      200: '#000000',
      300: '#000000',
      400: '#1a1a1a',
      500: '#333333',
      600: '#4d4d4d',
      700: '#666666',
      800: '#ffffff',
      900: '#ffffff',
    },
    primary: {
      50: '#a1d8af',
      100: '#8ed0a0',
      200: '#79c890',
      300: '#63c080',
      400: '#4bb771',
      500: '#2aaf61', // green mana
      600: '#1c8146',
      700: '#166b39',
      800: '#10562d',
      900: '#0a4121',
    },
    voi: {
      50: '#d9c7f7',
      100: '#bb9af1',
      200: '#ac84ee',
      300: '#9d6deb',
      400: '#8e57e8',
      500: '#702ae2',
      600: '#591abf',
      700: '#4e17a9',
      800: '#441492',
      900: '#2f0e65',
    },
    altBackground: '#303846',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'AnonymousPro',
    body: 'AnonymousPro',
  },
});

export default theme;
