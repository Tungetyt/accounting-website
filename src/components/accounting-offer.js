/* eslint-disable react/no-array-index-key */
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import Tilt from 'react-parallax-tilt';
import Zoom from 'react-medium-image-zoom';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import CenterWrapper from './center-wrapper';
import Image from './image';

export default function AccountingOffer() {
  const [expanded, setExpanded] = React.useState(false);
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    text, root, expand, expandOpen,
  } = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const offerName = 'accounting';

  return (
    <Card className={root}>
      <CardActionArea onClick={handleExpandClick}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          style={{ padding: '6px' }}
        >
          <Grid item style={{ width: '600px' }}>
            <div className="container">
              <div className="containerimg">
                <Image alt="accounting" filename="7finanse-i-rachunkowosc.jpg" />
              </div>
            </div>
          </Grid>
          <Grid item>
            {Array(2).fill(null).map((line, i) => (
              <Typography key={i} paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.info.${i}` })}</Typography>
            ))}

          </Grid>
        </Grid>
        <IconButton
          className={clsx(expand, {
            [expandOpen]: expanded,
          })}
          style={{ float: 'right' }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CenterWrapper>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.info.2` })}</Typography>
            <ul>
              {Array(8).fill(null).map((line, i) => (
                <li key={i}>
                  <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.services.${i}` })}</Typography>
                </li>
              ))}
            </ul>
          </CenterWrapper>

          <Divider />
          <br />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <div style={{ columnWidth: '600px' }}>
                <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.more.0` })}</Typography>
                <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.more.1` })}</Typography>
              </div>
            </Grid>
            <Grid item style={{ width: '600px' }}>
              <Tilt>
                <Image alt="accouting fire" filename="5maxresdefault.jpg" />
              </Tilt>
            </Grid>
          </Grid>
          <br />

          <Divider />
          <br />
          <CenterWrapper>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: 'accounting.more.2' })}</Typography>
            <ul>
              {Array(3).fill(null).map((line, i) => (
                <li key={i}>
                  <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.more.3.${i}` })}</Typography>
                </li>
              ))}
            </ul>
          </CenterWrapper>

        </CardContent>
      </Collapse>
    </Card>
  );
}
