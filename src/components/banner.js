import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import styled from 'styled-components';
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax';
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

  const useStyles = makeStyles(() => ({
    opaqueColor: {
      // greyblue: 'rgba(38, 50, 56, 0.8)' : 'rgba(236, 239, 241, 0.8)'
      // grey: 'rgba(33,33,33, 0.8)' : 'rgba(245,245,245, 0.8)'
      backgroundColor: isDark ? 'rgba(33,33,33, 0.8)' : 'rgba(245,245,245, 0.8)',
    },
    clipPath: {
      clipPath: 'polygon(0 0, 0 80%, 100% 100%, 100% 20%)',
    },
    backgroundImage: {
      paddingBottom: '5rem',
    },
    blur: {
      padding: '1%', backdropFilter: 'blur(3px)', borderRadius: '20%',
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
  }));

  const {
    opaqueColor, clipPath, backgroundImage, blur, lineHeight, marginBottom, address, userSelectNone,
  } = useStyles();

  const intl = useIntl();

  return (
    <Paper elevation={24} className={`${opaqueColor} ${clipPath}`}>
      <Parallax y={[-35, 30]}>

        <BannerWrapper>
          <BackgroundImage
            Tag="section"
            fluid={data.file.childImageSharp.fluid}
            className={backgroundImage}
          >
            <div className="hero-content">
              <Paper
                elevation={0}
                className={`${opaqueColor} ${blur} ${marginBottom}`}
              >
                <Typography variant="h1" color="primary" className={userSelectNone} style={{ lineHeight: '90%' }}>
                  {intl.formatMessage({ id: 'landing.first' })}
                  <br />
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
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      padding-top: 10rem;
      padding-bottom: 10rem;

      @media (min-width: 768px) {
        max-width: 650px;
      }

      h1 {
        font-size: 1.75rem;
        line-height: 1.2;

        span {
          background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.2;
        font-size: 1.15rem;

        @media (min-width: 768px) {
          font-size: 1.35rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        max-width: 800px;

        h1 {
          font-size: 3rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`;

export default Banner;
