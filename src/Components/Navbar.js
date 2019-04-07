import React from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = () => (
  <AppBar>
    <Grid container justify='space-between' alignItems='center'>
      <Grid items xs={9}>
        <Typography variant='h4' color='inherit' style={{ margin: 15 }}>
          FullThrottle Labs
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Button color='inherit' variant='contained'>
          <a style={{ textDecoration: 'none' }} target='blank' href='https://github.com/KanishkSrivastava/Full-Throttle-Assignment.git'>
            GitHub
          </a>
        </Button>
      </Grid>
    </Grid>
  </AppBar>
);
export default Navbar;
