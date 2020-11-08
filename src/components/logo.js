import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME, COMPANY } from '../helpers';
import LogoIcon from '../images/logo.svg';

const Logo = () => {
  const [isDark, setIsDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    logoPaper: {
      position: 'fixed',
      marginTop: '3px',
      paddingRight: '12px',
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
      >
        <Grid item>
          {/* <Logo width={50} height={50} fill="white" />
                <Brain width={50} height={50} fill="white" /> */}
          <LogoIcon width={40} height={30} />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            noWrap
            color="primary"
            // style={{ textDecoration: 'underline', userSelect: 'none' }}
          >
            {COMPANY}

          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Logo;
