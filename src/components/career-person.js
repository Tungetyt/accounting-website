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
      <Grid item>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          wrap="nowrap"
          style={{ marginBottom: '0.5rem' }}
        >
          <Grid item style={{ marginRight: '1rem' }}>
            <Avatar style={{
              height: '3rem',
              width: '3rem',
            }}
            />
          </Grid>
          <Grid item>

            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default CareerPerson;
