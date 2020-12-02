import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorContext } from '../context/contexts';
import { COMPANY } from '../helpers';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              landingPageImage {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              landing
              address
              langBtn
            }
          }
        }
      }
    }
  `);

  const allMarkdownRemark = data?.allMarkdownRemark;
  const { address, landing } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;

  const [isDark] = useContext(ColorContext);
  const useStyles = makeStyles(() => ({
    opaqueColor: {
      backgroundColor: isDark ? 'rgba(38, 50, 56, 0.8)' : 'rgba(236, 239, 241, 0.8)',
    },
  }));

  const { opaqueColor } = useStyles();

  const intl = useIntl();

  return (
    <Paper elevation={24} className={opaqueColor}>
      <BannerWrapper>
        <BackgroundImage
          Tag="section"
          className="hero-image"
          fluid={allMarkdownRemark
            ?.edges[0]
            ?.node
            ?.frontmatter
            ?.landingPageImage
            ?.childImageSharp
            ?.fluid}
          style={{ paddingBottom: '5rem' }}
        >
          <div className="hero-content">
            <Paper elevation={0} className={opaqueColor} style={{ marginBottom: '2rem' }}>

              {landing.map((line, i) => (
                <Typography key={i} variant="h1" color="primary" style={{ lineHeight: '90%', userSelect: 'none' }}>{line}</Typography>
              ))}
            </Paper>
            <Paper elevation={0} className={opaqueColor}>
              <Typography
                variant="h2"
                color="primary"
                style={{
                  lineHeight: '90%', userSelect: 'none', textDecoration: 'underline', fontSize: '1.5rem',
                }}
              >
                {address}
              </Typography>
            </Paper>
          </div>
        </BackgroundImage>
      </BannerWrapper>
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
