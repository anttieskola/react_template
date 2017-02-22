/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('babel-polyfill');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    // global definitions
    new webpack.DefinePlugin({
      // log utility
      /* eslint-disable no-console */
      LOG: function LOG(msg) { console.log(msg); },
      /* eslint-enable no-console */
    }),
  ],
  devtool: 'source-map',
};
