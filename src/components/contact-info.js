/* eslint-disable comma-dangle */
import {
  Grid
} from '@material-ui/core';
import React from 'react';
import ContactInfoMainContent from './contact-info-main-content';
import SocialMedia from './social-media';

const ContactInfo = () => (
  <Grid container direction="column">
    <Grid item style={{ marginBottom: '2rem' }}>
      <SocialMedia />
    </Grid>
    <Grid item>
      <ContactInfoMainContent />
    </Grid>
  </Grid>
);

export default ContactInfo;
