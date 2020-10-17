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
import {
  useIntl, Link, FormattedMessage, injectIntl, IntlContextConsumer, changeLocale,
} from 'gatsby-plugin-intl';
import { Location } from '@reach/router';
import TranslateIcon from '@material-ui/icons/Translate';
import SEO from './seo';
import Image from './image';
import Layout from './layout';
import LangBtnContent from './lang-btn-content';
import { LangContext } from '../context/contexts';
import { getItemByKeyIfPossible, localStorageKey, langNames } from '../helpers';

const LangBtn = ({ location }) => {
  const intl = useIntl();
  return (
    <Location>
      {({ navigate, location }) => (
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => (
            <Tooltip title={intl.formatMessage({ id: 'langBtn' })} arrow TransitionComponent={Zoom}>
              <IconButton
                aria-label="language"
                color="primary"
                onClick={() => {
                  changeLocale(location.pathname.replace(/\//g, '') === 'pl' ? 'en' : 'pl');
                }}
              >
                {/* {location.pathname.replace(/\//g, '') === 'pl' ? <LangBtnContent content="PL" /> : <LangBtnContent content="EN" />} */}
                <TranslateIcon />
              </IconButton>
            </Tooltip>
          )}
        </IntlContextConsumer>
      )}
    </Location>
  );
};

export default LangBtn;
