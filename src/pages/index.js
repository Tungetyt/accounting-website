import React, { useState } from 'react';
import { Link } from 'gatsby';

import '../components/layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';

const IndexPage = () => {
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>

  const white = '#ffffff';
  const blue = '#152f70';

  const light = {
    palette: {
      type: 'light',

      primary: {
        main: blue,
      },
      background: {
        default: white,
      },
    },
  };
  const dark = {
    palette: {
      type: 'dark',
      primary: {
        main: white,
      },
      background: {
        default: blue,
      },
    },
  };

  const [isDark, setTheme] = useState(true);
  const icon = !isDark ? <Brightness3Icon /> : <Brightness7Icon />;
  const appliedTheme = createMuiTheme(isDark ? dark : light);
  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <SEO title="Home" />
        <IconButton
          edge="end"
          color="primary"
          aria-label="mode"
          onClick={() => setTheme((prevDark) => !prevDark)}
        >
          {icon}
        </IconButton>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
