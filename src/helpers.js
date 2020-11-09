import blueGrey from '@material-ui/core/colors/blueGrey';

export const LOCAL_STORAGE_KEY = {
  theme: 'theme-ui-color-mode',
};
export const getItemByKey = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const THEME_NAMES = {
  light: 'light',
  dark: 'dark',
};

const color = blueGrey;

export const APP_THEME = {
  light: {
    palette: {
      type: THEME_NAMES.light,
      primary: {
        main: color['900'],
      },
      background: {
        default: color['50'],
      },
      elevation1: {
        backgroundColor: color['100'],
      },
      elevation2: {
        backgroundColor: color['200'],
      },
    },
  },
  dark: {
    palette: {
      type: THEME_NAMES.dark,
      primary: {
        main: color['50'],
      },
      background: {
        default: color['900'],
      },
      elevation1: {
        backgroundColor: color['800'],
      },
      elevation2: {
        backgroundColor: color['700'],
      },
    },
  },
};

export const DRAWER_WIDTH = 180;

export const COMPANY = 'VAVICOM';
export const ADDRESS = 'Ogrodowa 6, 05-500 Józefosław';
export const PHONE_NUMBER = '+48 602 237 246';

export const NAVIGATION = {
  home: 'home',
  services: 'services',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
};

export const OFFSET = -42;
