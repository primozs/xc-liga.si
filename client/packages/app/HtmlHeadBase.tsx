import React from 'react';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import getConfig from 'next/config';
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

const host =
  serverRuntimeConfig.PRIVATE_API_HOST || publicRuntimeConfig.PUBLIC_API_HOST;

const HeadBase = () => {
  const title = 'XC DP PG';
  const description = 'XC DRŽAVNO PRVENSTVO, JADRALNO PADALSTVO';
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
      <Head>
        <meta charSet="utf-8" />
        <link href={host} rel="preconnect" crossOrigin=""></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="XC-Liga" />
        <meta name="apple-mobile-web-app-title" content="XC-Liga" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#2b5797"
        />
        <meta name="msapplication-navbutton-color" content="#0a64a0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default HeadBase;
