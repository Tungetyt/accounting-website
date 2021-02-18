/* eslint-disable comma-dangle */
import {
  Box,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, DEFAULT_PADDING, NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import styles from './dist/ImageZoom.module.css';
import Image from './image';
import MessageForm from './message-form';
import OpenMap from './open-map';

const tmp = styles;

const Contact = () => {
  const { contact } = NAVIGATION;
  const matches = true;// useMediaQuery(theme.breakpoints.up('md'));
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      marginBottom: '1rem'
    },
    paddingTop: {
      paddingTop: '1rem'
    },
    marginLeftRight: {
      marginLeft: DEFAULT_PADDING, marginRight: DEFAULT_PADDING
    },
    messageForm: {
      maxWidth: '450px'
    },
    image: {
      width: '100vw', maxWidth: '500px'
    },
    contactInfo: {
      margin: DEFAULT_PADDING
    }
  }));
  const {
    paper, paddingTop, marginLeftRight, messageForm, image, contactInfo
  } = useStyles();

  return (
    <Element name={contact} className={paddingTop}>
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item className={marginLeftRight}>
            {typeof window !== 'undefined' && matches && (
            <Box>
              <Paper className={paper}>
                <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.whereAreWe' })}</Typography>
                <OpenMap />
              </Paper>
            </Box>
            )}
          </Grid>
          <Grid item className={messageForm}>
            <Paper className={paper}>
              <MessageForm />
            </Paper>
          </Grid>
          <Grid item className={image}>
            <Paper className={paper}>
              <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.ourOffice' })}</Typography>
              <Zoom>
                <Image alt="Nasz budynek, w którym mieści się główne biuro Vavicom" filename="6Ogrodowa64.jpg" />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item className={contactInfo}>
            <ContactInfo />
          </Grid>
        </Grid>
      </>
    </Element>
  );
};

export default Contact;
