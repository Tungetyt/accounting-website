import { Paper, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ColorContext } from '../context/contexts';
import { COMPANY } from '../helpers';

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
      backdropFilter: 'blur(3px)', // borderRadius: '20%',
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
      // display: 'flex',
      // justify: 'center',
      // alignItems: 'center',
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

  // const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  // function handleWindowSizeChange() {
  //   setWidth(window && window.innerWidth);
  // }
  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener('resize', handleWindowSizeChange);
  //   }
  //
  //   return () => {
  //     if (window) {
  //       window.removeEventListener('resize', handleWindowSizeChange);
  //     }
  //   };
  // }, []);

  // const isMobile = (width <= 768);

  return (
    <Paper elevation={24} className={`${opaqueColor} ${clipPath}`}>
      <Parallax y={isSmallScreen ? [-35, 30] : [0, 0]}>

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
            // wrap="nowrap"
              className={outherContainer}
            >
              {/* <Hidden lgDown> */}
              {isLargeScreen && <Grid item style={{ width: '164px', height: '1rem' }} />}

              {/* </Hidden> */}
              <Grid item>
                <div className="hero-content">
                  <Paper
                    elevation={0}
                    className={`${opaqueColor} ${blur} ${marginBottom}`}
                  >
                    <Typography color="primary" className={`${title} ${userSelectNone}`} style={{ lineHeight: '90%' }}>
                      {/* <h1 className={header1}> */}
                      {intl.formatMessage({ id: 'landing.first' })}
                      {' '}
                      {intl.formatMessage({ id: 'landing.second' })}
                      <br />
                      {COMPANY.replace(/\s/g, '')}
                      {/* </h1> */}
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
              {/* <Hidden lgDown> */}
              {isLargeScreen
              && (
              <Grid item>
                <Paper
                  elevation={0}
                  className={`${opaqueColor} ${blur} ${flex}`}
                >
                  <a href="https://www.iksiegowosc24.pl/" target="_blank" rel="noreferrer" title="Biuro polecane przez iKsiegowosc24"><img src="https://panel.iksiegowosc24.pl/assets/Image%2015.png" alt="Biuro polecane przez iKsiegowosc24" width="150" height="50" /></a>
                  {/* <br /> */}
                  {/* <a href="https://www.iksiegowosc24.pl/biura-rachunkowe/mazowieckie/piaseczno/vavicom-sp-z-o-o" target="_blank" alt="Zobacz nas w portalu">Zobacz nas w portalu</a> */}
                  <a href="https://www.erpxt.pl/" target="_blank" rel="noreferrer" title="Fakturuj bezpłatnie z Comarch ERP XT"><img src="https://panel.iksiegowosc24.pl/assets/Image%2016.png" alt="Fakturuj bezpłatnie z Comarch ERP XT" width="150" height="50" /></a>
                  <a href="https://www.ibard.com/" target="_blank" rel="noreferrer" title="Gwarancja bezpieczeństwa danych z Comarch IBARD Backup"><img src="https://panel.iksiegowosc24.pl/assets/Image%2017.png" alt="Gwarancja bezpieczeństwa danych z Comarch IBARD Backup" width="150" height="50" /></a>
                </Paper>
                <div />
              </Grid>
              )}
              {/* </Hidden> */}
            </Grid>
            {/* </div> */}
          </BackgroundImage>
        </BannerWrapper>
      </Parallax>

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
      // height: 100%;
      // width: 100%;
      // max-width: 400px;
      //
      // margin-left: auto;
      // margin-right: auto;
      // padding-top: 10rem;
      // padding-bottom: 10rem;
      //
      // @media (min-width: 768px) {
      //   max-width: 650px;
      // }
      //
      // h1 {
      //   font-size: 1.75rem;
      //   line-height: 1.2;
      //
      //   span {
      //     background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      //     -webkit-background-clip: text;
      //     -webkit-text-fill-color: transparent;
      //   }
      // }
      //
      // p {
      //   margin-top: 0;
      //   margin-bottom: 2rem;
      //   line-height: 1.2;
      //   font-size: 1.15rem;
      //
      //   @media (min-width: 768px) {
      //     font-size: 1.35rem;
      //   }
      //
      //   @media (min-width: 1200px) {
      //     font-size: 1.5rem;
      //   }
      // }
      //
      // button,
      // .anchor {
      //   margin: 0 auto;
      // }
      //
      // @media (min-width: 768px) {
      //   max-width: 800px;
      //
      //   h1 {
      //     font-size: 3rem;
      //   }
      // }
      //
      // @media (min-width: 1200px) {
      //   h1 {
      //     font-size: 4rem;
      //   }
      // }
    }
  }
`;

export default Banner;
