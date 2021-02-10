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

const offerName = 'businessServices';
export function BusinessOffer() {
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
          <div style={{ columnWidth: '600px' }}>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.10` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.11` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.12` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.13` })}</Typography>
            <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.14` })}</Typography>
          </div>
        </Grid>
        <Grid item style={{ width: '300px' }}>
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
  const useStyles = makeStyles((theme) => ({

    text: {
      maxWidth: '600px',
    },
  }));
  const {
    text,
  } = useStyles();

  return (
    <Typography paragraph className={text}>{ intl.formatMessage({ id: `${offerName}.0` })}</Typography>
  );
}
