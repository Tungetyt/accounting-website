import React from 'react';
import Layout from '../components/layout';
import '../components/layout.css';
import About from '../components/about';
import SectionWrapper from '../components/section-wrapper';

const Onas = () => (
  <Layout>
    <SectionWrapper>
      <About></About>
    </SectionWrapper>
  </Layout>
);

export default Onas;