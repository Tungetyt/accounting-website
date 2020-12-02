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

export default function FinancialOffer() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            financeImage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            finance2Image {
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
            financialServices {
              financialServicesPart
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
  const { financialServices } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;
  console.log('financialServices', financialServices);

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
  const offerName = 'financialServices';
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
              <Img fluid={frontmatter0?.financeImage
                ?.childImageSharp
                ?.fluid}
              />
            </Tilt>
          </Grid>
          <Grid item>
            <Typography paragraph className={text}>{ financialServices[0].financialServicesPart}</Typography>
            <Typography paragraph className={text}>{ financialServices[1].financialServicesPart}</Typography>

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
              <Typography paragraph className={text}>{financialServices[2].financialServicesPart}</Typography>
              <ul>
                <li>
                  <Typography paragraph>{financialServices[3].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[4].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[5].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[6].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[7].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[8].financialServicesPart}</Typography>
                </li>
                <li>
                  <Typography paragraph>{financialServices[9].financialServicesPart}</Typography>
                </li>
              </ul>
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
            spacing={2}
          >
            <Grid item>
              <div style={{ columnWidth: '600px' }}>
                <Typography paragraph className={text}>{financialServices[10].financialServicesPart}</Typography>
                <Typography paragraph className={text}>{financialServices[11].financialServicesPart}</Typography>
                <Typography paragraph className={text}>{financialServices[12].financialServicesPart}</Typography>
              </div>
            </Grid>
            <Grid item style={{ width: '600px' }}>
              <Tilt>
                <Img fluid={frontmatter0?.finance2Image
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
