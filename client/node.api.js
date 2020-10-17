export default pluginOptions => ({
  webpack: (config, { stage, defaultLoaders }) => {
    if (stage === 'prod') {
      config.performance = {
        ...config.performance,
        maxEntrypointSize: 422000,
        maxAssetSize: 422000
      };
    }
    return config;
  }
});
