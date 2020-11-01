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
import Iframe from 'react-iframe';
import {
  Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import { FacebookProvider, Page } from 'react-facebook';
import SEO from '../components/seo';
import Image from '../components/image';
import ColorBtn from '../components/color-btn';
import LangBtn from '../components/lang-btn';
import LandingPage from '../components/landing-page';

import { LangContext, ColorContext } from '../context/contexts';
import ThemeBtn from '../components/theme-btn';
import ScrollTop from '../components/scroll-top';
import {
  getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import ResponsiveDrawer from '../components/responsive-drawer';
import Logo from '../components/logo';
import TabPanel from '../components/tab-panel';
import StyledBackgroundSection from '../components/landing-image';

const IndexPage = (props) => {
  const [isDark, setIsDark] = useState(true);

  const useStyles = makeStyles((theme) => ({
    main: {
      [theme.breakpoints.up('sm')]: {
        marginRight: DRAWER_WIDTH,
      },
    },
    // contentPaper: {
    //   backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor,
    //   width: '99%',
    //   height: '1000px',
    //   margin: 'auto',
    // },
  }));

  const { main } = useStyles();

  const intl = useIntl();
  useEffect(() => {
    setIsDark(getItemByKey(LOCAL_STORAGE_KEY.theme) !== THEME_NAMES.light);
  }, []);

  let chosenTheme = createMuiTheme(isDark ? APP_THEME.dark : APP_THEME.light);
  chosenTheme = responsiveFontSizes(chosenTheme);

  const coordinates = [52.2297, 21.0122];

  const { GATSBY_FACEBOOK_APP_ID } = process.env;

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <ColorContext.Provider value={[isDark, setIsDark]}>
          <CssBaseline />
          <SEO title="Vavicom" />
          <Logo />
          <ResponsiveDrawer props={props} />
          <div id="top" />
          <main className={main}>
            <LandingPage />
            <TabPanel />
            {typeof window !== 'undefined' && (
              <>
                <br />
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    style={{ width: '99%' }}
                  >
                    <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor }}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <Map center={coordinates} zoom={13} style={{ width: '60vw', height: '60vh' }}>
                            <TileLayer
                              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            <Marker position={coordinates}>
                              <Popup>hey</Popup>
                            </Marker>
                          </Map>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                </Grid>
              </>
            )}
            {GATSBY_FACEBOOK_APP_ID && (
              <>
                <br />
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    style={{ width: '99%' }}
                  >
                    <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor }}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <FacebookProvider appId={GATSBY_FACEBOOK_APP_ID}>
                            <Page href="https://www.facebook.com/Biuro-Rachunkowe-Vavicom-J%C3%B3zefos%C5%82aw-Warszawa-100928011806919/?hc_ref=ARTxt7vKhgJpl3zZMlfTmi0KFs2ze7KOXJguAdYdJtoR1a1SFsyQG8QL-841D6dLqJc&fref=nf" tabs="timeline" />
                          </FacebookProvider>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                </Grid>
              </>
            )}
          </main>
          <ScrollTop>
            <Tooltip placement="top" title={intl.formatMessage({ id: 'backToTopBtn' })} arrow TransitionComponent={Zoom}>
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
