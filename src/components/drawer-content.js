import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ColorBtn from './color-btn';
import LangBtn from './lang-btn';
import NavList from './nav-list';

const DrawerContent = () => {
  const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
  }));

  const { toolbar } = useStyles();

  return (
    <div>
      <div className={toolbar} />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <ColorBtn />
        </Grid>
      </Grid>
      <br />

      <Divider />
      <NavList />
    </div>
  );
};

export default DrawerContent;
