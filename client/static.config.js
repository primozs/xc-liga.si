import React from 'react';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default {
  Document: ({ Html, Head, Body, children, state: { siteData } }) => (
    <Html lang="sl-SI">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="XC-Liga" />
        <meta name="apple-mobile-web-app-title" content="XC-Liga" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/apple-icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120.png"
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
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/images/favicon-196.png"
        ></link>
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2048-2732.jpeg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2732-2048.jpeg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1668-2388.jpeg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2388-1668.jpeg"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1668-2224.jpeg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2224-1668.jpeg"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1536-2048.jpeg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2048-1536.jpeg"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1242-2688.jpeg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2688-1242.jpeg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1125-2436.jpeg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2436-1125.jpeg"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-828-1792.jpeg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1792-828.jpeg"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1242-2208.jpeg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-2208-1242.jpeg"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-750-1334.jpeg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1334-750.jpeg"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-640-1136.jpeg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple-splash-1136-640.jpeg"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
        />
        <meta name="msapplication-navbutton-color" content="#0a64a0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
          rel="stylesheet"
        />
        <title>{siteData.title}</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  siteRoot: 'https://xc-liga.si',
  assetsPath: 'assets',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  paths: {
    dist: 'dist',
    assets: 'assets',
    devDist: 'build/tmp',
    buildArtifacts: 'build/artifacts',
  },
  getSiteData: async ({ dev }) => ({
    title: 'XC-Liga',
  }),
  getRoutes: async () => {
    return [];
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  devServer: {
    port: 8080,
    host: '127.0.0.1',
  },
};
