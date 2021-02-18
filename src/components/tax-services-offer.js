import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from './image';

const useStyles = makeStyles((theme) => ({
  maxWidth: {
    maxWidth: '600px',
  },
  width: {
    width: '600px',
  },
}));
export function TaxServiceOffer() {
  const intl = useIntl();
  const {
    maxWidth, width,
  } = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: 'taxServices.info1.0' })}</Typography>
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
        <Grid item className={width}>
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
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: 'taxServices.info1.4' })}</Typography>
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
  const {
    maxWidth,
  } = useStyles();
  return (
    <>
      <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: 'taxServices.info.0' })}</Typography>
      <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: 'taxServices.info.1' })}</Typography>
    </>
  );
}
