import React, {
  useState, useEffect, useContext,
} from 'react'; import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Element, Events, animateScroll as scroll, scrollSpy, Link,
} from 'react-scroll';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import {
  NAVIGATION, getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';
import { LangContext, ColorContext } from '../context/contexts';
import en from '../intl/en.json';
import FaqQuestion from './faq-question';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [isDark, setIsDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordion: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    root, heading, secondaryHeading, accordion, text,
  } = useStyles();
  const { faq } = NAVIGATION;
  const intl = useIntl();

  return (
    <Element name={faq}>
      <div className={root}>
        {en.faqSection.map((f, i) => (
          <Accordion className={accordion} expanded={expanded === i} onChange={handleChange(i)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography align="justify" className={text}>{intl.formatMessage({ id: `faqSection.${i}.${Object.keys(f)[0]}` })}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography align="justify" className={text}>{intl.formatMessage({ id: `faqSection.${i}.${Object.keys(f)[1]}` })}</Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Element>
  );
}
