import grey from '@material-ui/core/colors/grey';

export const LOCAL_STORAGE_KEY = {
  theme: 'theme-ui-color-mode',
};
export const getItemByKey = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const THEME_NAMES = {
  light: 'light',
  dark: 'dark',
};

const color = grey;

const APP_THEME_EXTENDED = {
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        backgroundColor: color['400'],
      },
    },
  },
};

export const APP_THEME = {
  light: {
    palette: {
      type: THEME_NAMES.light,
      primary: {
        main: color['900'],
      },
      background: {
        default: color['100'],
      },
      elevation1: {
        backgroundColor: color['200'],
      },
      elevation2: {
        backgroundColor: color['300'],
      },
      elevation3: {
        backgroundColor: color['400'],
      },
    },
    ...APP_THEME_EXTENDED,
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
      elevation3: {
        backgroundColor: color['600'],
      },
    },
    ...APP_THEME_EXTENDED,
  },
};

export const DRAWER_WIDTH = 160;

export const COMPANY = 'VAVICOM';
export const STREET = 'Ogrodowa 6';
export const STREET2 = 'Grochowskiego 7';
export const TOWN = '05-500 Józefosław';
export const TOWN2 = '05-500 Piaseczno';
export const PHONE_NUMBER = '+48 606 368 694';
export const PHONE_NUMBER2 = '+48 884 267 820';
export const EMAIL = 'vavicom.info@gmail.com';
export const EMAIL2 = 'info@vavicom.pl';

export const NAVIGATION = {
  home: 'home',
  services: 'services',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
  career: 'career',
  prices: 'prices',
};

export const OFFSET = -42;

export const TITLE = 'BIURO RACHUNKOWE VAVICOM PIASECZNO JÓZEFOSŁAW KONSTANCIN WARSZAWA';
export const DESCRIPTION = 'Biuro Rachunkowe VAVICOM Piaseczno, Józefosław, Konstancin, Warszawa. Księgowość, Kadry i Płace, Podatki, Finanse, Biznes';

const commonBreakNum = 6;
export const COMMON_BREAK = `${commonBreakNum}rem`;
export const HALF_COMMON_BREAK = `${commonBreakNum / 2}rem`;

export const DEFAULT_PADDING = '2rem';
