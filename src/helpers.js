import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const LOCAL_STORAGE_KEY = {
  theme: 'theme-ui-color-mode',
};
export const getItemByKey = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const THEME_NAMES = {
  light: 'light',
  dark: 'dark',
};

// const EXTENDED_APP_THEME = {
//   typography: {
//     // h6 represents the company name in the logo
//     h6: {
//       textDecoration: 'underline',
//       userSelect: 'none',
//     },
//   },
// };

export const APP_THEME = {
  light: {
    palette: {
      type: THEME_NAMES.light,
      primary: {
        main: blueGrey['900'],
      },
      background: {
        default: blueGrey['50'],
      },
      elevation1: {
        backgroundColor: blueGrey['100'],
      },
      elevation2: {
        backgroundColor: blueGrey['200'],
      },
    },
    // ...EXTENDED_APP_THEME,
  },
  dark: {
    palette: {
      type: THEME_NAMES.dark,
      primary: {
        main: blueGrey['50'],
      },
      background: {
        default: blueGrey['900'],
      },
      elevation1: {
        backgroundColor: blueGrey['800'],
      },
      elevation2: {
        backgroundColor: blueGrey['700'],
      },
    },
    // ...EXTENDED_APP_THEME,
  },
};

export const DRAWER_WIDTH = 180;

export const COMPANY = 'VAVICOM';

export const NAVIGATION = {
  home: 'home',
  services: 'services',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
};
