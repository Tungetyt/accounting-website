import React, { useState } from 'react';
import './layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SEO from './seo';
import Image from './image';
import Layout from './layout';
import { getItemByKeyIfPossible, localStorageKey } from '../helpers';

const useStyles = makeStyles({
  btn: {
    fontWeight: 'bold',
  },
});
const LangBtnContent = ({ content }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography noWrap className={classes.btn} color="primary">{content}</Typography>
    </div>
  );
};

export default LangBtnContent;
