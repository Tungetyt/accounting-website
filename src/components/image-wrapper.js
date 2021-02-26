import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Paper,
  Typography, Container,
} from '@material-ui/core';
import Zoom from 'react-medium-image-zoom';
import { APP_THEME, DEFAULT_PADDING, NAVIGATION } from '../helpers';
import { ColorContext } from '../context/contexts';
import Image from './image';

/* eslint-disable comma-dangle */
const ImageWrapper = ({ imageData, label }) => {
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      marginBottom: '1rem',
    },
    image: {
      width: '100vw', maxWidth: '500px',
    },
  }));
  const {
    paper, image,
  } = useStyles();
  return (
    <Grid item className={image}>
      <Paper className={paper}>
        <Typography paragraph align="center">{label}</Typography>
        <Zoom>
          <Image alt={imageData.alt} filename={imageData.filename} />
        </Zoom>
      </Paper>
    </Grid>
  );
};

export default ImageWrapper;
