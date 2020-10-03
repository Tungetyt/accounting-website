import React, { useState } from 'react';
import '../components/layout.css';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';

// const useStyles = makeStyles({
//   language: {

//     borderRadius: '50%',

//   },
// });

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
  // const classes = useStyles();

  const color = {
    white: '#ffffff',
    blue: '#152f70',
  };

  const theme = {
    light: {
      palette: {
        type: 'light',
        primary: {
          main: color.blue,
        },
        background: {
          default: color.white,
        },
      },
    },
    dark: {
      palette: {
        type: 'dark',
        primary: {
          main: color.white,
        },
        background: {
          default: color.blue,
        },
      },
    },
  };

  const localStorageKey = {
    theme: 'theme-ui-color-mode',
    language: 'language',
  };

  const [isDark, setIsDark] = useState(localStorage.getItem(localStorageKey.theme) !== 'light');
  const [isPolish, setIsPolish] = useState(localStorage.getItem(localStorageKey.language) !== 'english');

  const chosenTheme = createMuiTheme(isDark ? theme.dark : theme.light);

  return (
    <>
      <ThemeProvider theme={chosenTheme}>
        <CssBaseline />
        <SEO title="Home" />
        <IconButton
          edge="end"
          color="primary"
          aria-label="mode"
          onClick={() => {
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem(localStorageKey.theme, newTheme);
            setIsDark((prevIsDark) => !prevIsDark);
          }}
        >
          {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
        </IconButton>
        <IconButton
          aria-label="language"
          onClick={() => {
            const newLanguage = isPolish ? 'english' : 'polish';
            localStorage.setItem(localStorageKey.language, newLanguage);
            setIsPolish((prevIsPolish) => !prevIsPolish);
          }}
        >
          {isPolish ? <Typography>PL</Typography> : <Typography>EN</Typography>}
        </IconButton>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
        <Typography>aaaaaaaaaaaaaaaaa</Typography>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
