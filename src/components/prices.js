/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';

const Prices = () => {
  const { prices } = NAVIGATION;
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
  const sectionName = 'pricesSection';
  return (
    <Element name={prices}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

        <Grid
          item
        >
          <Paper className={paper}>
            <ul>
              {Array(3).fill(null).map((line, i) => (
                <li key={i}>
                  <Typography paragraph>{ intl.formatMessage({ id: `${sectionName}.prices.${i}` })}</Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={paper}>
            {Array(2).fill(null).map((line, i) => (
              <Typography key={i} paragraph>{ intl.formatMessage({ id: `${sectionName}.specialOffer.${i}` })}</Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Prices;
