import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import './layout.css';

const SectionWrapper = ({ children }) => {
  const [isDark, setIsDark] = useContext(ColorContext);

  return (
    <section>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          style={{ width: '99%' }}
        >
          <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                {children}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

      </Grid>
    </section>
  );
};

export default SectionWrapper;
