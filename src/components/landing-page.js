import React, { useState, useEffect, useContext } from 'react';
import './layout.css';
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
import { FacebookProvider, Page } from 'react-facebook';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import SEO from './seo';
import Image from './image';
import ColorBtn from './color-btn';
import LangBtn from './lang-btn';
import Umbrella from '../images/umbrella.svg';

import { LangContext, ColorContext } from '../context/contexts';
import ThemeBtn from './theme-btn';
import ScrollTop from './scroll-top';
import {
  NAVIGATION, getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import ResponsiveDrawer from './responsive-drawer';

const LandingPage = () => {
  const intl = useIntl();
  const [isDark, setIsDark] = useContext(ColorContext);

  const { home } = NAVIGATION;

  return (
    <Element name={home} id={home}>
      {/* <Card>
        fjidsahfiodsaoighdsaioghiodsaahgiosdhaiofhio
        <CardMedia
          component={Image}
          alt="accounting image"
          filename="landing.jpg"
          title="Paella dish"
        />
      </Card> */}
      {/* <div style={{ width: '1000px', height: '1000px' }}>
        <Image alt="accounting image" filename="landing.jpg" />
      </div> */}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{
          paddingTop: '30vh', paddingBottom: '70vh', marginBottom: '53px',
        }}
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
              spacing={1}
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

    </Element>
  );
};

export default LandingPage;
