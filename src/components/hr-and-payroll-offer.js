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
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

const offerName = 'hrAndPayroll';

export function HrAndPayrollOffer() {
  const intl = useIntl();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
        >
          <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.3` })}</Typography>
          <ul>
            {Array(12).fill(null).map((line, i) => (
              <li key={i}>
                <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.services.${i}` })}</Typography>
              </li>
            ))}
          </ul>
        </Grid>

      </Grid>
      <Divider />
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item style={{ width: '600px' }}>
          <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.more.${0}` })}</Typography>
          <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.more.${1}` })}</Typography>
        </Grid>
        <Grid item style={{ width: '600px' }}>
          <Tilt>
            <Image alt="Księgowa pozuje do zdjęcia" filename="4iStock_38378140_XLARGE-scaled.jpg" />

          </Tilt>
        </Grid>

      </Grid>
      <br />
      <Divider />
      <br />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
        >
          <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'hrAndPayroll.more.2' })}</Typography>
          <ul>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'hrAndPayroll.more.3.0' })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: 'hrAndPayroll.more.3.1' })}</Typography>
            </li>

          </ul>
        </Grid>

      </Grid>
    </>
  );
}

export function HeadingChildrenHR() {
  const intl = useIntl();

  return (
    <>
      <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.0` })}</Typography>
      <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.1` })}</Typography>
      <Typography paragraph style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.2` })}</Typography>
    </>
  );
}
