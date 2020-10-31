import React, {
  useState, useEffect, useStyles, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import {
  Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import {
  NAVIGATION, getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import OfferCard from './offer-card';
import { LangContext, ColorContext } from '../context/contexts';
import Image from './image';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const [isDark, setIsDark] = useContext(ColorContext);

  const { services } = NAVIGATION;
  const intl = useIntl();

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor,
      width: '99%',
      margin: 'auto',
    },
    tabs: {
      justifyContent: 'center',
    },
    scroller: {
      flexGrow: '0',
    },
  }));
  const { root, tabs, scroller } = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Element name={services} id={services}>
      <Paper className={root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor={APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            classes={{ root: tabs, scroller }}
          >
            <Tab label={intl.formatMessage({ id: 'servicesSection.accounting' })} icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.hrAndPayroll' })} icon={<FavoriteIcon />} {...a11yProps(1)} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.taxServices' })} icon={<PersonPinIcon />} {...a11yProps(2)} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.legalServices' })} icon={<HelpIcon />} {...a11yProps(3)} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.financialServices' })} icon={<ShoppingBasket />} {...a11yProps(4)} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.businessServices' })} icon={<ThumbDown />} {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <OfferCard offer="accounting" />

        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
      </Paper>
    </Element>
  );
}
