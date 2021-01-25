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
import DataTable from './data-table';

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
          <DataTable />
        </Grid>
        <Grid item>
          <Paper
            className={paper}
            style={{ maxWidth: '600px' }}
          >
            <br />
            <br />
            {Array(2).fill(null).map((line, i) => (
              <Typography
                key={i}
                color={isDark ? '#FFFFFFF' : '#000000'}
                paragraph
              >
                { intl.formatMessage({ id: `${sectionName}.specialOffer.${i}` })}
              </Typography>
            ))}
            <br />
          </Paper>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Prices;
