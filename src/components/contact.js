/* eslint-disable comma-dangle */
import {
  Box,
  Grid
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { Element } from 'react-scroll';
import { NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import OpenMap from './open-map';

const Contact = () => {
  const { contact } = NAVIGATION;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
          <Box style={{ marginRight: '4rem', marginBottom: '2rem' }}>
            <OpenMap />
          </Box>
          )}
        </Grid>

        <Grid item>
          <ContactInfo />
        </Grid>
      </Grid>
    </Element>
  );
};

export default Contact;
