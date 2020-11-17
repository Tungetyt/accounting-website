/* eslint-disable comma-dangle */
import {
  Grid
} from '@material-ui/core';
import React from 'react';
import { Element } from 'react-scroll';
import { NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';

const Contact = () => {
  const { contact } = NAVIGATION;
  return (
    <Element name={contact}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* <Grid item>
          {typeof window !== 'undefined' && (
          <>
            <Hidden smDown implementation="css">
              <Box style={{ marginRight: '4rem', marginBottom: '2rem' }}>
                <OpenMap />
              </Box>
            </Hidden>
          </>
          )}
        </Grid> */}

        <Grid item>
          <ContactInfo />
        </Grid>
      </Grid>
    </Element>
  );
};

export default Contact;
