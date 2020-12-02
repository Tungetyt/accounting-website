/* eslint-disable comma-dangle */
import {
  Box,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Element } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ColorContext } from '../context/contexts';
import { APP_THEME, NAVIGATION } from '../helpers';
import ContactInfo from './contact-info';
import styles from './dist/ImageZoom.module.css';
import Image from './image';
import OpenMap from './open-map';
// const tmp = styles;
const wrapperStyle = {
  width: '100%',
  height: '100%'
};
const Contact = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            officeImage {
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
            contactSection {
              whereAreWe
              ourOffice
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
  const { contactSection } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;

  const { contact } = NAVIGATION;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  // const classes = useStyles();
  const intl = useIntl();
  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    paper: {
      backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor,
      padding: '1rem',
      margin: '1rem'
    }
  }));
  const { paper } = useStyles();

  return (
    <Element name={contact}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          {typeof window !== 'undefined' && matches && (
          <Box>
            <Paper className={paper}>
              <Typography paragraph align="center">{ contactSection.whereAreWe}</Typography>
              <OpenMap />
            </Paper>
          </Box>
          )}
        </Grid>
        <Grid
          item
          style={{
            width: '100%', height: 'auto', maxWidth: '600px', marginBottom: '1rem'
          }}
        >
          <Paper className={paper}>
            <Typography paragraph align="center">{ contactSection.ourOffice}</Typography>
            <Zoom>

              {/* <Image style={wrapperStyle} alt="our office" filename="6ogrodowa64.jpg" /> */}
              <Img fluid={frontmatter0?.officeImage
                ?.childImageSharp
                ?.fluid}
              />
            </Zoom>
          </Paper>
        </Grid>
        <Grid item>
          <ContactInfo />
        </Grid>
      </Grid>
    </Element>
  );
};

export default Contact;
