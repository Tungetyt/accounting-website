import React, { useState } from 'react';
import '../components/layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';
import dict from '../dict';
import LangBtn from '../components/lang-btn';
import LangContext from '../context/lang-context';
import ThemeBtn from '../components/theme-btn';

const IndexPage = () => {
  const color = {
    white: '#ffffff',
    blue: '#152f70',
  };

  const themeNames = {
    light: 'light',
    dark: 'dark',
  };

  const langNames = {
    pl: 'pl',
    en: 'en',
  };

  const theme = {
    light: {
      palette: {
        type: themeNames.light,
        primary: {
          main: color.blue,
        },
        background: {
          default: color.white,
        },
      },
    },
    dark: {
      palette: {
        type: themeNames.dark,
        primary: {
          main: color.white,
        },
        background: {
          default: color.blue,
        },
      },
    },
  };

  const localStorageKey = {
    theme: 'theme-ui-color-mode',
    language: 'language',
  };

  const [isDark, setIsDark] = useState(
    localStorage.getItem(localStorageKey.theme) !== themeNames.light,
  );
  const [isPolishContext, setIsPolishContext] = useState(
    localStorage.getItem(localStorageKey.language) !== langNames.en,
  );

  const chosenTheme = createMuiTheme(isDark ? theme.dark : theme.light);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <CssBaseline />
        <SEO title="Home" />
        <LangContext.Provider value={[isPolishContext, setIsPolishContext]}>
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
          <LangBtn />
          <Typography>{dict.test[isPolishContext ? 'pl' : 'en']}</Typography>
          <Typography color="primary">aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
          <Typography>aaaaaaaaaaaaaaaaa</Typography>
        </LangContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
