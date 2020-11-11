import Box from '@material-ui/core/Box';
import React from 'react';
import { Element } from 'react-scroll';
import { NAVIGATION } from '../helpers';
import Banner from './banner';

const LandingPage = () => {
  const { home } = NAVIGATION;

  return (
    <Element name={home} id={home}>
      <Banner />
      <Box style={{ marginBottom: '53px' }} />
    </Element>
  );
};

export default LandingPage;
