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
  // const { backgroundColor } = APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor;

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
  const faqCount = en.faqSection.length;

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

        {/* {[...Array(faqCount)].map((x, i) => (
          <Accordion className={accordion} expanded={expanded === i} onChange={handleChange(i)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography align="justify" style={{ maxWidth: '600px' }}>{intl.formatMessage({ id: `${obj.q}` })}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography align="justify" style={{ maxWidth: '600px' }}>{intl.formatMessage({ id: `${obj.a}` })}</Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))} */}
        {/* {en.faqSection.map((obj, i) => (

          <Accordion style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor }} expanded={expanded === i} onChange={handleChange(i)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}

            >
              <Typography align="justify" style={{ maxWidth: '600px' }}>{intl.formatMessage({ id: `${obj.q}` })}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography align="justify" style={{ maxWidth: '600px' }}>{intl.formatMessage({ id: `${obj.a}` })}</Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))} */}
        {/* <Accordion className={accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={heading}>Users</Typography>
            <Typography className={secondaryHeading}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={heading}>Advanced settings</Typography>
            <Typography className={secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
              vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={heading}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
              vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </Element>
  );
}
