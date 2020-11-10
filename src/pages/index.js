import {
  ThemeProvider
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useState } from 'react';
import About from '../components/about';
import Faq from '../components/faq';
import LandingPage from '../components/landing-page';
import '../components/layout.css';
import Logo from '../components/logo';
import OpenMap from '../components/open-map';
import ResponsiveDrawer from '../components/responsive-drawer';
import ScrollTop from '../components/scroll-top';
import SectionWrapper from '../components/section-wrapper';
import SEO from '../components/seo';
import TabPanel from '../components/tab-panel';
import { ColorContext } from '../context/contexts';
import {
  // eslint-disable-next-line comma-dangle
  APP_THEME, COMPANY, DRAWER_WIDTH, getItemByKey, LOCAL_STORAGE_KEY, THEME_NAMES
} from '../helpers';

const IndexPage = (props) => {
  const [isDark, setIsDark] = useState(true);

  const useStyles = makeStyles((theme) => ({
    main: {
      [theme.breakpoints.up('sm')]: {
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

  // const { GATSBY_FACEBOOK_APP_ID } = process.env;

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <ColorContext.Provider value={[isDark, setIsDark]}>
          <CssBaseline />
          <SEO title={COMPANY} />
          <Logo />
          <ResponsiveDrawer props={props} />
          <div id="top" />
          <main className={main}>
            <LandingPage />
            <TabPanel />
            <br />
            <SectionWrapper>
              <About />
            </SectionWrapper>
            <br />
            <SectionWrapper>
              <Faq />
            </SectionWrapper>
            {/* {GATSBY_FACEBOOK_APP_ID && (
              <>
                <br />
                <SectionWrapper>
                  <FacebookProvider appId={GATSBY_FACEBOOK_APP_ID}>
                    <Page href="https://www.facebook.com/Biuro-Rachunkowe-Vavicom-J%C3%B3zefos%C5%82aw-Warszawa-100928011806919/?hc_ref=ARTxt7vKhgJpl3zZMlfTmi0KFs2ze7KOXJguAdYdJtoR1a1SFsyQG8QL-841D6dLqJc&fref=nf" tabs="timeline" />
                  </FacebookProvider>
                </SectionWrapper>
              </>
            )} */}
            {typeof window !== 'undefined' && (
              <>
                <br />
                <SectionWrapper>
                  <OpenMap />
                </SectionWrapper>
              </>
            )}
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
