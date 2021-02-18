import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from './image';

const offerName = 'businessServices';

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: '600px',
  },
  columnWidth: {
    columnWidth: '600px',
  },
  width: {
    width: '300px',
  },
}));

export function BusinessOffer() {
  const intl = useIntl();

  const {
    text, columnWidth, width,
  } = useStyles();

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
          <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.1` })}</Typography>
          <ul>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.2` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.3` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.4` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.5` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.6` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.7` })}</Typography>
            </li>
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.8` })}</Typography>
            </li>
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
        <Grid item>
          <div className={columnWidth}>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.10` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.11` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.12` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.13` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.14` })}</Typography>
          </div>
        </Grid>
        <Grid item className={width}>
          <Tilt>
            <Image alt="Księgowy tworzy wykres danych" filename="11Biznes.jpg" />
          </Tilt>
        </Grid>
      </Grid>
    </>
  );
}

export function HeadingChildrenBusiness() {
  const intl = useIntl();

  const {
    text,
  } = useStyles();

  return (
    <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.0` })}</Typography>
  );
}
