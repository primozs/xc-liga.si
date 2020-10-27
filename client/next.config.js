const withImages = require('next-images');
const withPreCompression = require('@moxy/next-pre-compression');
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withPreCompression(
    withImages({
      serverRuntimeConfig: {
        PRIVATE_API_HOST: process.env.PRIVATE_API_HOST,
      },
      publicRuntimeConfig: {
        PUBLIC_API_HOST: process.env.PUBLIC_API_HOST,
      },
      pwa: {
        disable: !isProd,
        dest: 'public',
        swSrc: 'service-worker.ts',
      },
      compress: isProd,
      fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        });

        return config;
      },
    })
  )
);
