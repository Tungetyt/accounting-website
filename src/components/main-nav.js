import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME, DRAWER_WIDTH } from '../helpers';
import DrawerContent from './drawer-content';

const MainNav = (props) => {
  const { handleDrawerToggle, isMobileOpen, window } = props;

  const [isDark] = useContext(ColorContext);

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

  const { drawer, drawerPaper } = useStyles();

  const container = window !== undefined ? () => window().document.body : undefined;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className={drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {/* <Hidden mdUp implementation="css"> */}
      <SwipeableDrawer
        container={container}
        variant="temporary"
        anchor="right"
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        classes={{
          paper: drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <DrawerContent />
      </SwipeableDrawer>
      {/* </Hidden> */}
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: drawerPaper,
          }}
          variant="permanent"
          anchor="right"
          open
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </div>
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
