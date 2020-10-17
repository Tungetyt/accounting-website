import indigo from '@material-ui/core/colors/indigo';

export const localStorageKey = {
  theme: 'theme-ui-color-mode',
};
export const getItemByKeyIfPossible = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const themeNames = {
  light: 'light',
  dark: 'dark',
};

export const appTheme = {
  light: {
    palette: {
      type: themeNames.light,
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
        backgroundColor: indigo['700'],
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
      elevation1: {
        backgroundColor: indigo['800'],
      },
      elevation2: {
        backgroundColor: indigo['700'],
      },
    },
  },
};

export const drawerWidth = 180;
