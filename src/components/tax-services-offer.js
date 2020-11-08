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
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

export default function TaxServiceOffer() {
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
            <Image alt="taxServices image" filename="2366512.jpg" />
          </Grid>
          <Grid item>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info.0' })}</Typography>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info.1' })}</Typography>
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
            alignItems="center"
            justify="center"
          >
            <Grid
              item
            >
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info1.0' })}</Typography>
              <ul>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.info1.1' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.info1.2' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.info1.3' })}</Typography>
                </li>
              </ul>
            </Grid>

          </Grid>
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
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'taxServices.info1.4' })}</Typography>
              <ul>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.0' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.1' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.2' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.3' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.4' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.5' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'taxServices.services.6' })}</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
