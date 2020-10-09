export const localStorageKey = {
  theme: 'theme-ui-color-mode',
  language: 'language',
};
export const getItemByKeyIfPossible = (item) => typeof window !== 'undefined' && window.localStorage.getItem(item);

export const langNames = {
  pl: 'pl',
  en: 'en',
};
