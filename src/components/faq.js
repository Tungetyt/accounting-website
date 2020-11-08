import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import { faqSection } from '../intl/en.json';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
    },
    accordion: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    root, accordion, text,
  } = useStyles();
  const { faq } = NAVIGATION;
  const intl = useIntl();

  return (
    <Element name={faq}>
      <div className={root}>
        {faqSection.map((f, i) => (
          <Accordion
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={accordion}
            expanded={expanded === i}
            onChange={handleChange(i)}
          >
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
