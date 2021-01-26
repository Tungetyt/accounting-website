import { Avatar, Grid } from '@material-ui/core';
import React from 'react';

const CareerPerson = ({ children }) => (
  <div>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{ marginBottom: '0.5rem' }}
    >
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginBottom: '0.5rem' }}
      >
        <Grid item style={{ marginRight: '12px' }}>
          <Avatar style={{
            height: '2.5rem',
            width: '2.5rem',
          }}
          />
        </Grid>
        <Grid item>

          {children}
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default CareerPerson;
