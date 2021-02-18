import React from 'react';
import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import { NAVIGATION } from '../helpers';
import Banner from './banner';

const LandingPage = () => {
  const { home } = NAVIGATION;

  return (
    <Element name={home} id={home}>
      <ParallaxProvider>

        <Banner />

      </ParallaxProvider>
    </Element>
  );
};

export default LandingPage;
