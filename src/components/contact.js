/* eslint-disable comma-dangle */
import {
  Box,
  Grid,
  Paper,
  Typography, Container
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION, DEFAULT_PADDING } from '../helpers';
import ContactInfo from './contact-info';
import styles from './dist/ImageZoom.module.css';
import Image from './image';
import OpenMap from './open-map';
import GoogleMap from './map';

const tmp = styles;
const wrapperStyle = {
  // width: '600px'
};
const Contact = () => {
  const { contact } = NAVIGATION;
  const theme = useTheme();
  const matches = true;// useMediaQuery(theme.breakpoints.up('md'));
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      marginBottom: '1rem'
    }
  }));
  const { paper } = useStyles();

  return (
    <Element name={contact} style={{ paddingTop: '1rem' }}>
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item style={{ margin: DEFAULT_PADDING }}>
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
              width: '100vw', maxWidth: '500px'
            }}
          >
            <Paper
              className={paper}
              style={{
              }}
            >
              <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.ourOffice' })}</Typography>
              <Zoom>
                <Image alt="Nasz budynek, w którym mieści się główne biuro Vavicom" filename="6Ogrodowa64.jpg" />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item style={{ margin: DEFAULT_PADDING }}>
            <ContactInfo />
          </Grid>
        </Grid>
      </>
    </Element>
  );
};

export default Contact;
