/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
import {
  Grid, IconButton, Tooltip
} from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import {
  aboutBtn, clientValueBtn, getToKnowUsBtn, ourClientsBtn, safetyBtn, whatDifferBtn, whyCooperateBtn, workTogetherBtn
} from '../intl/pl.json';
import DialogInfo from './dialog-info';
import SectionWrapper from './section-wrapper';

const About = () => {
  const { GATSBY_FACEBOOK_APP_ID } = process.env;
  const intl = useIntl();
  const aboutData = Object.values(aboutBtn).slice(0, -1);
  const clientValueData = Object.values(clientValueBtn).slice(0, -1);
  const whyCooperateData = Object.values(whyCooperateBtn).slice(0, -1);
  const whatDifferData = Object.values(whatDifferBtn).slice(0, -1);
  const getToKnowUsData = Object.values(getToKnowUsBtn).slice(0, -1);
  const workTogetherData = Object.values(workTogetherBtn).slice(0, -1);
  const safetyData = Object.values(safetyBtn).slice(0, -1);
  const ourClientsData = Object.values(ourClientsBtn).slice(0, -1);

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      spacing={5}
    >
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ maxWidth: '600px' }}
      >
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'aboutBtn.title' })} data={aboutData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'clientValueBtn.title' })} data={clientValueData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'whyCooperateBtn.title' })} data={whyCooperateData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'whatDifferBtn.title' })} data={whatDifferData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'getToKnowUsBtn.title' })} data={getToKnowUsData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'workTogetherBtn.title' })} data={workTogetherData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'safetyBtn.title' })} data={safetyData} />
        </Grid>
        <Grid item>
          <DialogInfo title={intl.formatMessage({ id: 'ourClientsBtn.title' })} data={ourClientsData} isJustified={false} />
        </Grid>

      </Grid>
      <Grid
        item
      >
        {GATSBY_FACEBOOK_APP_ID && (
          <>
            <br />
            <SectionWrapper>
              <FacebookProvider appId={GATSBY_FACEBOOK_APP_ID}>
                <Page href="https://www.facebook.com/Biuro-Rachunkowe-Vavicom-J%C3%B3zefos%C5%82aw-Warszawa-100928011806919/?hc_ref=ARTxt7vKhgJpl3zZMlfTmi0KFs2ze7KOXJguAdYdJtoR1a1SFsyQG8QL-841D6dLqJc&fref=nf" tabs="timeline" />
              </FacebookProvider>
            </SectionWrapper>
          </>
        )}
      </Grid>
      <Grid item>
        <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
          <IconButton
            tooltip="LinkedIn"
            linkButton
            href="https://www.linkedin.com/company/accounting-office-vavicom/"
          >

            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default About;
