import React, { useState, useEffect } from 'react';
import '../components/layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider, Button, Grid, Hidden,
} from '@material-ui/core';
import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
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
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';
import ColorBtn from '../components/color-btn';
import LangBtn from '../components/lang-btn';
import Umbrella from '../images/umbrella.svg';

import { LangContext, ColorContext } from '../context/contexts';
import ThemeBtn from '../components/theme-btn';
import ScrollTop from '../components/scroll-top';
import {
  getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import ResponsiveDrawer from '../components/responsive-drawer';

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      marginRight: DRAWER_WIDTH,
    },
  },
  // landingTitle: {
  //   [theme.breakpoints.up('xs')]: {
  //     marginRight: DRAWER_WIDTH,
  //   },
  // },
}));

const IndexPage = (props) => {
  const [isDark, setIsDark] = useState(
    true,
  );
  const classes = useStyles();

  const intl = useIntl();
  useEffect(() => {
    setIsDark(getItemByKey(LOCAL_STORAGE_KEY.theme) !== THEME_NAMES.light);
  }, []);

  let chosenTheme = createMuiTheme(isDark ? APP_THEME.dark : APP_THEME.light);
  chosenTheme = responsiveFontSizes(chosenTheme);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <ColorContext.Provider value={[isDark, setIsDark]}>
          <CssBaseline />
          <SEO title="Vavicom" />
          <div id="back-to-top-anchor" />
          <ResponsiveDrawer props={props} />
          <main className={classes.main}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              style={{ paddingTop: '30vh', backgroundColor: 'green' }}
            >
              <Grid item>
                <Typography variant="h3" color="primary" style={{ lineHeight: '90%', userSelect: 'none' }}>
                  {intl.formatMessage({ id: 'landing.first' })}
                  <br />
                  {intl.formatMessage({ id: 'landing.second' })}
                  <br />
                  {intl.formatMessage({ id: 'landing.third' })}
                </Typography>
              </Grid>
              <Hidden mdDown implementation="css">
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item>
                      <Umbrella width={80} height={80} fill={APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h3"
                        noWrap
                        color="primary"
                        style={{ textDecoration: 'underline', userSelect: 'none' }}
                      >
                        {COMPANY}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            <Typography color="primary">aaaaaaaaaaaaaaaaa</Typography>
            <Typography>bbbbbbbbbbbbbbbbbbbbbb</Typography>
            <Typography>cccccccccccccccc</Typography>
            <Typography>dddddddddddddddddddddddddd</Typography>
            <Typography>eeeeeeeeeeeeeeeeeeeeeee</Typography>
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
            <Typography style={{ wordWrap: 'break-word' }}>dnasuoindasjijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdmisadlias mdlksamndlsa ndlkasndlasnn</Typography>
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
            <Tooltip placement="top" title={intl.formatMessage({ id: 'backToTopBtn' })} arrow TransitionComponent={Zoom} id="back-to-top-anchor">
              <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </Tooltip>
          </ScrollTop>
        </ColorContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
