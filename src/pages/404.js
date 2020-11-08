import {
  useIntl
} from 'gatsby-plugin-intl';
import React from 'react';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title="404: Not found" />
      <h1>{intl.formatMessage({ id: 'notfound.header' })}</h1>
      <p>{intl.formatMessage({ id: 'notfound.description' })}</p>
      <a href="/">{intl.formatMessage({ id: 'notfound.goback' })}</a>
    </>
  );
};

export default NotFoundPage;
