import Box from '@material-ui/core/Box';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useContext } from 'react';
import {
  Element
} from 'react-scroll';
import { ColorContext } from '../context/contexts';
import {
  NAVIGATION
} from '../helpers';
import Banner from './banner';
import './layout.css';

const LandingPage = () => {
  const intl = useIntl();
  const [isDark, setIsDark] = useContext(ColorContext);

  const { home } = NAVIGATION;

  return (
    <Element name={home} id={home}>
      {/* <Card>
        fjidsahfiodsaoighdsaioghiodsaahgiosdhaiofhio
        <CardMedia
          component={Image}
          alt="accounting image"
          filename="landing.jpg"
          title="Paella dish"
        />
      </Card> */}
      {/* <div style={{ width: '1000px', height: '1000px' }}>
        <Image alt="accounting image" filename="landing.jpg" />
      </div> */}
      <Banner />
      <Box style={{ marginBottom: '53px' }} />
      {/* <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{
          paddingTop: '30vh', paddingBottom: '70vh', marginBottom: '53px',
        }}
      >
        <Grid item>
          <Typography variant="h3" color="primary" style={{ lineHeight: '90%', userSelect: 'none' }}>
            {intl.formatMessage({ id: 'landing.first' })}
            <br />
            {intl.formatMessage({ id: 'landing.second' })}
            <br />
            {intl.formatMessage({ id: 'landing.third' })}
          </Typography>
        </Grid>
        <Hidden mdDown implementation="css">
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Umbrella width={80} height={80} fill={APP_THEME[isDark ? 'dark' : 'light'].palette.primary.main} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  noWrap
                  color="primary"
                  style={{ textDecoration: 'underline', userSelect: 'none' }}
                >
                  {COMPANY}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid> */}

    </Element>
  );
};

export default LandingPage;
