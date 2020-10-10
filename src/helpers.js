import indigo from '@material-ui/core/colors/indigo';

export const localStorageKey = {
  theme: 'theme-ui-color-mode',
  language: 'language',
};
export const getItemByKeyIfPossible = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const langNames = {
  pl: 'pl',
  en: 'en',
};

export const themeNames = {
  light: 'light',
  dark: 'dark',
};

export const theme = {
  light: {
    palette: {
      type: themeNames.light,
      primary: {
        main: indigo['900'],
      },
      background: {
        default: indigo['50'],
      },
    },

  },
  dark: {
    palette: {
      type: themeNames.dark,
      primary: {
        main: indigo['50'],
      },
      background: {
        default: indigo['900'],
      },
    },
  },
};
