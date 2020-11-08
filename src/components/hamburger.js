import { Paper } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  useIntl
} from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';

const Hamburger = ({ handleDrawerToggle, isMobileOpen }) => {
  const intl = useIntl();
  const [isDark, setIsDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    hamburger: {
      marginTop: '-3px',
      position: 'fixed',
      top: '6px',
      right: isMobileOpen ? '25px' : '8px',
      paddingLeft: '12px',
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
      zIndex: '1100',
    },
  }));

  const { menuButton, hamburger } = useStyles();

  return (
    <Hidden smUp implementation="css">
      <Paper
        elevation={0}
        className={hamburger}
        variant="outlined"
      >
        <Tooltip placement="top" title={intl.formatMessage({ id: 'hamburger' })} arrow TransitionComponent={Zoom}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Paper>
    </Hidden>
  );
};

export default Hamburger;
