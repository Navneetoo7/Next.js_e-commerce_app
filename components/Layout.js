import React from 'react';
import Head from 'next/head';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';

function Layout({ title, children, description }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Shopping Point` : 'Shopping Point'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Shopping Point</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
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
