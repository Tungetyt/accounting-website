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
import {
  getItemByKeyIfPossible, localStorageKey, langNames, appTheme, themeNames, drawerWidth,
} from '../helpers';
import { LangContext, ColorContext } from '../context/contexts';
import dict from '../dict';

function ResponsiveDrawer(props) {
  const { window } = props;
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isDark, setIsDark] = useContext(ColorContext);
  const [isPl, setIsPl] = useContext(LangContext);

  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: appTheme[isDark ? 'dark' : 'light'].palette.zeroElevation.backgroundColor,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    appBar: {
      opacity: 0.85,
      backgroundColor: appTheme[isDark ? 'dark' : 'light'].palette.zeroElevation.backgroundColor,
    },
    // listItemText: {
    //   primary:
    // }

  }));
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setIsMobileOpen((prevIsMobileOpen) => !prevIsMobileOpen);
  };

  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon><InboxIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color: theme.palette.primary.main }}>MyTitle</Typography>}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color: theme.palette.primary.main }}>{dict.services[isPl ? 'pl' : 'en']}</Typography>}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color: theme.palette.primary.main }}>MyTitle</Typography>}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon color="primary" /></ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography type="body2" style={{ color: theme.palette.primary.main }}>MyTitle</Typography>}
          />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <div className={classes.root}>

      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap color="primary">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>

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
