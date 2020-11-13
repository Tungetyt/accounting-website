/* eslint-disable comma-dangle */
import {
    Grid, Typography
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import {
    APP_THEME, EMAIL, EMAIL2, PHONE_NUMBER
} from '../helpers';

const ContactInfoMainContent = () => {
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);

  return (
    <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor, padding: '1rem' }}>
      <Grid container direction="column">
        <Grid item style={{ marginBottom: '1rem' }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Grid item style={{ marginRight: '12px' }}>
              <BusinessIcon />
            </Grid>
            <Grid item>
              <Typography>
                {intl.formatMessage({ id: 'contactSection.name' })}
              </Typography>
              <Typography>
                {intl.formatMessage({ id: 'contactSection.street' })}
              </Typography>
              <Typography>
                {intl.formatMessage({ id: 'contactSection.town' })}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: '1rem' }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Grid item style={{ marginRight: '12px' }}>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <Typography>
                {PHONE_NUMBER}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Grid item style={{ marginRight: '12px' }}>
              <EmailIcon />
            </Grid>
            <Grid item>
              <Typography>
                {EMAIL}
              </Typography>
              <Typography>
                {EMAIL2}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactInfoMainContent;
