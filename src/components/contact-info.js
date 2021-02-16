/* eslint-disable comma-dangle */
import {
  Grid
} from '@material-ui/core';
import React from 'react';
import ContactInfoMainContent from './contact-info-main-content';
import SocialMedia from './social-media';
import { DEFAULT_PADDING } from '../helpers';

const ContactInfo = () => (
  <Grid container direction="column">
    <Grid item style={{ marginBottom: DEFAULT_PADDING }}>
      <SocialMedia />
    </Grid>
    <Grid item>
      <ContactInfoMainContent />
    </Grid>
  </Grid>
);

export default ContactInfo;
