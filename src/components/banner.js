import {Grid, Paper} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {useIntl} from 'gatsby-plugin-intl';
import React, {useContext} from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ColorContext} from '../context/contexts';
import {COMPANY} from '../helpers';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  const [isDark] = useContext(ColorContext);

  const useStyles = makeStyles((theme) => ({
    opaqueColor: {
      // greyblue: 'rgba(38, 50, 56, 0.8)' : 'rgba(236, 239, 241, 0.8)'
      // grey: 'rgba(33,33,33, 0.8)' : 'rgba(245,245,245, 0.8)'
      backgroundColor: isDark ? 'rgba(33,33,33, 0.8)' : 'rgba(245,245,245, 0.8)',
    },
    clipPath: {
      // clipPath: 'polygon(0 0, 0 80%, 100% 100%, 100% 20%)',
    },
    backgroundImage: {
      paddingBottom: '5rem',
    },
    blur: {
      backdropFilter: 'blur(3px)',
    },
    marginBottom: {
      marginBottom: '2rem',
    },
    userSelectNone: {
      userSelect: 'none',
    },
    lineHeight: {
      lineHeight: '90%',
    },
    address: {
      fontSize: '1.5rem',
    },
    outherContainer: {
      paddingTop: '10rem',
      paddingBottom: '10rem',
      width: '100%',
    },
    flex: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
    },
    title: {
      fontWeight: 'normal',
      [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.75rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '4.25rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '5rem',
      },
    },
  }));

  const {
    opaqueColor, clipPath, backgroundImage, blur, marginBottom, address, userSelectNone, outherContainer, flex, title, header1,
  } = useStyles();

  const intl = useIntl();

  const { lg, md, sm } = useTheme()?.breakpoints.values;
  const isLargeScreen = useMediaQuery(`(min-width:${md}px)`);
  const isSmallScreen = useMediaQuery(`(min-width:${sm}px)`);

  return (
    <Paper elevation={24} className={`${opaqueColor} ${clipPath}`}>
      {/*<Parallax y={isSmallScreen ? [-35, 30] : [0, 0]}>*/}

        <BannerWrapper>
          <BackgroundImage
            Tag="section"
            fluid={data.file.childImageSharp.fluid}
            className={backgroundImage}
          >
            {/* <div className={outherContainer}> */}
            <Grid
              container
              direction="row"
              justify={isLargeScreen ? 'space-around' : 'center'}
              alignItems="center"
              className={outherContainer}
            >
              {isLargeScreen && <Grid item style={{ width: '164px', height: '1rem' }} />}
              <Grid item>
                <div className="hero-content">
                  <Paper
                    elevation={0}
                    className={`${opaqueColor} ${blur} ${marginBottom}`}
                  >
                    <Typography color="primary" className={`${title} ${userSelectNone}`} style={{ lineHeight: '90%' }}>
                      {intl.formatMessage({ id: 'landing.first' })}
                      {' '}
                      {intl.formatMessage({ id: 'landing.second' })}
                      <br />
                      {COMPANY.replace(/\s/g, '')}
                    </Typography>
                  </Paper>
                  <Paper elevation={0} className={`${opaqueColor} ${blur}`}>
                    <Typography
                      variant="h2"
                      color="primary"
                      className={`${address} ${userSelectNone}`}
                    >
                      {intl.formatMessage({ id: 'landing.address' })}
                    </Typography>
                  </Paper>
                </div>
              </Grid>
              {isLargeScreen
              && (
              <Grid item>
                <Paper
                  elevation={0}
                  className={`${opaqueColor} ${blur} ${flex}`}
                >
                  <a href="https://www.iksiegowosc24.pl/biura-rachunkowe/mazowieckie/piaseczno/vavicom-sp-z-o-o" target="_blank" rel="noreferrer" title="Biuro polecane przez iKsiegowosc24"><img src="https://panel.iksiegowosc24.pl/assets/Image%2015.png" alt="Biuro polecane przez iKsiegowosc24" width="150" height="50" /></a>
                  <a href="https://www.erpxt.pl/" target="_blank" rel="noreferrer" title="Fakturuj bezpłatnie z Comarch ERP XT"><img src="https://panel.iksiegowosc24.pl/assets/Image%2016.png" alt="Fakturuj bezpłatnie z Comarch ERP XT" width="150" height="50" /></a>
                  <a href="https://www.ibard.com/" target="_blank" rel="noreferrer" title="Gwarancja bezpieczeństwa danych z Comarch IBARD Backup"><img src="https://panel.iksiegowosc24.pl/assets/Image%2017.png" alt="Gwarancja bezpieczeństwa danych z Comarch IBARD Backup" width="150" height="50" /></a>
                </Paper>
                <div />
              </Grid>
              )}
            </Grid>
          </BackgroundImage>
        </BannerWrapper>
      {/*</Parallax>*/}

    </Paper>

  );
};

const BannerWrapper = styled.section`
    .gatsby-image-wrapper {
      color: #fff;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`;

export default Banner;
