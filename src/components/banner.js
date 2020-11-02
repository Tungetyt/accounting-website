import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import { Paper } from '@material-ui/core';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "city_auto_x2_colored_toned.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };
  const intl = useIntl();

  return (
    <Paper elevation={24}>
      <BannerWrapper>
        <BackgroundImage
          Tag="section"
          className="hero-image"
          fluid={data.file.childImageSharp.fluid}
        >
          <div className="hero-content">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 1 }}
            >
              <Typography variant="h3" color="primary" style={{ lineHeight: '90%', userSelect: 'none' }}>
                {intl.formatMessage({ id: 'landing.first' })}
                <br />
                {intl.formatMessage({ id: 'landing.second' })}
                <br />
                {intl.formatMessage({ id: 'landing.third' })}
              </Typography>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 1.5 }}
            >
              Startup is here to help you achieve your business and personal
              goals, all through a stylish theme
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 1.5 }}
            >
              Startup is here to help you achieve your business and personal
              goals, all through a stylish theme
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 1.5 }}
            >
              Startup is here to help you achieve your business and personal
              goals, all through a stylish theme
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 1.5 }}
            >
              Startup is here to help you achieve your business and personal
              goals, all through a stylish theme
            </motion.p>
          </div>
        </BackgroundImage>
      </BannerWrapper>
    </Paper>
  );
};

const BannerWrapper = styled.section`
  .gatsby-image-wrapper {
    height: 100vh;
    color: #fff;
    }

    .hero-content {
      text-align: center;
      height: 100%;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

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
