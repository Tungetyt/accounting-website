import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext, useLayoutEffect, useRef } from 'react';
import { ColorContext } from '../context/contexts';
import { LOCAL_STORAGE_KEY, THEME_DICT } from '../helpers';

const useStyles = makeStyles(() => ({
  transition: {
    transition: 'all 0.25s linear',
  },
}));

const ColorBtn = () => {
  const [isDark, setIsDark] = useContext(ColorContext);
  const intl = useIntl();
  const firstUpdate = useRef(true);
  const { light, dark } = THEME_DICT;
  const { theme } = LOCAL_STORAGE_KEY;

  const {
    transition,
  } = useStyles();

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const newTheme = isDark ? dark : light;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(theme, newTheme);
    }
  }, [isDark]);

  return (
    <Tooltip title={intl.formatMessage({ id: 'themeBtn' })} arrow TransitionComponent={Zoom}>
      <IconButton
        edge="end"
        color="primary"
        aria-label="mode"
        className={transition}
        onClick={() => {
          setIsDark((prevIsDark) => !prevIsDark);
        }}
      >
        {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorBtn;
