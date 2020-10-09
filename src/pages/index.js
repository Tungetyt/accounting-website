import React, { useState, useEffect } from 'react';
import '../components/layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import indigo from '@material-ui/core/colors/indigo';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';
import dict from '../dict';
import LangBtn from '../components/lang-btn';
import LangContext from '../context/lang-context';
import ThemeBtn from '../components/theme-btn';
import { getItemByKeyIfPossible, localStorageKey, langNames } from '../helpers';

const IndexPage = () => {
  const themeNames = {
    light: 'light',
    dark: 'dark',
  };

  const theme = {
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

  const [isDark, setIsDark] = useState(
    // localStorage.getItem(localStorageKey.theme) !== themeNames.light,
    // true,
    getItemByKeyIfPossible(localStorageKey.theme) !== themeNames.light,
  );
  const [isPl, setIsPl] = useState(
    // localStorage.getItem(localStorageKey.language) !== langNames.en,
    // true,
    getItemByKeyIfPossible(localStorageKey.language) !== langNames.en,
  );

  // useEffect(() => {
  //   setIsDark(typeof window !== 'undefined' && window.localStorage.getItem(localStorageKey.theme) !== themeNames.light);
  //   setIsPl(localStorage.getItem(localStorageKey.language) !== langNames.en);
  // }, []);

  const chosenTheme = createMuiTheme(isDark ? theme.dark : theme.light);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <CssBaseline />
        <SEO title="Home" />
        <LangContext.Provider value={[isPl, setIsPl]}>
          <Tooltip title={dict.themeBtn[isPl ? 'pl' : 'en']} arrow TransitionComponent={Zoom}>
            <IconButton
              edge="end"
              color="primary"
              aria-label="mode"
              onClick={() => {
                const newTheme = isDark ? themeNames.light : themeNames.dark;
                if (typeof window !== 'undefined') {
                  window.localStorage.setItem(localStorageKey.theme, newTheme);
                }
                setIsDark((prevIsDark) => !prevIsDark);
              }}
            >
              {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
            </IconButton>
          </Tooltip>
          <LangBtn />
          <Typography>{dict.test[isPl ? 'pl' : 'en']}</Typography>
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
