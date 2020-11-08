import Grid from '@material-ui/core/Grid';
import React from 'react';

const CenterWrapper = ({ children }) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid
      item
    >
      {children}
    </Grid>
  </Grid>
);

export default CenterWrapper;
