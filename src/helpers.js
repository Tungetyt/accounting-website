import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';

export const LOCAL_STORAGE_KEY = {
  theme: 'theme-ui-color-mode',
};
export const getItemByKey = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const THEME_NAMES = {
  light: 'light',
  dark: 'dark',
};

const EXTENDED_APP_THEME = {
  typography: {
    // h6 represents the company name in the logo
    h6: {
      textDecoration: 'underline',
      userSelect: 'none',
    },
  },
};

export const APP_THEME = {
  light: {
    palette: {
      type: THEME_NAMES.light,
      primary: {
        main: lightBlue['900'],
      },
      background: {
        default: lightBlue['50'],
      },
      elevation1: {
        backgroundColor: lightBlue['100'],
      },
      elevation2: {
        backgroundColor: lightBlue['200'],
      },
    },
    ...EXTENDED_APP_THEME,
  },
  dark: {
    palette: {
      type: THEME_NAMES.dark,
      primary: {
        main: lightBlue['50'],
      },
      background: {
        default: lightBlue['900'],
      },
      elevation1: {
        backgroundColor: lightBlue['800'],
      },
      elevation2: {
        backgroundColor: lightBlue['700'],
      },
    },
    ...EXTENDED_APP_THEME,
  },
};

export const DRAWER_WIDTH = 180;

export const COMPANY = 'V A V I C O M';

export const NAVIGATION = {
  home: 'home',
  services: 'services',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
};
