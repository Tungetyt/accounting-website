/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
import {
  faCoins, faGlobeEurope, faHandshake, faHardHat
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid, Paper,
  Box,
  Typography, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import StarIcon from '@material-ui/icons/Star';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import Zoom from 'react-medium-image-zoom';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION, COMMON_BREAK } from '../helpers';
import LogoIcon from '../images/logo.svg';
import {
  aboutBtn,
  clientValueBtn,
  getToKnowUsBtn,
  ourClientsBtn,
  safetyBtn,
  whatDifferBtn,
  whyCooperateBtn,
  workTogetherBtn
} from '../intl/pl.json';
import DialogInfo from './dialog-info';
import ImageWrapper from './image-wrapper';

import Image from './image';

const About = () => {
  const intl = useIntl();
  const aboutData = Object.values(aboutBtn).slice(0, -1);
  const clientValueData = Object.values(clientValueBtn).slice(0, -1);
  const whyCooperateData = Object.values(whyCooperateBtn).slice(0, -1);
  const whatDifferData = Object.values(whatDifferBtn).slice(0, -1);
  const getToKnowUsData = Object.values(getToKnowUsBtn).slice(0, -1);
  const workTogetherData = Object.values(workTogetherBtn).slice(0, -1);
  const safetyData = Object.values(safetyBtn).slice(0, -1);
  const ourClientsData = Object.values(ourClientsBtn).slice(0, -1);
  const { about } = NAVIGATION;
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      margin: '5%'
    },
    responsiveWidth: {
      [theme.breakpoints.up('sm')]: {
        minWidth: '400px',
        maxWidth: '800px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '5rem'
      },
    },
    margin: {
      margin: '1rem'
    },
  }));

  const {
    paper, responsiveWidth, margin
  } = useStyles();

  const logoIconSize = 25;

  return (
    <Element name={about}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // spacing={4}
        // className={gridContainer}
      >
        <Grid item>
          <Paper className={paper}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid
                container
                item
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                className={responsiveWidth}
              >
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'aboutBtn.title' })} data={aboutData} isJustified={false}>
                    <LogoIcon width={logoIconSize} height={logoIconSize} />
                  </DialogInfo>
                </Grid>

                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'ourClientsBtn.title' })} data={ourClientsData} isJustified={false}>
                    <FontAwesomeIcon size="lg" icon={faGlobeEurope} />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'whatDifferBtn.title' })} data={whatDifferData} isJustified={false}>
                    <StarIcon />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'getToKnowUsBtn.title' })} data={getToKnowUsData} isJustified={false}>
                    <GroupIcon />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'clientValueBtn.title' })} data={clientValueData} isJustified={false}>
                    <FontAwesomeIcon size="lg" icon={faCoins} />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'safetyBtn.title' })} data={safetyData} isJustified={false}>
                    <FontAwesomeIcon size="lg" icon={faHardHat} />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'workTogetherBtn.title' })} data={workTogetherData} isJustified={false}>
                    <FontAwesomeIcon size="lg" icon={faHandshake} />
                  </DialogInfo>
                </Grid>
                <Grid item className={margin}>
                  <DialogInfo title={intl.formatMessage({ id: 'whyCooperateBtn.title' })} data={whyCooperateData} isJustified={false}>
                    <LiveHelpIcon />
                  </DialogInfo>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <ImageWrapper imageData={{ filename: 'optima_logo.png', alt: 'System księgowy Optima Comarch' }} label="UŻYWAMY NOWOCZESNEGO SYSTEMU KSIĘGOWEGO" />

        {/* <Grid item>
          <Paper className={paper}>
            <SwipeableTextMobileStepper />
          </Paper>
        </Grid> */}
      </Grid>
    </Element>
  );
};

export default About;
