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
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';
import Image from './image';

export default function HrAndPayrollOffer() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            hrImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            hr2Image {
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
            hrAndPayroll {
              info
              more {
                moreList
                next {
                  nextPart
                }
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
  const { hrAndPayroll } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;
  console.log('hrAndPayroll', hrAndPayroll);
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
              {/* <Image alt="hr and payroll" filename="12Podatek-VAT-kiedy-decyzja-wymiarowa-Ojq7ie.jpg" /> */}
              <Img fluid={frontmatter0?.hrImage
                ?.childImageSharp
                ?.fluid}
              />
            </Tilt>
          </Grid>
          <Grid item>
            <Typography paragraph style={{ maxWidth: '600px' }}>{ hrAndPayroll.info[0]}</Typography>
            <Typography paragraph style={{ maxWidth: '600px' }}>{ hrAndPayroll.info[1]}</Typography>
            <Typography paragraph style={{ maxWidth: '600px' }}>{ hrAndPayroll.info[2]}</Typography>
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
              <Typography paragraph style={{ maxWidth: '600px' }}>{ hrAndPayroll.info[0]}</Typography>
              <ul>
                {hrAndPayroll.services.map((line, i) => (
                  <li key={i}>
                    <Typography paragraph>{ line }</Typography>
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
              <Typography paragraph>{hrAndPayroll.more.moreList[0]}</Typography>
              <Typography paragraph>{hrAndPayroll.more.moreList[1]}</Typography>
            </Grid>
            <Grid item style={{ width: '600px' }}>
              <Tilt>
                {/* <Image alt="more hr and payroll" filename="4iStock_38378140_XLARGE-scaled.jpg" /> */}
                <Img fluid={frontmatter0?.hr2Image
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
            justify="center"
            alignItems="center"
          >
            <Grid
              item
            >
              <Typography paragraph style={{ maxWidth: '600px' }}>{hrAndPayroll.more.moreList[2]}</Typography>
              <ul>
                <li>
                  <Typography paragraph>{ hrAndPayroll.more.next.nextPart}</Typography>
                </li>
              </ul>
            </Grid>

          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
