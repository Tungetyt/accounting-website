import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import TranslateIcon from '@material-ui/icons/Translate';
import { Location } from '@reach/router';
import { changeLocale, IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const useStyles = makeStyles(() => ({
  transition: {
    transition: 'all 0.25s linear',
  },
}));

const LangBtn = () => {
  const intl = useIntl();
  const {
    transition,
  } = useStyles();
  return (
    <Location>
      {({ navigate, location }) => (
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => (
            <Tooltip title={intl.formatMessage({ id: 'langBtn' })} arrow TransitionComponent={Zoom}>
              <IconButton
                aria-label="Zmień język"
                color="primary"
                className={transition}
                onClick={() => {
                  const urlLang = location.pathname.replace(/\//g, '');
                  const urlEnglish = 'en';
                  const urlPolish = 'pl';
                  changeLocale(urlLang === urlPolish || urlLang === '' ? urlEnglish : urlPolish);
                }}
              >
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
