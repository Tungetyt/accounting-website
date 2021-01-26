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
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import styles from './dist/ImageZoom.module.css';
import Image from './image';
import OpenMap from './open-map';

const tmp = styles;
const wrapperStyle = {
  width: '100%',
  height: '100%'
};
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
      padding: '1rem',
      margin: '1rem'
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
        <Grid
          item
          style={{
            width: '100%', height: 'auto', maxWidth: '600px'
          }}
        >
          <Paper className={paper}>
            <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.ourOffice' })}</Typography>
            <Zoom>

              <Image style={wrapperStyle} alt="our office" filename="6Ogrodowa64.jpg" />
            </Zoom>
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
