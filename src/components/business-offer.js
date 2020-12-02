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
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

export default function BusinessOffer() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            businessImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            business2Image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            businessServices
          }
        }
      }
    }
  }
`);
  const allMarkdownRemark = data?.allMarkdownRemark;
  const frontmatter0 = allMarkdownRemark
    ?.edges[0]
    ?.node
    ?.frontmatter;
  const { businessServices } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;

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
    text: {
      maxWidth: '600px',
    },
  }));
  const {
    text, root, expand, expandOpen,
  } = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const offerName = 'businessServices';

  return (
    <Card className={root}>
      <CardActionArea onClick={handleExpandClick}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
          style={{ padding: '6px' }}
        >
          <Grid item style={{ width: '600px' }}>
            <Tilt>
              {/* <Image alt="business" filename="14biuro-rachunkowe-szczecin.jpeg" /> */}
              <Img fluid={frontmatter0?.businessImage
                ?.childImageSharp
                ?.fluid}
              />
            </Tilt>

          </Grid>
          <Grid item>
            <Typography paragraph className={text}>{ businessServices[0]}</Typography>
          </Grid>
        </Grid>
        <IconButton
          className={clsx(expand, {
            [expandOpen]: expanded,
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
              <Typography paragraph className={text}>{ businessServices[1]}</Typography>
              <ul>
                <li>
                  <Typography paragraph>{businessServices[2]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[3]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[4]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[5]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[6]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[7]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{businessServices[8]}</Typography>
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
                <Typography paragraph className={text}>{businessServices[10]}</Typography>
                <Typography paragraph className={text}>{businessServices[11]}</Typography>
                <Typography paragraph className={text}>{businessServices[12]}</Typography>
                <Typography paragraph className={text}>{businessServices[13]}</Typography>
                <Typography paragraph className={text}>{businessServices[14]}</Typography>
                <Typography paragraph className={text}>...</Typography>
              </div>
            </Grid>
            <Grid item style={{ width: '300px' }}>
              <Tilt>
                {/* <Image alt="more business" filename="11Biznes.jpg" /> */}
                <Img fluid={frontmatter0?.business2Image
                  ?.childImageSharp
                  ?.fluid}
                />
              </Tilt>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
