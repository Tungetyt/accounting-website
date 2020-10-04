export const localStorageKey = {
  theme: 'theme-ui-color-mode',
  language: 'language',
};

export const getLanguageFromLS = () => localStorage.getItem(localStorageKey.language);

export const langNames = {
  pl: 'pl',
  en: 'en',
};
