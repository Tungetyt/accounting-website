import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const AVATAR_SIZE = '2.5rem';
const useStyles = makeStyles(() => ({
  marginBottom: {
    marginBottom: '0.5rem',
  },
  marginRight: {
    marginRight: '12px',
  },
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
  },
}));
const CareerPerson = ({ children }) => {
  const {
    marginBottom, marginRight, avatar,
  } = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={marginBottom}
      >
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={marginBottom}
        >
          <Grid item className={marginRight}>
            <Avatar className={avatar} />
          </Grid>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CareerPerson;
