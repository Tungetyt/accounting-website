import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import CenterWrapper from './center-wrapper';
import Image from './image';

const offerName = 'legalServices';
const useStyles = makeStyles((theme) => ({
  maxWidth: {
    maxWidth: '600px',
  },
  columnWidth: {
    columnWidth: '600px',
  },
  width: {
    width: '600px',
  },
}));

export function LegalOffer() {
  const intl = useIntl();

  const {
    maxWidth, columnWidth, width,
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
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.2` })}</Typography>
          <ul>
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
            <li>
              <Typography paragraph>{ intl.formatMessage({ id: `${offerName}.9` })}</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Divider />
      <br />
      <CenterWrapper>

        <div className={columnWidth}>
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.10` })}</Typography>
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.11` })}</Typography>
          <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.12` })}</Typography>

        </div>

      </CenterWrapper>

      <CenterWrapper>
        <Tilt className={width}>
          <Image alt="Uścisk dłoni pod nową ofertę" filename="15Zawieszenie_dzialalnosci_5843057.jpg" />
        </Tilt>

      </CenterWrapper>
    </>
  );
}

export function HeadingChildrenLegal() {
  const intl = useIntl();
  const {
    maxWidth,
  } = useStyles();

  return (
    <>
      <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.0` })}</Typography>
      <Typography paragraph className={maxWidth}>{ intl.formatMessage({ id: `${offerName}.1` })}</Typography>
    </>

  );
}
