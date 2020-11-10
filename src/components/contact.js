import {
    Grid
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import './layout.css';
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
        justify="space-evenly"
        alignItems="center"
        spacing={5}
      >
        {typeof window !== 'undefined' && (
          <>
            <Grid item>
              <OpenMap />
            </Grid>
          </>
        )}
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          style={{ maxWidth: '600px' }}
        >
          <Grid item>

            <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor }}>
              test
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </Element>
  );
};

export default Contact;
