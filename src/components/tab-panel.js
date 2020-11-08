import {
  faBook, faChess, faGavel, faHandHoldingUsd, faMoneyCheckAlt, faSearchDollar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {
  Element, Link
} from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import AccountingOffer from './accounting-offer';
import HrAndPayrollOffer from './hr-and-payroll-offer';
import TaxServiceOffer from './tax-services-offer';

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
          {children}
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
  const [chosenTab, setChosenTab] = React.useState(0);
  const [isDark, setIsDark] = useContext(ColorContext);

  const { services } = NAVIGATION;
  const intl = useIntl();
  const tooltipRight = (useMediaQuery('(min-width:600px)') ? 'auto' : 'on');

  const useStyles = makeStyles(() => ({
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
    setChosenTab(newValue);
  };

  return (
    <Element name={services} id={services}>
      <Paper className={root}>
        <AppBar position="static" color="default">
          <Tabs
            value={chosenTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor={APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main}
            variant="scrollable"
            scrollButtons={tooltipRight}
            aria-label="scrollable auto tabs example"
            classes={{ root: tabs, scroller }}
          >
            <Tab label={intl.formatMessage({ id: 'servicesSection.accounting' })} icon={<FontAwesomeIcon size="lg" icon={faBook} />} {...a11yProps(0)} to={services} offset={-53} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.hrAndPayroll' })} icon={<FontAwesomeIcon size="lg" icon={faHandHoldingUsd} />} {...a11yProps(1)} to={services} offset={-53} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.taxServices' })} icon={<FontAwesomeIcon size="lg" icon={faMoneyCheckAlt} />} {...a11yProps(2)} to={services} offset={-53} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.legalServices' })} icon={<FontAwesomeIcon icon={faGavel} />} {...a11yProps(3)} to={services} offset={-53} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.financialServices' })} icon={<FontAwesomeIcon size="lg" icon={faSearchDollar} />} {...a11yProps(4)} to={services} offset={-53} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.businessServices' })} icon={<FontAwesomeIcon size="lg" icon={faChess} />} {...a11yProps(5)} to={services} offset={-53} component={Link} />
          </Tabs>
        </AppBar>
        <TabPanel value={chosenTab} index={0}>
          <AccountingOffer />

        </TabPanel>
        <TabPanel value={chosenTab} index={1}>
          <HrAndPayrollOffer />
        </TabPanel>
        <TabPanel value={chosenTab} index={2}>
          <TaxServiceOffer />
        </TabPanel>
        <TabPanel value={chosenTab} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={chosenTab} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={chosenTab} index={5}>
          Item Six
        </TabPanel>
      </Paper>
    </Element>
  );
}
