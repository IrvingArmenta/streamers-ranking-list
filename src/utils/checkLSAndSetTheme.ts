import { darkTheme, defaultTheme } from 'global-styles';

const checkLSAndSetTheme = () => {
  const localStorageTheme = localStorage.getItem(
    'streamers-ranking-list/theme'
  );

  if (localStorageTheme) {
    return localStorageTheme === 'light' ? defaultTheme : darkTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? defaultTheme
    : darkTheme;
};

export default checkLSAndSetTheme;
