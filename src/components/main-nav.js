import React, { useState, useContext } from 'react';
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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { red, yellow } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HelpIcon from '@material-ui/icons/Help';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Box, Grid, Paper } from '@material-ui/core';
import {
  useIntl, Link, FormattedMessage, injectIntl, IntlContextConsumer, changeLocale,
} from 'gatsby-plugin-intl';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { LangContext, ColorContext } from '../context/contexts';
import {
  getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import Umbrella from '../images/umbrella.svg';

import ColorBtn from './color-btn';
import LangBtn from './lang-btn';
import Logo from './logo';
import Hamburger from './hamburger';
import DrawerContent from './drawer-content';

const MainNav = (props) => {
  const { handleDrawerToggle, isMobileOpen, window } = props;

  const [isDark, setIsDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
      transition: 'all 0.25s linear',
    },
  }));
  const classes = useStyles();

  const container = window !== undefined ? () => window().document.body : undefined;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          container={container}
          variant="temporary"
          anchor="right"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <DrawerContent />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          anchor="right"
          open
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </nav>
  );
};

MainNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainNav;
