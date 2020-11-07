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
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import { FacebookProvider, Page } from 'react-facebook';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import SEO from './seo';
import Image from './image';
import ColorBtn from './color-btn';
import LangBtn from './lang-btn';
import LandingPage from './landing-page';

import { LangContext, ColorContext } from '../context/contexts';
import ThemeBtn from './theme-btn';
import ScrollTop from './scroll-top';
import {
  getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import ResponsiveDrawer from './responsive-drawer';
import Logo from './logo';
import TabPanel from './tab-panel';
import Banner from './banner';
import Faq from './faq';

const SectionWrapper = ({ children }) => {
  const [isDark, setIsDark] = useContext(ColorContext);

  return (
    <section>
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
                {children}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </section>
  );
};

export default SectionWrapper;
