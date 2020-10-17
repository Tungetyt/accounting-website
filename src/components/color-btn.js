import React, {
  useState, useContext, useEffect, useLayoutEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { red, yellow } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HelpIcon from '@material-ui/icons/Help';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Grid, Paper, ThemeProvider } from '@material-ui/core';
import { LangContext, ColorContext } from '../context/contexts';
import {
  getItemByKeyIfPossible, localStorageKey, langNames, appTheme, themeNames, drawerWidth,
} from '../helpers';
import Brain from '../images/Brain_Drawing.svg';
import './layout.css';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import indigo from '@material-ui/core/colors/indigo';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  useIntl, Link, FormattedMessage, injectIntl, IntlContextConsumer, changeLocale,
} from 'gatsby-plugin-intl';
import ScrollTop from './scroll-top';
import ThemeBtn from './theme-btn';
import LangBtn from './lang-btn';
import Layout from './layout';
import Image from './image';
import SEO from './seo';
import ResponsiveDrawer from './responsive-drawer';

const ColorBtn = () => {
  const [isDark, setIsDark] = useContext(ColorContext);
  const intl = useIntl();

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const newTheme = isDark ? themeNames.dark : themeNames.light;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(localStorageKey.theme, newTheme);
    }
  }, [isDark]);

  return (
    <Tooltip title={intl.formatMessage({ id: 'themeBtn' })} arrow TransitionComponent={Zoom} id="back-to-top-anchor">
      <IconButton
        edge="end"
        color="primary"
        aria-label="mode"
        onClick={() => {
          setIsDark((prevIsDark) => !prevIsDark);
        }}
      >
        {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorBtn;
