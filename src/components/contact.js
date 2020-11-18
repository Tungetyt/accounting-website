/* eslint-disable comma-dangle */
import {
  Box,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import Image from './image';
import OpenMap from './open-map';

const Contact = () => {
  const { contact } = NAVIGATION;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  // const classes = useStyles();
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem'
    }
  }));
  const { paper } = useStyles();

  return (
    <Element name={contact}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          {typeof window !== 'undefined' && matches && (
          <Box>
            <Paper className={paper}>
              <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.whereAreWe' })}</Typography>
              <OpenMap />
            </Paper>
          </Box>
          )}
        </Grid>
        <Grid item>
          <Paper className={paper} style={{ width: '600px' }}>
            <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.ourOffice' })}</Typography>
            <Image alt="our office" filename="6Ogrodowa64.jpg" />
          </Paper>
        </Grid>
        <Grid item>
          <ContactInfo />
        </Grid>
      </Grid>
    </Element>
  );
};

export default Contact;
