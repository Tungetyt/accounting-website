import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import React, { useState } from 'react';
import { LOCAL_STORAGE_KEY, THEME_NAMES } from '../helpers';

const ThemeBtn = () => {
  const { light, dark } = THEME_NAMES;
  const { theme } = LOCAL_STORAGE_KEY;

  const [isDark, setIsDark] = useState(
    localStorage.getItem(theme) !== light,
  );
  return (
    <IconButton
      edge="end"
      color="primary"
      aria-label="Zmień kolor strony"
      onClick={() => {
        const newTheme = isDark ? light : dark;
        localStorage.setItem(theme, newTheme);
        setIsDark((prevIsDark) => !prevIsDark);
      }}
    >
      {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
    </IconButton>
  );
};

export default ThemeBtn;
