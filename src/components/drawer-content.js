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
        {/* <Grid item>
          <LangBtn />
        </Grid> */}
      </Grid>
      <br />

      <Divider />
      <NavList />

      {/* <FacebookProvider appId="1038343519927187">
        <Page href="https://www.facebook.com/Biuro-Rachunkowe-Vavicom-J%C3%B3zefos%C5%82aw-Warszawa-100928011806919/?hc_ref=ARTxt7vKhgJpl3zZMlfTmi0KFs2ze7KOXJguAdYdJtoR1a1SFsyQG8QL-841D6dLqJc&fref=nf" tabs="timeline" />
      </FacebookProvider> */}
    </div>
  );
};

export default DrawerContent;
