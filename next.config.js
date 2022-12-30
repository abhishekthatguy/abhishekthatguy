/* eslint no-param-reassign: ["off", { "props": true }] */
/* eslint no-sequences: "off" */
/* eslint no-unused-vars: "off" */

const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  TrailingSlash: true,
  images: {
    disableStaticImages: true,
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/blank-page': { page: '/blank-page' },
    };
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  },
  webpack: (config, options) => {
    true,
      config.plugins.push(
        new ESLintPlugin({
          exclude: ['node_modules'],
        }),
      );
    config.node = {};
    return config;
  },
});
