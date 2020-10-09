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
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import SEO from './seo';
import Image from './image';
import Layout from './layout';
import dict from '../dict';
import LangBtnContent from './lang-btn-content';
import LangContext from '../context/lang-context';
import { getItemByKeyIfPossible, localStorageKey, langNames } from '../helpers';

const LangBtn = () => {
  const [isPl, setIsPl] = useContext(LangContext);

  return (
    <Tooltip title={dict.langBtn[isPl ? 'pl' : 'en']} arrow TransitionComponent={Zoom}>

      <IconButton
        aria-label="language"
        onClick={() => {
          const newLang = isPl ? langNames.en : langNames.pl;
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(localStorageKey.language, newLang);
          }
          setIsPl((prevIsPolish) => !prevIsPolish);
        }}
      >
        {isPl
          ? <LangBtnContent content="PL" />
          : <LangBtnContent content="EN" />}
      </IconButton>
    </Tooltip>
  );
};

export default LangBtn;
