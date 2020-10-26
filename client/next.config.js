const withImages = require('next-images');
const withPreCompression = require('@moxy/next-pre-compression');

module.exports = withPreCompression(
  withImages({
    compress: process.env.NODE_ENV === 'production',
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
);
