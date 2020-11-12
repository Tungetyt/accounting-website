import { Grid, IconButton, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useContext } from 'react';
import { ColorContext } from '../context/contexts';
import { APP_THEME } from '../helpers';

const SocialMedia = () => {
  const [isDark] = useContext(ColorContext);

  return (
    <Paper style={{ backgroundColor: APP_THEME[isDark ? 'dark' : 'light'].palette.elevation2.backgroundColor }}>
      <Grid container>
        <Grid item>
          <Tooltip title="Facebook" arrow TransitionComponent={Zoom}>
            <IconButton
              tooltip="Facebook"
              linkButton
              href="https://www.facebook.com/Biuro-Rachunkowe-Vavicom-J%C3%B3zefos%C5%82aw-Warszawa-100928011806919/?hc_ref=ARTxt7vKhgJpl3zZMlfTmi0KFs2ze7KOXJguAdYdJtoR1a1SFsyQG8QL-841D6dLqJc&fref=nf/"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
            <IconButton
              tooltip="LinkedIn"
              linkButton
              href="https://www.linkedin.com/company/accounting-office-vavicom/"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Twitter" arrow TransitionComponent={Zoom}>
            <IconButton
              tooltip="Twitter"
              linkButton
              href="https://www.linkedin.com/company/accounting-office-vavicom/"
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Instagram" arrow TransitionComponent={Zoom}>
            <IconButton
              tooltip="Instagram"
              linkButton
              href="https://www.linkedin.com/company/accounting-office-vavicom/"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialMedia;
