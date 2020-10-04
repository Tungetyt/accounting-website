import React, { useState } from 'react';
import './layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SEO from './seo';
import Image from './image';
import Layout from './layout';
import dict from '../dict';
import LangBtn from './lang-btn';
import LangContext from '../context/lang-context';

const ThemeBtn = () => {
  const localStorageKey = {
    theme: 'theme-ui-color-mode',
    language: 'language',
  };
  const themeNames = {
    light: 'light',
    dark: 'dark',
  };
  const [isDark, setIsDark] = useState(
    localStorage.getItem(localStorageKey.theme) !== themeNames.light,
  );
  return (
    <IconButton
      edge="end"
      color="primary"
      aria-label="mode"
      onClick={() => {
        const newTheme = isDark ? themeNames.light : themeNames.dark;
        localStorage.setItem(localStorageKey.theme, newTheme);
        setIsDark((prevIsDark) => !prevIsDark);
      }}
    >
      {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
    </IconButton>
  );
};

export default ThemeBtn;
