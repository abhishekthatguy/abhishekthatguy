/* eslint no-param-reassign: ["off", { "props": true }] */
/* eslint no-sequences: "off" */
/* eslint no-unused-vars: "off" */

const withImages = require('next-images');
const path = require('path');

// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  TrailingSlash: true,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    loader: 'default',
    domains: [
      'localhost',
      'https://www.content.abhishek.world',
      'localhost',
      'https://content.abhishek.world',
    ],
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about-page': { page: '/about-page' },
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
      // config.plugins.push(
      //   new ESLintPlugin({
      //     exclude: ['node_modules'],
      //   }),
      // );
      (config.node = {});

    return config;
  },
});
