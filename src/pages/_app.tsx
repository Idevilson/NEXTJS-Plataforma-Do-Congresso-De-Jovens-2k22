import React from 'react';
import '../styles/global.scss'

import { Header } from '../components/header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=1000"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
