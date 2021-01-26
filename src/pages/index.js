import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useState } from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Faq from '../components/faq';
import Career from '../components/career';
import LandingPage from '../components/landing-page';
import '../components/layout.css';
import Logo from '../components/logo';
import Prices from '../components/prices';
import ResponsiveDrawer from '../components/responsive-drawer';
import ScrollTop from '../components/scroll-top';
import SectionWrapper from '../components/section-wrapper';
import SEO from '../components/seo';
import TabPanel from '../components/tab-panel';
import { ColorContext } from '../context/contexts';
import {
  // eslint-disable-next-line comma-dangle
  APP_THEME, DESCRIPTION, DRAWER_WIDTH, getItemByKey, LOCAL_STORAGE_KEY, THEME_NAMES
} from '../helpers';

const IndexPage = (props) => {
  // init value for isDark does not matter. The value is set in useEffect anyway.
  const [isDark, setIsDark] = useState(true);

  const useStyles = makeStyles((theme) => ({
    main: {
      [theme.breakpoints.up('lg')]: {
        marginRight: DRAWER_WIDTH,
      },
    },
  }));

  const { main } = useStyles();

  const intl = useIntl();
  useEffect(() => {
    setIsDark(getItemByKey(LOCAL_STORAGE_KEY.theme) !== THEME_NAMES.light);
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
          <ResponsiveDrawer props={props} />
          <div id="top" />
          <main className={main}>
            <LandingPage />
            <br />
            <br />
            <br />
            <TabPanel />
            <br />
            <br />
            <SectionWrapper>
              <Prices />
            </SectionWrapper>
            <br />
            <SectionWrapper>
              <br />
              <About />
              <br />
            </SectionWrapper>
            <br />
            <SectionWrapper>
              <Faq />
            </SectionWrapper>
            <br />
            <SectionWrapper>
              <Career />
            </SectionWrapper>
            <br />
            <SectionWrapper>
              <Contact />
            </SectionWrapper>
          </main>
          <ScrollTop>
            <Tooltip placement="top" title={intl.formatMessage({ id: 'backToTopBtn' })} arrow TransitionComponent={Zoom}>
              <Fab color="primary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </Tooltip>
          </ScrollTop>
        </ColorContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
