/* eslint-disable comma-dangle */
import {
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { DEFAULT_PADDING } from '../helpers';
import ContactInfoMainContent from './contact-info-main-content';
import SocialMedia from './social-media';

const useStyles = makeStyles(() => ({
  socialMedia: {
    marginBottom: DEFAULT_PADDING,
  }
}));

const ContactInfo = () => {
  const { socialMedia } = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={socialMedia}>
        <SocialMedia />
      </Grid>
      <Grid item>
        <ContactInfoMainContent />
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
