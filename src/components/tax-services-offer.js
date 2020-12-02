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

export default function TaxServiceOffer() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            taxesImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            taxes2Image {
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
            taxServices {
              info
              info1
              more {
                _0
              }
              services
            }
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
  const { taxServices } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;
  console.log('taxServices', taxServices);
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
            <Tilt>
              {/* <Image alt="tax services" filename="91022e07bbff5e0-1024x768.jpg" /> */}
              <Img fluid={frontmatter0?.taxesImage
                ?.childImageSharp
                ?.fluid}
              />
            </Tilt>
          </Grid>
          <Grid item>
            <Typography paragraph style={{ maxWidth: '600px' }}>{ taxServices.info[0]}</Typography>
            <Typography paragraph style={{ maxWidth: '600px' }}>{ taxServices.info[1]}</Typography>
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
            <Grid item>
              <Typography paragraph style={{ maxWidth: '600px' }}>{ taxServices.info1[0]}</Typography>
              <ul>
                <li>
                  <Typography paragraph>{ taxServices.info1[1]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{taxServices.info1[2]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{ taxServices.info1[3]}</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item style={{ width: '300px' }}>
              <Tilt>
                {/* <Image alt="more tax services" filename="3cropped-O6YV1W0-1.jpg" /> */}
                <Img fluid={frontmatter0?.taxes2Image
                  ?.childImageSharp
                  ?.fluid}
                />
              </Tilt>
            </Grid>

          </Grid>
          <br />

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
              <Typography paragraph style={{ maxWidth: '600px' }}>{ taxServices.info1[4]}</Typography>
              <ul>
                <li>
                  <Typography paragraph>{taxServices.more._0}</Typography>
                </li>
                <li>
                  <Typography paragraph>{ taxServices.services[1]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{ taxServices.services[2]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{ taxServices.services[3]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{taxServices.services[4]}</Typography>
                </li>
                <li>
                  <Typography paragraph>{ taxServices.services[5]}</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
