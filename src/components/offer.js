/* eslint-disable react/no-array-index-key */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

export default function Offer({ image, headingChildren, children }) {
  const [expanded, setExpanded] = React.useState(false);
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
    text: {
      maxWidth: '600px',
    },
    padding: {
      padding: '6px',
    },
    width: {
      width: '600px',
    },
    borderRadius: {
      marginTop: '2.5rem', borderRadius: '50%', overflow: 'hidden',
    },
    containerImg: {
      display: 'block',
      transition: 'transform .4s',
      '&:hover': {
        transform: 'scale(1.3)',
        transformOrigin: '50% 50%',
      },
    },
    floatRight: {
      float: 'right',
    },
  }));
  const {
    root, expand, expandOpen, padding, width, borderRadius, containerImg, floatRight,
  } = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={root}>
      <CardActionArea onClick={handleExpandClick}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          className={padding}
        >
          <Grid item className={width}>
            <div className={borderRadius}>
              <div className={containerImg}>
                <Image alt={image.alt} filename={image.filename} />
              </div>
            </div>
          </Grid>
          <Grid item>
            {headingChildren}
          </Grid>
        </Grid>
        <IconButton
          className={clsx(expand, {
            [expandOpen]: expanded,
          }, floatRight)}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Pokaż więcej"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
}
