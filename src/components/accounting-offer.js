import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import Image from './image';
import {
  getItemByKey, LOCAL_STORAGE_KEY, langNames, APP_THEME, THEME_NAMES, DRAWER_WIDTH, COMPANY,
} from '../helpers';

import { LangContext, ColorContext } from '../context/contexts';

export default function AccountingOffer({ offer }) {
  const [expanded, setExpanded] = React.useState(false);
  const intl = useIntl();
  const [isDark, setIsDark] = useContext(ColorContext);
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
          spacing={3}
          style={{ padding: '6px', paddingBottom: '5vh' }}
        >
          <Grid item style={{ width: '600px' }}>
            {/* <div style={{ maxWidth: '3000px' }}> */}
            <Image alt="accounting image" filename="accounting_2.jpg" />
            {/* </div> */}
          </Grid>
          <Grid item>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.info.0' })}</Typography>
            <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.info.1' })}</Typography>
          </Grid>
        </Grid>
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
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.info.2' })}</Typography>
              <ul>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.0' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.1' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.2' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.3' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.4' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.6' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.services.7' })}</Typography>
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
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.more.0' })}</Typography>

            </Grid>
            <Grid item>
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.more.1' })}</Typography>
            </Grid>

          </Grid>
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
              <Typography paragraph align="justify" style={{ maxWidth: '600px' }}>{ intl.formatMessage({ id: 'accounting.more.2' })}</Typography>
              <ul>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.more.3.0' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.more.3.1' })}</Typography>
                </li>
                <li>
                  <Typography paragraph align="justify">{ intl.formatMessage({ id: 'accounting.more.3.2' })}</Typography>
                </li>

              </ul>
            </Grid>

          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}