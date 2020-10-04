export const localStorageKey = {
  theme: 'theme-ui-color-mode',
  language: 'language',
};

export const getLanguageFromLS = () => localStorage.getItem(localStorageKey.language);
