/* eslint-disable comma-dangle */
import {
  Grid, Hidden
} from '@material-ui/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import OpenMap from './open-map';

const Contact = () => {
  const intl = useIntl();

  const { contact } = NAVIGATION;
  const [isDark] = useContext(ColorContext);
  return (
    <Element name={contact}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        // spacing={10}

      >
        <Grid item style={{ marginRight: '4rem', marginBottom: '2rem' }}>
          {typeof window !== 'undefined' && (
          <>
            <Hidden smDown implementation="css">
              <OpenMap />
            </Hidden>
          </>
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
