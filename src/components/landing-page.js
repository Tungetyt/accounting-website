import Box from '@material-ui/core/Box';
import React from 'react';
import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import { NAVIGATION } from '../helpers';
import Banner from './banner';

const LandingPage = () => {
  const { home } = NAVIGATION;

  return (
    <Element name={home} id={home} style={{ zIndex: -1 }}>
      <ParallaxProvider>

        <Banner />

      </ParallaxProvider>
    </Element>
  );
};

export default LandingPage;
