const webpack = require("webpack");
require("dotenv").config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

const withSourceMaps = require("@zeit/next-source-maps");
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const plugins = [
  withSourceMaps,
  withImages,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../server-analyze.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "client-analyze.html"
        }
      }
    }
  ],
    withSass,
    withCSS,
];

module.exports = withPlugins([...plugins], {
  webpack: (config, { dev, isServer }) => {
    const conf = config;
    conf.plugins = config.plugins || []

    conf.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, `.env.${process.env.NODE_ENV || 'development'}`),
        systemvars: true
      })
    ]

    return conf
  }
});

