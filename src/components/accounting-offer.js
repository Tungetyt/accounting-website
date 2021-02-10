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

const offerName = 'accounting';

export function AccountingOffer() {
  const intl = useIntl();

  const useStyles = makeStyles((theme) => ({
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    text,
  } = useStyles();
  return (
    <>
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
            <Image alt="Pełna księgowość dla firm" filename="5maxresdefault.jpg" />
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

    </>
  );
}

export function HeadingChildrenAccounting() {
  const intl = useIntl();

  const useStyles = makeStyles((theme) => ({
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    text,
  } = useStyles();
  return (
    <>
      {Array(2).fill(null).map((line, i) => (
        <Typography key={i} paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.info.${i}` })}</Typography>
      ))}
    </>
  );
}
