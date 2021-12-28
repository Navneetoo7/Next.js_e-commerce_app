import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Shopping Point</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Shopping Point</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
