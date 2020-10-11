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
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';
import dict from '../dict';
import LangBtn from '../components/lang-btn';
import { LangContext, ColorContext } from '../context/contexts';
import ThemeBtn from '../components/theme-btn';
import ScrollTop from '../components/scroll-top';
import {
  getItemByKeyIfPossible, localStorageKey, langNames, appTheme, themeNames,
} from '../helpers';
import ResponsiveDrawer from '../components/responsive-drawer';

const IndexPage = () => {
  const [isDark, setIsDark] = useState(
    true,
  );
  const [isPl, setIsPl] = useState(
    true,
  );

  useEffect(() => {
    setIsDark(getItemByKeyIfPossible(localStorageKey.theme) !== themeNames.light);
    setIsPl(getItemByKeyIfPossible(localStorageKey.language) !== langNames.en);
  }, []);

  const chosenTheme = createMuiTheme(isDark ? appTheme.dark : appTheme.light);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <ColorContext.Provider value={[isDark, setIsDark]}>
          <LangContext.Provider value={[isPl, setIsPl]}>

            <CssBaseline />
            <SEO title="Vavicom" lang="pl" />
            <div id="back-to-top-anchor" />
            <ResponsiveDrawer />
            <Paper />
            <main>
              <Typography color="primary">aaaaaaaaaaaaaaaaa</Typography>
              <Typography>bbbbbbbbbbbbbbbbbbbbbb</Typography>
              <Typography>cccccccccccccccc</Typography>
              <Typography>dddddddddddddddddddddddddd</Typography>
              <Typography>eeeeeeeeeeeeeeeeeeeeeee</Typography>
              <Tooltip title={dict.themeBtn[isPl ? 'pl' : 'en']} arrow TransitionComponent={Zoom} id="back-to-top-anchor">
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
              <Typography color="primary">aaaaaaaaaaaaaaaaa</Typography>
              <Typography>bbbbbbbbbbbbbbbbbbbbbb</Typography>
              <Typography>cccccccccccccccc</Typography>
              <Typography>dddddddddddddddddddddddddd</Typography>
              <Typography>eeeeeeeeeeeeeeeeeeeeeee</Typography>
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
            </main>
            <ScrollTop>
              <Tooltip placement="top" title={dict.backToTopBtn[isPl ? 'pl' : 'en']} arrow TransitionComponent={Zoom} id="back-to-top-anchor">
                <Fab color="primary" size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
                </Fab>
              </Tooltip>
            </ScrollTop>
          </LangContext.Provider>
        </ColorContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
