import React from 'react';
import Prices from '../components/prices';
import Layout from '../components/layout';
import '../components/layout.css';
import SectionWrapper from '../components/section-wrapper';


const Cennik = () => (
  <Layout>
    <SectionWrapper>
      <Prices />
    </SectionWrapper>
  </Layout>
);

export default Cennik;
