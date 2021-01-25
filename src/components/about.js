/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
import {
  Grid, Paper
} from '@material-ui/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeEurope, faHardHat, faHandshake, faCoins
} from '@fortawesome/free-solid-svg-icons';
import GroupIcon from '@material-ui/icons/Group';
import StarIcon from '@material-ui/icons/Star';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { ColorContext } from '../context/contexts';
import {
  APP_THEME, NAVIGATION
} from '../helpers';
import {
  aboutBtn, clientValueBtn, getToKnowUsBtn, ourClientsBtn, safetyBtn, whatDifferBtn, whyCooperateBtn, workTogetherBtn
} from '../intl/pl.json';
import DialogInfo from './dialog-info';
import LogoIcon from '../images/logo.svg';

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
  const margin = '1rem';
  const [isDark] = useContext(ColorContext);

  return (
    <Element name={about}>
      <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor, padding: '1rem' }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            style={{ maxWidth: '600px' }}
          >
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'aboutBtn.title' })} data={aboutData} isJustified={false}>
                <LogoIcon width={25} height={25} />

              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'clientValueBtn.title' })} data={clientValueData} isJustified={false}>
                <FontAwesomeIcon size="lg" icon={faCoins} />
              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'whyCooperateBtn.title' })} data={whyCooperateData} isJustified={false}>
                <LiveHelpIcon />
              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'whatDifferBtn.title' })} data={whatDifferData} isJustified={false}>
                <StarIcon />
              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'getToKnowUsBtn.title' })} data={getToKnowUsData} isJustified={false}>
                <GroupIcon />
              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'workTogetherBtn.title' })} data={workTogetherData} isJustified={false}>
                <FontAwesomeIcon size="lg" icon={faHandshake} />

              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'safetyBtn.title' })} data={safetyData} isJustified={false}>
                <FontAwesomeIcon size="lg" icon={faHardHat} />
              </DialogInfo>
            </Grid>
            <Grid item style={{ margin }}>
              <DialogInfo title={intl.formatMessage({ id: 'ourClientsBtn.title' })} data={ourClientsData} isJustified={false}>
                <FontAwesomeIcon size="lg" icon={faGlobeEurope} />
              </DialogInfo>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Element>
  );
};

export default About;
