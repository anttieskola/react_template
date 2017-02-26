/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
require('babel-polyfill');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader', 'css-loader', 'sass-loader',
      ],
    }, {
      test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src'),
    ],
  },
  plugins: [
    // global definitions
    new webpack.DefinePlugin({
      // log utility
      /* eslint-disable no-console */
      LOG: function LOG(msg) { console.log(msg); },
      /* eslint-enable no-console */
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    // clean build folder before build
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '.'),
    }),
    // HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './static/index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, './static/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // optimize code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
  ],
};
