import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME, COMPANY } from '../helpers';
import LogoIcon from '../images/logo.svg';

const Logo = () => {
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles(() => ({
    logoPaper: {
      position: 'fixed',
      marginTop: '3px',
      paddingRight: '4px',
      paddingLeft: '4px',
      paddingTop: '3px',
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.background.default,
      zIndex: '1100',
    },
  }));

  const { logoPaper } = useStyles();

  return (
    <Paper className={logoPaper} elevation={0} variant="outlined">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={1}
        wrap="nowrap"
      >
        <Grid item>

          <LogoIcon width={40} height={30} />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            noWrap
            color="primary"
          >
            {COMPANY}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Logo;
