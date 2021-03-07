import React from 'react';
import Layout from '../components/layout';
import '../components/layout.css';
import Faq from '../components/faq';
import SectionWrapper from '../components/section-wrapper';

const Pytania = () => (
    <Layout>
        <SectionWrapper>
            <Faq></Faq>
        </SectionWrapper>
    </Layout>
);

export default Pytania;
