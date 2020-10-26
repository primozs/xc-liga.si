const withImages = require('next-images');
const withPreCompression = require('@moxy/next-pre-compression');
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  withPreCompression(
    withImages({
      pwa: {
        disable: !isProd,
        dest: 'public',
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
