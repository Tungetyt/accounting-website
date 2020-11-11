import {
  Grid, IconButton, Tooltip
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
        justify="center"
        alignItems="center"
        // spacing={10}

      >
        <Grid item>
          {typeof window !== 'undefined' && (
          <>
            <OpenMap />
          </>
          )}
        </Grid>
        <Grid
          item
          direction="row"
          justify="center"
          alignItems="center"
          style={{ maxWidth: '600px' }}
        >
          <Grid item>
            <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor }}>
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="center"
                style={{ maxWidth: '600px' }}
              >
                <Grid item xs={2}>
                  <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
                    <IconButton
                      tooltip="LinkedIn"
                      linkButton
                      href="https://www.linkedin.com/company/accounting-office-vavicom/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
                    <IconButton
                      tooltip="LinkedIn"
                      linkButton
                      href="https://www.linkedin.com/company/accounting-office-vavicom/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
                    <IconButton
                      tooltip="LinkedIn"
                      linkButton
                      href="https://www.linkedin.com/company/accounting-office-vavicom/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
                    <IconButton
                      tooltip="LinkedIn"
                      linkButton
                      href="https://www.linkedin.com/company/accounting-office-vavicom/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Contact;
