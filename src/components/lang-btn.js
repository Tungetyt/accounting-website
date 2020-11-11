import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import TranslateIcon from '@material-ui/icons/Translate';
import { Location } from '@reach/router';
import { changeLocale, IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const LangBtn = () => {
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
                style={{ transition: 'all 0.25s linear' }}
                onClick={() => {
                  changeLocale(location.pathname.replace(/\//g, '') === 'pl' ? 'en' : 'pl');
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
