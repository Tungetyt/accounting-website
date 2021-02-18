/* eslint-disable comma-dangle */
import {
  Grid, Typography
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import {
  APP_THEME, EMAIL2, PHONE_NUMBER, PHONE_NUMBER2
} from '../helpers';

const ContactInfoMainContent = () => {
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    typoSpace: {
      marginBottom: '0.4rem'
    },
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor, padding: '1rem'
    },
    marginBottom: {
      marginBottom: '1rem'
    },
    marginRight: {
      marginRight: '12px'
    }
  }));
  const color = isDark ? '#FFFFFF' : 'primary';
  const {
    typoSpace, paper, marginBottom, marginRight
  } = useStyles();
  return (
    <Paper className={paper}>
      <Grid container direction="column">
        <Grid item className={marginBottom}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item className={marginRight}>
              <BusinessIcon color={color} />
            </Grid>
            <Grid item>
              <Typography color={color} className={typoSpace}>
                {intl.formatMessage({ id: 'contactSection.name' })}
              </Typography>
              <Typography color={color}>
                {intl.formatMessage({ id: 'contactSection.street' })}
              </Typography>
              <Typography color={color} className={typoSpace}>
                {intl.formatMessage({ id: 'contactSection.town' })}
              </Typography>
              <Typography color={color}>
                {intl.formatMessage({ id: 'contactSection.street2' })}
              </Typography>
              <Typography color={color}>
                {intl.formatMessage({ id: 'contactSection.town2' })}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={marginBottom}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Grid item className={marginRight}>
              <PhoneIcon color={color} />
            </Grid>
            <Grid item>
              <Typography color={color}>
                {PHONE_NUMBER2}
              </Typography>
              <Typography color={color}>
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
            <Grid item className={marginRight}>
              <EmailIcon color={color} />
            </Grid>
            <Grid item>
              <Typography color={color}>
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
