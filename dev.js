
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev.js');
/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable no-console */
// create
const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
});
// start
server.listen(8080, '0.0.0.0', (err) => {
  if (err) {
    return console.log(err);
  }
  return 0;
});
/* eslint-enable no-console */
