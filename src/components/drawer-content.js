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
import NavList from './nav-list';

const DrawerContent = () => {
  const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
  }));
  const classes = useStyles();
  return (
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
      <NavList />
    </div>
  );
};

export default DrawerContent;
