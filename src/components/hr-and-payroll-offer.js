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

export default function HrAndPayrollOffer() {
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
  }));
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const offerName = 'hrAndPayroll';

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleExpandClick}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing="3"
          style={{ padding: '6px' }}
        >
          <Grid item style={{ width: '600px' }}>
            <Tilt>
              <Image alt="hr and payroll" filename="12Podatek-VAT-kiedy-decyzja-wymiarowa-Ojq7ie.jpg" />
            </Tilt>
          </Grid>
          <Grid item>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.0` })}</Typography>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.1` })}</Typography>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.2` })}</Typography>
          </Grid>

        </Grid>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
            >
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: `${offerName}.info.3` })}</Typography>
              <ul>
                {Array(12).fill(null).map((line, i) => (
                  <li key={i}>
                    <Typography paragraph align="justify">{ intl.formatMessage({ id: `${offerName}.services.${i}` })}</Typography>
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
              <Typography paragraph align="justify">{ intl.formatMessage({ id: `${offerName}.more.${0}` })}</Typography>
              <Typography paragraph align="justify">{ intl.formatMessage({ id: `${offerName}.more.${1}` })}</Typography>
            </Grid>
            <Grid item style={{ width: '600px' }}>
              <Tilt>
                <Image alt="more hr and payroll" filename="4iStock_38378140_XLARGE-scaled.jpg" />

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
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'hrAndPayroll.more.2' })}</Typography>
              <ul>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'hrAndPayroll.more.3.0' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'hrAndPayroll.more.3.1' })}</Typography>
                </li>

              </ul>
            </Grid>

          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
