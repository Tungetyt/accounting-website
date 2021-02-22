/* eslint-disable comma-dangle */
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
import { Element, Link } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import {
  APP_THEME, DEFAULT_PADDING, NAVIGATION, OFFSET
} from '../helpers';
import { AccountingOffer, HeadingChildrenAccounting } from './accounting-offer';
import { BusinessOffer, HeadingChildrenBusiness } from './business-offer';
import { FinancialOffer, HeadingChildrenFinancial } from './financial-offer';
import { HeadingChildrenHR, HrAndPayrollOffer } from './hr-and-payroll-offer';
import { HeadingChildrenLegal, LegalOffer } from './legal-offer';
import Offer from './offer';
import { HeadingChildrenTax, TaxServiceOffer } from './tax-services-offer';

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
  const [isDark] = useContext(ColorContext);

  const { services } = NAVIGATION;
  const intl = useIntl();
  const tooltipRight = (useMediaQuery('(min-width:600px)') ? 'auto' : 'on');

  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation1.backgroundColor,
      width: '99%',
      margin: 'auto',
      paddingBottom: DEFAULT_PADDING
    },
    tabs: {

      justifyContent: 'center',
    },
    scroller: {
      flexGrow: '0',
    },
    marginBtm: {
      marginBottom: DEFAULT_PADDING
    }
  }));
  const {
    root, tabs, scroller, marginBtm
  } = useStyles();

  const handleChange = (e, newValue) => {
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
            <Tab label={intl.formatMessage({ id: 'servicesSection.accounting' })} icon={<FontAwesomeIcon size="2x" icon={faBook} />} {...a11yProps(0)} to={services} offset={OFFSET} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.hrAndPayroll' })} icon={<FontAwesomeIcon size="2x" icon={faHandHoldingUsd} />} {...a11yProps(1)} to={services} offset={OFFSET} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.taxServices' })} icon={<FontAwesomeIcon size="2x" icon={faMoneyCheckAlt} />} {...a11yProps(2)} to={services} offset={OFFSET} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.financialServices' })} icon={<FontAwesomeIcon size="2x" icon={faSearchDollar} />} {...a11yProps(4)} to={services} offset={OFFSET} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.businessServices' })} icon={<FontAwesomeIcon size="2x" icon={faChess} />} {...a11yProps(5)} to={services} offset={OFFSET} component={Link} />
            <Tab label={intl.formatMessage({ id: 'servicesSection.legalServices' })} icon={<FontAwesomeIcon size="2x" icon={faGavel} />} {...a11yProps(3)} to={services} offset={OFFSET} component={Link} />
          </Tabs>
        </AppBar>
        <div className={marginBtm} />

        <TabPanel value={chosenTab} index={0}>
          <Offer image={{ alt: 'Księgowi dogadują się w sprawie stworzenia nowej strategii biznesowej', filename: '7finanse-i-rachunkowosc.jpg' }} headingChildren={<HeadingChildrenAccounting />}>
            <AccountingOffer />
          </Offer>
        </TabPanel>
        <TabPanel value={chosenTab} index={1}>
          <Offer image={{ alt: 'Pieniądze, kalkukator, długopis, rozliczenia', filename: '12Podatek-VAT-kiedy-decyzja-wymiarowa-Ojq7ie.jpg' }} headingChildren={<HeadingChildrenHR />}>
            <HrAndPayrollOffer />
          </Offer>
        </TabPanel>
        <TabPanel value={chosenTab} index={2}>
          <Offer image={{ alt: 'PIT, zeznania podatkowe', filename: '91022e07bbff5e0-1024x768.jpg' }} headingChildren={<HeadingChildrenTax />}>
            <TaxServiceOffer />
          </Offer>
        </TabPanel>
        <TabPanel value={chosenTab} index={3}>
          <Offer image={{ alt: 'Księgowy pokazuje urządzenia dzięki którym klient może komunikować się z firmą Vavicom', filename: '16E-biznes-po-pol-miliona-zlotych-dla-270-firm-108796-640x640.jpg' }} headingChildren={<HeadingChildrenFinancial />}>
            <FinancialOffer />
          </Offer>
        </TabPanel>
        <TabPanel value={chosenTab} index={4}>
          <Offer image={{ alt: 'Księgowy uściska dłoń klienta', filename: '14biuro-rachunkowe-szczecin.jpeg' }} headingChildren={<HeadingChildrenBusiness />}>
            <BusinessOffer />
          </Offer>
        </TabPanel>
        <TabPanel value={chosenTab} index={5}>
          <Offer image={{ alt: 'Drewniany młotek sądowy', filename: '8OIP_4x.jpg' }} headingChildren={<HeadingChildrenLegal />}>
            <LegalOffer />
          </Offer>
        </TabPanel>
      </Paper>
    </Element>
  );
}
