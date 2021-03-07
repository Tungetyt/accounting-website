import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TabPanel from './tab-panel';
import SEO from './seo';
import About from './about';
import { ColorContext } from '../context/contexts';
import {
  APP_THEME,
  COMMON_BREAK,
  DEFAULT_THEME,
  DESCRIPTION,
  DRAWER_WIDTH,
  getItemByKey,
  HALF_COMMON_BREAK, LOCAL_STORAGE_KEY,
  THEME_DICT,
} from '../helpers';
import Logo from './logo';
import ResponsiveDrawer from './responsive-drawer';
import ScrollTop from './scroll-top';

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('lg')]: {
      marginRight: DRAWER_WIDTH,
    },
  },
  commonBreak: {
    marginBottom: '15rem',
  },
  halfCommonBreak: {
    marginBottom: HALF_COMMON_BREAK,
  },
}));

const Layout = ({ children }) => {
  const { main, halfCommonBreak, commonBreak } = useStyles();

  const intl = useIntl();

  const [isDark, setIsDark] = useState(DEFAULT_THEME === THEME_DICT.dark);
  useEffect(() => {
    setIsDark(() => {
      const currLSColor = getItemByKey(LOCAL_STORAGE_KEY.theme);
      const { light, dark } = THEME_DICT;
      if (DEFAULT_THEME === dark) {
        return currLSColor !== light;
      }
      return currLSColor === light;
    });
  }, []);

  let chosenTheme = createMuiTheme(isDark ? APP_THEME.dark : APP_THEME.light);
  chosenTheme = responsiveFontSizes(chosenTheme);
  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <ColorContext.Provider value={[isDark, setIsDark]}>
          <CssBaseline />
          <SEO title="Biuro rachunkowe" description={DESCRIPTION} />
          <Logo />
          <ResponsiveDrawer />
          <div id="top"><p>&nbsp;</p></div>
          <main className={main}>
            <div className={halfCommonBreak} />
            {children}
          </main>
          <ScrollTop>
            <Tooltip placement="top" title={intl.formatMessage({ id: 'backToTopBtn' })} arrow TransitionComponent={Zoom}>
              <Fab color="primary" size="small" aria-label="Idź na samą górę strony">
                <KeyboardArrowUpIcon />
              </Fab>
            </Tooltip>
          </ScrollTop>
        </ColorContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
