import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME, DEFAULT_PADDING } from '../helpers';
import CenterWrapper from './center-wrapper';

const SectionWrapper = ({ children }) => {
  const [isDark] = useContext(ColorContext);
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
          <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor, paddingTop: DEFAULT_PADDING, paddingBottom: DEFAULT_PADDING }}>
            <CenterWrapper>
              {children}
            </CenterWrapper>
          </Paper>
        </Grid>

      </Grid>
    </section>
  );
};

export default SectionWrapper;
