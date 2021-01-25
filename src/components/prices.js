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
  // const color1 = APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main;
  // const color2 = APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main;

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
          <Paper className={paper}>
            <br />
            <br />
            {/* <div style={{
 width: '20px', height: '20px', marginRight: '1rem', marginBottom: '1rem', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 0 60px 30px #fff,  \n    0 0 100px 60px #f0f, \n    0 0 140px 90px #0ff'
}}
            /> */}
            {Array(2).fill(null).map((line, i) => (
              <Typography
                key={i}
                color={isDark ? '#FFFFFFF' : '#000000'}
//                 style={{
//  marginLeft: '1%', marginRight: '1%', textAlign: 'center', textShadow: `0 0 5px ${color1}, 0 0 10px ${color1}, 0 0 15px ${color2}, 0 0 20px ${color2}, 0 0 25px ${color2}, 0 0 30px ${color2}, 0 0 35px ${color2}`
// }}
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
