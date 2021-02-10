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
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

export function TaxServiceOffer() {
  const intl = useIntl();

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info1.0' })}</Typography>
          <ul>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.info1.1' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.info1.2' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.info1.3' })}</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item style={{ width: '300px' }}>
          <Tilt>
            <Image alt="Doradca podatkowy pozuje do zdjęcia" filename="3cropped-O6YV1W0-1.jpg" />
          </Tilt>
        </Grid>

      </Grid>
      <br />

      <Divider />
      <br />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid
          item
        >
          <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info1.4' })}</Typography>
          <ul>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.0' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.1' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.2' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.3' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.4' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.5' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'taxServices.services.6' })}</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export function HeadingChildrenTax() {
  const intl = useIntl();
  return (
    <>
      <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info.0' })}</Typography>
      <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info.1' })}</Typography>
    </>
  );
}
