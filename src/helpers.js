import indigo from '@material-ui/core/colors/indigo';

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
        main: indigo['900'],
      },
      background: {
        default: indigo['50'],
      },
      elevation1: {
        backgroundColor: indigo['100'],
      },
      elevation2: {
        backgroundColor: indigo['200'],
      },
      indigo300: indigo['300'],
    },
    ...EXTENDED_APP_THEME,
  },
  dark: {
    palette: {
      type: THEME_NAMES.dark,
      primary: {
        main: indigo['50'],
      },
      background: {
        default: indigo['900'],
      },
      elevation1: {
        backgroundColor: indigo['800'],
      },
      elevation2: {
        backgroundColor: indigo['700'],
      },
      indigo300: indigo['300'],
    },
    ...EXTENDED_APP_THEME,
  },
};

export const DRAWER_WIDTH = 180;

export const COMPANY = 'V a v i c o m';

export const NAVIGATION = {
  home: 'home',
  services: 'services',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
};
