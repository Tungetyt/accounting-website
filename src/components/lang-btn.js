import React, { useState, useContext } from 'react';
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
import dict from '../dict';
import LangBtnContent from './lang-btn-content';
import LangContext from '../context/lang-context';
import { getLanguageFromLS, localStorageKey, langNames } from '../helpers';

const LangBtn = () => {
  const [isPolishContext, setIsPolishContext] = useContext(LangContext);

  return (
    <IconButton
      aria-label="language"
      onClick={() => {
        const newLang = isPolishContext ? langNames.en : langNames.pl;
        localStorage.setItem(localStorageKey.language, newLang);
        setIsPolishContext((prevIsPolish) => !prevIsPolish);
      }}
    >
      {isPolishContext
        ? <LangBtnContent content="PL" />
        : <LangBtnContent content="EN" />}
    </IconButton>
  );
};

export default LangBtn;
