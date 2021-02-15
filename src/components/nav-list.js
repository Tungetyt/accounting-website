import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SpaIcon from '@material-ui/icons/Spa';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION, OFFSET } from '../helpers';

const NavList = () => {
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    navItemTypo: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
    icon: {
      transition: 'all 0.25s linear',
    },
    active: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
  }));

  const { active, navItemTypo, icon } = useStyles();

  function NavLink(props) {
    return (
      <ListItem
        activeClass={active}
        // spy
        smooth
        duration={0}
        ignoreCancelEvents={false}
        button
        component={Link}
        {...props}
      />
    );
  }

  const TextLink = ({ id }) => (
    <ListItemText
      disableTypography
      primary={<Typography type="body2" className={navItemTypo}>{intl.formatMessage({ id })}</Typography>}
    />
  );

  const {
    home, services, about, faq, contact, prices, career,
  } = NAVIGATION;

  return (
    <nav>
      <List>
        <NavLink to={home}>
          <ListItemIcon><HomeIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={home} />
        </NavLink>
        <NavLink to={services} offset={OFFSET}>
          <ListItemIcon><BusinessCenterIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={services} />
        </NavLink>
        <NavLink to={prices} offset={-80}>
          <ListItemIcon><LocalOfferIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={prices} />
        </NavLink>
        <NavLink to={about} offset={-90}>
          <ListItemIcon><InfoIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={about} />
        </NavLink>
        <NavLink to={faq} offset={OFFSET}>
          <ListItemIcon><HelpIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={faq} />
        </NavLink>
        <NavLink to={career} offset={-90}>
          <ListItemIcon><SpaIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={career} />
        </NavLink>
        <NavLink to={contact} offset={OFFSET}>
          <ListItemIcon><ContactPhoneIcon color="primary" className={icon} /></ListItemIcon>
          <TextLink id={contact} />
        </NavLink>
      </List>
    </nav>
  );
};

export default NavList;
