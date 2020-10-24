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
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Box, Grid, Paper } from '@material-ui/core';
import {
  useIntl, Link, FormattedMessage, injectIntl, IntlContextConsumer, changeLocale,
} from 'gatsby-plugin-intl';
import { StickyContainer, Sticky } from 'react-sticky';
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

const MainNav = (props) => {
  const { handleDrawerToggle, isMobileOpen } = props;
  const { window } = props;

  const [isDark, setIsDark] = useContext(ColorContext);
  const intl = useIntl();

  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
      transition: 'all 0.25s linear',
    },
    elevation2: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
    hamburger: {
      marginTop: '-3px',
      position: 'fixed',
      top: '6px',
      right: isMobileOpen ? '25px' : '8px',
      paddingLeft: '12px',
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
    },
    background: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
    },
    toolbar: theme.mixins.toolbar,
    navItemTypo: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
    icon: {
      transition: 'all 0.25s linear',
    },
  }));
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={0}
      >
        <Grid item>
          <ColorBtn />
        </Grid>
        <Grid item>
          <LangBtn />
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><HomeIcon color="primary" className={classes.icon} /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'home' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><BusinessCenterIcon color="primary" className={classes.icon} /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'services' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><InfoIcon color="primary" className={classes.icon} /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'about' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><HelpIcon color="primary" className={classes.icon} /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'faq' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><ContactPhoneIcon color="primary" className={classes.icon} /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'contact' })}</Typography>}
          />
        </ListItem>
      </List>
    </div>
  );
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
          {drawer}
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
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default MainNav;
