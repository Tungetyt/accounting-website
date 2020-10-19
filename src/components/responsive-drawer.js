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

function ResponsiveDrawer(props) {
  const { window } = props;
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
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
      // marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    // appBar: {
    //   backgroundColor: appTheme[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor,
    //   zIndex: theme.zIndex.drawer + 1,
    // },
    elevation2: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
    logoPaper: {
      // backgroundColor: appTheme[isDark ? 'dark' : 'light'].palette.background.default,
      // width: '400px',
      // height: '100%',
      position: 'fixed',
      marginTop: '3px',
      paddingRight: '12px',
      paddingTop: '3px',
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,

    },
    hamburger: {
      marginTop: '-3px',
      position: 'fixed',
      top: '8px',
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
  }));
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevIsMobileOpen) => !prevIsMobileOpen);
  };

  const theme = useTheme();

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
          <LangBtn props={props} />
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'home' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><BusinessCenterIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'services' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><InfoIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'about' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><HelpIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" className={classes.navItemTypo}>{intl.formatMessage({ id: 'faq' })}</Typography>}
          />
        </ListItem>
        <ListItem button onClick={() => scrollTo('#back-to-top-anchor')}>
          <ListItemIcon><ContactPhoneIcon color="primary" /></ListItemIcon>
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
    <div>

      {/* <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar> */}
      {/* <Paper className={classes.elevation2}>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>

          </Grid>

          <Grid item>

            <Typography variant="h6" noWrap color="primary">
            </Typography>

          </Grid>

        </Grid>
      </Paper> */}

      {/* </Toolbar>
      </AppBar> */}
      {/* <StickyContainer>
        <Sticky>
          {({ style }) => ( */}
      {/* <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ position: 'fixed', marginTop: '3px' }}
      >
        <Grid item> */}

      <Paper className={classes.logoPaper} elevation={0} variant="outlined">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            {/* <Logo width={50} height={50} fill="white" />
                <Brain width={50} height={50} fill="white" /> */}
            <Umbrella width={40} height={40} fill={APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              noWrap
              color="primary"
              style={{ textDecoration: 'underline', userSelect: 'none' }}
            >
              {COMPANY}

            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* </Grid>
        <Grid item> */}
      <Hidden smUp implementation="css">
        <Paper
          elevation={0}
          className={classes.hamburger}
          variant="outlined"
        >
          <Tooltip placement="top" title={intl.formatMessage({ id: 'hamburger' })} arrow TransitionComponent={Zoom}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </Hidden>

      {/* </Grid>
      </Grid> */}
      {/* )}
        </Sticky>
      </StickyContainer> */}
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
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
