/* eslint-disable comma-dangle */
import {
  Container, Grid, Paper, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import styles from './dist/ImageZoom.module.css';
import MessageForm from './message-form';
import ImageWrapper from './image-wrapper';
import MapBox from './map-box';

const tmp = styles;

const Contact = () => {
  const { contact } = NAVIGATION;
  const matches = true;// useMediaQuery(theme.breakpoints.up('md'));
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      // padding: '1rem',
      marginBottom: '1rem'
    },
    paddingTop: {
      paddingTop: '1rem'
    },
    messageForm: {
      maxWidth: '450px'
    },
    image: {
      width: '100vw', maxaWidth: '500px'
    },
    gridContainer: {
      overflow: 'hidden'
    },
    responsivePadding: {
      [theme.breakpoints.up('sm')]: {
        padding: '1rem',
      },
    },
    padding: {
      padding: '1rem',
    }
  }));
  const {
    paper, paddingTop, gridContainer, messageForm, image, responsivePadding, padding
  } = useStyles();

  return (
    <Element name={contact} className={paddingTop}>
      <>
        <Container maxWidth={false}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
            className={gridContainer}
          >
            {/* <Grid item className={marginLeftRight}>
            {typeof window !== 'undefined' && matches && (
            <Box>
              <Paper className={paper}>
                <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.whereAreWe' })}</Typography>
                <OpenMap />
              </Paper>
            </Box>
            )}
          </Grid> */}
            <Grid item>
              <Paper className={`${paper} ${responsivePadding}`}>
                <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.whereAreWe' })}</Typography>
                <div>
                  <MapBox />
                </div>
              </Paper>
            </Grid>
            <Grid item className={messageForm}>
              <Paper className={`${paper} ${padding}`}>
                <MessageForm />
              </Paper>
            </Grid>
            <ImageWrapper imageData={{ filename: '6Ogrodowa64.jpg', alt: 'Nasz budynek, w którym mieści się główne biuro Vavicom' }} label={intl.formatMessage({ id: 'contactSection.ourOffice' })} />
            {/* <Grid item className={image}>
              <Paper className={paper}>
                <Typography paragraph align="center">{ intl.formatMessage({ id: 'contactSection.ourOffice' })}</Typography>
                <Zoom>
                  <Image alt="Nasz budynek, w którym mieści się główne biuro Vavicom" filename="6Ogrodowa64.jpg" />
                </Zoom>
              </Paper>
            </Grid> */}
            <Grid item>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
      </>
    </Element>
  );
};

export default Contact;
