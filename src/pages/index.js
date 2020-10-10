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
import LangContext from '../context/lang-context';
import ThemeBtn from '../components/theme-btn';
import { getItemByKeyIfPossible, localStorageKey, langNames } from '../helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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
    true,
    // getItemByKeyIfPossible(localStorageKey.theme) !== themeNames.light,
  );
  const [isPl, setIsPl] = useState(
    true,
    // getItemByKeyIfPossible(localStorageKey.language) !== langNames.en,
  );

  useEffect(() => {
    setIsDark(getItemByKeyIfPossible(localStorageKey.theme) !== themeNames.light);
    setIsPl(getItemByKeyIfPossible(localStorageKey.language) !== langNames.en);
  }, []);

  const chosenTheme = createMuiTheme(isDark ? theme.dark : theme.light);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <CssBaseline />
        <SEO title="Vavicom" lang="pl" />
        <div id="back-to-top-anchor" />
        <LangContext.Provider value={[isPl, setIsPl]}>
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
          <Typography>{dict.test[isPl ? 'pl' : 'en']}</Typography>
          <Typography color="primary">aaaaaaaaaaaaaaaaa</Typography>
          <Brightness7Icon />
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
          <ScrollTop>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </LangContext.Provider>

      </ThemeProvider>
    </>
  );
};

export default IndexPage;
