import React from 'react';
import Head from 'next/head';
import useStyles from '../Utils/styles';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Shopping Point</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Shopping Point</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Navneet</Typography>
      </footer>
    </div>
  );
}

export default Layout;
